import { AcrosticItem } from "./types";

export const FOUNDER_STORY = {
  title: "Started small. Built to last.",
  paragraphs: [
    "Hoskey Production was founded on 1 December 2024 by Ziblim Abu James — known as Demes shr — in a small community with a big ambition: to bring professional broadcast production to every corner of the media landscape.",
    "A proud Ghanaian, Ziblim grew up in the village of Walawala in the northern part of the country, where his early experiences shaped a lasting interest in storytelling. He went on to study at Unimac IFT before establishing Hoskey.",
  ],
  byline: {
    name: "Ziblim Abu James",
    role: "Founder & Creative Director",
  },
};

export const HOSKEY_ACROSTIC: AcrosticItem[] = [
  { letter: "H", word: "Honesty", rest: "in storytelling" },
  { letter: "O", word: "Originality", rest: "in content creation" },
  { letter: "S", word: "Storytelling", rest: "that inspires" },
  { letter: "K", word: "Knowledge", rest: "through media" },
  { letter: "E", word: "Excellence", rest: "in production" },
  { letter: "Y", word: "Your voice", rest: "amplified" },
];

export const VALUES = [
  { title: "Honesty", description: "Authentic storytelling without pretense or synthetic fluff." },
  { title: "Originality", description: "Distinctive content built from local perspective and high craft." },
  { title: "Storytelling", description: "Narratives that inspire audiences and hold attention." },
  { title: "Knowledge", description: "Empowering viewers through meaningful media." },
  { title: "Excellence", description: "Uncompromising production standards on every shoot." },
];

export const MISSION = "To elevate Ghanaian stories and broadcast production to world-class technical and creative standards.";

// NOTE FOR CLIENT REVIEW: The original vision source document contained scrambled syntax ("To become leading media production company...").
// Rewritten plainly below for clarity — requires client sign-off before Phase 2 launch.
export const VISION = "To become Ghana's most trusted broadcast and media production partner, known for technical precision, authentic storytelling, and community empowerment.";
