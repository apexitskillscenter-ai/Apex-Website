import Link from "next/link";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Music2,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/content/site";
import { courses } from "@/content/courses";
import { NewsletterSignup } from "./newsletter-signup";

/**
 * Footer
 * ------
 * Site-wide premium footer. Server Component (the only interactive part, the
 * newsletter field, is an imported client island). Pulls contact, socials and
 * course data from the single config/content sources so it never goes stale.
 *
 * Sections: brand + newsletter + socials · quick links · course links ·
 * contact (with Get Directions + WhatsApp CTA) · gradient top accent · copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const waText = encodeURIComponent(
    `Assalam o Alaikum! I'm interested in courses at ${siteConfig.shortName}.`
  );
  const waHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${waText}`;

  return (
    <footer className="relative border-t border-border bg-secondary/40">
      {/* Gradient top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient opacity-60" />
      {/* Soft radial glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-brand-radial opacity-50" />

      <div className="container relative py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand + newsletter + socials (wider column) */}
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 font-display font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="text-lg">
                Apex<span className="text-gradient"> IT</span> Skills
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline}. Building job-ready and freelance-ready IT
              skills in Zafarwal.
            </p>

            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Get updates &amp; new batch alerts</p>
              <NewsletterSignup />
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-1">
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:text-primary">
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular courses */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-display font-semibold">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              {courses.filter((c) => c.featured).slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/courses/${c.slug}`} className="text-muted-foreground transition-colors hover:text-primary">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-display font-semibold">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.contact.phone}`} className="transition-colors hover:text-primary">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.contact.email}`} className="break-all transition-colors hover:text-primary">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA + Get Directions */}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
              >
                <Navigation className="h-4 w-4 text-primary" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <span>© {year} {siteConfig.name}. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/courses" className="transition-colors hover:text-primary">Courses</Link>
            <Link href="/admissions" className="transition-colors hover:text-primary">Admissions</Link>
            <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
