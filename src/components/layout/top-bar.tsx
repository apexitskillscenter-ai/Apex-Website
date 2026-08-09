import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function TopBar() {
  return (
    <div className="hidden border-b border-border bg-foreground text-white md:block">
      <div className="container flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-white/70">
            <MapPin className="h-3 w-3" />{siteConfig.contact.city}, Punjab, Pakistan
          </span>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1.5 text-white/70 hover:text-white">
            <Mail className="h-3 w-3" />{siteConfig.contact.email}
          </a>
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-1.5 text-white/70 hover:text-white">
            <Phone className="h-3 w-3" />{siteConfig.contact.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admissions" className="text-white/70 hover:text-white">Student Portal</Link>
          <Link href="/admissions" className="rounded bg-primary px-3 py-0.5 text-white hover:bg-primary/90">Apply Now</Link>
          <div className="flex items-center gap-2 border-l border-white/20 pl-4">
            <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-white"><Facebook className="h-3.5 w-3.5" /></a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-white"><Instagram className="h-3.5 w-3.5" /></a>
            <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/60 hover:text-white"><Youtube className="h-3.5 w-3.5" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-white"><Linkedin className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
