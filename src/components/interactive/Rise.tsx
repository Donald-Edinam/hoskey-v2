"use client";

import React, { useEffect, useRef } from "react";

// Module-level shared observer singleton
let sharedObserver: IntersectionObserver | null = null;
const registeredElements = new Map<Element, (isIntersecting: boolean) => void>();

function getSharedObserver() {
  if (typeof window === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = registeredElements.get(entry.target);
            if (callback) {
              callback(true);
              registeredElements.delete(entry.target);
              sharedObserver?.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: "0px 0px -7% 0px" }
    );
  }
  return sharedObserver;
}

export interface RiseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  staggerIndex?: number;
  className?: string;
  as?: React.ElementType;
}

export function Rise({
  children,
  staggerIndex = 0,
  className = "",
  as: Component = "div",
  style,
  ...props
}: RiseProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }

    const delay = Math.min(staggerIndex, 4) * 60;
    el.style.transitionDelay = `${delay}ms`;

    const observer = getSharedObserver();
    if (observer) {
      registeredElements.set(el, () => {
        el.classList.add("in");
      });
      observer.observe(el);
    } else {
      el.classList.add("in");
    }

    return () => {
      if (el) {
        registeredElements.delete(el);
        observer?.unobserve(el);
      }
    };
  }, [staggerIndex]);

  return (
    <Component
      ref={ref}
      className={`rise ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}
