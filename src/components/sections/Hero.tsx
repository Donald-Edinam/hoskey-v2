import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { HeroCarousel } from "@/components/interactive/HeroCarousel";
import { HeroSlide } from "@/lib/content";

export interface HeroProps {
  slides: HeroSlide[];
}

export function Hero({ slides }: HeroProps) {
  return (
    <section
      className="hero"
      role="region"
      aria-roledescription="carousel"
      aria-label="What Hoskey does"
    >
      <Badge />
      <Container>
        <Eyebrow>Broadcast &amp; media production - Ghana</Eyebrow>
        <HeroCarousel slides={slides} />
      </Container>
    </section>
  );
}
