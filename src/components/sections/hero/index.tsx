"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Star, BadgeCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/shared/cta-button";
import { Badge } from "@/components/ui/badge";

const heroStats = [
  { value: "1,000+", label: "Students Trained", icon: "🎓" },
  { value: "15+", label: "Courses", icon: "📚" },
  { value: "98%", label: "Success Rate", icon: "✅" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      <div className="container relative grid min-h-[560px] items-center gap-8 py-16 lg:grid-cols-2 lg:py-20">
        <div className="text-white">
          <Badge className="mb-5 border border-primary/40 bg-primary/20 text-white">
            ⭐ #1 IT Training Institute in Zafarwal
          </Badge>
          <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl">
            Learn Today,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Lead Tomorrow</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
            We provide industry-oriented IT training, practical skills and career guidance to help you build a successful future in Zafarwal.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 text-sm font-semibold text-white">4.9/5</span>
            </div>
            <p className="text-xs text-white/60">1,000+ Reviews</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/courses" className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 transition-all">
              Explore Courses <ArrowRight className="h-4 w-4" />
            </Link>
            <button className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition-all">
              <Play className="h-4 w-4" /> Watch Video
            </button>
            <WhatsAppButton size="default" />
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
            {["Certificate included", "Morning & evening batches", "Installments available"].map(t => (
              <span key={t} className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-green-400" /> {t}</span>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="relative h-[420px] w-[340px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=680&q=85" alt="Professional IT student" fill className="object-cover object-top" priority />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 backdrop-blur-sm">
                <p className="text-xs font-semibold text-white">APEX IT SKILLS CENTER</p>
                <p className="text-[11px] text-white/70">Zafarwal, Punjab, Pakistan</p>
              </div>
            </div>
            {heroStats.map((stat, i) => {
              const positions = ["-left-10 top-10", "-right-10 top-1/3", "-left-10 bottom-16"];
              return (
                <div key={stat.label} className={`absolute ${positions[i]} float-${i + 1} flex min-w-[130px] items-center gap-2.5 rounded-xl border border-white/20 bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur`}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white text-lg">{stat.icon}</div>
                  <div>
                    <div className="font-display text-base font-bold text-foreground">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
