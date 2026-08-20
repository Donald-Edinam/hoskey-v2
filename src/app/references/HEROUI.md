# HeroUI — narrow by design

## Honest position

v5 is a warm editorial design built from flat cards and sharp corners. It needs
very little component library. HeroUI stays in the stack because it earns its place in
three specific spots and will earn more in Phase 3 (booking flow). It is not
the design system — `00-CONTEXT.md` is.

**Verify before you use.** Check
`https://heroui.com/en/docs/react/components` for real component names and
props. Do not guess a prop. If something named here does not exist in the
installed version, say so and build from primitives.

## The boundary rule

HeroUI is React Aria based, therefore client components. This site should ship
almost no JavaScript.

```
Page      → Server Component, always
Section   → Server Component, always
Interactive → client island, smallest possible scope
```

A section never becomes a client component to use one button. Extract the
interactive part to `src/components/interactive/`.

**The island list — anything else appearing in a `use client` audit needs
justification:**
`HeroCarousel` · `MobileNav` · `Lightbox` · `WorkFilter` · `VideoFacade` ·
`ContactForm` · `Rise` · `StickyHeader`

Audit at the end of every milestone: `grep -rl "use client" src/components`.

## Where HeroUI is used

| Need | Component | Milestone |
|---|---|---|
| Mobile menu overlay | `Drawer` or `Navbar` menu | M2/S2 |
| Lightbox shell (focus trap, Escape, scroll lock) | `Modal` | M6/S5 |
| Showreel expand | `Modal` | M4/S3 |
| Contact form fields | `Input`, `Textarea`, `Select` | M10/S2 |
| Loading states | `Skeleton` | M5/S3 |

That is the whole list.

## Where it is NOT used

Build by hand. HeroUI has no equivalent and forcing one produces generic
output:

Card · CardGrid · the six monoline icons · Frame · Section wrapper · HeadRow ·
Buttons · Eyebrow · Acrostic · split-type hero · Marquee · Badge · Media
wrapper · ProjectFigure.

Rule of thumb: **HeroUI for behaviour, custom for editorial.**

## Theming

Map tokens in M1 so any HeroUI component inherits the brand:
`primary → --red` (white foreground) · `background → --paper` ·
`content1 → --card` · `focus → --navy` · **radius `none` everywhere**.

Force light. No theme switcher — the dark bands are section variants, not a
theme.

After theming, no component may pass a raw colour class. ESLint rule for it.

## Bundle discipline

Import per component, never the barrel. Check the client bundle at the end of
M4 and again at M11 and report HeroUI's share. If the homepage is over budget,
reduce islands rather than trimming the theme.