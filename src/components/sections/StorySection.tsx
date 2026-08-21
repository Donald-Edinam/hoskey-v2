import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Typography";

export interface StorySectionProps {
  story?: {
    title: string;
    paragraphs: string[];
    byline: { name: string; role: string };
  };
}

export function StorySection({ story }: StorySectionProps) {
  const paragraphs = story?.paragraphs || [
    "Hoskey Production was founded on 1 December 2024 by Ziblim Abu James - known as Demes shr - in a small community with a big ambition: to bring professional broadcast production to every corner of the media landscape.",
    "A proud Ghanaian, Ziblim grew up in the village of Walawala in the northern part of the country, where his early experiences shaped a lasting interest in storytelling. He went on to study at Unimac IFT before establishing Hoskey.",
  ];
  const byline = story?.byline || { name: "Ziblim Abu James", role: "Founder & Creative Director" };

  return (
    <Section variant="card" id="story">
      <Container className="story">
        <div>
          <Eyebrow>Our story</Eyebrow>
          <Display>
            Started small. <em>Built to last.</em>
          </Display>
        </div>
        <div className="story__body">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          <div className="byline">
            <b>{byline.name}</b>
            <span>{byline.role}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
