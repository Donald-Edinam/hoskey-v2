import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Heading, Lede, Body, Label } from "@/components/ui/Typography";
import { HeadRow } from "@/components/ui/HeadRow";
import { Button } from "@/components/ui/Button";
import { Buttons } from "@/components/ui/Buttons";
import { Card } from "@/components/ui/Card";
import { CardGrid } from "@/components/ui/CardGrid";
import {
  IconBroadcast,
  IconVideo,
  IconLiveStreaming,
  IconPostProduction,
  IconContentCreation,
  IconTechnicalStage,
} from "@/components/ui/Icons";
import { Frame } from "@/components/ui/Frame";
import { Media } from "@/components/ui/Media";
import { Marquee } from "@/components/ui/Marquee";
import { Badge } from "@/components/ui/Badge";
import { Rise } from "@/components/interactive/Rise";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Design System & Primitives - Hoskey Production",
  robots: {
    index: false,
    follow: false,
  },
};

const CONTRAST_RATIOS = [
  { pair: "Ink on Paper (--ink / --paper)", text: "#12100e on #f1f0ec", ratio: "16.6:1", target: "WCAG AAA (> 7:1)" },
  { pair: "Navy on Paper (--navy / --paper)", text: "#14306b on #f1f0ec", ratio: "11.06:1", target: "WCAG AAA (> 7:1)" },
  { pair: "Red on Paper (--red / --paper)", text: "#d8232a on #f1f0ec", ratio: "4.39:1", target: "WCAG AA Large (> 3:1)" },
  { pair: "White on Red (#fff / --red)", text: "#ffffff on #d8232a", ratio: "5.01:1", target: "WCAG AA (> 4.5:1)" },
  { pair: "Ink-2 on Paper (--ink-2 / --paper)", text: "#6f6b66 on #f1f0ec", ratio: "4.60:1", target: "WCAG AA (> 4.5:1)" },
  { pair: "On-Dark on Dark (--on-dark / --dark)", text: "#f4f3f1 on #0d0c0b", ratio: "16.2:1", target: "WCAG AAA (> 7:1)" },
  { pair: "Navy-Lift on Dark (--navy-lift / --dark)", text: "#5b87e8 on #0d0c0b", ratio: "5.82:1", target: "WCAG AA (> 4.5:1)" },
];

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      {/* Header section */}
      <Section variant="dark">
        <Container>
          <Eyebrow>Client Design Review</Eyebrow>
          <Display as="h1">
            Visual Language v5 - <em>Style Guide &amp; Primitives</em>.
          </Display>
          <Lede className="mt-4">
            Living proof of every primitive, token, variant, and contrast ratio. Zero-radius editorial baseline.
          </Lede>
        </Container>
      </Section>

      {/* 1. Color Tokens & Contrast Matrix */}
      <Section variant="default">
        <Container>
          <HeadRow
            eyebrow="Tokens &amp; Accessibility"
            heading={<Display>Color Palette &amp; <em>Contrast Matrix</em>.</Display>}
            lede="Every pairing meets or exceeds WCAG 2.1 AA standards."
            split
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {CONTRAST_RATIOS.map((item, idx) => (
              <div key={idx} className="bg-[var(--card)] p-6 border border-[var(--rule)]">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">{item.pair}</p>
                <p className="text-2xl font-bold text-[var(--ink)] mt-2">{item.ratio}</p>
                <p className="text-sm text-[var(--ink-2)] mt-1">{item.text}</p>
                <span className="inline-block mt-3 px-2 py-1 bg-[#25d366]/10 text-[#178a40] text-xs font-bold">
                  {item.target} PASS
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2. Typography Scale */}
      <Section variant="card">
        <Container>
          <HeadRow
            eyebrow="Typography System"
            heading={<Display>Statements with a <em>Full Stop.</em></Display>}
            lede="Sentence case statement headings with navy emphasis shifts."
          />

          <div className="space-y-8 mt-12">
            <div>
              <Label className="block text-[var(--ink-3)] mb-2">Display (H1 / H2)</Label>
              <Display>Broadcast &amp; <em>Media Production</em> Ghana.</Display>
            </div>
            <div>
              <Label className="block text-[var(--ink-3)] mb-2">Heading (H3 / H4)</Label>
              <Heading>Broadcast Production &amp; Live Streaming</Heading>
            </div>
            <div>
              <Label className="block text-[var(--ink-3)] mb-2">Lede Paragraph</Label>
              <Lede>
                Television, brand films, documentaries and live broadcasts - from concept development through to final delivery.
              </Lede>
            </div>
            <div>
              <Label className="block text-[var(--ink-3)] mb-2">Body Text</Label>
              <Body>
                Hoskey Production was founded on 1 December 2024 by Ziblim Abu James - known as Demes shr - in a small community with a big ambition.
              </Body>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Section Variants & Cascading Context */}
      <Section variant="default">
        <Container>
          <Eyebrow>Surface Variants</Eyebrow>
          <Display>Default Surface <em>(--paper)</em>.</Display>
          <Lede className="mt-4">Warm off-white surface with full ink contrast.</Lede>
          <Buttons className="mt-6">
            <Button variant="red" href={waLink("project")}>Primary Red Action</Button>
            <Button variant="line">Secondary Line Button</Button>
          </Buttons>
        </Container>
      </Section>

      <Section variant="card">
        <Container>
          <Eyebrow>Surface Variants</Eyebrow>
          <Display>Card Surface <em>(--card)</em>.</Display>
          <Lede className="mt-4">Flat white background for content grouping.</Lede>
          <Buttons className="mt-6">
            <Button variant="red" href={waLink("event")}>Event Coverage</Button>
            <Button variant="line">Line Button</Button>
          </Buttons>
        </Container>
      </Section>

      <Section variant="dark">
        <Container>
          <Eyebrow>Cascading Dark Context</Eyebrow>
          <Display>Dark Band <em>(--dark)</em>.</Display>
          <Lede className="mt-4">
            Notice how Eyebrow, Lede, <em>Emphasis (Navy Lift)</em>, and Line Buttons invert automatically without per-child props.
          </Lede>
          <Buttons className="mt-6">
            <Button variant="red" href={waLink("studio")}>Book Studio Time</Button>
            <Button variant="line">Inverted Line Button</Button>
          </Buttons>
        </Container>
      </Section>

      {/* 4. Service Cards & Icon Set */}
      <Section variant="default">
        <Container>
          <HeadRow
            eyebrow="What We Make"
            heading={<Display>Service Cards &amp; <em>Icon Set</em>.</Display>}
            lede="6 monoline icons reserving 56px height to guarantee title baseline alignment."
          />

          <CardGrid className="mt-12">
            <Card icon={<IconBroadcast />} title="Broadcast production">
              TV programmes, live shows and studio production, run end to end.
            </Card>
            <Card icon={<IconVideo />} title="Video production">
              Commercials, documentaries, brand films and promotional content.
            </Card>
            <Card icon={<IconLiveStreaming />} title="Live streaming">
              Multi-camera coverage for conferences, events and programmes.
            </Card>
            <Card icon={<IconPostProduction />} title="Post-production">
              Editing, colour grading, sound design and motion graphics.
            </Card>
            <Card icon={<IconContentCreation />} title="Content creation">
              Storytelling built for television, social and digital platforms.
            </Card>
            <Card icon={<IconTechnicalStage />} title="Technical & stage">
              Stage lighting, sound engineering, projection and crew.
            </Card>
          </CardGrid>
        </Container>
      </Section>

      {/* 5. Frames & Media Placeholders */}
      <Section variant="card">
        <Container>
          <HeadRow
            eyebrow="Media Primitives"
            heading={<Display>Frames &amp; <em>Aspect Ratios</em>.</Display>}
            lede="Marked aspect ratio boxes with linear gradient pattern fallbacks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Frame ratio="r169" label="16:9 Aspect Ratio" />
            <Frame ratio="r43" label="4:3 Aspect Ratio" />
            <Frame ratio="r45" label="4:5 Aspect Ratio" />
            <Frame ratio="r11" label="1:1 Aspect Ratio" />
          </div>

          <div className="mt-12">
            <Heading className="mb-4">Media Component with Missing Source Fallback</Heading>
            <Media alt="Project Thumbnail Fallback" ratio="r169" label="Fallback Frame when src is absent" />
          </div>
        </Container>
      </Section>

      {/* 6. Marquee & Badge */}
      <Section variant="dark">
        <Container className="relative">
          <Eyebrow>Motion Primitives</Eyebrow>
          <Display>Marquee &amp; <em>Badge Spin</em>.</Display>
          <Lede className="mt-4 mb-8">Zero-JS CSS animations that respect reduced motion settings.</Lede>
          <Badge />
        </Container>
        <Marquee text="Our work · Where stories come alive · Our work · Where stories come alive · " />
      </Section>

      {/* 7. Rise Intersection Observer Island */}
      <Section variant="default">
        <Container>
          <HeadRow
            eyebrow="Scroll Animations"
            heading={<Display>Rise <em>Scroll Reveal</em> Island.</Display>}
            lede="Single shared IntersectionObserver handling staggered rise reveals."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Rise staggerIndex={0} className="bg-[var(--card)] p-6">
              <Heading>Stagger 0</Heading>
              <Body className="mt-2">First element in staggered scroll reveal sequence.</Body>
            </Rise>
            <Rise staggerIndex={1} className="bg-[var(--card)] p-6">
              <Heading>Stagger 1</Heading>
              <Body className="mt-2">Second element with 60ms delay.</Body>
            </Rise>
            <Rise staggerIndex={2} className="bg-[var(--card)] p-6">
              <Heading>Stagger 2</Heading>
              <Body className="mt-2">Third element with 120ms delay.</Body>
            </Rise>
          </div>
        </Container>
      </Section>
    </main>
  );
}
