import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display } from "@/components/ui/Typography";
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
import { Service } from "@/lib/content";

export interface ServicesSectionProps {
  services: Service[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  "broadcast-production": <IconBroadcast />,
  "video-production": <IconVideo />,
  "live-streaming": <IconLiveStreaming />,
  "post-production": <IconPostProduction />,
  "content-creation": <IconContentCreation />,
  "technical-stage": <IconTechnicalStage />,
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <Section id="services">
      <Container>
        <HeadRow
          eyebrow="What we do"
          heading={<Display>Here&apos;s what we <em>make.</em></Display>}
          lede="We manage every stage of the production process, from concept development through to final delivery."
          split
        />
        <CardGrid className="mt-12">
          {services.map((s) => (
            <Card
              key={s.slug}
              icon={ICON_MAP[s.slug] || <IconVideo />}
              title={s.title}
            >
              {s.summary}
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
