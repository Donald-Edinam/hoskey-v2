"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export interface AcrosticItem {
  letter: string;
  word: string;
  rest: string;
}

export interface InteractiveAcrosticProps {
  items: AcrosticItem[];
}

const BRAND_COLORS = [
  { border: "border-[var(--red)]", text: "text-[var(--red)]", bg: "bg-[var(--red)]/10" },
  { border: "border-[var(--navy-lift)]", text: "text-[var(--navy-lift)]", bg: "bg-[var(--navy)]/20" },
  { border: "border-[var(--brand-blue)]", text: "text-[var(--brand-blue)]", bg: "bg-[var(--brand-blue)]/10" },
  { border: "border-[var(--brand-green)]", text: "text-[var(--brand-green)]", bg: "bg-[var(--brand-green)]/10" },
  { border: "border-[var(--red-lift)]", text: "text-[var(--red-lift)]", bg: "bg-[var(--red)]/15" },
  { border: "border-[#00B050]", text: "text-[#00B050]", bg: "bg-[#00B050]/10" },
] as const;

const DEFAULT_COLOR = BRAND_COLORS[0];
const DEFAULT_ITEM: AcrosticItem = { letter: "H", word: "Honesty", rest: "in storytelling" };

export function InteractiveAcrostic({ items }: InteractiveAcrosticProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".acrostic-card");
    gsap.fromTo(
      cards,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
      }
    );
  }, []);

  useEffect(() => {
    if (activeDetailRef.current) {
      gsap.fromTo(
        activeDetailRef.current,
        { opacity: 0, y: 15, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  const currentItem = items[activeIndex] ?? items[0] ?? DEFAULT_ITEM;
  const currentColor = BRAND_COLORS[activeIndex % BRAND_COLORS.length] ?? DEFAULT_COLOR;

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Top Banner Statement */}
      <div className="border-b border-[var(--rule)] pb-4">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-2)]">
          The H-O-S-K-E-Y Acrostic
        </span>
      </div>

      {/* Grid of 6 Letters */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-4">
        {items.map((item, idx) => {
          const isActive = activeIndex === idx;
          const colorTheme = BRAND_COLORS[idx % BRAND_COLORS.length] ?? DEFAULT_COLOR;

          return (
            <button
              key={item.letter}
              type="button"
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`acrostic-card relative p-4 md:p-6 text-center transition-all duration-300 cursor-pointer border ${
                isActive
                  ? `${colorTheme.border} ${colorTheme.bg} shadow-lg scale-105 z-10`
                  : "border-[var(--rule)] bg-[var(--card)] hover:border-[var(--ink-3)] hover:scale-102"
              }`}
              aria-label={`Letter ${item.letter}`}
              aria-pressed={isActive}
            >
              <div
                className={`text-4xl md:text-6xl font-extrabold tracking-tighter transition-colors ${
                  isActive ? colorTheme.text : "text-[var(--ink)]"
                }`}
              >
                {item.letter}
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--ink-2)] truncate">
                {item.word}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Letter Deep Detail Spotlight */}
      <div
        ref={activeDetailRef}
        className={`p-6 md:p-10 border ${currentColor.border} ${currentColor.bg} backdrop-blur-md transition-all duration-300`}
      >
        <div className="flex items-baseline gap-4">
          <span className={`text-6xl md:text-8xl font-black tracking-tighter ${currentColor.text}`}>
            {currentItem.letter}
          </span>
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-[var(--ink)]">
              {currentItem.word}
            </h3>
            <p className="text-lg md:text-xl font-medium text-[var(--ink-2)] mt-1">
              {currentItem.rest}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
