import { StudioSpace } from "./types";

export const STUDIO_TAGS: string[] = [
  "Podcast studio",
  "Recording studio",
  "Co-working space",
  "Workshop space",
  "Musical jams",
  "Chop bar",
];

export const STUDIO_SPACES: StudioSpace[] = [
  {
    slug: "demes-shr-studios",
    name: "Demes shr Studios",
    description: "Podcast and recording studio, co-working and workshop space — bookable by the hour or by the day.",
    included: STUDIO_TAGS,
  },
];
