import type { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { Stats } from "@/components/sections/stats";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { LeadCTA } from "@/components/sections/lead-cta";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Apex IT Skills Center Zafarwal — our mission to make quality IT education accessible and our commitment to student success.",
  path: "/about",
});

const values = [
  { icon: Target, title: "Our Mission", desc: "To make quality, practical IT education accessible to every student in Zafarwal and beyond — and to turn skills into livelihoods." },
  { icon: Eye, title: "Our Vision", desc: "A community where young people don't have to leave home to build a modern, global career in technology." },
  { icon: Heart, title: "Our Values", desc: "Honesty, hard work, and genuine care for every student's progress — from the first class to their first paid project." },
];

export default function AboutPage() {
  return (
    <>
      <section className="container py-20 sm:py-24">
        <SectionHeading
          eyebrow="About Us"
          title={<>Empowering Zafarwal with <GradientText>real IT skills</GradientText></>}
          subtitle={`${siteConfig.shortName} was founded to close the gap between talented young people and the digital economy. We teach the skills that local jobs and global freelancing actually demand.`}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Stats />
      <WhyChooseUs />
      <LeadCTA />
    </>
  );
}
