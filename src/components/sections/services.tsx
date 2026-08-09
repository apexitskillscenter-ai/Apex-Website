"use client";

import { services } from "@/content/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { ServiceIcon } from "@/components/shared/service-icon";
import { FadeIn } from "@/components/animations/fade-in";

export function Services() {
  return (
    <section className="container py-20 sm:py-28">
      <SectionHeading
        eyebrow="Our Services"
        title={<>More than courses — <GradientText>career support</GradientText></>}
        subtitle="We help you go beyond learning, with services that prepare you for jobs, freelancing, and a successful digital future."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <FadeIn key={s.id} delay={i * 0.05}>
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <ServiceIcon name={s.icon} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
