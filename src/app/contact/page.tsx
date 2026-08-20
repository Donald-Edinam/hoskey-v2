import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display, Heading, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { ContactForm } from "@/components/interactive/ContactForm";
import { waLink } from "@/lib/whatsapp";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Let's Talk — Contact Hoskey Production",
  description:
    "Get in touch with Hoskey Production in Ghana. Message us on WhatsApp, call directly, or submit a brief. Same-day reply expectation.",
};

export default async function ContactPage() {

  // ContactPage JSON-LD Schema
  const contactSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Hoskey Production",
    description: "Direct contact channels and project inquiry form for Hoskey Production in Ghana.",
    mainEntity: {
      "@type": "Organization",
      name: "Hoskey Production",
      telephone: SITE.phone,
      url: SITE.url,
      sameAs: [
        "https://www.youtube.com/@hoskeyproduction",
        "https://www.instagram.com/hoskeyproduction",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header isDarkHero={false} activePath="/#contact" />

      <main id="main" className="flex-1">
        {/* S1: Header & Direct Channels */}
        <Section variant="default" className="pt-[clamp(100px,12vw,140px)] pb-12">
          <Container>
            <HeadRow
              eyebrow="Let's talk"
              heading={<Display>Have something worth making? <em>Bring it to us.</em></Display>}
              lede="Tell us what you're planning — a shoot, a stream, a programme, a studio session. We usually reply the same day."
              split
            />

            {/* Direct Priority Channels */}
            <div className="mt-10 p-8 bg-[var(--card)] border border-[var(--rule)] space-y-6">
              <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)] block">
                Direct Channels (Priority Order)
              </span>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="red" href={waLink("project")}>
                  Message on WhatsApp
                </Button>
                <Button variant="line" href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>
                  Call {SITE.phone}
                </Button>
                {SITE.email && (
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm font-bold text-[var(--ink)] hover:text-[var(--navy)] transition-colors ml-2"
                  >
                    {SITE.email}
                  </a>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--rule)] flex items-center justify-between flex-wrap gap-4">
                <span className="text-xs text-[var(--ink-2)]">
                  Social channels:
                </span>
                <SocialIcons />
              </div>
            </div>
          </Container>
        </Section>

        {/* S2: Contact Form */}
        <Section variant="card" id="form-section">
          <Container className="max-w-4xl">
            <div className="mb-10">
              <Heading as="h2" className="text-2xl font-bold">
                Submit a Brief / Paper Trail
              </Heading>
              <Body className="mt-2 text-[var(--ink-2)]">
                Prefer a structured form? Fill in your project requirements below to generate a preformatted briefing note.
              </Body>
            </div>

            <ContactForm />
          </Container>
        </Section>

        {/* S3: Location Section (Omitted cleanly when SITE.address is null) */}
        {SITE.address && (
          <Section variant="default" id="location">
            <Container>
              <Heading as="h2">Location &amp; Hours</Heading>
              <Body className="mt-2">{SITE.address}</Body>
            </Container>
          </Section>
        )}

        {/* S4: Response Expectations & References */}
        <Section variant="default" className="py-12 border-t border-[var(--rule)]">
          <Container className="text-center space-y-4">
            <p className="text-sm font-medium text-[var(--ink-2)]">
              Business hours: <span className="font-bold text-[var(--ink)]">Mon–Sat, 8am–6pm</span>. We reply to all inquiries the same day.
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--navy)]">
              References available on request.
            </p>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
