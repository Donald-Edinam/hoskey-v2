import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { CardGrid } from "@/components/ui/CardGrid";
import { ClosingSection } from "@/components/sections/ClosingSection";
import {
  IconBroadcast,
  IconVideo,
  IconLiveStreaming,
  IconPostProduction,
  IconContentCreation,
  IconTechnicalStage,
} from "@/components/ui/Icons";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do — Hoskey Production",
  description:
    "Explore our 6 primary production services in Ghana: Television broadcast, commercial video, multi-camera live streaming, post-production, content creation, and technical stage setups.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  "broadcast-production": <IconBroadcast />,
  "video-production": <IconVideo />,
  "live-streaming": <IconLiveStreaming />,
  "post-production": <IconPostProduction />,
  "content-creation": <IconContentCreation />,
  "technical-stage": <IconTechnicalStage />,
};

export default async function ServicesIndexPage() {
  const services = await getServices();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: s.title,
      description: s.summary,
      url: `/services/${s.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header isDarkHero={false} activePath="/services" />

      <main id="main" className="flex-1">
        <Section variant="default">
          <Container>
            <HeadRow
              eyebrow="What we do"
              heading={<Display>Everything we <em>make.</em></Display>}
              lede="We manage every stage of the production process, from concept development through to final delivery."
              split
            />

            <CardGrid className="mt-12">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group block text-inherit no-underline">
                  <Card
                    icon={ICON_MAP[s.slug] || <IconVideo />}
                    title={
                      <span className="group-hover:text-[var(--navy)] transition-colors">
                        {s.title}
                      </span>
                    }
                  >
                    {s.summary}
                  </Card>
                </Link>
              ))}
            </CardGrid>
          </Container>
        </Section>

        <ClosingSection />
      </main>

      <Footer />
    </>
  );
}
