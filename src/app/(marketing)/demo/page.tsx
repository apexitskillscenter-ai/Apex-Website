import type { Metadata } from "next";
import { Gift, Clock, Users, Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { LeadForm } from "@/components/forms/lead-form";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Free Demo Class",
  description:
    "Register for a free demo class at Apex IT Skills Center Zafarwal. Experience our hands-on teaching before you enroll — no obligation.",
  path: "/demo",
});

const perks = [
  { icon: Gift, title: "Completely free", desc: "No cost, no obligation — just come and learn." },
  { icon: Users, title: "Meet the instructor", desc: "See our hands-on teaching style firsthand." },
  { icon: Clock, title: "Flexible timing", desc: "Morning and evening demo slots available." },
];

export default function DemoPage() {
  return (
    <section className="container py-20 sm:py-24">
      <SectionHeading
        eyebrow="Free Demo Class"
        title={<>Try a class <GradientText>before you enroll</GradientText></>}
        subtitle="Not sure which course is right for you? Register for a free demo class and experience the Apex teaching style with zero risk."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="space-y-6">
            <div className="space-y-4">
              {perks.map((p) => (
                <div key={p.title} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm">
              <p className="flex items-start gap-2 text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Separate classes for male and female students in a respectful, focused environment.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glow rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="mb-1 font-display text-xl font-semibold">Register for your free demo</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Pick a course and we&apos;ll arrange your free demo class.
            </p>
            <LeadForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
