import type { Metadata } from "next";
import { Plane, FileCheck, GraduationCap, MessagesSquare, Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { LeadForm } from "@/components/forms/lead-form";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Visa Consultancy",
  description:
    "Expert visa consultancy at Apex IT Skills Center Zafarwal to support your dream of studying abroad — guidance on student visas, documentation and applications.",
  path: "/visa-consultancy",
});

const offerings = [
  { icon: GraduationCap, title: "Study Abroad Guidance", desc: "Advice on choosing the right country, university and course for your goals." },
  { icon: FileCheck, title: "Documentation Support", desc: "Help preparing and reviewing the documents your application needs." },
  { icon: MessagesSquare, title: "Interview Preparation", desc: "Practice and tips for visa and university interviews." },
  { icon: Plane, title: "Application Assistance", desc: "Step-by-step support through the student visa application process." },
];

export default function VisaConsultancyPage() {
  return (
    <section className="container py-20 sm:py-24">
      <SectionHeading
        eyebrow="Visa Consultancy"
        title={<>Your path to <GradientText>studying abroad</GradientText></>}
        subtitle="Dreaming of studying overseas? Our visa consultancy supports you with honest guidance through every step — from choosing a destination to your visa application."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {offerings.map((o) => (
                <div key={o.title} className="rounded-xl border border-border bg-card p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <o.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display font-semibold">{o.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm">
              <p className="flex items-start gap-2 text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Pairs perfectly with our Spoken English (IELTS / PTE) course for a complete study-abroad pathway.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glow rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="mb-1 font-display text-xl font-semibold">Book a consultation</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Leave your details and we&apos;ll get in touch to discuss your options.
            </p>
            <LeadForm defaultCourse="Visa Consultancy" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
