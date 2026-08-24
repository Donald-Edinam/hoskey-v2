import { AcrosticItem } from "./types";

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
}

export const FOUNDER_STORY = {
  title: "Started small. Built to last.",
  paragraphs: [
    "Hoskey Production was founded on December 1, 2024 by Ziblim Abu James (known as Demes shr) in a small community with a big dream: to bring professional broadcast production to every corner of the media landscape. What started as a passionate project in a modest setting has grown into a company dedicated to creativity, innovation, and high-quality storytelling.",
    "Ziblim Abu James grew up in the village of Walawala in northern Ghana, where his early experiences shaped his passion for storytelling. He pursued his education at Unimac IFT, honing the skills and knowledge that would fuel his creative journey to establish Hoskey Production to bring high-quality media content to audiences everywhere.",
  ],
  byline: {
    name: "Ziblim Abu James (Demes shr)",
    role: "Founder & Creative Director",
  },
};

export const TIMELINE: TimelineEntry[] = [
  {
    date: "1 Dec 2024",
    title: "Company Founded",
    description: "Ziblim Abu James establishes Hoskey Production to bring professional broadcast standards to Ghanaian storytelling.",
  },
  {
    date: "Jan 2025",
    title: "Broadcast Unit Launch",
    description: "Expanded into multi-camera live streaming, stage technical management, and corporate event broadcasting.",
  },
  {
    date: "Feb 2025",
    title: "Demes shr Studios Opening",
    description: "Opened the physical podcast recording booth, workshop room, and creator co-working facility.",
  },
];

export const HOSKEY_ACROSTIC: AcrosticItem[] = [
  { letter: "H", word: "Honesty", rest: "in storytelling" },
  { letter: "O", word: "Originality", rest: "in content creation" },
  { letter: "S", word: "Storytelling", rest: "that inspires" },
  { letter: "K", word: "Knowledge", rest: "through media" },
  { letter: "E", word: "Excellence", rest: "in production" },
  { letter: "Y", word: "Your voice", rest: "amplified" },
];

export const VALUES = [
  { title: "Creativity", description: "Developing fresh ideas and compelling storytelling." },
  { title: "Quality", description: "Maintaining high professional production standards." },
  { title: "Innovation", description: "Embracing new technologies and modern media trends." },
  { title: "Integrity", description: "Building trust through transparency and professionalism." },
  { title: "Collaboration", description: "Working closely with clients and partners to achieve outstanding results." },
];

export const LOGO_STORY = {
  title: "About The Logo",
  motto: "Create visual stories through film — every story deserves to be seen, heard, and felt.",
  description: "The Hoskey Production logo represents creativity, professionalism, and modern media production. At the center is the name 'Hoskey Production' in a bold, strong font showing confidence, originality, and a unique brand identity. The dark colors represent strength, authority, and seriousness in the media industry, while contrasting accents express innovation and visual storytelling.",
};

export const MISSION = "Our mission is to create impactful broadcast content that informs, entertains, and inspires audiences while delivering professional and innovative media solutions to our clients.";

export const VISION = "Our vision is to become a leading broadcast production company recognized for creativity, quality, and excellence in storytelling across television and digital media platforms.";
