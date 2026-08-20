import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading, Body } from "@/components/ui/Typography";
import { ProjectFigure } from "@/components/ui/ProjectFigure";
import { ServiceDetailHeader } from "@/components/sections/ServiceDetailHeader";
import { ServiceIncluded } from "@/components/sections/ServiceIncluded";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ClosingSection } from "@/components/sections/ClosingSection";
import {
  getServices,
  getService,
  getProcess,
  getProjects,
} from "@/lib/content";

export interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return { title: "Service Not Found — Hoskey Production" };
  }

  return {
    title: `${service.title} — Hoskey Production`,
    description: service.summary,
    openGraph: {
      title: `${service.title} — Hoskey Production`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  const defaultProcess = await getProcess();
  const allProjects = await getProjects();

  // Find up to 3 projects tagged with this service or category
  const relatedProjects = allProjects
    .filter((p) =>
      p.categories?.some((c) =>
        c.toLowerCase().includes(service.title.toLowerCase()) ||
        service.slug.includes(c.toLowerCase().replace(/\s+/g, "-"))
      )
    )
    .slice(0, 3);

  // Service JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: "Hoskey Production",
    },
  };

  const hasDeliverablesOrTurnaround =
    (service.deliverables && service.deliverables.length > 0) || Boolean(service.turnaround);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header isDarkHero={false} activePath="/services" />

      <main id="main" className="flex-1">
        {/* S2: Detail Header with Sticky Card */}
        <ServiceDetailHeader service={service} />

        {/* S3: What's Included (Unnumbered) */}
        <ServiceIncluded included={service.included} />

        {/* S4: Process (Numbered, with default fallback) */}
        <ServiceProcess process={service.process} defaultProcess={defaultProcess} />

        {/* S5: Deliverables & Turnaround (Hidden if both absent) */}
        {hasDeliverablesOrTurnaround && (
          <Section variant="card" id="deliverables">
            <Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.deliverables && service.deliverables.length > 0 && (
                <div>
                  <Eyebrow>Deliverables</Eyebrow>
                  <Heading as="h3" className="mb-4">What you receive</Heading>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--ink-2)]">
                    {service.deliverables.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}

              {service.turnaround && (
                <div>
                  <Eyebrow>Timeline</Eyebrow>
                  <Heading as="h3" className="mb-4">Standard turnaround</Heading>
                  <Body className="text-[var(--ink-2)]">{service.turnaround}</Body>
                </div>
              )}
            </Container>
          </Section>
        )}

        {/* S6: Related Work (Hidden if none) */}
        {relatedProjects.length > 0 && (
          <Section variant="default" id="related-work">
            <Container>
              <Eyebrow>Recent Work</Eyebrow>
              <Heading as="h2" className="mb-8">Related productions.</Heading>
              <div className="work">
                {relatedProjects.map((project) => (
                  <ProjectFigure key={project.slug} project={project} />
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* S7: Closing CTA with service-scoped WhatsApp link */}
        <ClosingSection />
      </main>

      <Footer />
    </>
  );
}
