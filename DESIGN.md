# Ascending Star — Design System

Reference feel borrowed from Spotify's system (pill buttons, dark immersive surfaces, one functional accent), pushed louder for a **bold & energetic** brand. All colors come from the client's logo.

## 1. Atmosphere
Deep navy stages with gold as the "go" color. Big, heavy display type. Alternating dark/light sections keep the scroll energetic. The motif is **ascending**: the hero's search result climbs to #1, and the process steps rise like stairs.

## 2. Color tokens
| Token | Hex | Role |
|---|---|---|
| `--blue-500` | `#0B74F5` | Logo blue. Secondary accent, headings on light, icons |
| `--gold-500` | `#FDB00F` | Logo gold. **Primary CTAs**, highlights on dark |
| `--yellow-300` | `#FFD23F` | Gold hover, booking-section gradient |
| `--navy-950` | `#050C24` | Header, footer, deepest surface |
| `--navy-900` | `#0A1A4A` | Dark sections, ink color on light |
| `--navy-800` | `#102565` | Cards on dark |
| `--cream-50` | `#FFF8E8` | Light sections |
| `--ink-soft` | `#3B4A77` | Body text on light |
| `--on-dark-soft` | `#B7C3E8` | Body text on dark |

Rule: gold = action. Do not use gold for decoration-only blocks except the marquee and the final step / CTA card.

## 3. Typography
- Display: **Bricolage Grotesque** 800, tight tracking (-0.025em), line-height ~1.
- Body/UI: **Figtree** 400–800.
- H1 `clamp(2.5rem → 4.5rem)`, H2 `clamp(2.1rem → 3.75rem)`, body 17px / 1.6.
- Eyebrows: 0.8rem, 800, uppercase, +0.14em tracking.

## 4. Components
- **Buttons**: full pill, 52px min height (58px large), weight 800. Gold (primary), navy, ghost (on dark), outline-ink (on gold).
- **Cards**: 20–28px radius. On dark: navy-800 with 1px white/8% border. On light: white or cream with warm border.
- **Icons**: inline SVG sprite, 2.1px stroke, round caps.
- **FAQ**: native `<details>`, plus-icon rotates to ×.

## 5. Layout
- Container 1200px, gutter `clamp(16px, 4vw, 32px)`.
- Section padding `clamp(4.5rem, 9vw, 8rem)`.
- Breakpoints: 700 / 860 / 960 / 980 (nav) / 1020.

## 6. Motion
- Ease-out `cubic-bezier(.22,1,.36,1)`.
- Hero load-in stagger, search result "ascends" once, scroll reveals (22px rise), marquee.
- Everything respects `prefers-reduced-motion`.

## 7. Don'ts
- No fake reviews, stats, prices or ranking guarantees.
- No more than one gold CTA competing per viewport.
- Don't add new brand colors; blue + gold + navy + cream is the full palette.
