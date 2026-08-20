import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display, Heading } from "@/components/ui/Typography";
import { Frame } from "@/components/ui/Frame";
import { Project } from "@/lib/content";

export interface WorkSectionProps {
  projects?: Project[];
}

export function WorkSection({ projects = [] }: WorkSectionProps) {
  const displayItems = projects.length > 0 ? projects.slice(0, 3) : [
    { slug: "project-01", label: "Project 01", title: "Project title", client: "Client", date: "2026" },
    { slug: "project-02", label: "Project 02", title: "Project title", client: "Client", date: "2026" },
    { slug: "project-03", label: "Project 03", title: "Project title", client: "Client", date: "2026" },
  ];

  return (
    <Section id="work">
      <Container>
        <HeadRow
          eyebrow="Our work"
          heading={<Display>Recent <em>productions.</em></Display>}
          lede="Every programme, stream and film we make carries the same standard, whatever the size of the project."
          split
        />
        <div className="work">
          {displayItems.map((item, idx) => (
            <figure key={"slug" in item ? item.slug : idx} className="m-0">
              <Frame
                ratio="r43"
                label={"label" in item ? item.label : `Project 0${idx + 1}`}
              />
              <figcaption className="mt-4">
                <p className="meta">
                  {"client" in item ? item.client : "Client"} · {"date" in item ? item.date : "2026"}
                </p>
                <Heading as="h3" className="mt-1">
                  {"title" in item ? item.title : "Project title"}
                </Heading>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
