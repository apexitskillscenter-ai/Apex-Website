# Apex IT Skills Center — Design System

The reference for how the Apex website looks and behaves. Every value here is
already implemented in `tailwind.config.ts` and `src/app/globals.css` — this
document explains the rules so the build and the design never drift apart.

**Direction:** premium educational institute meets modern IT company. A deep
slate-navy dark base, an electric cyan→violet gradient as the single brand
signature, glassmorphism on floating surfaces, clean geometric type, and
high-contrast gradient CTAs.

---

## 1. Color palette

> **Theme update:** The site now uses a **light, government-official theme**
> (Pakistan green + navy + white) instead of the original dark theme. Primary =
> green `152 60% 30%`, accent = navy `215 60% 24%`, background = white. The
> brand gradient runs green → navy. Token *names* are unchanged (so components
> work as-is); only their values changed in `globals.css`.



All colors are defined as HSL channel triplets in `globals.css` so they compose
with Tailwind opacity modifiers (e.g. `bg-primary/10`). The site ships a single,
intentional dark theme.

| Token | HSL | Role |
| --- | --- | --- |
| `background` | `222 47% 6%` | Page background (near-black slate-navy) |
| `foreground` | `210 40% 96%` | Primary text |
| `card` | `222 40% 9%` | Card / panel surface |
| `primary` | `190 95% 55%` | Electric cyan — primary actions, links, focus ring |
| `primary-foreground` | `222 47% 6%` | Text on primary (dark, for contrast on cyan) |
| `secondary` | `217 33% 14%` | Muted surface (icon chips, inputs) |
| `muted-foreground` | `215 20% 65%` | Secondary / supporting text |
| `accent` | `263 70% 60%` | Violet — the gradient's second stop |
| `border` / `input` | `217 33% 18%` | Hairline borders, input outlines |
| `ring` | `190 95% 55%` | Focus ring (matches primary) |

**Brand gradient stops** (used only for the signature gradient and glows):
`--brand-cyan 190 95% 55%`, `--brand-violet 263 70% 60%`, `--brand-glow 210 90% 60%`.

**Usage rules**
- The gradient is a *signature*, not a background. Use it on one or two key
  headline words (`.text-gradient`), primary buttons, and small accents. Never
  flood a whole section with it.
- Cyan is the action color. If something is clickable and important, it leans cyan.
- Violet rarely appears alone — it lives inside the gradient and the radial glow.
- Semantic colors: success = `text-primary` cyan tones, error = `text-red-400`
  (Tailwind default red works on the dark base; reserved for form validation).

---

## 2. Font pairing

Loaded via `next/font/google` in `src/app/layout.tsx`, exposed as CSS variables.

- **Display — Sora** (`--font-display`): geometric, slightly technical. Used for
  all headings, the logo, stat numbers, and CTA labels. Weights 500–700.
  Apply with the `font-display` Tailwind class.
- **Body — Plus Jakarta Sans** (`--font-body`, the default `font-sans`): a warm,
  highly legible humanist sans for paragraphs, labels, and UI text. Weight 400,
  500 for emphasis.

**Type scale** (Tailwind classes)

| Element | Classes |
| --- | --- |
| Hero H1 | `font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]` |
| Section H2 | `font-display text-3xl sm:text-4xl font-bold tracking-tight` |
| Card title | `font-display text-lg font-semibold` |
| Body | `text-base text-muted-foreground leading-relaxed` |
| Small / meta | `text-sm` or `text-xs text-muted-foreground` |

Headings use tight tracking (`tracking-tight`) and tight leading; body uses
`leading-relaxed` for comfort. Sentence case throughout — no ALL CAPS.

---

## 3. Button styles

Defined in `src/components/ui/button.tsx` via `class-variance-authority`.

| Variant | Look | When |
| --- | --- | --- |
| `default` | Brand gradient fill, dark text, `glow` shadow, `hover:opacity-90` | Primary CTA — "Apply Now", "Request a Call Back" |
| `outline` | Transparent, hairline border, `hover:bg-secondary` | Secondary — "Browse Courses" |
| `secondary` | Solid muted surface | Tertiary actions |
| `ghost` | No border, `hover:bg-secondary` | Low-emphasis, nav-like |
| `link` | Cyan text, underline on hover | Inline links |

Sizes: `sm` (h-9), `default` (h-11), `lg` (h-12), `icon` (square). All buttons:
`rounded-lg`, `font-medium`, focus-visible ring, `disabled:opacity-50`.
Primary CTAs typically pair with a trailing `ArrowRight` icon.

