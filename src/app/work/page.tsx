import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display, Body } from "@/components/ui/Typography";
import { ProjectFigure } from "@/components/ui/ProjectFigure";
import { WorkFilter, CategoryOption } from "@/components/interactive/WorkFilter";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { getProjects } from "@/lib/content";

export interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { category } = await searchParams;
  const categoryTitle = category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Productions` : "Selected Work";

  return {
    title: `${categoryTitle} — Hoskey Production`,
    description: "Browse our portfolio of broadcast programming, television shows, commercials, and brand films in Ghana.",
  };
}

export default async function WorkPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const allProjects = await getProjects();

  // Dynamically extract unique categories from dataset
  const categorySet = new Set<string>();
  allProjects.forEach((p) => {
    p.categories?.forEach((c) => categorySet.add(c));
  });

  const categories: CategoryOption[] = [
    { label: "All", value: "all" },
    ...Array.from(categorySet).map((c) => ({
      label: c.charAt(0).toUpperCase() + c.slice(1),
      value: c.toLowerCase().replace(/\s+/g, "-"),
    })),
  ];

  // Filter projects by category
  const filteredProjects = category && category.toLowerCase() !== "all"
    ? allProjects.filter((p) =>
        p.categories?.some(
          (c) => c.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
        )
      )
    : allProjects;

  const countFormatted = `${filteredProjects.length.toString().padStart(2, "0")} projects`;

  // ItemList JSON-LD Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filteredProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: p.title,
      description: p.summary,
      url: `/work/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header isDarkHero={false} activePath="/work" />

      <main id="main" className="flex-1">
        <Section variant="default">
          <Container>
            <HeadRow
              eyebrow="Selected work"
              heading={<Display>Productions.</Display>}
              lede={
                <div className="flex flex-col sm:items-end justify-between h-full">
                  <p className="lede">
                    Every programme, stream and film we make carries the same standard, whatever the size of the project.
                  </p>
                  <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)] mt-4">
                    {countFormatted}
                  </span>
                </div>
              }
              split
            />

            <WorkFilter categories={categories} />

            {/* Project Grid / Empty State */}
            {allProjects.length === 0 ? (
              <div className="work">
                <ProjectFigure project={{ label: "Project 01", title: "Project title", client: "Client", date: "2026" }} />
                <ProjectFigure project={{ label: "Project 02", title: "Project title", client: "Client", date: "2026" }} />
                <ProjectFigure project={{ label: "Project 03", title: "Project title", client: "Client", date: "2026" }} />
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="py-16 text-center border border-[var(--rule)] bg-[var(--card)] p-8">
                <Body className="mx-auto text-[var(--ink-2)]">
                  No productions found in this category.
                </Body>
                <Link
                  href="/work"
                  className="inline-block mt-4 text-[12px] font-bold tracking-[0.14em] uppercase text-[var(--navy)] hover:underline"
                >
                  Clear category filter
                </Link>
              </div>
            ) : (
              <div className="work">
                {filteredProjects.map((project) => (
                  <ProjectFigure key={project.slug} project={project} />
                ))}
              </div>
            )}
          </Container>
        </Section>

        <ClosingSection />
      </main>

      <Footer />
    </>
  );
}
