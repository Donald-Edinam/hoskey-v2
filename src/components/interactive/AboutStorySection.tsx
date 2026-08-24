"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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
    date: "Early Origins",
    iconColor: "var(--navy)",
  },
  {
    step: "02",
    tag: "Higher Education",
    title: "UniMAC IFT",
    desc: "Studied media and broadcast technologies at UniMAC IFT, honing technical knowledge, multi-camera direction, and video production mastery.",
    date: "Academic Mastery",
    iconColor: "var(--red)",
  },
  {
    step: "03",
    tag: "Foundation",
    title: "1 December 2024",
    desc: "Founded Hoskey Production in a modest setting with a big vision: to bring world-class broadcast standards to every project across Ghana and beyond.",
    date: "1 Dec 2024",
    iconColor: "var(--navy-lift)",
  },
  {
    step: "04",
    tag: "Ecosystem Hub",
    title: "Demes shr Studios",
    desc: "Expanded into physical podcasting suites, recording booths, creator co-working space, workshop rooms, and multi-camera live broadcast operations.",
    date: "Physical Expansion",
    iconColor: "var(--red-lift)",
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

      {/* Package-Powered Story Timeline */}
      <div className="space-y-10 pt-12 border-t border-[var(--rule)]">
        <div>
          <Eyebrow>Company Milestones</Eyebrow>
          <h3 className="text-2xl md:text-4xl font-extrabold text-[var(--ink)] mt-1">
            The Journey of <em>Hoskey.</em>
          </h3>
        </div>

        <VerticalTimeline animate={false} lineColor="var(--rule)">
          {MILESTONES.map((m) => (
            <VerticalTimelineElement
              key={m.step}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "var(--card)",
                color: "var(--ink)",
                border: "1px solid var(--rule)",
                boxShadow: "none",
                borderRadius: "0px",
                padding: "1.5rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid var(--card)",
              }}
              date={m.date}
              dateClassName="text-xs font-mono text-[var(--ink-3)] font-bold px-2"
              iconStyle={{
                background: m.iconColor,
                color: "var(--on-dark)",
                boxShadow: "none",
              }}
              icon={
                <span className="flex items-center justify-center w-full h-full font-mono text-xs font-bold">
                  {m.step}
                </span>
              }
            >
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--red)] block mb-1">
                {m.tag}
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-[var(--ink)]">
                {m.title}
              </h4>
              <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed mt-2 !font-normal">
                {m.desc}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
