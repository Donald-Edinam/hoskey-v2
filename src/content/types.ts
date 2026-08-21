export type Img = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Credit = {
  role: string;
  name: string;
};

export type WaContext = "project" | "event" | "studio" | "service" | "work" | "general";

export type Project = {
  slug: string;
  title: string;
  client?: string;
  clientVisible: boolean;
  date: string;
  categories: string[];
  summary: string;
  brief?: string;
  approach?: string;
  outcome?: string;
  videoId?: string;
  videoSrc?: string;
  poster?: string;
  gallery?: Img[];
  deliverables?: string[];
  credits?: Credit[];
  featured?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  included?: string[];
  deliverables?: string[];
  turnaround?: string;
  revisions?: string;
  priceBand?: string;
  process?: ProcessStep[];
};

export type ProcessStep = {
  n: string;
  title: string;
  body: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  department: string;
  photo?: string;
  bio?: string;
};

export type StudioSpace = {
  slug: string;
  name: string;
  description: string;
  capacity?: number;
  hourlyRate?: number;
  dayRate?: number;
  minimumHours?: number;
  included?: string[];
  gallery?: Img[];
};

export type Testimonial = {
  quote: string;
  name: string;
  organisation: string; // REQUIRED - unattributed quotes are worthless
  role?: string;
  photo?: string;
};

export type HeroSlide = {
  wordTop: string;
  wordBottom: string;
  lede: string;
  ctaLabel: string;
  ctaContext: WaContext;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
};

export type AcrosticItem = {
  letter: string;
  word: string;
  rest: string;
};
