import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display, Heading, Lede, Body } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { CardGrid } from "@/components/ui/CardGrid";
import { Frame } from "@/components/ui/Frame";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/whatsapp";
import { SITE } from "@/lib/config";
import { getStudioFacilities, getStudioSpaces } from "@/lib/content";

export const metadata: Metadata = {
  title: "Demes shr Studios — Podcast, Recording & Co-Working Space Ghana",
  description:
    "Demes shr Studios by Hoskey Production. Bookable podcast studio, recording booth, co-working desks, and workshop space in Ghana.",
};

export default async function StudiosPage() {
  const facilities = await getStudioFacilities();
  const spaces = await getStudioSpaces();

  // LocalBusiness JSON-LD Schema
  const localBusinessSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Demes shr Studios — Hoskey Production",
    description: "Podcast studio, recording booth, co-working space and workshop venue in Ghana.",
    telephone: SITE.phone,
    url: `${SITE.url}/studios`,
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: "GHS",
  };

  if (SITE.address) {
    localBusinessSchema.address = {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressCountry: "GH",
    };
  }

  // Booking CTA target: swap point for future /studios/book route
  /* BOOKING_ROUTE_SWAP_POINT: update bookingHref to '/studios/book' when booking engine is live */
  const bookingHref = waLink("studio");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header isDarkHero={true} activePath="/studios" />

      <main id="main" className="flex-1">
        {/* S1: Hero */}
        <Section variant="dark" className="pt-[clamp(112px,13vw,150px)] pb-[clamp(40px,6vw,70px)]">
          <Container>
            <HeadRow
              eyebrow="Demes shr Studios"
              heading={<Display>Create. Capture. <em>Inspire.</em></Display>}
              lede="Podcast and recording studio, co-working and workshop space — bookable by the hour or by the day."
              split
            />
          </Container>
        </Section>

        {/* S2: Facilities (Flat Cards with full sentences) */}
        <Section variant="default" id="facilities">
          <Container>
            <HeadRow
              eyebrow="Facilities"
              heading={<Display>Built for <em>creators.</em></Display>}
              lede="Six dedicated spaces and setups equipped for production, collaboration, and performance."
              split
            />

            <CardGrid className="mt-12">
              {facilities.map((fac) => (
                <Card key={fac.title} title={fac.title}>
                  {fac.description}
                </Card>
              ))}
            </CardGrid>
          </Container>
        </Section>

        {/* S3: Gallery (Asymmetric 2fr:1fr:1fr grid) */}
        <Section variant="card" id="gallery">
          <Container>
            <Eyebrow>Studio Gallery</Eyebrow>
            <Display className="mb-8">Inside the <em>space.</em></Display>
            <div className="shots">
              <Frame ratio="r169" label="The room" />
              <Frame ratio="r169" label="Booth" />
              <Frame ratio="r169" label="Desk" />
            </div>
          </Container>
        </Section>

        {/* S4: Spaces & Rates */}
        <Section variant="default" id="rates">
          <Container>
            <HeadRow
              eyebrow="Spaces &amp; Rates"
              heading={<Display>Transparent <em>pricing.</em></Display>}
              lede="No hidden fees. Book by the hour or reserve full-day studio blocks."
              split
            />

            <div className="mt-12 space-y-8">
              {spaces.map((space) => {
                const hourlyDisplay = space.hourlyRate ? `GHS ${space.hourlyRate}/hr` : "Rates on request";
                const dayDisplay = space.dayRate ? `GHS ${space.dayRate}/day` : null;

                return (
                  <div key={space.slug} className="p-8 bg-[var(--card)] border border-[var(--rule)] grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 items-center">
                    <div>
                      <Heading as="h3">{space.name}</Heading>
                      <Body className="mt-2 text-[var(--ink-2)]">{space.description}</Body>
                      {space.capacity && (
                        <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">
                          Capacity: Up to {space.capacity} people {space.minimumHours ? `· ${space.minimumHours} hrs minimum` : ""}
                        </p>
                      )}
                    </div>

                    <div className="text-left lg:text-right border-t lg:border-t-0 lg:border-l border-[var(--rule)] pt-6 lg:pt-0 lg:pl-8">
                      <p className="text-2xl font-bold text-[var(--ink)]">{hourlyDisplay}</p>
                      {dayDisplay && (
                        <p className="text-sm font-medium text-[var(--ink-2)] mt-1">{dayDisplay}</p>
                      )}
                      <div className="mt-4">
                        <Button variant="red" href={bookingHref} className="w-full lg:w-auto justify-center">
                          Book space
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* S6: Booking CTA */}
        <Section variant="dark" id="book" className="cta">
          <Container>
            <Eyebrow>Reserve a space</Eyebrow>
            <Display>
              Ready to record or host? <em>Book your session.</em>
            </Display>
            <Lede className="mx-auto mt-6">
              Tell us your preferred date, session length, and studio setup. We confirm bookings promptly on WhatsApp.
            </Lede>
            <div className="cta__row">
              <Button variant="red" href={bookingHref}>
                Book on WhatsApp
              </Button>
              <Button variant="line" href={`tel:${SITE.phone.replace(/\s+/g, "")}`}>
                Call {SITE.phone}
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
