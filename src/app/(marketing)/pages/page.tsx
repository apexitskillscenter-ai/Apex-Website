import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Info,
  GraduationCap,
  Wallet,
  Briefcase,
  Plane,
  BookOpen,
  Phone,
  HelpCircle,
  PartyPopper,
  Sparkles,
  FileCode,
  type LucideIcon,
} from "lucide-react";
import { getCourses, getPosts } from "@/lib/data";

/**
 * /pages — internal page index (dev / owner view).
 *
 * Lists every route in the site so you can click through them all in one go.
 * Set to `noindex` so Google doesn't list it, and intentionally NOT linked
 * from the public navbar/footer — anyone can still visit by typing the URL.
 */
export const metadata: Metadata = {
  title: "All Pages",
  // Hidden from search engines — this is an owner-only browsing tool.
  robots: { index: false, follow: false },
};

interface PageRow {
  label: string;
  href: string;
  description?: string;
}

interface PageGroup {
  title: string;
  icon: LucideIcon;
  rows: PageRow[];
}

export default async function PagesIndex() {
  // Pull live data so course / blog rows always stay in sync.
  const [courses, posts] = await Promise.all([getCourses(), getPosts()]);

  const groups: PageGroup[] = [
    {
      title: "Main pages",
      icon: Home,
      rows: [
        { label: "Home", href: "/", description: "Landing page with hero, courses, testimonials, FAQ" },
        { label: "About", href: "/about", description: "Mission, values, and what makes Apex different" },
        { label: "Contact", href: "/contact", description: "Phone, email, WhatsApp, address and form" },
        { label: "FAQ", href: "/faq", description: "Frequently asked questions" },
      ],
    },
    {
      title: "Admissions & enrolment",
      icon: PartyPopper,
      rows: [
        { label: "Admissions", href: "/admissions", description: "4-step admission flow + WhatsApp form" },
        { label: "Free demo class", href: "/demo", description: "Register for a free demo before enrolling" },
        { label: "Fee structure", href: "/fee-structure", description: "Full pricing table for all courses" },
      ],
    },
    {
      title: "Services & extras",
      icon: Briefcase,
      rows: [
        { label: "Services", href: "/services", description: "Career counselling, resume writing, job placement" },
        { label: "Visa consultancy", href: "/visa-consultancy", description: "Study-abroad guidance with form" },
      ],
    },
    {
      title: `Courses (${courses.length})`,
      icon: GraduationCap,
      rows: [
        { label: "All courses", href: "/courses", description: "Filterable grid with category tabs and search" },
        ...courses.map((c) => ({
          label: c.title,
          href: `/courses/${c.slug}`,
          description: `${c.category} · ${c.duration}`,
        })),
      ],
    },
    {
      title: `Blog (${posts.length})`,
      icon: BookOpen,
      rows: [
        { label: "Blog index", href: "/blog", description: "All posts" },
        ...posts.map((p) => ({
          label: p.title,
          href: `/blog/${p.slug}`,
          description: `${p.category} · ${p.readingTime ?? 0} min read`,
        })),
      ],
    },
    {
      title: "System routes",
      icon: FileCode,
      rows: [
        { label: "Sitemap (XML)", href: "/sitemap.xml", description: "Search-engine sitemap" },
        { label: "Robots.txt", href: "/robots.txt", description: "Crawl directives" },
        { label: "Web manifest", href: "/manifest.webmanifest", description: "PWA manifest" },
      ],
    },
  ];

  const total = groups.reduce((sum, g) => sum + g.rows.length, 0);

  return (
    <section className="container py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Internal · hidden from search
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">
            All pages
          </h1>
          <p className="mt-2 text-muted-foreground">
            {total} pages across the site — click any link to open it. This index
            is set to <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">noindex</code> so it
            stays out of Google.
          </p>
        </div>

        <div className="space-y-10">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title}>
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-lg font-semibold">{group.title}</h2>
                </div>
                <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
                  {group.rows.map((row) => (
                    <li key={row.href}>
                      <Link
                        href={row.href}
                        className="group flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-secondary/50"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-foreground group-hover:text-primary">
                            {row.label}
                          </div>
                          {row.description && (
                            <div className="truncate text-sm text-muted-foreground">
                              {row.description}
                            </div>
                          )}
                        </div>
                        <code className="hidden shrink-0 rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground sm:inline-block">
                          {row.href}
                        </code>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
