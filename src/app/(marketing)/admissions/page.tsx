import type { Metadata } from "next";
import { ClipboardList, Phone, CalendarCheck, Rocket } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { AdmissionForm } from "@/components/forms/admission-form";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Admissions",
  description:
    "Apply to Apex IT Skills Center Zafarwal. Simple admission process, flexible batches, and installment options. Start your IT career today.",
  path: "/admissions",
});

const steps = [
  { icon: ClipboardList, title: "Fill the form", desc: "Enter your details and the course you're interested in." },
  { icon: Phone, title: "Send on WhatsApp", desc: "One tap sends your details to us on WhatsApp — we reply fast." },
  { icon: CalendarCheck, title: "Pick your batch", desc: "Choose a morning or evening batch that fits your schedule." },
  { icon: Rocket, title: "Start learning", desc: "Begin your first project-based class and build real skills." },
];

export default function AdmissionsPage() {
  return (
    <section className="container py-20 sm:py-24">
      <SectionHeading
        eyebrow="Admissions Open"
        title={<>Your seat is <GradientText>waiting</GradientText></>}
        subtitle="Admissions are simple and friendly. Start by sending us your details — there&apos;s no obligation."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        {/* Steps */}
        <FadeIn>
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold">How to apply</h2>
            <ol className="space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display font-semibold">
                      <span className="text-primary">{i + 1}.</span> {s.title}
                    </div>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.1}>
          <div className="glow rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="mb-1 font-display text-xl font-semibold">Admission Enquiry</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Fill this and send it to us on WhatsApp — we&apos;ll guide you through the rest.
            </p>
            <AdmissionForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
