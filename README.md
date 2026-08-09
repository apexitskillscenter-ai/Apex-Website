# Apex IT Skills Center Zafarwal — Website

A modern, premium, lead-generation-focused website for an IT & education
institute. Built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui-style
components, and Framer Motion. Optimized for SEO, speed, and a Pakistani audience.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript check (no emit)
npm run lint       # ESLint
```

> **Note:** A live internet connection is needed on first build because fonts
> are fetched from Google Fonts via `next/font`. This works on your machine
> and on Vercel automatically. If you ever need a fully offline build, swap
> `next/font/google` in `src/app/layout.tsx` for `next/font/local` and place
> the font files in `public/fonts` (see the "Fonts" section below).

---

## What's inside

- **Real Apex data** — courses, fees, instructors, success stories and contact
  details are pulled from apexitskills.com and live in `src/content/`.
- **Pages:** Home, Courses (listing + dynamic detail), Fee Structure, Services,
  Visa Consultancy, Blog (index + dynamic posts), About, Admissions, Free Demo
  Class, Contact, FAQ, 404.
- **Blog system:** MDX posts in `src/content/posts/` rendered via
  `next-mdx-remote`, with reading-time, categories, and branded typography.
- **CMS-ready data layer:** pages read through `src/lib/data/` functions
  (`getCourses`, `getPostBySlug`, …) so a future CMS swap touches only that
  folder — types and components stay identical.
- **Lead generation:** validated lead form (client + server), stubbed
  `/api/lead`, floating WhatsApp button, click-to-call.
- **SEO:** per-route metadata, JSON-LD (Organization, Course, FAQPage),
  auto sitemap (incl. courses + posts), robots, manifest, `en_PK` locale.

## Adding a blog post

Drop a new `.mdx` file into `src/content/posts/` with frontmatter:

```mdx
---
title: "Your Post Title"
excerpt: "One-sentence summary for cards and SEO."
date: "2026-03-01"
category: "Freelancing"
author: "Author Name"
coverImage: "/images/blog/your-image.jpg"
---

Your markdown content here...
```

It appears automatically on `/blog`, gets its own page at `/blog/your-slug`,
and is added to the sitemap. No code changes needed.

## Migrating to a CMS later

Everything reads through `src/lib/data/`. To move courses or posts to Sanity,
Contentful, etc., rewrite only the function bodies in `src/lib/data/courses.ts`
and `src/lib/data/posts.ts` to fetch from the CMS. The `Course` / `Post` types
and every component stay exactly the same. The `api/revalidate` route is the
intended webhook target for on-publish ISR refresh.

## Adding photos

The Gallery and Instructor sections show branded placeholders until you add
real images — no broken-image icons, they degrade gracefully. To add photos:

- **Gallery:** drop images into `public/images/gallery/` matching the paths in
  `src/content/gallery.ts` (e.g. `computer-lab.jpg`).
- **Instructors:** add a photo under `public/images/team/` and set the `image`
  field in `src/content/instructors.ts`.
- **Success stories:** optional `image` field, same `public/images/team/` folder.

---

## Editing content (no code needed)

Everything you'll regularly change lives in `src/content/`:

| File              | What it controls                                  |
| ----------------- | ------------------------------------------------- |
| `site.ts`         | Name, phone, WhatsApp, email, address, socials, stats |
| `courses.ts`      | All courses (add an object → it appears everywhere) |
| `testimonials.ts` | Student success stories                           |
| `faqs.ts`         | FAQ questions and answers                         |

**Before launch, update in `site.ts`:** `url`, `contact.phone`,
`contact.whatsapp`, `contact.email`, `contact.address`, and the social links.

---

## Wiring up leads

`src/app/api/lead/route.ts` is currently a **stub** — it validates and logs
each lead. To deliver leads for real, open that file and follow the commented
options for Resend (email), a Google Sheet webhook, or Supabase. Add the
relevant secret to `.env.local` and to your Vercel project settings.

---

## Deploy to GitHub + Vercel

This project is configured and ready to deploy. Steps:

**1. Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit: Apex IT Skills Center website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/apex-it-skills.git
git push -u origin main
```

**2. Import to Vercel**

- Go to https://vercel.com/new and import the GitHub repo.
- Vercel auto-detects Next.js — no build config needed (a `vercel.json` is
  included for explicitness).
- Add an environment variable: `NEXT_PUBLIC_SITE_URL` = your production URL
  (e.g. `https://apexitskills.com`).
- Click **Deploy**.

**3. Connect your domain**

- In the Vercel project → Settings → Domains, add `apexitskills.com`.
- Vercel issues the SSL certificate automatically.

**4. After launch**

- Submit `https://apexitskills.com/sitemap.xml` to Google Search Console.
- Claim/complete the Google Business Profile (see `SEO_STRATEGY.md`).
- Optionally wire up lead delivery in `src/app/api/lead/route.ts`.

**CI:** a GitHub Actions workflow (`.github/workflows/ci.yml`) runs type-check,
lint, and build on every push/PR to catch errors before deploy.

> First build needs internet (fonts load via `next/font` from Google) — works
> automatically on Vercel.

## Project docs

- `DESIGN_SYSTEM.md` — colors, typography, components, tokens.
- `SEO_STRATEGY.md` — full SEO plan and what's built vs. to-do.

---

## Project structure

```
src/
  app/
    (marketing)/      # public pages (Navbar + Footer layout)
    api/lead/         # lead capture endpoint
    sitemap.ts robots.ts manifest.ts layout.tsx globals.css
  components/
    ui/               # base primitives (button, card, input, accordion…)
    layout/           # navbar, footer
    sections/         # hero, stats, courses, testimonials, lead-cta, faq
    forms/            # lead form
    shared/           # section-heading, gradient-text, course-card, ctas
    animations/       # framer-motion client islands
  content/            # ← edit your data here
  lib/                # utils, seo, validations
  hooks/  types/  config/
```

---

## Fonts

Default: Google Fonts via `next/font/google` (Sora + Plus Jakarta Sans).
To self-host instead, download the `.woff2` files into `public/fonts`, then in
`src/app/layout.tsx` replace the Google imports with `next/font/local`
pointing at those files. The CSS variables (`--font-display`, `--font-body`)
stay the same, so nothing else needs to change.

---

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
react-hook-form + Zod · lucide-react · class-variance-authority.
