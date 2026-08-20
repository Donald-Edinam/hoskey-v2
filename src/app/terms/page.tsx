import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display, Heading, Body } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Terms of Service — Hoskey Production",
  description: "Terms and conditions governing broadcast production services and studio bookings at Hoskey Production.",
};

export default async function TermsPage() {
  return (
    <>
      <Header isDarkHero={false} activePath="/terms" />

      <main id="main" className="flex-1">
        <Section variant="default" className="pt-[clamp(100px,12vw,140px)]">
          <Container className="max-w-4xl space-y-10">
            <HeadRow
              eyebrow="Legal &amp; Compliance"
              heading={<Display>Terms of <em>Service.</em></Display>}
              lede="Operational and engagement terms for broadcast productions, commercial shoots, and Demes shr Studios hire."
              split
            />

            <div className="p-4 bg-[var(--red)]/10 border border-[var(--red)] text-xs font-bold text-[var(--red)] leading-relaxed">
              CLIENT NOTICE: This document represents operational service terms. It must be reviewed and customized by Hoskey Production&apos;s legal counsel before formal launch.
            </div>

            <div className="space-y-8 text-[var(--ink-2)]">
              <div>
                <Heading as="h3" className="text-[var(--ink)] mb-2">1. Production Agreements</Heading>
                <Body>
                  All broadcast, video production, live streaming, and technical stage engagements are executed under a written project scope defining deliverables, timelines, and payment milestones.
                </Body>
              </div>

              <div>
                <Heading as="h3" className="text-[var(--ink)] mb-2">2. Studio Bookings (Demes shr Studios)</Heading>
                <Body>
                  Studio space reservations (podcast booth, recording suite, workshop room) require advance booking. Cancellations made less than 24 hours prior to the reserved slot may be subject to a fee.
                </Body>
              </div>

              <div>
                <Heading as="h3" className="text-[var(--ink)] mb-2">3. Intellectual Property &amp; Media Rights</Heading>
                <Body>
                  Upon final payment, full agreed client media rights and master deliverables are transferred to the client. Hoskey Production retains the right to display production stills and clips in portfolio showcases unless bound by a non-disclosure agreement.
                </Body>
              </div>

              <div>
                <Heading as="h3" className="text-[var(--ink)] mb-2">4. Turnaround &amp; Revisions</Heading>
                <Body>
                  Turnaround estimates commence upon receipt of all required client assets and approval of production briefs. Included revision rounds are specified per service agreement.
                </Body>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
