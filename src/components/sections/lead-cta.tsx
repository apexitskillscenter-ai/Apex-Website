"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
import { GradientText } from "@/components/shared/gradient-text";
import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/animations/fade-in";

export function LeadCTA() {
  return (
    <section id="enquire" className="border-y border-border bg-secondary/50">
      <div className="container py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Pitch */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to start your <GradientText>IT journey?</GradientText>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fill in the form and our team will call you back to guide you
                through courses, fees, and the next batch. No pressure — just
                honest advice about the right path for you.
              </p>

              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-muted-foreground">Call us</div>
                    <a href={`tel:${siteConfig.contact.phone}`} className="font-medium hover:text-primary">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-muted-foreground">Visit us</div>
                    <div className="font-medium">{siteConfig.contact.address}</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-muted-foreground">Timings</div>
                    <div className="font-medium">Morning &amp; Evening batches</div>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <div className="glow rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="mb-1 font-display text-xl font-semibold">Request a Call Back</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                We&apos;ll get back to you within one business day.
              </p>
              <LeadForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
