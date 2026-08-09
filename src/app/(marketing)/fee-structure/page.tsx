import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getCourses } from "@/lib/data";
import { formatPKR } from "@/lib/utils";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LeadCTA } from "@/components/sections/lead-cta";

export const metadata: Metadata = buildMetadata({
  title: "Fee Structure",
  description:
    "Transparent fee structure for all courses at Apex IT Skills Center Zafarwal — monthly fees, diploma options, registration and certification charges.",
  path: "/fee-structure",
});

const upcoming = [
  "B-Category",
  "Lab Technicians",
  "Ultrasound Specialist",
  "Lady Health Worker",
  "Physiotherapy",
];

export default async function FeeStructurePage() {
  const courses = await getCourses();

  return (
    <>
      <section className="container py-20 sm:py-24">
        <SectionHeading
          eyebrow="Fee Structure"
          title={<>Clear, <GradientText>honest pricing</GradientText></>}
          subtitle="No hidden charges. Quality training at fair prices, with diploma options and need-based scholarships available."
        />

        {/* Active courses table */}
        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-border">
          <div className="bg-card px-6 py-4">
            <h2 className="font-display text-lg font-semibold">Active Courses</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/50 text-left text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 font-medium">Course</th>
                  <th className="px-6 py-3 font-medium">Duration</th>
                  <th className="px-6 py-3 font-medium">Monthly Fee</th>
                  <th className="px-6 py-3 font-medium">Diploma (6 mo / 1 yr)</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.slug} className="border-t border-border">
                    <td className="px-6 py-4">
                      <Link href={`/courses/${c.slug}`} className="font-medium hover:text-primary">
                        {c.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{c.duration}</td>
                    <td className="px-6 py-4 font-medium text-primary">
                      {c.monthlyFee != null ? formatPKR(c.monthlyFee) : (c.feeNote ?? "Contact")}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {c.diplomaFee
                        ? `${formatPKR(c.diplomaFee.sixMonth)} / ${formatPKR(c.diplomaFee.oneYear)}`
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charges + upcoming */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold">Additional Charges</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">One-time registration (non-refundable)</span>
                <span className="font-medium">{formatPKR(siteConfig.charges.registration)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Certification (optional)</span>
                <span className="font-medium">{formatPKR(siteConfig.charges.certification)}</span>
              </li>
            </ul>
            <div className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
              <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Registration is paid only once, even for multiple courses.</p>
              <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Need-based scholarship discounts may be available.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg font-semibold">Upcoming Courses</h3>
              <Badge variant="outline">Soon</Badge>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Fee structure will be published soon.</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {upcoming.map((u) => (
                <li key={u} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {u}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 w-full" variant="outline">
              <Link href="/contact">Ask about these</Link>
            </Button>
          </div>
        </div>
      </section>

      <LeadCTA />
    </>
  );
}
