"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FullLogo } from "@/components/layout/FullLogo";

export interface LogoHotspot {
  id: string;
  number: string;
  title: string;
  description: string;
}

const LOGO_HOTSPOTS: LogoHotspot[] = [
  {
    id: "typography",
    number: "01",
    title: "Bold & Confident Typography",
    description: "The word 'Hoskey' is rendered in a custom bold structure representing confidence, originality, and giving every story a distinct voice.",
  },
  {
    id: "colors",
    number: "02",
    title: "Authority & Creative Contrast",
    description: "Near-black surfaces express strength and professional authority in broadcasting, paired with vibrant red & navy accents symbolizing creative passion.",
  },
  {
    id: "symbolism",
    number: "03",
    title: "Visual Storytelling Symbol",
    description: "Integrated visual elements evoke broadcast camera viewfinders, film reels, and soundwave peaks, symbolizing the bridge between imagination and reality.",
  },
  {
    id: "versatility",
    number: "04",
    title: "Modern Multi-Platform Layout",
    description: "A clean, balanced architecture designed for high legibility across 4K television broadcasts, live streams, mobile media, and physical studio setups.",
  },
];

const DEFAULT_HOTSPOT: LogoHotspot = LOGO_HOTSPOTS[0]!;

export function InteractiveLogoBreakdown() {
  const [activeHotspot, setActiveHotspot] = useState<LogoHotspot>(DEFAULT_HOTSPOT);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 15, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [activeHotspot]);

  return (
    <div className="space-y-8">
      {/* Showcase Box */}
      <div className="relative bg-[var(--dark)] text-[var(--on-dark)] p-8 md:p-16 overflow-hidden border border-[var(--rule-dark)]">
        {/* Ambient Gradient background */}
        <div className="absolute -inset-[50%] bg-gradient-to-r from-[var(--navy)]/30 via-[var(--red)]/20 to-[var(--navy-lift)]/30 blur-3xl rounded-full opacity-60 pointer-events-none" />

        {/* Center Logo Showcase */}
        <div className="relative z-10 my-12 text-center flex flex-col items-center justify-center min-h-[220px]">
          <div className="transform scale-125 md:scale-150 transition-transform duration-500 hover:scale-160">
            <FullLogo showTagline />
          </div>

          <p className="mt-8 text-sm md:text-base font-semibold text-[var(--on-dark-2)] max-w-xl italic">
            &ldquo;Create visual stories through film: every story deserves to be seen, heard, and felt.&rdquo;
          </p>
        </div>

        {/* Hotspot Option Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative z-20 mt-8 pt-8 border-t border-[var(--rule-dark)]">
          {LOGO_HOTSPOTS.map((hotspot) => {
            const isActive = activeHotspot.id === hotspot.id;

            return (
              <button
                key={hotspot.id}
                type="button"
                onClick={() => setActiveHotspot(hotspot)}
                onMouseEnter={() => setActiveHotspot(hotspot)}
                className={`p-4 text-left transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-[#fff]/10 border-[var(--red-lift)] text-white shadow-xl"
                    : "bg-transparent border-[var(--rule-dark)] text-[var(--on-dark-2)] hover:text-white hover:border-white/40"
                }`}
                aria-pressed={isActive}
              >
                <div className="text-sm font-bold tracking-tight">
                  {hotspot.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hotspot Detailed Callout Card */}
      <div
        ref={cardRef}
        className="p-6 md:p-8 bg-[var(--card)] border-l-4 border-[var(--red)] border-y border-r border-[var(--rule)] shadow-sm"
      >
        <h4 className="text-xl md:text-2xl font-bold text-[var(--ink)]">
          {activeHotspot.title}
        </h4>
        <p className="mt-3 text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
          {activeHotspot.description}
        </p>
      </div>
    </div>
  );
}
