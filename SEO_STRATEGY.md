# Apex IT Skills Center — SEO Strategy

A complete, actionable SEO plan grounded in what's already built. Items marked
**✅ built** exist in the codebase today; **🔧 to add** are concrete gaps with a
clear implementation path; **📋 ongoing** are off-site/operational tasks.

Primary goal: rank for local + course + informational searches and convert them
into admission leads (form submit or WhatsApp).

---

## Keyword strategy (the foundation)

Three intent tiers, each owned by one page type:

| Tier | Example keywords | Owner page | Competition |
| --- | --- | --- | --- |
| **Local** (priority) | computer course in Zafarwal, IT institute Narowal, computer classes near me, graphic design Zafarwal | Homepage, Contact | Low — very winnable |
| **Course / commercial** | graphic design course fees, freelancing course Pakistan, spoken English classes, web development course | `/courses/[slug]` | Medium |
| **Informational** (top-funnel) | how to start freelancing in Pakistan, best IT skills to learn, free vs paid courses | Blog posts | Medium–high |
| **Fee / comparison** | course fees in Narowal, cheap IT courses Zafarwal | Fee Structure | Low |

Because Zafarwal/Narowal is a smaller market, local terms are low-competition
and should be the first priority — fastest path to ranking and to qualified,
nearby leads.

---

## 1. Homepage SEO

- **Title:** `Apex IT Skills Center Zafarwal — IT & Computer Courses`
- **Description:** mention location + the headline courses + the outcome
  (jobs/freelancing). Keep ~150 chars.
- **H1:** exactly one, containing "IT Skills Center in Zafarwal".
- ✅ Per-page metadata + Open Graph + Twitter card via `buildMetadata`.
- ✅ `EducationalOrganization` JSON-LD site-wide.
- 🔧 Upgrade org schema to `LocalBusiness` with `geo` (lat/lng), `openingHours`
  and `priceRange` — this powers the Google local map pack. The address +
  maps location already live in `src/content/site.ts`.

## 2. Course page SEO

Highest-value commercial pages — one per course at `/courses/[slug]`.

- **Title pattern:** `{Course} Course in Zafarwal — Fees & Duration | Apex IT Skills`
- **Description pattern:** lead with fee + duration + outcome, e.g.
  "Learn graphic design in 3 months (Rs 6,000/mo) at Apex Zafarwal. Job &
  freelance-ready skills, certificate included."
- ✅ `generateStaticParams` pre-renders every course (fast + crawlable).
- ✅ `Course` JSON-LD already emitted.
- 🔧 Add `offers` (price = monthlyFee, priceCurrency PKR) and `timeRequired`
  (duration) to the Course schema for richer results.
- 🔧 Each course page should link to: Fee Structure, Admissions, and 1–2
  related courses.

## 3. Blog SEO structure

Each MDX post targets one informational long-tail keyword.

- **Title pattern:** `{How-to / guide title} | Apex IT Skills Blog`
- ✅ Per-post metadata + OG via `buildMetadata`; reading time; categories.
- ✅ Posts are statically generated and in the sitemap.
- 🔧 Add `BlogPosting` (Article) JSON-LD: headline, author, datePublished,
  image, publisher. The frontmatter already carries title/excerpt/date/author.
- 🔧 Every post links to 2–3 relevant **course pages** (freelancing post →
  `/courses/freelancing`) — the current posts do some of this; make it a rule.
- 📋 Publish cadence: 1–2 posts/month on local + course-adjacent topics.

## 4. Internal linking strategy

Direct link equity toward the money pages (courses, admissions).

- Blog posts → link down to relevant course pages.
- Course pages → link to Fee Structure + Admissions + related courses.
- Homepage → links to featured courses (✅) and key sections.
- ✅ Footer links to every primary page and the popular courses.
- Rule: a money page should have more internal links pointing at it than any
  blog post. Use descriptive anchor text ("graphic design course", not "click
  here").

## 5. Sitemap strategy

- ✅ `src/app/sitemap.ts` auto-generates and includes all static pages, every
  course, and every blog post, with sensible priorities (home 1.0, sections
  0.8, courses 0.7, posts 0.6).
- ✅ `robots.ts` allows crawl and points to the sitemap; disallows `/api/`.
- 📋 After launch: submit `https://apexitskills.com/sitemap.xml` to Google
  Search Console and Bing Webmaster Tools.
- 🔧 When a CMS is added, drive `lastModified` from real content update dates
  (currently build time — acceptable, not ideal).

## 6. Performance optimization

Performance is an architectural strength here — protect it.

- ✅ Server Components by default → minimal client JS.
- ✅ 40 statically-generated pages → fast TTFB and LCP.
- ✅ `next/font` self-hosts Sora + Plus Jakarta Sans (no render-blocking
  font requests).
- ✅ Security headers set in `next.config.ts`.
- 🔧 Add real OG images (see Image SEO) — currently referenced but missing.
- 🔧 Keep client islands lean: the testimonials carousel, courses filter,
  hero animation and gallery are the only client components — all small.
- **Targets:** LCP < 2.5s, CLS < 0.1, INP < 200ms. Verify with Lighthouse and
  Vercel Speed Insights after deploy.

## 7. Image SEO

- ✅ `next/image` used throughout (gallery, instructors, testimonials) with
  width/height to prevent layout shift.
- ✅ Descriptive, location-aware alt text (e.g. gallery alts include
  "Apex IT Skills Center Zafarwal").
- 🔧 Add real images to `public/images/{gallery,team,blog}/` (graceful
  placeholders show until then).
- 🔧 Create 1200×630 Open Graph images in `public/images/og/` — critical
  because link sharing happens on WhatsApp/Facebook for this audience, and a
  good preview image lifts click-through.
- Keep filenames descriptive (`graphic-design-class-zafarwal.jpg`, not
  `IMG_1234.jpg`).

## 8. Technical SEO + schema summary

| Item | Status |
| --- | --- |
| Per-page metadata (title/description/canonical) | ✅ `buildMetadata` |
| Open Graph + Twitter cards | ✅ all pages |
| `EducationalOrganization` schema | ✅ → 🔧 upgrade to `LocalBusiness` + geo |
| `Course` schema | ✅ → 🔧 add `offers` + `timeRequired` |
| `FAQPage` schema | ✅ on /faq |
| `BlogPosting` (Article) schema | 🔧 add to blog posts |
| `BreadcrumbList` schema | 🔧 nice-to-have on course/blog pages |
| Dynamic sitemap | ✅ |
| robots.txt | ✅ |
| Web manifest / PWA | ✅ |
| `en_PK` locale + `lang="en"` | ✅ |
| Semantic HTML (one h1, nav/main/article) | ✅ |
| OG share images | 🔧 create files |

---

## Off-site & local (📋 operational)

- **Google Business Profile** — claim and complete it (same NAP — Name,
  Address, Phone — as the site). This is the single biggest local-SEO lever
  for a town-level institute. Use phone 0300-2526520 and the exact address.
- **Consistent NAP** everywhere (site, Facebook, Google, directories).
- **Reviews** — ask happy students to leave Google reviews; they drive both
  ranking and trust.
- **Local backlinks** — local directories, partner schools, Facebook.

---

*Status legend: ✅ built · 🔧 to add (clear path) · 📋 ongoing/off-site.
Re-audit after each content or schema change.*
