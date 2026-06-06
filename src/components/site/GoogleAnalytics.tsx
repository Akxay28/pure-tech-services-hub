import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

const GA_MEASUREMENT_ID = "G-38WFSYMQQP";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}

export function GoogleAnalytics() {
  const location = useLocation();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    const pagePath = location.href;

    if (lastTrackedPath.current === pagePath) {
      return;
    }

    lastTrackedPath.current = pagePath;
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.href]);

  return null;
}
