# PATTERNS - the five repeating shapes

Every page assembles from these. Build each once in M1, then import. If a
milestone seems to need a sixth, stop and say so rather than inventing one.

---

## 1. The flat card

The workhorse. Services, and anywhere a set of peers needs equal weight.

White on warm paper. Padding `clamp(28px,3vw,42px)`. **No shadow, no border,
no radius.** Separation comes from the value difference between `--card` and
`--paper` alone - that restraint is the whole effect.

Anatomy: monoline icon (56px, `stroke:var(--ink-3)`, `stroke-width:1.4`,
56px reserved height, 26px bottom margin) → `h3` → one or two lines of
`--ink-2` copy at 15px.

Grid: 1 col → 2 at 640px → 3 at 1040px, gap `clamp(14px,1.6vw,22px)`.

**Rules.** Icons are line art only - never filled, never coloured, never
brand-red. Copy stays to two lines; if it needs three, the card is doing too
much.

**Used by:** M4/S4 services, M7/S1 services index.

---

## 2. The split-type hero

The signature. A giant word, an image plate, a giant word - the plate sits
between them so the type appears to wrap around it.

```
Brand                    ← .word--top,  left-aligned
    [   image plate   ]  ← 72% width, centred, 16:10
              Films      ← .word--bot, right-aligned, overlaps upward
```

- `.word` at `clamp(58px,13.5vw,178px)`, `lh .86`, `ls -.045em`
- `.word--bot` pulls up with `margin-top:-.14em` and sits above the plate on
  the z-axis, `pointer-events:none`
- Plate has `margin-top:-.06em` so the top word overlaps it
- Ken Burns runs inside the plate
- Right column carries the lede and primary CTA, offset down
- Counter below: `‹` · `01` · progress track · `03` · pause · `›`

Each carousel slide swaps both words, the lede, and the CTA. Word pairs stay
short - two syllables each, or the scale breaks at 320px.

**Used by:** M4/S2.

---

## 3. The dark band

Punctuation. Full-width `--dark` section breaking up the warm paper.

Used at three points on the homepage: the marquee, Studios, and the closing
CTA. **Never two in a row** - they only work as contrast.

Inside a dark band everything inverts by cascade: eyebrow, lede, rules,
frames, `<em>` → `--navy-lift`, and `.btn--line` picks up a white border.
No per-child props.

**Used by:** M4/S3 marquee, M4/S8 studios, M4/S10 closing, M5 header,
M8 hero, footer.

---

## 4. The frame

The placeholder for every missing asset.

Warm grey fill (`linear-gradient(150deg,#e6e4df,#dedbd5)`) with a 45°
repeating hairline texture at 3% ink, sharp corners, and a small uppercase
label bottom-left naming what belongs there - `Showreel - 01:30`,
`Project 01`, `The room`, `On set`. Inverts to the dark gradient inside a
dark band.

Ratio helpers: `r169`, `r43`, `r45`, `r11`.

Accepts children, so a real image later occupies the identical box - swapping
causes zero layout shift.

**It must read as intentional, not broken.** The client should see the gap and
understand it as a request.

**Used by:** everywhere an asset is missing.

---

## 5. The split head row

The section opener used above cards and grids.

```
[ eyebrow          ]   [                    ]
[ Statement.       ]   [ lede, right column ]
```

`grid-template-columns: 1.15fr 1fr` above 900px, stacked below. Heading capped
at 14ch so it breaks to two or three lines and holds its shape.

**Used by:** M4/S4, M4/S6, M4/S8, M5/S1, M7/S1, M8/S1.