**Rule:** one primary (gradient) button per view section. Everything else is
outline or ghost, so the gradient always signals *the* action.

---

## 4. Card styles

Base card (`src/components/ui/card.tsx`): `rounded-xl border border-border
bg-card`. Two elevation treatments layer on top:

- **Glass** (`.glass`): `bg-card/60 backdrop-blur-xl border border-white/5` —
  for floating surfaces only: the sticky navbar and mobile drawer. This is the
  glassmorphism layer; use it sparingly where content scrolls behind.
- **Glow** (`.glow`): a soft cyan-tinted outer shadow + 1px inner ring — for
  the "hero" surface in a section, e.g. the lead-form panel and the sticky
  course-enrollment card.

Interactive cards (course cards, post cards) add:
`transition-all hover:border-primary/40 hover:-translate-y-1`, plus an optional
`bg-brand-radial` glow that fades in on hover. The lift + border-brighten is the
standard hover signature across the site.

---

## 5. Section spacing system

Vertical rhythm is deliberately generous to feel premium and uncluttered.

- **Section padding:** `py-20 sm:py-28` for major sections; `py-20 sm:py-24` for
  page-top sections under the navbar.
- **Container:** centered, `padding: 1.5rem`, max-width `1280px` (`2xl`
  breakpoint) — configured in `tailwind.config.ts`.
- **Heading-to-content gap:** `mt-14` after a `SectionHeading`.
- **Grid gaps:** `gap-6` for card grids, `gap-3 sm:gap-4` for the tighter gallery.
- **Intra-component:** 8/12/16px (`gap-2`/`gap-3`/`gap-4`) for internal element
  spacing.

Alternating sections use `bg-card/30` with `border-y border-border` to create
quiet visual bands without hard color blocks.

---

## 6. Responsive breakpoints

Tailwind defaults, with one project-specific decision.

| Token | Min width | Used for |
| --- | --- | --- |
| `sm` | 640px | Phone landscape → small tablet; type bumps up here |
| `md` | 768px | Tablet; 2-column grids |
| `lg` | 1024px | Desktop nav appears (see note), 3-column grids |
| `xl` | 1280px | Container max-width ceiling |

**Project rule:** the primary navbar switches to its full desktop layout at
`lg`, not `md`, because the nav has 8 items + a CTA. Tablets (768–1023px) use
the mobile drawer, which keeps the header uncluttered. Grids generally go
1 → 2 (`sm`/`md`) → 3 (`lg`) columns.

Mobile-first always: base styles target the smallest screen, breakpoints add up.

---

## 7. Animation style guide

Motion is subtle, fast, and purposeful — it guides attention, never distracts.
Implemented as small Framer Motion client islands (`src/components/animations/`)
so the bulk of each page stays a zero-JS Server Component.

- **FadeIn:** opacity 0→1 with a 12–16px upward travel, `0.5s`, custom ease
  `[0.21, 0.47, 0.32, 0.98]`, triggered once on scroll into view.
- **Stagger:** children animate in sequence at `0.08s` intervals — used for
  stat rows, card grids, feature lists.
- **Hover:** cards lift `-translate-y-1` and brighten their border over `300ms`.
- **Accordion:** height expand/collapse at `0.2s` (FAQ).
- **Keyframes** in Tailwind: `fade-up`, `accordion-down/up`, `shimmer`.

**Rules:** durations stay 200–500ms; easing is consistent; everything respects
`prefers-reduced-motion` (smooth-scroll is disabled under it in `globals.css`).
Animate `transform` and `opacity` only — never layout properties.

---

## 8. Shadow system

Shadows are restrained — on a dark theme, *glow* reads as elevation better than
black drop-shadow.

- **`.glow`** — the only custom shadow: `0 0 0 1px hsl(primary/0.2),
  0 8px 40px -8px hsl(brand-glow/0.4)`. A cyan-tinted lift for hero surfaces
  (primary buttons, form panels, enrollment card).
- **Focus rings** — `ring-2 ring-ring` (cyan) on all interactive elements.
- **No generic `shadow-md` / `shadow-lg`** on the dark base; depth comes from
  surface lightness (`card` vs `background`), hairline borders, and glow.

---

## 9. Border radius system

Driven by one variable, `--radius: 0.75rem` (12px), scaled in `tailwind.config.ts`:

