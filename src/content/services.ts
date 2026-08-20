import { Service } from "./types";

export const SERVICES: Service[] = [
  {
    slug: "broadcast-production",
    title: "Broadcast production",
    summary: "TV programmes, live shows and studio production, run end to end.",
    description: "End-to-end management of television programming, live broadcasts, and studio productions.",
    // deliverables, turnaround, revisions, priceBand left undefined until client answers questionnaire
  },
  {
    slug: "video-production",
    title: "Video production",
    summary: "Commercials, documentaries, brand films and promotional content.",
    description: "High-impact storytelling for corporate brands, commercial advertising, and documentary features.",
  },
  {
    slug: "live-streaming",
    title: "Live streaming",
    summary: "Multi-camera coverage for conferences, events and programmes.",
    description: "Professional multi-camera broadcasting and webcasting for corporate events, stage shows, and live programmes.",
  },
  {
    slug: "post-production",
    title: "Post-production",
    summary: "Editing, colour grading, sound design and motion graphics.",
    description: "Full post-production suite including precision video editing, cinema colour grading, sound engineering, and motion graphics.",
  },
  {
    slug: "content-creation",
    title: "Content creation",
    summary: "Storytelling built for television, social and digital platforms.",
    description: "Tailored visual content designed for television networks, digital channels, and social media campaigns.",
  },
  {
    slug: "technical-stage",
    title: "Technical & stage",
    summary: "Stage lighting, sound engineering, projection and crew.",
    description: "Complete stage production setup including concert lighting, audio reinforcement, video projection, and experienced technical crew.",
  },
];
