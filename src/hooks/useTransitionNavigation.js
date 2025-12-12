import { useNavigate } from "react-router-dom";
import { pageTransition, delay } from "../components/TransitionOverlay";

/**
 * Custom hook for navigation with page transitions
 * Matches the original barba.js transition pattern exactly:
 * - leave: runs pageTransition() (both animations) then delays 1000ms
 * - enter: runs contentAnimation()
 */
export const useTransitionNavigation = () => {
  const navigate = useNavigate();

  const navigateWithTransition = async (path) => {
    // Step 1: Run page transition (starts curtain animation - both cover and reveal)
    pageTransition();
    
    // Step 2: Delay 1000ms (matches original barba.js leave callback exactly)
    await delay(1000);
    
    // Step 3: Navigate to new route (while curtain is still animating)
    navigate(path);
    
    // Content animation will be handled by PageTransition component on enter
    // (matches barba.js enter callback)
  };

  return { navigateWithTransition };
};

