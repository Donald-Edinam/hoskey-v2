import {
  HeroSlide,
  Project,
  Service,
  ProcessStep,
  Faq,
  TeamMember,
  StudioSpace,
  Testimonial,
} from "@/content/types";
import { HERO_SLIDES } from "@/content/hero";
import { SERVICES } from "@/content/services";
import { PROCESS_STEPS } from "@/content/process";
import { FAQS } from "@/content/faq";
import { STUDIO_SPACES, STUDIO_TAGS, STUDIO_FACILITIES, StudioFacility } from "@/content/studio";
import { FOUNDER_STORY, HOSKEY_ACROSTIC, VALUES, MISSION, VISION } from "@/content/about";
import { PROJECTS } from "@/content/projects";
import { TEAM } from "@/content/team";
import { TESTIMONIALS } from "@/content/testimonials";

export async function getHeroSlides(): Promise<HeroSlide[]> {
  return HERO_SLIDES;
}

export async function getProjects(): Promise<Project[]> {
  return PROJECTS;
}

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const featured = PROJECTS.filter((p) => p.featured);
  return (featured.length > 0 ? featured : PROJECTS).slice(0, limit);
}

export async function getProject(slug: string): Promise<Project | undefined> {
  return PROJECTS.find((p) => p.slug === slug);
}

export async function getServices(): Promise<Service[]> {
  return SERVICES;
}

export async function getService(slug: string): Promise<Service | undefined> {
  return SERVICES.find((s) => s.slug === slug);
}

export async function getProcess(): Promise<ProcessStep[]> {
  return PROCESS_STEPS;
}

export async function getFaqs(): Promise<Faq[]> {
  return FAQS;
}

export async function getTeam(): Promise<TeamMember[]> {
  return TEAM;
}

export async function getStudioSpaces(): Promise<StudioSpace[]> {
  return STUDIO_SPACES;
}

export async function getStudioTags(): Promise<string[]> {
  return STUDIO_TAGS;
}

export async function getStudioFacilities(): Promise<StudioFacility[]> {
  return STUDIO_FACILITIES;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return TESTIMONIALS;
}

export async function getAboutContent() {
  return {
    founderStory: FOUNDER_STORY,
    acrostic: HOSKEY_ACROSTIC,
    values: VALUES,
    mission: MISSION,
    vision: VISION,
  };
}

export * from "@/content/types";
export type { StudioFacility };
