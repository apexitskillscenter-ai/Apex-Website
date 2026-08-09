"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { successStories } from "@/content/success-stories";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";

export function SuccessStories() {
  return (
    <section className="container py-20 sm:py-28">
      <SectionHeading
        eyebrow="Success Stories"
        title={
          <>
            From our classroom to <GradientText>real income</GradientText>
          </>
        }
        subtitle="These are students who started exactly where you are now — and built skills that changed their lives."
      />

      <div className="mx-auto mt-14 max-w-4xl space-y-6">
        {successStories.map((s, i) => (
          <FadeIn key={s.id} delay={i * 0.08}>
            <div className="grid items-center gap-6 rounded-2xl border border-border bg-card p-6 sm:grid-cols-[auto_1fr] sm:p-8">
              {/* Avatar / initial */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient font-display text-2xl font-bold text-primary-foreground">
                {s.name.charAt(0)}
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                  <Badge variant="outline">{s.course}</Badge>
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                  <TrendingUp className="h-4 w-4" />
                  {s.outcome}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.story}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <Link href="/admissions">
            Start your story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
