import React, { useEffect, useRef } from "react";

const config = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.05,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
};

const lerp = (start, end, factor) => start + (end - start) * factor;

const createParallax = (img, height) => {
  let current = 0;
  return {
    update: (scroll, index) => {
      const target = (-scroll - index * height) * 0.2;
      current = lerp(current, target, 0.1);
      if (Math.abs(current - target) > 0.01) {
        img.style.transform = `translateY(${current}px) scale(1.5)`;
      }
    },
  };
};

const Home = ({ projects, onProjectClick }) => {
  const containerRef = useRef(null);
  const stateRef = useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    projects: new Map(),
    minimap: new Map(),
    minimapInfo: new Map(),
    projectHeight: window.innerHeight,
    minimapHeight: 250,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: Date.now(),
  });

  const getProjectData = (index) => {
    const i =
      ((Math.abs(index) % projects.length) + projects.length) % projects.length;
    return projects[i];
  };

  const createElement = (index, type) => {
    const state = stateRef.current;
    const maps = {
      main: state.projects,
      minimap: state.minimap,
      info: state.minimapInfo,
    };
    if (maps[type].has(index)) return;

    const data = getProjectData(index);
    const num = (
      (((Math.abs(index) % projects.length) + projects.length) %
        projects.length) +
      1
    )
      .toString()
      .padStart(2, "0");

    const container = containerRef.current;
    if (!container) return;

    if (type === "main") {
      const el = document.createElement("div");
      el.className = "project";
      el.style.cursor = "pointer";
      el.innerHTML = `<img src="${data.image}" alt="${data.title}" />`;

      const actualIndex =
        ((Math.abs(index) % projects.length) + projects.length) %
        projects.length;

      el.addEventListener("click", () => {
        onProjectClick(actualIndex);
      });

      const projectList = container.querySelector(".project-list");
      if (projectList) {
        projectList.appendChild(el);
      }

      state.projects.set(index, {
        el,
        parallax: createParallax(el.querySelector("img"), state.projectHeight),
        actualIndex,
      });
    } else if (type === "minimap") {
      const el = document.createElement("div");
      el.className = "minimap-img-item";
      el.innerHTML = `<img src="${data.image}" alt="${data.title}" />`;
      const minimapPreview = container.querySelector(".minimap-img-preview");
      if (minimapPreview) {
        minimapPreview.appendChild(el);
      }
      state.minimap.set(index, {
        el,
        parallax: createParallax(el.querySelector("img"), state.minimapHeight),
      });
    } else {
      const el = document.createElement("div");
      el.className = "minimap-item-info";
      el.innerHTML = `
        <div class="minimap-item-info-row">
          <p>${num}</p>
          <p>${data.title}</p>
        </div>
        <div class="minimap-item-info-row">
          <p>${data.category}</p>
          <p>${data.year}</p>
        </div>
      `;
      const minimapInfoList = container.querySelector(".minimap-info-list");
      if (minimapInfoList) {
        minimapInfoList.appendChild(el);
      }
      state.minimapInfo.set(index, { el });
    }
  };

  const syncElements = () => {
    const state = stateRef.current;
    const current = Math.round(-state.targetY / state.projectHeight);
    const min = current - config.BUFFER_SIZE;
    const max = current + config.BUFFER_SIZE;

    for (let i = min; i <= max; i++) {
      createElement(i, "main");
      createElement(i, "minimap");
      createElement(i, "info");
    }

    [state.projects, state.minimap, state.minimapInfo].forEach((map) => {
      map.forEach((item, index) => {
        if (index < min || index > max) {
          item.el.remove();
          map.delete(index);
        }
      });
    });
  };

  const snapToProject = () => {
    const state = stateRef.current;
    state.isSnapping = true;
    state.snapStart.time = Date.now();
    state.snapStart.y = state.targetY;
    state.snapStart.target =
      -Math.round(-state.targetY / state.projectHeight) * state.projectHeight;
  };

  const updateSnap = () => {
    const state = stateRef.current;
    const progress = Math.min(
      (Date.now() - state.snapStart.time) / config.SNAP_DURATION,
      1
    );
    const eased = 1 - Math.pow(1 - progress, 3);
    state.targetY =
      state.snapStart.y + (state.snapStart.target - state.snapStart.y) * eased;
    if (progress >= 1) state.isSnapping = false;
  };

  const updatePositions = () => {
    const state = stateRef.current;
    const minimapY =
      (state.currentY * state.minimapHeight) / state.projectHeight;

    state.projects.forEach((item, index) => {
      const y = index * state.projectHeight + state.currentY;
      item.el.style.transform = `translateY(${y}px)`;
      item.parallax.update(state.currentY, index);
    });

    state.minimap.forEach((item, index) => {
      const y = index * state.minimapHeight + minimapY;
      item.el.style.transform = `translateY(${y}px)`;
      item.parallax.update(minimapY, index);
    });

    state.minimapInfo.forEach((item, index) => {
      item.el.style.transform = `translateY(${
        index * state.minimapHeight + minimapY
      }px)`;
    });
  };

  const animate = () => {
    const state = stateRef.current;
    const now = Date.now();

    if (
      !state.isSnapping &&
      !state.isDragging &&
      now - state.lastScrollTime > 100
    ) {
      const snapPoint =
        -Math.round(-state.targetY / state.projectHeight) * state.projectHeight;
      if (Math.abs(state.targetY - snapPoint) > 1) snapToProject();
    }

    if (state.isSnapping) updateSnap();
    if (!state.isDragging)
      state.currentY += (state.targetY - state.currentY) * config.LERP_FACTOR;

    syncElements();
    updatePositions();
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const state = stateRef.current;

    // Initialize elements
    for (let i = -config.BUFFER_SIZE; i <= config.BUFFER_SIZE; i++) {
      createElement(i, "main");
      createElement(i, "minimap");
      createElement(i, "info");
    }

    // Handle window resize
    const handleResize = () => {
      state.projectHeight = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Wheel event handler
    const handleWheel = (e) => {
      e.preventDefault();
      state.isSnapping = false;
      state.lastScrollTime = Date.now();
      const delta = Math.max(
        Math.min(e.deltaY * config.SCROLL_SPEED, config.MAX_VELOCITY),
        -config.MAX_VELOCITY
      );
      state.targetY -= delta;
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
      state.isDragging = true;
      state.isSnapping = false;
      state.dragStart = { y: e.touches[0].clientY, scrollY: state.targetY };
      state.lastScrollTime = Date.now();
    };

    const handleTouchMove = (e) => {
      if (!state.isDragging) return;
      state.targetY =
        state.dragStart.scrollY +
        (e.touches[0].clientY - state.dragStart.y) * 1.5;
      state.lastScrollTime = Date.now();
    };

    const handleTouchEnd = () => {
      state.isDragging = false;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    // Start animation loop
    const animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationId);

      // Clean up DOM elements
      state.projects.forEach((item) => item.el.remove());
      state.minimap.forEach((item) => item.el.remove());
      state.minimapInfo.forEach((item) => item.el.remove());
      state.projects.clear();
      state.minimap.clear();
      state.minimapInfo.clear();
    };
  }, [projects, onProjectClick]);

  return (
    <div ref={containerRef} className="container">
      <ul className="project-list"></ul>

      <div className="minimap">
        <div className="minimap-wrapper">
          <div className="minimap-img-preview"></div>
          <div className="minimap-info-list"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
