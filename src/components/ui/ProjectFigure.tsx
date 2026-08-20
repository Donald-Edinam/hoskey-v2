import React from "react";
import Link from "next/link";
import { Frame } from "./Frame";
import { Media } from "./Media";
import { Heading } from "./Typography";
import { Project } from "@/lib/content";

export interface ProjectFigureProps {
  project?: Partial<Project> & { label?: string };
  placeholderLabel?: string;
  className?: string;
}

export function ProjectFigure({
  project,
  placeholderLabel = "Project 01",
  className = "",
}: ProjectFigureProps) {
  const title = project?.title || "Project title";
  const meta = `${project?.client || "Client"} · ${project?.date || "2026"}`;
  const slug = project?.slug;
  const poster = project?.poster;

  const content = (
    <figure className={`m-0 group cursor-pointer ${className}`}>
      <div className="overflow-hidden relative">
        {poster ? (
          <Media
            src={poster}
            alt={title}
            ratio="r43"
            className="transition-transform duration-250 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <Frame
            ratio="r43"
            label={project?.label || placeholderLabel}
            className="transition-transform duration-250 ease-out group-hover:scale-[1.03]"
          />
        )}
      </div>
      <figcaption className="mt-4">
        <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[var(--ink-3)]">
          {meta}
        </p>
        <Heading as="h3" className="mt-1 text.var(--ink) group-hover:text-[var(--navy)] transition-colors">
          {title}
        </Heading>
      </figcaption>
    </figure>
  );

  if (slug && slug.startsWith("/")) {
    return <Link href={slug}>{content}</Link>;
  } else if (slug) {
    return <Link href={`/work/${slug}`}>{content}</Link>;
  }

  return content;
}
