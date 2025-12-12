import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { contentAnimation } from "./TransitionOverlay";

/**
 * Barba.js-style Page Transition Component for React Router
 *
 * Implements the curtain-style transition pattern from barba.js
 * with content animations
 */

// Track if this is the very first page load
let isFirstPageLoad = true;

const PageTransition = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;

    // On very first page load, don't run any transitions - just show content normally
    if (isFirstPageLoad) {
      isFirstPageLoad = false;

      // Reset heading to visible state without animation
      const heading = document.querySelector("#regalium-heading");
      if (heading) {
        gsap.set(heading, { top: 0, opacity: 1 });
      }

      return;
    }

    // On subsequent route changes, run enter animation (like barba.js enter)
    // This only happens when navigating between pages, not on refresh
    contentAnimation();
  }, [location.pathname]);

  return (
    <div
      ref={containerRef}
      data-barba="container"
      data-barba-namespace={location.pathname}
      className="w-full"
    >
      {children}
    </div>
  );
};

export default PageTransition;
