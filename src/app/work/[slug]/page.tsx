import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Heading, Lede, Body } from "@/components/ui/Typography";
import { Frame } from "@/components/ui/Frame";
import { Media } from "@/components/ui/Media";
import { CaseStudyHeader } from "@/components/sections/CaseStudyHeader";
import { VideoFacade } from "@/components/interactive/VideoFacade";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { getProjects, getProject } from "@/lib/content";

export interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: "Case Study Not Found — Hoskey Production" };
  }

  return {
    title: `${project.title} — Hoskey Production`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Hoskey Production`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    allProjects.length > 1
      ? allProjects[(currentIndex + 1) % allProjects.length]
      : null;

  // VideoObject JSON-LD Schema
  const videoSchema = project.videoId
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: project.title,
        description: project.summary,
        thumbnailUrl: project.poster ? [project.poster] : [],
        uploadDate: project.date,
      }
    : null;

  return (
    <>
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}

      <Header isDarkHero={false} activePath="/work" />

      <main id="main" className="flex-1">
        {/* S1: Title Block */}
        <CaseStudyHeader project={project} />

        {/* S2: Hero Media */}
        <Section variant="dark" className="py-0 overflow-hidden">
          <Container className="p-0 max-w-full">
            {project.videoId ? (
              <VideoFacade videoId={project.videoId} poster={project.poster} title={project.title} />
            ) : (
              <Media
                src={project.poster}
                alt={project.title}
                ratio="r169"
                label={project.title}
                className="w-full max-h-[70vh]"
              />
            )}
          </Container>
        </Section>

        {/* S3: The Brief */}
        {project.brief && (
          <Section variant="default" id="brief">
            <Container className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start">
              <div className="md:sticky md:top-24">
                <Eyebrow>The Brief</Eyebrow>
              </div>
              <div className="space-y-6">
                <Body className="text-lg leading-relaxed text-[var(--ink)] font-medium">
                  {project.brief}
                </Body>
              </div>
            </Container>
          </Section>
        )}

        {/* S4: The Approach */}
        {project.approach && (
          <Section variant="card" id="approach">
            <Container className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start">
              <div className="md:sticky md:top-24">
                <Eyebrow>The Approach</Eyebrow>
              </div>
              <div className="space-y-6">
                <Body>{project.approach}</Body>
                {project.outcome && (
                  <div className="mt-8 pt-6 border-t border-[var(--rule)]">
                    <Heading as="h3" className="mb-2">Key Outcome</Heading>
                    <Body>{project.outcome}</Body>
                  </div>
                )}
              </div>
            </Container>
          </Section>
        )}

        {/* S5: Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <Section variant="default" id="gallery">
            <Container>
              <Eyebrow className="mb-8">Production Stills</Eyebrow>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((img, idx) => (
                  <Frame key={idx} ratio={idx % 3 === 0 ? "r169" : "r43"} label={`Still 0${idx + 1}`}>
                    <Media src={img.src} alt={img.alt} ratio={idx % 3 === 0 ? "r169" : "r43"} />
                  </Frame>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* S6: Outcome */}
        <Section variant="card" id="outcome">
          <Container>
            <Eyebrow>Project Summary</Eyebrow>
            <Display className="mb-6">Outcome &amp; <em>Deliverables.</em></Display>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Heading as="h3" className="mb-3">Deliverables</Heading>
                {project.deliverables && project.deliverables.length > 0 ? (
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--ink-2)]">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <Body className="text-[var(--ink-2)]">Master broadcast files and promotional cuts.</Body>
                )}
              </div>

              <div>
                <Heading as="h3" className="mb-3">Production Standard</Heading>
                <Body>
                  All raw media archived and mastered to full Ghanaian television broadcast specification.
                </Body>
              </div>
            </div>
          </Container>
        </Section>

        {/* S7: Credits */}
        {project.credits && project.credits.length > 0 && (
          <Section variant="default" id="credits">
            <Container>
              <Eyebrow>Production Credits</Eyebrow>
              <Heading as="h3" className="mb-6">Team &amp; Crew</Heading>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 border-t border-[var(--rule)] pt-6">
                {project.credits.map((credit, idx) => (
                  <div key={idx} className="flex justify-between py-2 border-b border-[var(--rule)]">
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-3)]">{credit.role}</dt>
                    <dd className="text-sm font-bold text-[var(--ink)]">{credit.name}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </Section>
        )}

        {/* S8: Next Project */}
        {nextProject && (
          <Section variant="dark" className="py-20">
            <Container className="text-center">
              <p className="eyebrow text-[var(--on-dark-2)]">Next Project</p>
              <Link href={`/work/${nextProject.slug}`} className="group inline-block">
                <Display className="group-hover:text-[var(--navy-lift)] transition-colors">
                  {nextProject.title}
                </Display>
                <Lede className="mx-auto mt-4 text-[var(--on-dark-2)]">
                  {nextProject.summary}
                </Lede>
              </Link>
            </Container>
          </Section>
        )}

        <ClosingSection />
      </main>

      <Footer />
    </>
  );
}
