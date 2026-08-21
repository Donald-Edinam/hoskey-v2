import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display, Heading, Body } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Privacy Policy - Hoskey Production",
  description: "Privacy policy for Hoskey Production in accordance with the Ghana Data Protection Act 2012 (Act 843).",
};

export default async function PrivacyPage() {
  return (
    <>
      <Header isDarkHero={false} activePath="/privacy" />

      <main id="main" className="flex-1">
        <Section variant="default" className="pt-[clamp(100px,12vw,140px)]">
          <Container className="max-w-4xl space-y-10">
            <HeadRow
              eyebrow="Legal &amp; Compliance"
              heading={<Display>Privacy <em>Policy.</em></Display>}
              lede="How Hoskey Production handles your personal information under the Ghana Data Protection Act 2012 (Act 843)."
              split
            />

            <div className="p-4 bg-[var(--red)]/10 border border-[var(--red)] text-xs font-bold text-[var(--red)] leading-relaxed">
              CLIENT NOTICE: This document is provided as an operational baseline under the Ghana Data Protection Act 2012 (Act 843). It must be reviewed and approved by Hoskey Production&apos;s legal counsel before formal launch.
            </div>

            <div className="space-y-8 text-[var(--ink-2)]">
              <div>
                <Heading as="h3" className="text-[var(--ink)] mb-2">1. Data Controller</Heading>
                <Body>
                  Hoskey Production (founded 1 December 2024 by Ziblim Abu James) acts as the data controller for information collected via this website and our communication channels.
                </Body>
              </div>

              <div>
                <Heading as="h3" className="text-[var(--ink)] mb-2">2. Information We Collect</Heading>
                <Body>
                  We collect information you voluntarily provide when inquiring about production services or studio bookings, including your name, phone/WhatsApp number, email address, company name, and project requirements.
                </Body>
              </div>

              <div>
                <Heading as="h3" className="text-[var(--ink)] mb-2">3. Purpose of Processing</Heading>
                <Body>
                  Your information is processed solely to respond to briefs, issue production proposals, schedule studio bookings, and communicate regarding active projects. We do not sell or rent personal data to third parties.
                </Body>
              </div>

              <div>
                <Heading as="h3" className="text-[var(--ink)] mb-2">4. WhatsApp Communications</Heading>
                <Body>
                  When you initiate contact via WhatsApp CTA links or submit a briefing note, your message is transferred securely to WhatsApp (Meta Platforms Ireland Limited).
                </Body>
              </div>

              <div>
                <Heading as="h3" className="text-[var(--ink)] mb-2">5. Data Retention &amp; Rights</Heading>
                <Body>
                  Under Act 843, you have the right to request access to, correction of, or deletion of your personal data held by Hoskey Production. To exercise these rights, contact us directly.
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
