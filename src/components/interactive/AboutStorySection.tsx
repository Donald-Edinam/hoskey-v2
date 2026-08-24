"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Body } from "@/components/ui/Typography";
import { Frame } from "@/components/ui/Frame";

export interface FounderStoryData {
  title: string;
  paragraphs: string[];
  byline: {
    name: string;
    role: string;
  };
}

export interface AboutStorySectionProps {
  story: FounderStoryData;
}

const MILESTONES = [
  {
    step: "01",
    tag: "Humble Roots",
    title: "Walawala, Northern Ghana",
    desc: "Growing up in a small village in Walawala, early experiences shaped a deep passion for storytelling, communication, and visual media.",
  },
  {
    step: "02",
    tag: "Higher Education",
    title: "UniMAC IFT",
    desc: "Studied media and broadcast technologies at UniMAC IFT, honing technical knowledge, multi-camera direction, and video production mastery.",
  },
  {
    step: "03",
    tag: "Foundation",
    title: "1 December 2024",
    desc: "Founded Hoskey Production in a modest setting with a big vision: to bring world-class broadcast standards to every project across Ghana and beyond.",
  },
  {
    step: "04",
    tag: "Ecosystem Hub",
    title: "Demes shr Studios",
    desc: "Expanded into physical podcasting suites, recording booths, creator co-working space, workshop rooms, and multi-camera live broadcast operations.",
  },
] as const;

export function AboutStorySection({ story }: AboutStorySectionProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    gsap.to(imageRef.current, {
      rotateY: x,
      rotateX: -y,
      duration: 0.4,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div className="space-y-16">
      {/* Top Split Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* Story Narrative */}
        <div className="space-y-6">
          <Eyebrow>Our Origins</Eyebrow>
          <Display>
            Started small. <em className="text-[var(--navy)]">Built to last.</em>
          </Display>
          {story.paragraphs.map((p, idx) => (
            <Body key={idx} className="text-[var(--ink-2)] text-base md:text-lg leading-relaxed">
              {p}
            </Body>
          ))}

          <div className="pt-6 border-t border-[var(--rule)] flex items-center justify-between">
            <div>
              <b className="block text-base font-bold text-[var(--ink)]">
                {story.byline.name}
              </b>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--navy)]">
                {story.byline.role}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Founder Photo Card */}
        <div
          className="perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={imageRef} className="transform-preserve-3d transition-transform duration-200">
            <Frame ratio="r45" label="Ziblim Abu James (Demes shr)" className="shadow-xl">
              <Image
                src="/images/about-founder.webp"
                alt="Ziblim Abu James (Demes shr)"
                fill
                sizes="(max-width: 900px) 100vw, 500px"
                className="object-cover"
              />
            </Frame>
          </div>
        </div>
      </div>

      {/* Executive Vertical Timeline */}
      <div className="space-y-10 pt-12 border-t border-[var(--rule)]">
        <div>
          <Eyebrow>Company Milestones</Eyebrow>
          <h3 className="text-2xl md:text-4xl font-extrabold text-[var(--ink)] mt-1">
            The Journey of <em>Hoskey.</em>
          </h3>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-8 md:pl-12 space-y-8 border-l-2 border-[var(--rule)] ml-4 md:ml-6">
          {MILESTONES.map((m) => (
            <div key={m.step} className="relative group">
              {/* Step Node Circle on Vertical Spine */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-10 h-10 rounded-full bg-[var(--card)] border-2 border-[var(--rule)] group-hover:border-[var(--red)] group-hover:bg-[var(--red)] group-hover:text-white flex items-center justify-center font-mono text-xs font-bold text-[var(--ink)] transition-all duration-300 shadow-sm z-10">
                {m.step}
              </div>

              {/* Vertical Milestone Card */}
              <div className="p-6 md:p-8 bg-[var(--card)] border border-[var(--rule)] group-hover:border-[var(--navy)] group-hover:shadow-md transition-all duration-300 space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--red)] block">
                  {m.tag}
                </span>

                <h4 className="text-xl md:text-2xl font-bold text-[var(--ink)] group-hover:text-[var(--navy)] transition-colors">
                  {m.title}
                </h4>

                <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
