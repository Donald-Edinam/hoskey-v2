import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Body } from "@/components/ui/Typography";
import { TimelineEntry } from "@/lib/content";

export interface TimelineSectionProps {
  timeline?: TimelineEntry[];
}

export function TimelineSection({ timeline = [] }: TimelineSectionProps) {
  // Threshold enforced in code: hidden below three entries
  if (!timeline || timeline.length < 3) {
    return null;
  }

  return (
    <Section id="timeline">
      <Container>
        <Eyebrow>Milestones</Eyebrow>
        <Heading as="h2" className="mb-12">Our journey so far.</Heading>
        <div className="border-t border-[var(--rule)] divide-y divide-[var(--rule)]">
          {timeline.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 py-6 items-baseline">
              <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)]">
                {item.date}
              </span>
              <div>
                <Heading as="h3">{item.title}</Heading>
                <Body className="mt-1 text-[var(--ink-2)]">{item.description}</Body>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
