"use client";
import Link from "next/link";
import { ArrowRight, Users, Laptop, Award, Briefcase, Clock, Sparkles } from "lucide-react";

const features = [
  { icon: Users, title: "Expert Instructors", desc: "Learn from industry experts with real-world experience." },
  { icon: Laptop, title: "Practical Learning", desc: "Hands-on projects and practical training for real skills." },
  { icon: Award, title: "Certification", desc: "Recognized certificates to boost your career." },
  { icon: Briefcase, title: "Career Support", desc: "Job placement assistance and career guidance." },
  { icon: Clock, title: "Flexible Schedule", desc: "Flexible batch timings for students & professionals." },
  { icon: Sparkles, title: "AI Powered Learning", desc: "Modern AI tools and smart learning for future-ready skills." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Apex</p>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">Your Success is <span className="text-primary">Our Mission</span></h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">We are committed to providing quality IT education, practical training and lifetime support to our students in Zafarwal and across Punjab.</p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors">Learn More About Us <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
              <h3 className="font-display text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
