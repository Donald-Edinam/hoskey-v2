import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Heading } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { AboutStorySection } from "@/components/interactive/AboutStorySection";
import { InteractiveAcrostic } from "@/components/interactive/InteractiveAcrostic";
import { InteractiveLogoBreakdown } from "@/components/interactive/InteractiveLogoBreakdown";
import { InteractiveValuesGrid } from "@/components/interactive/InteractiveValuesGrid";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { getAboutContent, getStudioTags } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us & Story - Hoskey Production",
  description:
    "Discover the story of Hoskey Production, founded by Ziblim Abu James (Demes shr) on December 1, 2024. Creative broadcast production, television, live streaming, and studio facilities in Ghana.",
};

export default async function AboutPage() {
  const about = await getAboutContent();
  const studioTags = await getStudioTags();

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
      slogan: "Where Stories Come Alive",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Header isDarkHero={true} activePath="/about" />

      <main id="main" className="flex-1">
        {/* Cinematic Dark Hero Banner */}
        <section className="hero relative bg-[var(--dark)] text-[var(--on-dark)] pt-[clamp(120px,14vw,170px)] pb-[clamp(60px,8vw,100px)] overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/studio-interior.webp"
              alt="Hoskey Studio Interior"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/65 backdrop-blur-[2px]" />
          </div>

          <Container className="relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-wider text-[var(--red-lift)] uppercase">
                <span>●</span> Our Identity & Story
              </div>

              <Display className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
                Where Vision Meets <em className="text-[var(--red-lift)]">Voice.</em>
              </Display>

              <p className="text-base sm:text-xl text-[var(--on-dark-2)] leading-relaxed max-w-3xl">
                Hoskey Production is a creative broadcast production company dedicated to producing high-quality visual content for television, digital platforms, and live media. We transform ideas into compelling stories through innovative technology and passionate craftsmanship.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button variant="red" href="/contact">
                  Talk to Our Team
                </Button>
                <Button variant="white" href="/work">
                  Explore Our Work
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Chapter 1: The Origin Story */}
        <Section variant="default" className="py-20">
          <Container>
            <AboutStorySection story={about.founderStory} />
          </Container>
        </Section>

        {/* Chapter 2: The Acrostic Explorer */}
        <Section variant="card" id="acrostic" className="py-20 border-y border-[var(--rule)]">
          <Container className="space-y-10">
            <div className="max-w-3xl space-y-3">
              <Eyebrow>Brand Identity</Eyebrow>
              <Heading as="h2" className="text-3xl sm:text-4xl md:text-5xl">
                The DNA of <em>Hoskey.</em>
              </Heading>
              <p className="text-base text-[var(--ink-2)]">
                The name Hoskey represents vision, voice, and connection: a platform where ideas are shared, stories are told, and communities are connected.
              </p>
            </div>

            <InteractiveAcrostic items={about.acrostic} />
          </Container>
        </Section>

        {/* Chapter 3: Logo Deconstruction */}
        <Section variant="dark" id="logo" className="py-24">
          <Container className="space-y-12">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-mono font-bold text-[var(--red-lift)] uppercase tracking-widest">
                Visual Identity
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--on-dark)]">
                Deconstructing The <em>Mark.</em>
              </h2>
              <p className="text-base text-[var(--on-dark-2)]">
                Every element of the Hoskey Production logo was crafted to express authority, technical precision, and modern storytelling.
              </p>
            </div>

            <InteractiveLogoBreakdown />
          </Container>
        </Section>

        {/* Chapter 4: Core Values */}
        <Section variant="default" id="values" className="py-24">
          <Container className="space-y-12">
            <div className="max-w-3xl space-y-3">
              <Eyebrow>Core Principles</Eyebrow>
              <Heading as="h2" className="text-3xl sm:text-5xl">
                Guiding Our <em>Craft.</em>
              </Heading>
              <p className="text-base text-[var(--ink-2)]">
                At Hoskey Production, our work is defined by five foundational values that guide every broadcast, live stream, and video shoot.
              </p>
            </div>

            <InteractiveValuesGrid values={about.values} />
          </Container>
        </Section>

        {/* Chapter 5: Mission & Vision Dual Hub */}
        <Section variant="card" id="mission-vision" className="py-20 border-t border-[var(--rule)]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="p-8 md:p-12 bg-[var(--paper)] border border-[var(--rule)] space-y-4 hover:border-[var(--navy)] transition-colors">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--navy)]">
                  Our Mission
                </div>
                <Heading as="h3" className="text-2xl md:text-3xl leading-snug">
                  {about.mission}
                </Heading>
              </div>

              {/* Vision Card */}
              <div className="p-8 md:p-12 bg-[var(--dark)] text-[var(--on-dark)] border border-[var(--rule-dark)] space-y-4 hover:border-[var(--red-lift)] transition-colors">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--red-lift)]">
                  Our Vision
                </div>
                <h3 className="text-2xl md:text-3xl leading-snug font-bold">
                  {about.vision}
                </h3>
              </div>
            </div>
          </Container>
        </Section>

        {/* Chapter 6: Demes shr Studios & Ecosystem */}
        <Section variant="default" id="studios-ecosystem" className="py-20">
          <Container>
            <div className="p-8 md:p-14 bg-[var(--card)] border border-[var(--rule)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <Eyebrow>Studio Facilities</Eyebrow>
                <Heading as="h3" className="text-2xl md:text-4xl">
                  Demes shr Studios: <em>Create. Capture. Inspire.</em>
                </Heading>
                <p className="text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
                  Our physical production hub equipped for podcasting, voice recording, live acoustic sessions, co-working, workshops, and multi-camera broadcasts.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {studioTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[var(--paper)] text-xs font-medium border border-[var(--rule)] text-[var(--ink)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="red" href="/studios">
                Explore Studio Spaces
              </Button>
            </div>
          </Container>
        </Section>

        <ClosingSection />
      </main>

      <Footer />
    </>
  );
}

