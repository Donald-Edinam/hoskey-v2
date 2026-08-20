import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Lede } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/whatsapp";
import { SITE } from "@/lib/config";

export interface ClosingSectionProps {
  className?: string;
}

export function ClosingSection({ className = "" }: ClosingSectionProps) {
  return (
    <Section variant="dark" id="contact" className={`cta ${className}`}>
      <Container>
        <Eyebrow>Let&apos;s talk</Eyebrow>
        <Display>
          Have something worth making? <em>Bring it to us.</em>
        </Display>
        <Lede className="mx-auto mt-6">
          Tell us what you&apos;re planning — a shoot, a stream, a programme, a studio session. We usually reply the same day.
        </Lede>
        <div className="cta__row">
          <Button variant="red" href={waLink("project")}>
            Message on WhatsApp
          </Button>
          <Button variant="line" href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>
            Call {SITE.phone}
          </Button>
        </div>
        <div className="cta__meta">
          {SITE.email ? (
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          ) : (
            <a href="mailto:hello@hoskeyproduction.com">hello@hoskeyproduction.com</a>
          )}
          <span>Mon–Sat, 8am–6pm</span>
        </div>
      </Container>
    </Section>
  );
}
