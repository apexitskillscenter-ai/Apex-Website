"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, GraduationCap, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses", sub: [
    { label: "All Courses", href: "/courses" },
    { label: "Graphic Designing", href: "/courses/graphic-designing" },
    { label: "Digital Marketing", href: "/courses/digital-marketing" },
    { label: "Web Development", href: "/courses/web-development" },
    { label: "Freelancing", href: "/courses/freelancing" },
    { label: "Spoken English / IELTS", href: "/courses/spoken-english" },
    { label: "Kids IT Program", href: "/courses/kids-it-program" },
  ]},
  { label: "Admissions", href: "/admissions", sub: [
    { label: "Apply Now", href: "/admissions" },
    { label: "Fee Structure", href: "/fee-structure" },
    { label: "Free Demo Class", href: "/demo" },
  ]},
  { label: "About Us", href: "/about", sub: [
    { label: "About Apex", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Visa Consultancy", href: "/visa-consultancy" },
  ]},
  { label: "Success Stories", href: "/#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-40 w-full transition-all duration-300",
      scrolled ? "bg-white shadow-md border-b border-border" : "bg-white/95 backdrop-blur-sm border-b border-border")}>
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient">
            <GraduationCap className="h-5 w-5 text-white" />
          </span>
          <div className="leading-tight">
            <span className="block font-display text-base font-bold text-foreground">Apex <span className="text-primary">IT</span></span>
            <span className="block text-[10px] text-muted-foreground -mt-0.5">Skills Center</span>
          </div>
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href} className="relative group">
                {item.sub ? (
                  <>
                    <button className={cn("flex items-center gap-1 rounded px-3 py-2 text-sm font-medium transition-colors", active ? "text-primary" : "text-foreground hover:text-primary")}>
                      {item.label}<ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    <div className="invisible absolute top-full left-0 mt-1 w-52 rounded-lg border border-border bg-card shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                      {item.sub.map((s) => (
                        <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary first:rounded-t-lg last:rounded-b-lg">{s.label}</Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className={cn("block rounded px-3 py-2 text-sm font-medium transition-colors", active ? "text-primary" : "text-foreground hover:text-primary")}>{item.label}</Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 xl:flex">
          <button aria-label="Search" className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"><Search className="h-4 w-4" /></button>
          <Link href="/admissions" className="inline-flex h-9 items-center gap-2 rounded-lg bg-brand-gradient px-4 text-sm font-semibold text-white hover:opacity-90">Apply Now →</Link>
        </div>

        <button className="xl:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white xl:hidden">
          <ul className="container flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary">{item.label}</Link>
                {item.sub && (
                  <div className="ml-4 border-l border-border pl-4">
                    {item.sub.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-primary">{s.label}</Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-border">
              <Link href="/admissions" onClick={() => setOpen(false)} className="flex w-full items-center justify-center rounded-lg bg-brand-gradient py-3 text-sm font-semibold text-white">Apply Now →</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
