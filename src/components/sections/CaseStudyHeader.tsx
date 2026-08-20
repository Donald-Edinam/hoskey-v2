import React from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Lede } from "@/components/ui/Typography";
import { Project } from "@/lib/content";

export interface CaseStudyHeaderProps {
  project: Project;
}

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  const categoryLabel = project.categories && project.categories.length > 0
    ? project.categories.join(" · ")
    : "Production";

  return (
    <div className="pt-[clamp(100px,12vw,140px)] pb-[clamp(40px,5vw,68px)]">
      <Container>
        <Eyebrow>{categoryLabel}</Eyebrow>
        <h1 className="text-[clamp(40px,7vw,88px)] font-bold tracking-[-0.04em] leading-[0.95] max-w-[18ch] text-balance">
          {project.title}
        </h1>

        {project.client && project.clientVisible && (
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-2)]">
            Client: {project.client}
          </p>
        )}

        <Lede className="mt-6">{project.summary}</Lede>

        {/* Meta rail */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-6 border-t border-[var(--rule)] text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)]">
          <div>Date: <span className="text-[var(--ink)]">{project.date}</span></div>
          {project.deliverables && project.deliverables.length > 0 && (
            <div>Deliverables: <span className="text-[var(--ink)]">{project.deliverables.join(", ")}</span></div>
          )}
        </div>
      </Container>
    </div>
  );
}
