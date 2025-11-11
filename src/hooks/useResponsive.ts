import { useState, useEffect } from "react";

const useResponsive = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaMobile = window.matchMedia("(max-width: 767px)");
    const mediaTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const mediaDesktop = window.matchMedia("(min-width: 1024px)");

    const updateState = () => {
      setDevice({
        isMobile: mediaMobile.matches,
        isTablet: mediaTablet.matches,
        isDesktop: mediaDesktop.matches,
      });
    };

    // Initial match
    updateState();

    // Attach listeners
    mediaMobile.addEventListener("change", updateState);
    mediaTablet.addEventListener("change", updateState);
    mediaDesktop.addEventListener("change", updateState);

    // Cleanup
    return () => {
      mediaMobile.removeEventListener("change", updateState);
      mediaTablet.removeEventListener("change", updateState);
      mediaDesktop.removeEventListener("change", updateState);
    };
  }, []);

  return device;
};

export default useResponsive;