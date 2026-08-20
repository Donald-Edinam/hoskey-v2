import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Typography";

export interface ServiceIncludedProps {
  included?: string[];
}

export function ServiceIncluded({ included = [] }: ServiceIncludedProps) {
  if (!included || included.length === 0) {
    return null;
  }

  return (
    <Section variant="card" id="included">
      <Container>
        <Eyebrow>What&apos;s included</Eyebrow>
        <Heading as="h2" className="mb-8">Scope of work.</Heading>
        <ul className="divide-y divide-[var(--rule)] border-y border-[var(--rule)] m-0 p-0 list-none">
          {included.map((item, idx) => (
            <li key={idx} className="py-4 text-base font-medium text-[var(--ink)]">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
