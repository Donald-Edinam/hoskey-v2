import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { CardGrid } from "@/components/ui/CardGrid";
import { Testimonial } from "@/lib/content";

export interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export function TestimonialsSection({ testimonials = [] }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <Section id="testimonials">
      <Container>
        <HeadRow
          eyebrow="Testimonials"
          heading={<Display>What our <em>partners say.</em></Display>}
          split
        />
        <CardGrid className="mt-12">
          {testimonials.slice(0, 3).map((item, idx) => (
            <Card
              key={idx}
              title={item.name}
            >
              <blockquote className="m-0 text-sm text-[var(--ink-2)]">
                &quot;{item.quote}&quot;
              </blockquote>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">
                {item.role ? `${item.role}, ` : ""}{item.organisation}
              </p>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
