import { StudioSpace } from "./types";

export interface StudioFacility {
  title: string;
  description: string;
}

export const STUDIO_TAGS: string[] = [
  "Podcast studio",
  "Recording studio",
  "Co-working space",
  "Workshop space",
  "Musical jams",
  "Chop bar",
];

export const STUDIO_FACILITIES: StudioFacility[] = [
  {
    title: "Podcast studio",
    description: "A acoustically treated space equipped with multi-mic broadcast setups and video recording gear.",
  },
  {
    title: "Recording studio",
    description: "High-grade vocal booth and audio tracking suite for music production, voiceovers, and sound engineering.",
  },
  {
    title: "Co-working space",
    description: "Quiet, high-speed desks designed for media creators, editors, producers, and creative teams.",
  },
  {
    title: "Workshop space",
    description: "Flexible open room configured for production masterclasses, team sessions, and creative seminars.",
  },
  {
    title: "Musical jams",
    description: "Dedicated rehearsal setup for live band sessions, instrumental rehearsals, and acoustic sets.",
  },
  {
    title: "Chop bar",
    description: "On-site relaxed dining and refreshment lounge for cast, crew, and studio guests during long sessions.",
  },
];

export const STUDIO_SPACES: StudioSpace[] = [
  {
    slug: "demes-shr-studios",
    name: "Demes shr Studios - Main Suite",
    description: "Podcast and recording studio, co-working and workshop space - bookable by the hour or by the day.",
    capacity: 12,
    minimumHours: 2,
    included: STUDIO_TAGS,
  },
];
