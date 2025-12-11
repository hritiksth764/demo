import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Modern blur fade with depth (Premium feel)
const blurFadeVariants = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
    scale: 1.05,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.95,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Elegant slide with parallax effect
const elegantSlideVariants = {
  initial: {
    opacity: 0,
    x: 60,
    y: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    x: -60,
    y: -20,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Smooth fade with subtle scale (Minimal luxury)
const luxuryFadeVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Modern reveal with rotation (Dynamic)
const revealRotateVariants = {
  initial: {
    opacity: 0,
    rotateY: 15,
    scale: 0.9,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    rotateY: -15,
    scale: 1.1,
    filter: "blur(4px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Smooth vertical slide with fade (Classic modern)
const verticalSlideVariants = {
  initial: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    filter: "blur(6px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Choose transition style
const TRANSITION_STYLE = "luxuryFade"; // Options: 'blurFade', 'elegantSlide', 'luxuryFade', 'revealRotate', 'verticalSlide'

const getVariants = () => {
  switch (TRANSITION_STYLE) {
    case "elegantSlide":
      return elegantSlideVariants;
    case "luxuryFade":
      return luxuryFadeVariants;
    case "revealRotate":
      return revealRotateVariants;
    case "verticalSlide":
      return verticalSlideVariants;
    default:
      return blurFadeVariants;
  }
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  const variants = getVariants();

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="w-full"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
