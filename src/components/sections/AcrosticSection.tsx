import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display } from "@/components/ui/Typography";
import { AcrosticItem } from "@/lib/content";

export interface AcrosticSectionProps {
  acrostic?: AcrosticItem[];
}

const DEFAULT_ACROSTIC: AcrosticItem[] = [
  { letter: "H", word: "Honesty", rest: "in storytelling" },
  { letter: "O", word: "Originality", rest: "in content creation" },
  { letter: "S", word: "Storytelling", rest: "that inspires" },
  { letter: "K", word: "Knowledge", rest: "through media" },
  { letter: "E", word: "Excellence", rest: "in production" },
  { letter: "Y", word: "Your voice", rest: "amplified" },
];

export function AcrosticSection({ acrostic = DEFAULT_ACROSTIC }: AcrosticSectionProps) {
  return (
    <Section>
      <Container>
        <Eyebrow>What the name stands for</Eyebrow>
        <Display>Six things we hold to.</Display>
        <div className="acro">
          {acrostic.map((item, idx) => (
            <div key={item.letter} className="acro__r">
              <span className={`acro__l ${idx % 2 === 1 ? "text-[var(--red)]" : "text-[var(--navy)]"}`}>
                {item.letter}
              </span>
              <span className="acro__t">
                <b>{item.word}</b> {item.rest}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
