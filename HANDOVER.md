# Hoskey Production — Client Handover & Operations Guide

**Client**: Hoskey Production (`https://hoskeyproduction.com`)  
**Founder**: Ziblim Abu James (Demes shr)  
**WhatsApp**: `+233 59 794 8979`  

---

## 1. Content Editing Guide

All site content is stored in typed TypeScript modules under `src/content/`. Editing these files updates the site automatically without database dependencies.

### A. Adding a Project / Case Study (`src/content/projects.ts`)
Open `src/content/projects.ts` and add a new object to the `PROJECTS` array:

```typescript
{
  slug: "my-new-project",
  title: "Programme Title",
  client: "Client Name",
  clientVisible: true,
  date: "2026",
  categories: ["Broadcast production", "Live streaming"],
  summary: "One sentence summary describing the project.",
  brief: "Who came, what they needed, and what constrained the shoot.",
  approach: "Decisions, camera positions, crew size, problems solved.",
  outcome: "Deliverables provided and broadcast impact.",
  videoId: "YOUTUBE_OR_VIMEO_ID", // optional
  poster: "/images/projects/poster.jpg", // optional
  deliverables: ["4K Master Broadcast File", "60s Promo Cut"],
  credits: [
    { role: "Director", name: "Ziblim Abu James" },
    { role: "Lead Engineer", name: "Kwame Owusu" },
  ],
  featured: true,
}
```

### B. Updating Services & Pricing (`src/content/services.ts`)
Edit `src/content/services.ts`. To update pricing or turnaround for a service:

```typescript
{
  slug: "broadcast-production",
  title: "Broadcast production",
  summary: "TV programmes, live shows and studio production, run end to end.",
  description: "Full description...",
  priceBand: "From GHS 8,500", // Displays on detail sticky card (renders "Rates on request" if omitted)
  turnaround: "2–3 weeks",
  revisions: "Two rounds included",
  included: [
    "Multi-camera setup",
    "Live video switching",
    "Master audio recording",
  ],
}
```

### C. Managing Team Members (`src/content/team.ts`)
Edit `src/content/team.ts`. Note: The `/team` page activates when `TEAM.length >= 4` (currently populated with 4 members).

```typescript
{
  slug: "ziblim-abu-james",
  name: "Ziblim Abu James",
  role: "Founder & Creative Director",
  department: "Executive & Direction",
  bio: "Ziblim Abu James — known as Demes shr — founded Hoskey Production...",
}
```

---

## 2. Outstanding Assets Checklist for Ziblim Abu James

Before Phase 2 marketing push, the following client assets should be supplied:

- [ ] **Real Case Studies**: 1–3 written production briefs with 6–10 stills for `/work/[slug]`.
- [ ] **Studio Photographs**: Physical photography of Demes shr Studios (The room, Booth, Desk) to replace `<Frame>` placeholders in `/studios`.
- [ ] **Service Price Bands**: Specific starting price bands for the 6 services (currently rendering `Rates on request`).
- [ ] **Team Headshots**: Official 3:4 aspect ratio portraits for team members.
- [ ] **Official Email & Physical Address**: To populate `SITE.email` and `SITE.address` in `src/lib/config.ts`.
- [ ] **Vision Statement Sign-off**: Confirm rewritten vision statement in `src/content/about.ts`.

---

## 3. Environment Variables Reference

Create or edit `.env.local` in the project root:

```env
NEXT_PUBLIC_SITE_URL=https://hoskeyproduction.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX # Optional Google Analytics ID
```

---

## 4. Deployment & Build Runbook

### Local Development
```bash
bun dev
```

### Typecheck & Lint Audit
```bash
bun run typecheck
bun run lint
```

### Production Build Verification
```bash
bun run build
```

### Deploying to Cloudflare Workers (OpenNext) or Vercel
```bash
# OpenNext Cloudflare deployment
npx @opennextjs/cloudflare

# Or Vercel deployment
vercel --prod
```

---

## 5. Domain Resolution Runbook

- **Primary Domain**: `hoskeyproduction.com` (singular)
- **Plural Redirect**: Configure `HoskeyProductions.com` in your registrar / DNS provider to issue a 301 Permanent Redirect to `https://hoskeyproduction.com`.
