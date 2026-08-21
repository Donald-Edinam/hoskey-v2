import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";

export function ProcessSection() {
  return (
    <Section variant="card">
      <Container className="proc">
        <div>
          <Eyebrow>How we work</Eyebrow>
          <Display>
            <span className="dim">Brief. Plan. Shoot. Deliver.</span>{" "}
            <em>Four steps, one standard, on every job we take.</em>
          </Display>
          <p className="proc__note">
            The result is only as good as what happens before the camera rolls. We take both seriously.
          </p>
          <div className="hero__cta style-cta">
            <Button variant="line" href="/contact">
              Talk through a brief
            </Button>
          </div>
        </div>

        <div className="proc__media">
          <Frame ratio="r45" label="On set - Live Direction">
            <Image
              src="/images/director-pointing.webp"
              alt="Hoskey Production stage director pointing on set"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </Frame>
          <Frame ratio="r11" label="In edit - Multi-Cam Switcher">
            <Image
              src="/images/switcher-monitor.webp"
              alt="ATEM Mini Extreme multi-camera video switcher monitor"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </Frame>
        </div>
      </Container>
    </Section>
  );
}
