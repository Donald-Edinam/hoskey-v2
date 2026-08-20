import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Body } from "@/components/ui/Typography";
import { ProcessStep } from "@/lib/content";

export interface ServiceProcessProps {
  process?: ProcessStep[];
  defaultProcess?: ProcessStep[];
}

export function ServiceProcess({ process, defaultProcess = [] }: ServiceProcessProps) {
  const steps = process && process.length > 0 ? process : defaultProcess;

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <Section id="process">
      <Container>
        <Eyebrow>Production process</Eyebrow>
        <Heading as="h2" className="mb-12">How this service is delivered.</Heading>

        <div className="space-y-8 border-t border-[var(--rule)] pt-8">
          {steps.map((step, idx) => {
            const stepNum = step.n || (idx + 1).toString().padStart(2, "0");
            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 pb-8 border-b border-[var(--rule)]"
              >
                <span className="text-2xl font-bold text-[var(--navy)]">
                  {stepNum}
                </span>
                <div>
                  <Heading as="h3">{step.title}</Heading>
                  <Body className="mt-2 text-[var(--ink-2)]">{step.body}</Body>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
