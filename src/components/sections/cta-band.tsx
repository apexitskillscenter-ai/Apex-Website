"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";

export function CTABand() {
  const waText = encodeURIComponent(`Assalam o Alaikum! I want to enroll at ${siteConfig.shortName}.`);
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-primary to-violet-900 py-16">
      <div className="pointer-events-none absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=60" alt="" fill className="object-cover opacity-10" />
      </div>
      <div className="container relative text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to Start Your Journey?</h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-white/70">Join thousands of successful students and build your bright future with Apex IT Skills Center Zafarwal.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/admissions" className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-7 text-sm font-bold text-primary shadow-lg hover:bg-white/90 transition-all">Apply for Admission <ArrowRight className="h-4 w-4" /></Link>
          <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-lg border-2 border-white/40 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur hover:bg-white/20 transition-all"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