| Token | Value | Used for |
| --- | --- | --- |
| `sm` | `radius − 4px` (8px) | Small inputs, tight chips |
| `md` | `radius − 2px` (10px) | Buttons, inputs |
| `lg` | `radius` (12px) | Default — most cards, panels |
| `xl` (`rounded-xl`) | 12px+ | Cards (`rounded-xl`), larger surfaces |
| `2xl` (`rounded-2xl`) | 16px | Hero panels, enrollment/lead cards |
| `full` | pill | Badges, the WhatsApp float, avatars |

Consistency: rectangular content surfaces use `xl`/`2xl`; pills and avatars use
`full`; nothing uses sharp 0px corners except full-bleed bands.

---

## 10. Tailwind theme configuration

The system is centralized in two files. Tokens live as CSS variables in
`globals.css`; `tailwind.config.ts` maps them to utility classes. Key extensions:

```ts
// tailwind.config.ts (excerpt — see repo for full file)
extend: {
  fontFamily: {
    sans: ["var(--font-body)", "system-ui", "sans-serif"],
    display: ["var(--font-display)", "system-ui", "sans-serif"],
  },
  colors: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
    accent:  { DEFAULT: "hsl(var(--accent))",  foreground: "hsl(var(--accent-foreground))" },
    card:    { DEFAULT: "hsl(var(--card))",    foreground: "hsl(var(--card-foreground))" },
    brand:   { cyan: "hsl(var(--brand-cyan))", violet: "hsl(var(--brand-violet))", glow: "hsl(var(--brand-glow))" },
    // ...secondary, muted, border, input, ring
  },
  borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" },
  backgroundImage: {
    "brand-gradient": "linear-gradient(135deg, hsl(var(--brand-cyan)) 0%, hsl(var(--brand-violet)) 100%)",
    "brand-radial":   "radial-gradient(ellipse at top, hsl(var(--brand-glow) / 0.18), transparent 60%)",
    "grid-pattern":   "linear-gradient(...)" // subtle hero grid overlay
  },
  keyframes: { "fade-up": {...}, "accordion-down": {...}, "accordion-up": {...}, shimmer: {...} },
  animation: { "fade-up": "fade-up 0.5s ease-out forwards", /* ... */ },
}
```

Custom utilities in `globals.css`: `.text-gradient`, `.glass`, `.glow`.
To rebrand, change the HSL variables in `:root` — everything else follows.

---

## 11. UI consistency rules

- **One primary action per section.** Only one gradient button in view at a time.
- **Gradient is precious.** Reserve `.text-gradient` for 1–2 key words per
  heading and the brand mark — never whole sentences.
- **Icon chips are uniform:** `h-12 w-12 rounded-xl bg-secondary text-primary`
  wrapping a Lucide icon. Reuse this for every feature/service/value card.
- **Section headers always go through `SectionHeading`** (eyebrow badge → H2 →
  subtitle) so every section opens the same way.
- **Cards never fetch data.** Pages pass data via props; cards just render.
- **Spacing is rhythmic:** `py-20 sm:py-28` sections, `mt-14` heading gap,
  `gap-6` grids. Don't hand-tune one-off paddings.
- **Lucide icons only**, sized `h-4 w-4` (inline) to `h-6 w-6` (chips).
- **PKR formatting** always via `formatPKR()` — never hand-typed "Rs".
- **Sentence case** for all headings, buttons, and labels.

---

## 12. Accessibility recommendations

- **Contrast:** foreground `210 40% 96%` on background `222 47% 6%` clears WCAG
  AAA for body text. Primary cyan on the dark base clears AA for large text and
  UI; when cyan is a *background* (primary button), text is the dark
  `primary-foreground` for contrast — keep it that way.
- **Focus visible:** every interactive element shows a `ring-2 ring-ring` focus
  ring. Never remove it; never replace with outline-none alone.
- **Reduced motion:** `prefers-reduced-motion` disables smooth scroll; Framer
  animations should be wrapped to respect it as the project grows.
- **Semantic HTML:** one `<h1>` per page (the hero), `<nav>`, `<main>`,
  `<article>` for posts/courses, real `<button>` and `<a>` elements.
- **Labels & ARIA:** every form field has a `<Label>`; icon-only controls
  (menu toggle, WhatsApp float, socials) carry `aria-label`; the mobile toggle
  exposes `aria-expanded`.
- **Images:** `next/image` with descriptive `alt` (gallery alts also carry
  location keywords for local SEO).
- **Hit targets:** buttons are ≥44px tall (`h-11`/`h-12`); the WhatsApp float is
  56px and thumb-reachable on mobile.
- **Color is never the only signal:** validation pairs red text with a message;
  active nav pairs color with placement.

---

*Change tokens in `globals.css` + `tailwind.config.ts`; this document describes
intent. Keep them in sync.*
