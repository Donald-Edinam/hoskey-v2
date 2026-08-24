import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HeadRow } from "@/components/ui/HeadRow";
import { Display, Heading } from "@/components/ui/Typography";
import { Frame } from "@/components/ui/Frame";
import { Media } from "@/components/ui/Media";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { getTeam } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team - Hoskey Production",
  description: "Meet the broadcast directors, producers, sound engineers, and creative crew at Hoskey Production in Ghana.",
};

export default async function TeamGridPage() {
  const team = await getTeam();

  if (!team || team.length === 0) {
    notFound();
  }

  return (
    <>
      <Header isDarkHero={false} activePath="/team" />

      <main id="main" className="flex-1">
        <Section variant="default" className="pt-[clamp(100px,12vw,140px)]">
          <Container>
            <HeadRow
              eyebrow="Our Team"
              heading={<Display>The <em>crew.</em></Display>}
              lede="The broadcast directors, producers, camera operators, and audio engineers behind every production."
              split
            />

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {team.map((member) => {
                const hasBio = Boolean(member.bio);

                const cardContent = (
                  <div className="group cursor-pointer">
                    <div className="overflow-hidden bg-[var(--dark-2)]">
                      {member.photo ? (
                        <Media
                          src={member.photo}
                          alt={member.name}
                          ratio="r45"
                          className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                        />
                      ) : (
                        <Frame ratio="r45" label={member.name} className="grayscale group-hover:grayscale-0" />
                      )}
                    </div>
                    <div className="mt-4">
                      <Heading as="h3" className="text-base group-hover:text-[var(--navy)] transition-colors">
                        {member.name}
                      </Heading>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink-3)] mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                );

                if (hasBio) {
                  return (
                    <Link key={member.slug} href={`/team/${member.slug}`}>
                      {cardContent}
                    </Link>
                  );
                }

                return <div key={member.slug}>{cardContent}</div>;
              })}
            </div>
          </Container>
        </Section>

        <ClosingSection />
      </main>

      <Footer />
    </>
  );
}
