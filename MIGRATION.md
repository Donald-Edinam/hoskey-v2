# Migration notes

What the scaffold leaves out and what it costs to add. Recorded now so the decisions are not rediscovered in three months.

---

## Content → CMS
**Now:** typed TS in `src/content/`, read through `src/lib/content.ts`.
**Later:** replace that file's body with CMS queries. Signatures do not change, so no component is touched. `src/content/types.ts` becomes the schema — it was designed as that contract.
**Trigger:** client asks to edit content himself. Not before.
**Cost:** ~1 day. Sanity has first-party Cloudflare/Next.js starters, but deploy the Studio separately to Sanity hosting — embedding it at `/studio` is a large Vite SPA and pushes bundle limits.

## Form → real backend
**Now:** the form composes a WhatsApp message from its fields.
**Later:** server action → Resend. One function changes.
**Trigger:** a valid client email address exists.

## Studios → booking flow
**Now:** WhatsApp enquiry.
**Later:** needs a real database — Neon + Prisma, unique constraint on `(space_id, start_time)`. **Sanity cannot do this** — no transactions, no unique constraints, so slot races cannot be prevented there.
**Trigger:** client commits to bookings, or you want the portfolio piece. HeroUI's `DatePicker`, `Select` and `NumberInput` genuinely earn their place here — this is the milestone the library was chosen for.

## Equipment catalogue
**Now:** absent.
**Later:** a faceted table on desktop and cards on mobile, plus URL-state facets. Strong for event buyers, who evaluate kit directly.
**Trigger:** client supplies the inventory spreadsheet.

## Images → CDN
**Now:** `/public`, served through Next.js `<Image>`.
**Later:** swap the loader inside media components.
**Trigger:** ~30+ images, or client starts uploading them.

## Deploy → CI
**Now:** manual / deployment commands.
**Later:** GitHub Actions, typecheck → lint → build → deploy on merge.
**Trigger:** a second person touches the repo. 15 minutes whenever.

## The Rule
Each item is cheap **because** its seam exists. Do not add seams for anything not on this list.
