import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { StorySection } from "@/components/sections/StorySection";
import { StudiosSection } from "@/components/sections/StudiosSection";
import { AcrosticSection } from "@/components/sections/AcrosticSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";
import { Rise } from "@/components/interactive/Rise";
import {
  getHeroSlides,
  getServices,
  getProjects,
  getAboutContent,
  getStudioTags,
  getTestimonials,
  getFaqs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Hoskey Production — Where Stories Come Alive",
  description:
    "Hoskey Production is a broadcast and media production company in Ghana. Television, video, live streaming, post-production and studio facilities.",
};

export default async function HomePage() {
  const slides = await getHeroSlides();
  const services = await getServices();
  const projects = await getProjects();
  const about = await getAboutContent();
  const studioTags = await getStudioTags();
  const testimonials = await getTestimonials();
  const faqs = await getFaqs();

  return (
    <>
      <Header isDarkHero={true} activePath="/" />

      <main id="main">
        <Hero slides={slides} />

        <Marquee />

        <Rise staggerIndex={0}>
          <ServicesSection services={services} />
        </Rise>

        <Rise staggerIndex={1}>
          <ProcessSection />
        </Rise>

        <Rise staggerIndex={2}>
          <WorkSection projects={projects} />
        </Rise>

        <Rise staggerIndex={3}>
          <StorySection story={about.founderStory} />
        </Rise>

        <Rise staggerIndex={0}>
          <StudiosSection tags={studioTags} />
        </Rise>

        <Rise staggerIndex={1}>
          <AcrosticSection acrostic={about.acrostic} />
        </Rise>

        <TestimonialsSection testimonials={testimonials} />
        <FaqSection faqs={faqs} />

        <Rise staggerIndex={2}>
          <ClosingSection />
        </Rise>
      </main>

      <Footer />
    </>
  );
}
