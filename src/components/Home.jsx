import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap, ScrollTrigger } from "gsap/all";
import imagePNG from "../assets/herohome.png";
import heroOverlayImage from "../assets/herooverlay.png";
import workImage1 from "../assets/homeImages/optimised1.png";
import workImage2 from "../assets/homeImages/optimised2.png";
import workImage3 from "../assets/homeImages/optimised3.png";
// Import images for interactive sections
import boulevard1 from "../assets/retailImages/boulevard1.png";
import boulevard2 from "../assets/retailImages/boulevard2.png";
import retailHero from "../assets/retailImages/hero.png";
import officeHero from "../assets/officeImages/hero.png";
import officeDetails from "../assets/officeImages/details1.png";
import communityHero from "../assets/communityImages/hero.png";

const Home = () => {
  // Image loading states
  const [imagesLoaded, setImagesLoaded] = useState({
    work1: false,
    work2: false,
    work3: false,
  });

  // Preload work section images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded((prev) => ({ ...prev, work1: true }));
            resolve(img);
          };
          img.onerror = reject;
          img.src = workImage1;
        }),
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded((prev) => ({ ...prev, work2: true }));
            resolve(img);
          };
          img.onerror = reject;
          img.src = workImage2;
        }),
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded((prev) => ({ ...prev, work3: true }));
            resolve(img);
          };
          img.onerror = reject;
          img.src = workImage3;
        }),
      ];

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
  }, []);

  // Landing section refs and transforms
  const landingContainerRef = useRef(null);
  const { scrollYProgress: landingScroll } = useScroll({
    target: landingContainerRef,
    offset: ["start start", "end start"],
  });
  const introY = useTransform(landingScroll, [0, 1], [0, -100]);
  const subcopyY = useTransform(landingScroll, [0, 1], [0, -90]);

  // Work section refs and transforms
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: image1Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scroll2 } = useScroll({
    target: image2Ref,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scroll3 } = useScroll({
    target: image3Ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scroll1, [0, 1], ["-30%", "30%"]);
  const y2 = useTransform(scroll2, [0, 1], ["-40%", "40%"]);
  const y3 = useTransform(scroll3, [0, 1], ["-35%", "35%"]);

  // Interactive scroll section data
  const interactiveSections = [
    {
      title: "BOULEVARD",
      metadata: "",
      description:
        "The Boulevard is a fluid open-air environment where lush landscapes, modular design, and refined infrastructure converge — extending Regalium's interiors into a versatile setting for pop-ups, performances, exhibitions, launches, and cultural moments within Bengaluru's urban fabric.",
      image: boulevard1,
    },
    {
      title: "TERRACE",
      metadata: "",
      description:
        "An elevated sanctuary overlooking Bengaluru, the Terrace brings together wellness gardens, flexible leisure zones, an amphitheatre, and a striking edge pool — offering a versatile environment for networking, restoration, and thoughtfully curated experiences.",
      image: boulevard2,
    },
    {
      title: "LUXURY RETAIL",
      metadata: "",
      description:
        "A new expression of luxury retail, this space brings together globally renowned brands, thoughtful curation, and impeccable service — enhanced by technology to offer members a refined, intuitive, and deeply personalised shopping journey.",
      image: retailHero,
    },
    {
      title: "OFFICE SPACE",
      metadata: "",
      description:
        "Enabled by future-forward technology, Regalium's office spaces offer a range of flexible formats and tenancy options — complemented by shared community environments designed to encourage collaboration, connection, and meaningful professional exchange.",
      image: officeHero,
    },
    {
      title: "EXECUTIVE EDUCATION",
      metadata: "",
      description:
        "A pinnacle space for global executive leadership, this future-forward education environment combines advanced technology, immersive learning, and curated networking to equip leaders with the insight, tools, and perspective to drive meaningful, large-scale impact.",
      image: officeDetails,
    },
    {
      title: "GALLERY",
      metadata: "",
      description:
        "A light-filled, double-height gallery conceived as a living cultural stage — combining refined spatial design with immersive audiovisual and digital technologies to host evolving exhibitions, performances, and future-facing art experiences that expand creative possibility.",
      image: communityHero,
    },
  ];

  // Interactive scroll section refs
  const interactiveSectionRef = useRef(null);
  const backgroundLayerRef = useRef(null);
  const minimapRef = useRef(null);
  const titleLayerRef = useRef(null);
  const textLayerRef = useRef(null);

  // Parallax scroll configuration
  const config = {
    SCROLL_SPEED: 0.75, // Match reference
    LERP_FACTOR: 0.05,
    BUFFER_SIZE: 5,
    MAX_VELOCITY: 150, // Match reference
    SNAP_DURATION: 500,
    PARALLAX_FACTOR: 0.2,
  };

  // Total sections
  const sectionCount = interactiveSections.length;

  // Active index state and ref (used internally for tracking)
  // eslint-disable-next-line no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  // State for parallax scrolling
  const stateRef = useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: 0,
    sectionHeight: typeof window !== "undefined" ? window.innerHeight : 1000,
    minimapHeight: 350,
    backgroundElements: new Map(),
    minimapElements: new Map(),
    titleElements: new Map(),
    textElements: new Map(),
  });

  // Lerp function for smooth transitions
  const lerp = (start, end, factor) => start + (end - start) * factor;

  // Get section data with infinite loop
  const getSectionData = (index) => {
    const i = ((Math.abs(index) % sectionCount) + sectionCount) % sectionCount;
    return interactiveSections[i];
  };

  // Create parallax effect for images
  const createParallax = (img, height) => {
    let current = 0;
    return {
      update: (scroll, index) => {
        const target = (-scroll - index * height) * config.PARALLAX_FACTOR;
        current = lerp(current, target, 0.1);
        if (Math.abs(current - target) > 0.01) {
          img.style.transform = `translateY(${current}px) scale(1.5)`;
        }
      },
    };
  };

  // Helper to detect mobile
  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth <= 1000;
  };

  // Create elements for background, minimap, title, and text
  const createElement = (index, type) => {
    const state = stateRef.current;
    const maps = {
      background: state.backgroundElements,
      minimap: state.minimapElements,
      title: state.titleElements,
      text: state.textElements,
    };
    if (maps[type] && maps[type].has(index)) return;

    const data = getSectionData(index);
    const container = interactiveSectionRef.current;
    if (!container) return;

    if (type === "background") {
      const el = document.createElement("div");
      el.className = "project";
      const img = document.createElement("img");
      img.src = data.image;
      img.alt = data.title;
      el.appendChild(img);
      if (backgroundLayerRef.current) {
        backgroundLayerRef.current.appendChild(el);
      }
      state.backgroundElements.set(index, {
        el,
        parallax: createParallax(img, state.sectionHeight),
      });
    } else if (type === "minimap") {
      const el = document.createElement("div");
      el.className = "minimap-img-item";

      // Calculate correct height based on mobile/desktop
      const mobile = isMobile();
      let height = state.minimapHeight || 350;

      // On mobile, try to get actual preview height
      if (mobile && minimapRef.current) {
        const previewContainer = minimapRef.current.closest(
          ".minimap-img-preview"
        );
        if (previewContainer) {
          const computedHeight = previewContainer.offsetHeight;
          if (computedHeight > 0) {
            height = computedHeight;
          }
        }
      }

      // Set explicit styles to prevent any spacing
      el.style.cssText = `
        position: absolute;
        width: 100%;
        height: ${height}px;
        min-height: ${height}px;
        max-height: ${height}px;
        will-change: transform;
        overflow: hidden;
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
      `;

      const img = document.createElement("img");
      img.src = data.image;
      img.alt = data.title;
      // Explicitly set image dimensions to fill container
      img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        margin: 0;
        padding: 0;
      `;
      el.appendChild(img);

      if (minimapRef.current) {
        minimapRef.current.appendChild(el);
      }

      state.minimapElements.set(index, {
        el,
        parallax: createParallax(img, height),
      });
    } else if (type === "title") {
      const el = document.createElement("div");
      el.className = "minimap-item-info";
      const mobile = isMobile();
      el.style.cssText = mobile
        ? `
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        overflow: hidden;
        visibility: visible;
        opacity: 1;
      `
        : `
        position: absolute;
        width: 32%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem;
        left: 0;
        right: auto;
        overflow: hidden;
      `;
      const num = (
        (((Math.abs(index) % sectionCount) + sectionCount) % sectionCount) +
        1
      )
        .toString()
        .padStart(2, "0");
      el.innerHTML = `
        <div class="minimap-item-info-row">
          <p>${num}</p>
          <p>${data.title}</p>
        </div>
        <div class="minimap-item-info-row">
          <p>${data.metadata}</p>
          <p>2024</p>
        </div>
      `;
      if (titleLayerRef.current) {
        titleLayerRef.current.appendChild(el);
      }
      state.titleElements.set(index, { el });
    } else if (type === "metadata") {
      // Metadata is now part of the title/info structure
      // This type is kept for compatibility but not used
      return;
    } else {
      // text type - description text (positioned on right side)
      const el = document.createElement("div");
      el.className = "minimap-item-info minimap-description";
      const mobile = isMobile();
      el.style.cssText = mobile
        ? `
        position: relative;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 0.5rem;
        right: 0;
        overflow: hidden;
      `
        : `
        position: absolute;
        width: 32%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 0.5rem;
        right: 0;
        overflow: hidden;
      `;
      el.innerHTML = `
        <p style="font-family: BonaNova; font-size: clamp(0.875rem, 1.125vw, 1.125rem); line-height: 1.75; max-width: 100%; color: #333333; letter-spacing: 0.01em; margin: 0; text-align: ${
          mobile ? "left" : "right"
        }; text-transform: none; font-weight: 400; word-wrap: break-word; overflow-wrap: break-word;">
          ${data.description}
        </p>
      `;
      if (textLayerRef.current) {
        textLayerRef.current.appendChild(el);
      }
      state.textElements.set(index, { el });
    }
  };

  // Sync elements based on current scroll position
  const syncElements = () => {
    const state = stateRef.current;
    let current = Math.round(-state.targetY / state.sectionHeight);

    // Clamp current to valid range
    current = Math.max(0, Math.min(sectionCount - 1, current));

    const min = Math.max(0, current - config.BUFFER_SIZE);
    const max = Math.min(sectionCount - 1, current + config.BUFFER_SIZE);

    for (let i = min; i <= max; i++) {
      createElement(i, "background");
      createElement(i, "minimap");
      createElement(i, "title");
      createElement(i, "text");
    }

    [
      state.backgroundElements,
      state.minimapElements,
      state.titleElements,
      state.textElements,
    ].forEach((map) => {
      map.forEach((item, index) => {
        if (index < min || index > max) {
          item.el.remove();
          map.delete(index);
        }
      });
    });
  };

  // Snap to nearest section - match reference calculation
  const snapToSection = () => {
    const state = stateRef.current;
    state.isSnapping = true;
    state.snapStart.time = typeof window !== "undefined" ? Date.now() : 0;
    state.snapStart.y = state.targetY;

    // Match reference: simple calculation, then clamp result
    let targetIndex = Math.round(-state.targetY / state.sectionHeight);
    targetIndex = Math.max(0, Math.min(sectionCount - 1, targetIndex));
    state.snapStart.target = -targetIndex * state.sectionHeight;
  };

  // Update snap animation
  const updateSnap = () => {
    const state = stateRef.current;
    const now = typeof window !== "undefined" ? Date.now() : 0;
    const progress = Math.min(
      (now - state.snapStart.time) / config.SNAP_DURATION,
      1
    );
    const eased = 1 - Math.pow(1 - progress, 3);
    state.targetY =
      state.snapStart.y + (state.snapStart.target - state.snapStart.y) * eased;

    // Clamp targetY to valid range
    const minY = -(sectionCount - 1) * state.sectionHeight;
    const maxY = 0;
    state.targetY = Math.max(minY, Math.min(maxY, state.targetY));

    if (progress >= 1) state.isSnapping = false;
  };

  // Update positions of all elements
  const updatePositions = () => {
    const state = stateRef.current;
    const mobile = isMobile();
    const container = interactiveSectionRef.current;

    // Get actual height for calculation
    let actualHeight = state.minimapHeight;
    if (mobile && container) {
      const minimapPreview = container.querySelector(".minimap-img-preview");
      if (minimapPreview) {
        const previewHeight = minimapPreview.offsetHeight;
        if (previewHeight > 0) {
          actualHeight = previewHeight;
        }
      }
    }

    const minimapY = (state.currentY * actualHeight) / state.sectionHeight;

    // Update background elements
    state.backgroundElements.forEach((item, index) => {
      const y = index * state.sectionHeight + state.currentY;
      item.el.style.transform = `translateY(${y}px)`;
      item.parallax.update(state.currentY, index);
    });

    // Update minimap elements
    // actualHeight already calculated above

    state.minimapElements.forEach((item, index) => {
      // Calculate exact position - ensure no gaps by using precise calculation
      const y = Math.round(index * actualHeight + minimapY);
      item.el.style.transform = `translateY(${y}px)`;

      // Force exact same height for all elements - critical for consistency
      const exactHeight = `${actualHeight}px`;
      item.el.style.height = exactHeight;
      item.el.style.minHeight = exactHeight;
      item.el.style.maxHeight = exactHeight;
      item.el.style.margin = "0";
      item.el.style.padding = "0";

      item.parallax.update(minimapY, index);
    });

    // Update title elements (left side)
    state.titleElements.forEach((item, index) => {
      // Calculate position - use actualHeight for consistency
      const y = index * actualHeight + minimapY;
      item.el.style.transform = `translateY(${y}px)`;

      if (mobile) {
        // On mobile, ensure visibility and absolute positioning
        item.el.style.position = "absolute";
        item.el.style.top = "0";
        item.el.style.left = "0";
        item.el.style.right = "0";
        item.el.style.visibility = "visible";
        item.el.style.opacity = "1";
        item.el.style.display = "flex";
      } else {
        item.el.style.left = "0";
        item.el.style.right = "auto";
      }
    });

    // Update text elements (right side) - hide on mobile
    state.textElements.forEach((item, index) => {
      if (mobile) {
        // Hide description on mobile
        item.el.style.display = "none";
      } else {
        const y = index * state.minimapHeight + minimapY;
        item.el.style.transform = `translateY(${y}px)`;
        item.el.style.left = "auto";
        item.el.style.right = "0";
      }
    });
  };

  // Initialize parallax scrolling with ScrollTrigger
  useEffect(() => {
    const container = interactiveSectionRef.current;
    if (!container) return;

    gsap.registerPlugin(ScrollTrigger);

    const state = stateRef.current;

    // Calculate minimapHeight from actual container
    const updateMinimapHeight = () => {
      const minimapContainer = container.querySelector(".minimap");
      if (minimapContainer) {
        const computedStyle = window.getComputedStyle(minimapContainer);
        const totalHeight = minimapContainer.offsetHeight;
        const paddingTop = parseFloat(computedStyle.paddingTop);
        const paddingBottom = parseFloat(computedStyle.paddingBottom);
        state.minimapHeight = totalHeight - paddingTop - paddingBottom;

        const mobile = isMobile();
        const minimapPreview = minimapContainer.querySelector(
          ".minimap-img-preview"
        );
        if (minimapPreview) {
          if (mobile) {
            // On mobile, use fixed height from CSS
            minimapPreview.style.height = "";
          } else {
            minimapPreview.style.height = `${state.minimapHeight}px`;
          }
        }

        // Explicitly set height on all minimap-img-item elements to ensure consistency
        state.minimapElements.forEach((item) => {
          if (mobile) {
            // On mobile, let CSS handle the height
            item.el.style.height = "";
          } else {
            item.el.style.height = `${state.minimapHeight}px`;
          }
        });
      }
    };

    // Initialize elements
    for (let i = 0; i < sectionCount; i++) {
      createElement(i, "background");
      createElement(i, "minimap");
      createElement(i, "title");
      createElement(i, "text");
    }

    // Initialize minimap height after elements are created
    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(() => {
      updateMinimapHeight();
    });

    // Handle window resize
    const handleResize = () => {
      state.sectionHeight = window.innerHeight;
      updateMinimapHeight();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    // Track if section is pinned
    let isPinned = false;

    // Animation loop with smooth lerp and snap
    const animate = () => {
      const now = typeof window !== "undefined" ? Date.now() : 0;

      // Clamp targetY to valid range
      const minY = -(sectionCount - 1) * state.sectionHeight;
      const maxY = 0;
      state.targetY = Math.max(minY, Math.min(maxY, state.targetY));

      // Snap to nearest section when not dragging and scroll has stopped
      // Match reference: 100ms delay and 1px threshold
      if (
        isPinned &&
        !state.isSnapping &&
        !state.isDragging &&
        now - state.lastScrollTime > 100
      ) {
        let targetIndex = Math.round(-state.targetY / state.sectionHeight);
        targetIndex = Math.max(0, Math.min(sectionCount - 1, targetIndex));
        const snapPoint = -targetIndex * state.sectionHeight;
        // Match reference: snap if more than 1px away
        if (Math.abs(state.targetY - snapPoint) > 1) snapToSection();
      }

      // Update snap animation
      if (state.isSnapping) updateSnap();

      // Smooth lerp for currentY (original smoothness)
      if (!state.isDragging) {
        state.currentY += (state.targetY - state.currentY) * config.LERP_FACTOR;
        // Clamp currentY as well
        state.currentY = Math.max(minY, Math.min(maxY, state.currentY));
      }

      // Update active index
      const currentIndex = Math.round(-state.currentY / state.sectionHeight);
      const clampedIndex = Math.max(
        0,
        Math.min(sectionCount - 1, currentIndex)
      );
      if (clampedIndex !== activeIndexRef.current) {
        activeIndexRef.current = clampedIndex;
        setActiveIndex(clampedIndex);
      }

      syncElements();

      // Ensure all minimap elements have consistent height
      // Update periodically to catch any elements created by syncElements
      const mobile = isMobile();
      if (state.minimapHeight > 0 && !mobile) {
        // Update minimap-img-preview height (desktop only)
        const minimapPreview = container.querySelector(".minimap-img-preview");
        if (
          minimapPreview &&
          minimapPreview.style.height !== `${state.minimapHeight}px`
        ) {
          minimapPreview.style.height = `${state.minimapHeight}px`;
        }

        // Update all minimap-img-item heights and ensure images are properly styled
        // Use exact same height value for all to prevent gaps (desktop only)
        const exactHeight = `${state.minimapHeight}px`;
        state.minimapElements.forEach((item) => {
          // Force exact height
          item.el.style.height = exactHeight;
          item.el.style.margin = "0";
          item.el.style.padding = "0";

          // Ensure img element has correct styles
          const img = item.el.querySelector("img");
          if (img) {
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            img.style.display = "block";
            img.style.margin = "0";
            img.style.padding = "0";
          }
        });
      } else if (mobile) {
        // On mobile, ensure images have consistent height and proper styling
        const minimapPreview = container.querySelector(".minimap-img-preview");
        if (minimapPreview) {
          const previewHeight = minimapPreview.offsetHeight;
          if (previewHeight > 0) {
            // Update state.minimapHeight for consistency
            state.minimapHeight = previewHeight;

            state.minimapElements.forEach((item) => {
              // Force exact same height for all images - no exceptions
              const exactHeight = `${previewHeight}px`;
              item.el.style.height = exactHeight;
              item.el.style.minHeight = exactHeight;
              item.el.style.maxHeight = exactHeight;
              item.el.style.margin = "0";
              item.el.style.padding = "0";
              item.el.style.top = "0";
              item.el.style.left = "0";

              const img = item.el.querySelector("img");
              if (img) {
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.objectFit = "cover";
                img.style.display = "block";
                img.style.margin = "0";
                img.style.padding = "0";
              }
            });
          }
        }
      }

      updatePositions();
      requestAnimationFrame(animate);
    };

    // Start animation loop
    const animationId = requestAnimationFrame(animate);

    // Wheel event handler for smooth scrolling
    const handleWheel = (e) => {
      if (!isPinned) return;

      // Calculate boundaries once
      const minY = -(sectionCount - 1) * state.sectionHeight;
      const maxY = 0;

      // Check if we're at actual boundaries (check targetY position, not just section index)
      const isAtFirstSection = state.targetY >= maxY - 5; // At or near first section
      const isAtLastSection = state.targetY <= minY + 5; // At or near last section
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // If at first section and scrolling up, or at last section and scrolling down, allow normal scroll
      if (
        (isAtFirstSection && scrollingUp) ||
        (isAtLastSection && scrollingDown)
      ) {
        // Don't prevent default - allow normal page scroll to exit section
        return;
      }

      // Simple wheel handler matching reference code exactly
      e.preventDefault();
      state.isSnapping = false;
      state.lastScrollTime = typeof window !== "undefined" ? Date.now() : 0;
      const delta = Math.max(
        Math.min(e.deltaY * config.SCROLL_SPEED, config.MAX_VELOCITY),
        -config.MAX_VELOCITY
      );
      state.targetY -= delta;

      // Clamp targetY to prevent infinite scrolling beyond boundaries
      state.targetY = Math.max(minY, Math.min(maxY, state.targetY));
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
      if (!isPinned) return;
      state.isDragging = true;
      state.isSnapping = false;
      state.dragStart = { y: e.touches[0].clientY, scrollY: state.targetY };
      state.lastScrollTime = typeof window !== "undefined" ? Date.now() : 0;
    };

    const handleTouchMove = (e) => {
      if (!state.isDragging || !isPinned) return;
      state.targetY =
        state.dragStart.scrollY +
        (e.touches[0].clientY - state.dragStart.y) * 1.5;

      // Clamp targetY to valid range
      const minY = -(sectionCount - 1) * state.sectionHeight;
      const maxY = 0;
      state.targetY = Math.max(minY, Math.min(maxY, state.targetY));

      state.lastScrollTime = typeof window !== "undefined" ? Date.now() : 0;
    };

    const handleTouchEnd = () => {
      state.isDragging = false;
    };

    // Create ScrollTrigger to pin section (only for pinning, not scrubbing)
    // End point: Reduced to allow easier exit from last slide
    // We use (sectionCount - 1) * 80% to give enough space for slides but allow exit
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${(sectionCount - 1) * 80}%`, // Reduced from 100% to 80% for easier exit
      pin: true,
      anticipatePin: 1,
      onEnter: () => {
        isPinned = true;
        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);
      },
      onLeave: () => {
        isPinned = false;
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      },
      onEnterBack: () => {
        isPinned = true;
        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);
      },
      onLeaveBack: () => {
        isPinned = false;
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      },
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationId);
      scrollTrigger.kill();
      ScrollTrigger.update();

      // Clean up DOM elements
      state.backgroundElements.forEach((item) => item.el.remove());
      state.minimapElements.forEach((item) => item.el.remove());
      state.titleElements.forEach((item) => item.el.remove());
      state.textElements.forEach((item) => item.el.remove());
      state.backgroundElements.clear();
      state.minimapElements.clear();
      state.titleElements.clear();
      state.textElements.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionCount]);

  return (
    <div className="w-full">
      {/* Section 1: Landing Section */}
      <div
        ref={landingContainerRef}
        className="w-full h-[200vh] sm:h-[200vh] text-white relative font-regular tracking-tighter overflow-hidden"
      >
        <div className="image h-full overflow-hidden relative">
          <img
            data-scroll
            data-scroll-speed="-1"
            className="w-full h-full object-cover sm:object-cover sm:object-top"
            src={imagePNG}
            alt=""
            style={{
              objectPosition: "center top",
            }}
          />
          <div
            className="absolute top-0 left-0 w-full h-[80%] pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #010F1A 0%, rgba(1, 15, 26, 0.8) 1%, transparent 100%)",
            }}
          />
          {/* Overlay Image */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              zIndex: 100,
              backgroundImage: `url(${heroOverlayImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          />
        </div>

        <div className="absolute top-0 h-full px-8 sm:px-[10rem]">
          <div
            className="para mt-[8rem] sm:mt-[15rem]  text-left w-full ml-0 mb-4 sm:text-[1vw] text-[1.1vw]"
            style={{ transform: `translateY(${introY}px)` }}
          >
            <p
              className="overflow-hidden m-0 block text-left sm:text-[1.5vw] uppercase"
              style={{
                fontSize: "1.1vw",
                fontFamily: "ChivoMono-Regular",
                color: "#FFF",
                lineHeight: "normal",
                fontWeight: "400",
                letterSpacing: "0.5em",
              }}
            >
              An inheritance of the future
            </p>
          </div>

          <div
            className="heading text-[8vw] sm:text-[8vw] tracking-tighter sm:leading-[12rem] text-left w-full sm:-ml-2 relative z-10 mb-4"
            style={{
              transform: `translateY(${introY}px)`,
              fontFamily: '"BonaNova", serif',
              textTransform: "uppercase",
            }}
          >
            <p
              id="regalium-heading"
              className="m-0 p-0 block text-left text-white z-10 overflow-hidden"
              style={{
                position: "relative",
                top: "120px",
                opacity: 0,
                fontFamily: "BonaNova",
                fontWeight: "400",
                fontSize: "9vw",
                lineHeight: "1",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textAlign: "left",
              }}
            >
              Regalium
            </p>
          </div>

          <p
            className="para2 mt-0 sm:w-1/2 sm:text-[1.2vw] sm:leading-7"
            style={{
              transform: `translateY(${subcopyY}px)`,
              fontFamily: "BonaNova",
              letterSpacing: "0.03em",
            }}
          >
            In the heart of Bengaluru, in Koramangala, Regalium is a
            next-generation development that forms a seamless world of retail,
            workspaces, F&B, and culture for those who lead with vision. Rooted
            in and inspired by our heritage, we pillar on luxury, community, and
            innovation to create an inspired world.
          </p>

          <div className="studio mt-5 sm:mt-10">
            <a
              href=""
              className="inline-block text-xs sm:text-[1vw] px-6 py-3 sm:px-10 sm:py-4 border rounded-full text-center transition-all font-medium"
              style={{
                fontFamily: "BonaNova",
                color: "#BB924D",
                borderColor: "#BB924D",
                fontWeight: "400",
                borderWidth: "1px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              Virtual Walkthrough
            </a>
          </div>
        </div>
        {/* Bottom gradient overlay */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[20vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      {/* Section 2: Work Section */}
      <div
        className="w-full sm:h-[auto] h-[auto] bg-white py-16 sm:py-24 px-8 sm:px-[10rem]"
        style={{
          fontFamily: "BonaNova",
        }}
      >
        {/* Header */}
        <motion.h2
          className="text-2xl sm:text-[3vw] text-black uppercase tracking-tight mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "BonaNova",
            color: "#0211A2",
            fontWeight: "400",
          }}
        >
          AN INTENTIONAL SPACE OF <br /> COLLECTIVE POSSIBILITY
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          {/* Upper Left - Large Image */}
          <div
            ref={image1Ref}
            className="w-full order-1 sm:order-1 overflow-hidden relative"
            style={{
              minHeight: "clamp(300px, 40vw, 800px)",
              height: "clamp(300px, 40vw, 800px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full h-full"
            >
              <motion.img
                src={workImage1}
                alt="Faceted objects"
                className="w-full h-full object-cover"
                style={{
                  y: y1,
                  opacity: imagesLoaded.work1 ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                  minHeight: "100%",
                }}
                loading="eager"
                onLoad={() =>
                  setImagesLoaded((prev) => ({ ...prev, work1: true }))
                }
              />
            </motion.div>
          </div>

          {/* Upper Right - Text Block */}
          <motion.div
            className="w-full flex flex-col justify-center order-2 sm:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-xl sm:text-[2vw] font-bona-nova text-black uppercase tracking-tight mb-6"
              style={{
                fontFamily: "BonaNova",
                color: "#0211A2",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              INDO-LUXURY DEFINED BY <br /> PRECISION AND PURPOSE
            </h3>
            <a
              href=""
              className="inline-block text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-3 rounded-full border text-center transition-all font-medium w-fit mx-auto"
              style={{
                fontFamily: "BonaNova",
                color: "#BB924D",
                borderColor: "#BB924D",
                borderWidth: "1px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              Learn More
            </a>
          </motion.div>

          {/* Mid-Left - Text Block */}
          <motion.div
            className="w-full flex flex-col justify-center order-4 sm:order-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3
              className="text-xl sm:text-[2vw] font-bona-nova text-black uppercase tracking-tight mb-6"
              style={{
                fontFamily: "BonaNova",
                color: "#0211A2",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              COMMUNITY AS A SCALABLE <br /> ARCHITECTURE
            </h3>
            <a
              href=""
              className="inline-block text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-3 rounded-full border text-center transition-all font-medium w-fit mx-auto"
              style={{
                fontFamily: "BonaNova",
                color: "#BB924D",
                borderColor: "#BB924D",
                borderWidth: "1px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              Learn More
            </a>
          </motion.div>

          {/* Mid-Right - Illustration Block */}
          <div
            ref={image2Ref}
            className="w-full order-3 sm:order-4 overflow-hidden relative"
            style={{
              minHeight: "clamp(300px, 40vw, 500px)",
              height: "clamp(300px, 40vw, 700px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full h-full"
            >
              <motion.img
                src={workImage2}
                alt="Architectural illustration"
                className="w-full h-full object-cover"
                style={{
                  y: y2,
                  opacity: imagesLoaded.work2 ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                  minHeight: "100%",
                }}
                loading="eager"
                onLoad={() =>
                  setImagesLoaded((prev) => ({ ...prev, work2: true }))
                }
              />
            </motion.div>
          </div>

          {/* Lower Left - Image */}
          <div
            ref={image3Ref}
            className="w-full order-5 sm:order-5 overflow-hidden relative"
            style={{
              minHeight: "clamp(300px, 40vw, 600px)",
              height: "clamp(300px, 40vw, 600px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full h-full"
            >
              <motion.img
                src={workImage3}
                alt="Decorative objects"
                className="w-full h-full object-cover"
                style={{
                  y: y3,
                  opacity: imagesLoaded.work3 ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                  minHeight: "100%",
                }}
                loading="eager"
                onLoad={() =>
                  setImagesLoaded((prev) => ({ ...prev, work3: true }))
                }
              />
            </motion.div>
          </div>

          {/* Lower Right - Text Block */}
          <motion.div
            className="w-full flex flex-col justify-center order-6 sm:order-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3
              className="text-xl sm:text-[2vw] text-black uppercase tracking-tight mb-6"
              style={{
                fontFamily: "BonaNova",
                color: "#0211A2",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              INDO-LUXURY DEFINED BY <br /> PRECISION AND PERFECTION
            </h3>
            <a
              href=""
              className="inline-block text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-3 rounded-full border text-center transition-all font-medium w-fit mx-auto"
              style={{
                fontFamily: "BonaNova",
                color: "#BB924D",
                borderColor: "#BB924D",
                borderWidth: "1px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Interactive Scroll Section with Infinite Parallax */}
      <div
        ref={interactiveSectionRef}
        className="parallax-section-container"
        style={{ background: "#ECE8DC" }}
      >
        {/* Background Layer - Parallax Images (project class) */}
        {/* project-list container like in reference */}
        <div
          ref={backgroundLayerRef}
          className="project-list absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* Minimap - Fixed, Centered */}
        <div className="minimap">
          <div className="minimap-wrapper">
            {/* Minimap Image Preview - Centered */}
            <div ref={minimapRef} className="minimap-img-preview" />

            {/* Minimap Info List - Text Content */}
            <div className="minimap-info-list">
              {/* Left Side - Title/Info */}
              <div ref={titleLayerRef} />
              {/* Right Side - Description Text */}
              <div ref={textLayerRef} />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Inspired World Section */}
      <div
        className="w-full sm:h-[100vh] h-[100vh] py-20 sm:py-20 px-8 sm:px-[10rem] flex items-center justify-center"
        style={{ background: "white" }}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto text-center space-y-4 sm:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subheading */}
          <motion.h3
            className="text-sm sm:text-base uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "ChivoMono",
              color: "#010F1A",
              letterSpacing: "0.1em",
            }}
          >
            A GLIMPSE INTO THE INSPIRED WORLD
          </motion.h3>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-[3.5vw] leading-tight mx-auto text-center w-full max-w-7xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              fontFamily: "BonaNova",
              color: "#0211A2",
              letterSpacing: "0.01em",
              fontWeight: "400",
              textTransform: "uppercase",
            }}
          >
            GROWTH EXPRESSED IN PRECISION,
            <br /> CLARITY, AND ENCODED BEAUTY
          </motion.h1>

          {/* Paragraph Text */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl leading-relaxed  mx-auto mt-8 sm:mt-0 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontFamily: "BonaNova",
              fontWeight: "400",
              textAlign: "center",
              color: "#333333",
              letterSpacing: "0.01em",
            }}
          >
            At Regalium, every element becomes a fractal unit aligned to a
            larger intention: creating a future we wish to live in. Growth is no
            longer only upward or cyclical, but outward, expansive, and
            multiplicative, mirroring the evolution of cities, communities, and
            shared visions.
          </motion.p>

          {/* Learn More Button */}
          <motion.div
            className="flex justify-center mt-10 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href=""
              className="inline-block text-sm sm:text-base px-8 py-3 sm:px-10 sm:py-4 border rounded-full text-center transition-all font-medium"
              style={{
                fontFamily: "BonaNova",
                color: "#BB924D",
                borderColor: "#BB924D",
                borderWidth: "1px",
                backgroundColor: "transparent",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              Virtual Walkthrough
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
