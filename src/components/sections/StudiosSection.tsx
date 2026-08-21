import React from "react";
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
          <Frame ratio="r169" label="The room" />
          <Frame ratio="r169" label="Booth" />
          <Frame ratio="r169" label="Desk" />
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
