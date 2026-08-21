import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Heading, Lede, Body } from "@/components/ui/Typography";
import { Frame } from "@/components/ui/Frame";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { AcrosticSection } from "@/components/sections/AcrosticSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { getAboutContent, getTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story & Principles - Hoskey Production",
  description:
    "Founded on 1 December 2024 by Ziblim Abu James (Demes shr) in Ghana. Built to elevate television broadcast, video production, and storytelling standards.",
};

export default async function AboutPage() {
  const about = await getAboutContent();
  const timeline = await getTimeline();

  // AboutPage JSON-LD Schema
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Hoskey Production",
    description: about.founderStory.paragraphs[0],
    mainEntity: {
      "@type": "Organization",
      name: "Hoskey Production",
      founder: {
        "@type": "Person",
        name: about.founderStory.byline.name,
        jobTitle: about.founderStory.byline.role,
      },
      foundingDate: "2024-12-01",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Header isDarkHero={false} activePath="/about" />

      <main id="main" className="flex-1">
        {/* S1: Opening Founder Story */}
        <Section variant="default" className="pt-[clamp(100px,12vw,140px)]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
              <div>
                <Eyebrow>Our story</Eyebrow>
                <Display>
                  Started small. <em>Built to last.</em>
                </Display>
                <Lede className="mt-6">
                  {about.founderStory.paragraphs[0]}
                </Lede>
                <Body className="mt-4 text-[var(--ink-2)]">
                  {about.founderStory.paragraphs[1]}
                </Body>
              </div>

              <div>
                <Frame ratio="r45" label="Founder & Creative Director">
                  <Image
                    src="/images/about-founder.webp"
                    alt="Ziblim Abu James (Demes shr)"
                    fill
                    sizes="(max-width: 900px) 100vw, 500px"
                    className="object-cover"
                  />
                </Frame>
                <div className="mt-4 pt-4 border-t border-[var(--rule)]">
                  <b className="block text-base font-bold text-[var(--ink)]">
                    {about.founderStory.byline.name}
                  </b>
                  <span className="text-sm text-[var(--ink-2)]">
                    {about.founderStory.byline.role}
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* S2: Timeline (Code-gated: hidden below 3 entries) */}
        <TimelineSection timeline={timeline} />

        {/* S3: Values (Quiet hairline list) */}
        <ValuesSection values={about.values} />

        {/* S4: Acrostic (Re-used shared component) */}
        <AcrosticSection acrostic={about.acrostic} />

        {/* S5: Mission & Vision */}
        <Section variant="card" id="mission-vision">
          <Container className="space-y-12">
            <div>
              <Eyebrow>Mission</Eyebrow>
              <Heading as="h2" className="text-2xl md:text-3xl max-w-3xl">
                {about.mission}
              </Heading>
            </div>

            <div className="pt-12 border-t border-[var(--rule)]">
              <Eyebrow>Vision</Eyebrow>
              <Heading as="h2" className="text-2xl md:text-3xl max-w-3xl">
                {about.vision}
              </Heading>
              <p className="mt-2 text-xs text-[var(--ink-3)] font-mono">
                * Note: Rewritten from source text for clarity - pending client sign-off.
              </p>
            </div>
          </Container>
        </Section>

        <ClosingSection />
      </main>

      <Footer />
    </>
  );
}
