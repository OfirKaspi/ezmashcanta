"use client";

import { useEffect, useState } from "react";

export default function BannerSpacer() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    let checkInterval: NodeJS.Timeout | null = null;

    const updateHeight = () => {
      const banner = document.querySelector('[data-fixed-banner]') as HTMLElement;
      if (banner) {
        setHeight(banner.offsetHeight);
      }
    };

    // Wait for banner to be rendered and set up ResizeObserver
    checkInterval = setInterval(() => {
      const banner = document.querySelector('[data-fixed-banner]');
      if (banner) {
        clearInterval(checkInterval!);
        updateHeight();
        
        resizeObserver = new ResizeObserver(() => {
          updateHeight();
        });
        resizeObserver.observe(banner);
      }
    }, 50);

    // Also update on window resize as fallback
    window.addEventListener("resize", updateHeight);

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return <div style={{ height: `${height}px` }} aria-hidden="true" />;
}

