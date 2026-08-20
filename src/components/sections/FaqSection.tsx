import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display, Heading, Body } from "@/components/ui/Typography";
import { Faq } from "@/lib/content";

export interface FaqSectionProps {
  faqs?: Faq[];
}

export function FaqSection({ faqs = [] }: FaqSectionProps) {
  if (!faqs || faqs.length < 3) {
    return null;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <Section id="faq" variant="card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <HeadRow
          eyebrow="Frequently Asked Questions"
          heading={<Display>Common <em>questions.</em></Display>}
          split
        />
        <div className="space-y-6 mt-12 max-w-3xl">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 bg-[var(--paper)] border border-[var(--rule)]">
              <Heading as="h3">{faq.q}</Heading>
              <Body className="mt-2 text-[var(--ink-2)]">{faq.a}</Body>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
