import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Display, Heading, Body } from "@/components/ui/Typography";
import { Frame } from "@/components/ui/Frame";
import { Media } from "@/components/ui/Media";
import { ProjectFigure } from "@/components/ui/ProjectFigure";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { getTeam, getProjects } from "@/lib/content";

export interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const team = await getTeam();
  if (team.length < 4) return [];
  return team.filter((m) => Boolean(m.bio)).map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const team = await getTeam();

  if (team.length < 4) {
    return { title: "Team Member Not Found - Hoskey Production" };
  }

  const member = team.find((m) => m.slug === slug);
  if (!member || !member.bio) {
    return { title: "Team Member Not Found - Hoskey Production" };
  }

  return {
    title: `${member.name} - ${member.role} - Hoskey Production`,
    description: member.bio,
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const team = await getTeam();

  // S6 & S7 Gate: 404 if team < 4 or member is missing/has no bio
  if (!team || team.length < 4) {
    notFound();
  }

  const member = team.find((m) => m.slug === slug);
  if (!member || !member.bio) {
    notFound();
  }

  const allProjects = await getProjects();
  // Find projects credited to this team member
  const creditedProjects = allProjects.filter((p) =>
    p.credits?.some((c) => c.name.toLowerCase() === member.name.toLowerCase())
  );

  // Person JSON-LD Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      "@type": "Organization",
      name: "Hoskey Production",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header isDarkHero={false} activePath="/team" />

      <main id="main" className="flex-1">
        <Section variant="default" className="pt-[clamp(100px,12vw,140px)]">
          <Container className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 items-start">
            {/* Left Column: Sticky Photo Rail */}
            <div className="md:sticky md:top-28">
              {member.photo ? (
                <Media src={member.photo} alt={member.name} ratio="r45" />
              ) : (
                <Frame ratio="r45" label={member.name} />
              )}
            </div>

            {/* Right Column: Profile Body */}
            <div>
              <Eyebrow>{member.department}</Eyebrow>
              <Display>{member.name}</Display>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--navy)] mt-2">
                {member.role}
              </p>

              <div className="mt-8 pt-8 border-t border-[var(--rule)] space-y-4">
                <Heading as="h3">Biography</Heading>
                <Body className="text-[var(--ink-2)] leading-relaxed">
                  {member.bio}
                </Body>
              </div>

              {/* Credited Projects */}
              {creditedProjects.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[var(--rule)]">
                  <Heading as="h3" className="mb-6">Credited Productions</Heading>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {creditedProjects.map((project) => (
                      <ProjectFigure key={project.slug} project={project} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>

        <ClosingSection />
      </main>

      <Footer />
    </>
  );
}
