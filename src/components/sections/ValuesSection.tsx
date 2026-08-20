import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface ValueItem {
  title: string;
  description: string;
}

export interface ValuesSectionProps {
  values?: ValueItem[];
}

export function ValuesSection({ values = [] }: ValuesSectionProps) {
  if (!values || values.length === 0) {
    return null;
  }

  return (
    <Section id="values" className="py-12">
      <Container>
        <Eyebrow>Core Principles</Eyebrow>
        <div className="border-t border-[var(--rule)] divide-y divide-[var(--rule)]">
          {values.map((v, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 py-4 items-baseline">
              <span className="text-sm font-bold text-[var(--ink)]">{v.title}</span>
              <span className="text-sm text-[var(--ink-2)]">{v.description}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
