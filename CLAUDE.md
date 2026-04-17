# Pentrebach Talum — Claude Context

## Project
Recreating https://pentrebach-cottages.webflow.io/ section by section in Next.js.
Welsh coastal property rental site. Main property: **Y Popty** cottage, Eryri (Snowdonia).

## Tech stack
- Next.js 14.2.5, App Router, TypeScript
- SCSS (7-1 pattern, `styles/` dir), imported via `styles/main.scss`
- pnpm
- Dev server runs on **port 3001** (not 3000 — 3000 is taken by something else)

## Architecture
- `body` has className `"container"` — this is the CSS grid root
- Grid columns: `[full-start] minmax(6rem,1fr) [center-start] repeat(8, [col-start] minmax(min-content,14rem) [col-end]) [center-end] minmax(6rem,1fr) [full-end]`
- Each section uses `grid-column: full-start / full-end` to span full width
- `.container > *` has `padding: 40px; font-size: 3rem` as a base — every section must override `padding` and `font-size: inherit`
- Header is `position: fixed`, height `8rem`, z-index 100
- Use CSS Grid for layout where possible (user preference)
- BEM naming throughout SCSS

## Key SCSS variables (`styles/_base.scss`)
```scss
$color-primary:      #c69963;
$color-secondary:    #101d2c;   // dark navy — used for hero gradient, footer bg
$color-grey-light-1: #f9f7f6;
$color-grey-light-2: #aaa;
$color-grey-dark-1:  #54483A;
$color-grey-dark-2:  #6D5D4B;
$color-bg-2:         #8a968f;   // sage green — header book btn, mobile menu book btn
$color-bg-3:         #d4d6ce;   // light sage — location section bg
$font-primary:  '__Karla_4e868f';
$font-display:  '__Cormorant_Upright_8a70bf';
```

## Sections — status

### Done
| Section   | Component / markup location | SCSS file |
|-----------|----------------------------|-----------|
| Header    | `app/components/Header.tsx` + `layout.tsx` | `styles/_header.scss` |
| Hero      | `app/page.tsx` (inline)    | `styles/_hero.scss` |
| Intro     | `app/page.tsx` (inline)    | `styles/_intro.scss` |
| Location  | `app/page.tsx` (inline)    | `styles/_location.scss` |
| Footer    | `app/components/Footer.tsx` + `layout.tsx` | `styles/_footer.scss` |

### Not yet built
- Y Popty cottage card section
- Story section
- Amenities section
- Homes / Pricing section
- Reviews section
- Logos / "As seen on" section

## Known issues / parked
- **Hero portrait mobile (Pixel 7, ~412px wide)**: content (title, price, features) goes
  off-screen at the bottom. Multiple attempts with `align-content: end`,
  `grid-template-rows: minmax(0,1fr) auto`, `height: calc(100dvh - 8rem)` — none fully
  solved. Current state uses `grid-template-rows: minmax(0,1fr) auto` at ≤767px with
  `height: calc(100dvh - 8rem)` and `grid-row: 2` on `__content`. Parked for now.

## Nav links (single source of truth)
Defined once in `Header.tsx` as `navLinks` array, mapped for both desktop nav and mobile
menu. Footer uses its own `footerLinks` array (adds "Home", omits nothing).

## Assets
All images are local in `public/img/`. Downloaded from Webflow CDN. Filenames match CDN
slugs. One rename done: `66a8c4268dad82efb9a0c13e_Logo%20(1).png` →
`66a8c4268dad82efb9a0c13e_Logo.png` (URL-encoded space caused 404).

### Key image files
| File | Used in |
|------|---------|
| `66a8d6ba4ae614fdfb196d56_main3.jpg` | Hero background |
| `66a8c7937c866a2d20f76479_nav_logo.png` | Header logo |
| `66a8c4268dad82efb9a0c13e_Logo.png` | Footer logo |
| `66a8c4268dad82efb9a0c0c5_Shade.png` | Intro section background decoration |
| `66a8c4268dad82efb9a0c0a3_Intro-2.png` etc. | Intro item icons |
| `66a8c4268dad82efb9a0c08e_Hero-1.png` etc. | Hero feature icons |
| `66a8c4268dad82efb9a0c139_Map-2.png` etc. | Location cards (Map-1 through Map-5) |

## Webflow reference
https://pentrebach-cottages.webflow.io/ — use this to match layout, spacing, and copy.
The template origin is a Tulum/Mexico resort template by Pablo Ramos — some placeholder
content (cenote, airport, etc.) has been replaced with Welsh equivalents.
