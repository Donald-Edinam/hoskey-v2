import { SITE } from "./config";

export type Ctx = "project" | "event" | "studio" | "service" | "work" | "general";

const MESSAGES: Record<Ctx, (detail?: string) => string> = {
  project: (detail) =>
    detail
      ? `Hello Hoskey, I'd like to discuss a project: ${detail}.`
      : "Hello Hoskey, I'd like to discuss a project.",
  event: (detail) =>
    detail
      ? `Hello, I'd like to discuss event coverage for ${detail}.`
      : "Hello, I'd like to discuss event coverage.",
  studio: (detail) =>
    detail
      ? `Hello, I'd like to book studio time for ${detail} at Demes shr Studios.`
      : "Hello, I'd like to book studio time at Demes shr Studios.",
  service: (detail) =>
    detail
      ? `Hello Hoskey, I'd like to inquire about ${detail}.`
      : "Hello Hoskey, I'd like to inquire about your services.",
  work: (detail) =>
    detail
      ? `Hello Hoskey, I saw your work on ${detail} and would like to talk.`
      : "Hello Hoskey, I saw your work and would like to talk.",
  general: () => "Hello Hoskey, I'd like to get in touch.",
};

export function waLink(ctx: Ctx, detail?: string): string {
  const getMessage = MESSAGES[ctx] || MESSAGES.general;
  const message = getMessage(detail);
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
