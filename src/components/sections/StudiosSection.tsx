import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display } from "@/components/ui/Typography";
import { Frame } from "@/components/ui/Frame";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/whatsapp";

export interface StudiosSectionProps {
  tags?: string[];
}

const DEFAULT_TAGS = [
  "Podcast studio",
  "Recording studio",
  "Co-working space",
  "Workshop space",
  "Musical jams",
  "Chop bar",
];

export function StudiosSection({ tags = DEFAULT_TAGS }: StudiosSectionProps) {
  return (
    <Section variant="dark" id="studios">
      <Container>
        <HeadRow
          eyebrow="Demes shr Studios"
          heading={<Display>A room where <em>ideas get made.</em></Display>}
          lede="Podcast and recording studio, co-working and workshop space - bookable by the hour or by the day."
          split
        />

        <div className="tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="shots">
          <Frame ratio="r169" label="Live Control Room">
            <Image
              src="/images/control-room-beam.webp"
              alt="Demes shr Studios live switching control room"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          </Frame>
          <Frame ratio="r169" label="ATEM Switcher Suite">
            <Image
              src="/images/switcher-monitor.webp"
              alt="Multi-camera ATEM video switcher monitor"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </Frame>
          <Frame ratio="r169" label="Outdoor Control Booth">
            <Image
              src="/images/control-booth.webp"
              alt="Outdoor production control booth"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </Frame>
        </div>

        <div className="hero__cta mt-9">
          <Button variant="line" href={waLink("studio")}>
            Ask about booking
          </Button>
        </div>
      </Container>
    </Section>
  );
}
