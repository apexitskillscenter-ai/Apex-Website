"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

function Avatar({ t }: { t: Testimonial }) {
  const [err, setErr] = useState(false);
  if (t.image && !err) return <Image src={t.image} alt={t.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" onError={() => setErr(true)} />;
  return <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient font-display text-xl font-bold text-white">{t.name.charAt(0)}</span>;
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState<"l" | "r">("r");
  const [anim, setAnim] = useState(false);
  const go = (next: number, d: "l" | "r") => {
    if (anim) return;
    setDir(d); setAnim(true);
    setTimeout(() => { setIdx((next + testimonials.length) % testimonials.length); setAnim(false); }, 300);
  };
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(idx + 1, "r"), 6000);
    return () => clearInterval(id);
  }, [idx, paused]);
  const t = testimonials[idx];

  return (
    <section id="testimonials" className="bg-secondary/40 py-16 sm:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Success Stories</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Real People. <span className="text-primary">Real Success.</span></h2>
        </div>
        <div className="hidden gap-6 lg:grid lg:grid-cols-4">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <Quote className="mb-3 h-7 w-7 text-primary/30" />
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">&ldquo;{item.quote}&rdquo;</p>
              {item.outcome && <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"><TrendingUp className="h-3 w-3" /> {item.outcome}</div>}
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <Avatar t={item} />
                <div>
                  <div className="font-display text-sm font-semibold">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.course}</div>
                  <div className="mt-1 flex gap-0.5">{[...Array(item.rating ?? 5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className={cn("rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300", anim ? (dir === "r" ? "opacity-0 translate-x-6" : "opacity-0 -translate-x-6") : "opacity-100 translate-x-0")}>
            <Quote className="mb-3 h-8 w-8 text-primary/30" />
            <p className="text-muted-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            {t.outcome && <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"><TrendingUp className="h-3.5 w-3.5" /> {t.outcome}</div>}
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
              <Avatar t={t} />
              <div>
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.course}</div>
                <div className="mt-1 flex gap-0.5">{[...Array(t.rating ?? 5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}</div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-4">
            <button onClick={() => go(idx - 1, "l")} className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"><ChevronLeft className="h-4 w-4" /></button>
            <div className="flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => go(i, i > idx ? "r" : "l")} className={cn("h-2 rounded-full transition-all", i === idx ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30")} />)}</div>
            <button onClick={() => go(idx + 1, "r")} className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
