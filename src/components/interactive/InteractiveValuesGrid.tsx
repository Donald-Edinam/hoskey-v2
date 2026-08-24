"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export interface ValueItem {
  title: string;
  description: string;
}

export interface InteractiveValuesGridProps {
  values: ValueItem[];
}

const BENTO_CONFIG: Record<
  string,
  {
    colSpan: string;
    variant: "hero" | "tall" | "card";
    accentColor: string;
    icon: React.ReactNode;
  }
> = {
  Creativity: {
    colSpan: "md:col-span-2 md:row-span-1",
    variant: "hero",
    accentColor: "from-[var(--navy)]/40 to-[var(--red)]/20",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current fill-none stroke-[1.5]">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
  Quality: {
    colSpan: "md:col-span-1 md:row-span-2",
    variant: "tall",
    accentColor: "border-[var(--red)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current fill-none stroke-[1.5]">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  Innovation: {
    colSpan: "md:col-span-1 md:row-span-1",
    variant: "card",
    accentColor: "border-[var(--brand-blue)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[1.5]">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  Integrity: {
    colSpan: "md:col-span-1 md:row-span-1",
    variant: "card",
    accentColor: "border-[var(--brand-green)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[1.5]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  Collaboration: {
    colSpan: "md:col-span-2 md:row-span-1",
    variant: "card",
    accentColor: "border-[var(--navy-lift)]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[1.5]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
};

const DEFAULT_BENTO_CONFIG = BENTO_CONFIG.Creativity!;

export function InteractiveValuesGrid({ values }: InteractiveValuesGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".bento-tile");
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(220px,auto)]">
      {values.map((v) => {
        const config = BENTO_CONFIG[v.title] ?? DEFAULT_BENTO_CONFIG;
        const isHero = config.variant === "hero";
        const isTall = config.variant === "tall";

        if (isHero) {
          return (
            <div
              key={v.title}
              className={`bento-tile ${config.colSpan} relative bg-[var(--dark)] text-[var(--on-dark)] p-8 md:p-10 border border-[var(--rule-dark)] overflow-hidden flex flex-col justify-between group hover:border-[var(--navy-lift)] transition-all duration-300 shadow-xl`}
            >
              {/* Background Ambient Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${config.accentColor} opacity-40 pointer-events-none group-hover:opacity-70 transition-opacity duration-500`} />

              <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[var(--red-lift)] group-hover:scale-110 transition-transform">
                {config.icon}
              </div>

              <div className="relative z-10 mt-8 space-y-3">
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  {v.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--on-dark-2)] leading-relaxed max-w-xl">
                  {v.description}
                </p>
              </div>
            </div>
          );
        }

        if (isTall) {
          return (
            <div
              key={v.title}
              className={`bento-tile ${config.colSpan} p-8 md:p-10 bg-[var(--card)] border ${config.accentColor} border-l-4 shadow-md flex flex-col justify-between group hover:shadow-xl transition-all duration-300`}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-[var(--paper)] border border-[var(--rule)] flex items-center justify-center text-[var(--red)] group-hover:bg-[var(--red)] group-hover:text-white transition-colors">
                  {config.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div
            key={v.title}
            className={`bento-tile ${config.colSpan} p-6 md:p-8 bg-[var(--card)] border border-[var(--rule)] hover:border-[var(--navy)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group`}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-[var(--paper)] border border-[var(--rule)] flex items-center justify-center text-[var(--navy)] group-hover:bg-[var(--navy)] group-hover:text-white transition-colors">
                {config.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[var(--ink)] mt-4 group-hover:text-[var(--navy)] transition-colors">
                {v.title}
              </h3>
              <p className="text-xs md:text-sm text-[var(--ink-2)] mt-2 leading-relaxed">
                {v.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
