import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Lede } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/whatsapp";
import { Service } from "@/lib/content";

export interface ServiceDetailHeaderProps {
  service: Service;
}

export function ServiceDetailHeader({ service }: ServiceDetailHeaderProps) {
  const priceDisplay = service.priceBand || "Rates on request";
  const whatsappUrl = waLink("service", service.title);

  return (
    <div className="pt-[clamp(100px,12vw,140px)] pb-[clamp(40px,5vw,68px)]">
      <Container className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
        {/* Left Column: Copy */}
        <div>
          <Eyebrow>Service</Eyebrow>
          <Display>{service.title}</Display>
          <Lede className="mt-6">{service.description || service.summary}</Lede>
        </div>

        {/* Right Column: Sticky Pricing & Action Card */}
        <div className="lg:sticky lg:top-28 p-8 bg-[var(--card)] border border-[var(--rule)] space-y-6">
          <div>
            <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)] block mb-1">
              Investment
            </span>
            <p className="text-2xl font-bold text-[var(--ink)]">
              {priceDisplay}
            </p>
          </div>

          {service.turnaround && (
            <div className="pt-4 border-t border-[var(--rule)]">
              <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)] block mb-1">
                Turnaround
              </span>
              <p className="text-sm font-medium text-[var(--ink)]">
                {service.turnaround}
              </p>
            </div>
          )}

          {service.revisions && (
            <div className="pt-4 border-t border-[var(--rule)]">
              <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)] block mb-1">
                Revisions
              </span>
              <p className="text-sm font-medium text-[var(--ink)]">
                {service.revisions}
              </p>
            </div>
          )}

          <div className="pt-4 border-t border-[var(--rule)]">
            <Button variant="red" href={whatsappUrl} className="w-full justify-center">
              Discuss on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
