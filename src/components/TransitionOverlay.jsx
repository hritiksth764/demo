import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Transition Overlay Component
 * Creates the curtain effect used in the page transition
 */
const TransitionOverlay = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    // Set initial state - hidden at top
    if (overlayRef.current) {
      gsap.set(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
      });
    }
  }, []);

  return (
    <div
      ref={overlayRef}
      className="transition fixed inset-0 bg-black z-[99999] pointer-events-none"
      style={{
        transformOrigin: "bottom",
      }}
    />
  );
};

// Page transition function - matches the original barba.js pattern exactly
// This runs both curtain animations in sequence (cover then reveal)
export const pageTransition = () => {
  const transitionEl = document.querySelector(".transition");
  if (!transitionEl) return;

  const tl = gsap.timeline();

  // Scale down from bottom (curtain covers page)
  tl.to(transitionEl, {
    duration: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut",
  });

  // Scale up from top (curtain lifts to reveal new page)
  tl.to(transitionEl, {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2,
  });
};

// Delay helper function (matches original barba.js pattern)
export const delay = (n = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
};

// Export function to trigger content animation (matches barba.js pattern exactly)
export const contentAnimation = () => {
  const headings = document.querySelectorAll("h1, #regalium-heading");
  if (headings.length === 0) return;

  const tl = gsap.timeline();

  headings.forEach((heading, index) => {
    // Set initial hidden state - hidden and positioned below
    gsap.set(heading, {
      position: "relative",
      top: "120px",
      opacity: 0,
    });

    // Animate heading to visible state with delay (matches original exactly)
    tl.to(
      heading,
      {
        top: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
      },
      index * 0 + 0.75 // Start at 0.75s delay as in original
    );
  });
};

export default TransitionOverlay;
