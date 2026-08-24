"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function LenisRouteHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  // 1. Handle route changes & initial page hash
  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;
    if (hash && hash !== "#") {
      const target = document.querySelector<HTMLElement>(hash);
      if (target) {
        const timer = setTimeout(() => {
          lenis.scrollTo(target, { duration: 1.2 });
        }, 60);
        return () => clearTimeout(timer);
      }
    }

    // Reset scroll to top on page change if no hash
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  // 2. Global anchor link click handler for smooth hash scrolling
  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const currentPath = window.location.pathname;
      let hash = "";

      if (href.startsWith("#") && href.length > 1) {
        hash = href;
      } else if (href.includes("#")) {
        const [path, h] = href.split("#");
        if ((path === "" || path === currentPath) && h) {
          hash = `#${h}`;
        }
      }

      if (hash) {
        const targetElement = document.querySelector<HTMLElement>(hash);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, { duration: 1.2 });
          window.history.pushState(null, "", hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, [lenis]);

  return null;
}

export interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: prefersReducedMotion ? 0 : 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: !prefersReducedMotion,
        touchMultiplier: 1.8,
      }}
    >
      <LenisRouteHandler />
      {children}
    </ReactLenis>
  );
}
