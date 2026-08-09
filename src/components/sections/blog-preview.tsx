"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Send } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/content/site";

const posts = [
  { slug: "how-to-start-freelancing-in-pakistan", title: "How to Start Freelancing in Pakistan in 2026", excerpt: "A practical step-by-step guide for beginners to start earning online through freelancing.", category: "Freelancing", date: "2026-02-01", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=75" },
  { slug: "why-graphic-design-is-a-great-career", title: "Why Graphic Design Is a Great Career Choice in 2026", excerpt: "Graphic design is one of the most flexible and in-demand skills. Here's why it's worth learning.", category: "Design", date: "2026-01-20", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=75" },
  { slug: "free-vs-paid-it-courses", title: "Free vs Paid IT Courses: What Actually Gets You Hired?", excerpt: "Free tutorials are everywhere — so why pay for a course? Here's the honest answer.", category: "Career Advice", date: "2026-01-10", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=75" },
];
function fmt(d: string) { return new Date(d).toLocaleDateString("en-PK", { year: "numeric", month: "short", day: "numeric" }); }

export function BlogPreview() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    const text = encodeURIComponent(`Please add me to ${siteConfig.shortName} updates. Email: ${email}`);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  }
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Latest from Blog</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Insights, Tips &amp; <span className="text-primary">Updates</span></h2>
          </div>
          <Link href="/blog" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline md:flex">View All Posts <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr_300px]">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all">
              <div className="relative h-44 overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="300px" />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-white">{p.category}</span>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{fmt(p.date)}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />5 min read</span>
                </div>
                <h3 className="font-display text-sm font-semibold leading-snug group-hover:text-primary line-clamp-2">{p.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{p.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
          <div className="rounded-2xl border border-border bg-secondary/50 p-6">
            <h3 className="font-display text-base font-bold">Stay Updated</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">Subscribe to get latest updates and new batch alerts.</p>
            {sent ? (
              <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm font-medium text-green-700">✓ Thanks! Finish subscribing in WhatsApp.</p>
            ) : (
              <form onSubmit={subscribe} className="mt-4 space-y-3">
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="h-10 w-full rounded-lg border border-input bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <button type="submit" className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-white hover:bg-primary/90"><Send className="h-3.5 w-3.5" /> Subscribe</button>
              </form>
            )}
            <div className="mt-6 border-t border-border pt-5">
              <p className="mb-3 text-sm font-semibold">Follow Us</p>
              <div className="flex gap-3">
                <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white hover:opacity-90">FB</a>
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-600 text-xs font-bold text-white hover:opacity-90">IG</a>
                <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white hover:opacity-90">TT</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View All Posts <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
