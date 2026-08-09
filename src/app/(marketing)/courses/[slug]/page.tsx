import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Clock, BarChart3, GraduationCap, ArrowLeft } from "lucide-react";
import { getCourseSlugs, getCourseBySlug } from "@/lib/data";
import { buildMetadata, courseSchema } from "@/lib/seo";
import { formatPKR } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";
import { CourseIcon } from "@/components/shared/course-icon";
import { LeadForm } from "@/components/forms/lead-form";

/** Pre-render all course pages at build time (great for SEO + speed). */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return buildMetadata({ title: "Course Not Found" });

  return buildMetadata({
    title: course.title,
    description: course.summary,
    path: `/courses/${course.slug}`,
  });
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <article className="relative">
      {/* Course structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema(course)) }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-brand-radial" />

      <div className="container relative py-16">
        <Link
          href="/courses"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> All courses
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Main content */}
          <div className="space-y-10">
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary">
                  <CourseIcon name={course.icon} className="h-7 w-7" />
                </span>
                <div className="flex gap-2">
                  <Badge>{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
              </div>

              <h1 className="font-display text-4xl font-bold tracking-tight">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 pt-2 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" /> {course.level}
                </span>
                {course.ageRange && (
                  <span className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" /> {course.ageRange}
                  </span>
                )}
                {course.timing && (
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {course.timing}
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" /> Certificate included
                </span>
              </div>
            </header>

            {/* What you'll learn */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold">
                What you&apos;ll <GradientText>achieve</GradientText>
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Curriculum */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold">Course curriculum</h2>
              <ol className="space-y-3">
                {course.modules.map((m, i) => (
                  <li
                    key={m}
                    className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-sm font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm">{m}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Sticky enrollment card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="glow space-y-5 rounded-2xl border border-border bg-card p-6">
              <div>
                {course.monthlyFee != null ? (
                  <>
                    <div className="text-sm text-muted-foreground">Monthly fee</div>
                    <div className="font-display text-3xl font-bold">
                      <GradientText>{formatPKR(course.monthlyFee)}</GradientText>
                      <span className="text-base font-normal text-muted-foreground">/month</span>
                    </div>
                    {course.diplomaFee && (
                      <div className="mt-1 text-xs text-muted-foreground">
                        Diploma: {formatPKR(course.diplomaFee.sixMonth)} (6 mo) ·{" "}
                        {formatPKR(course.diplomaFee.oneYear)} (1 yr)
                      </div>
                    )}
                    <div className="mt-1 text-xs text-muted-foreground">
                      + one-time Rs 2,000 registration. Scholarships may apply.
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-sm text-muted-foreground">Course fee</div>
                    <div className="font-display text-2xl font-bold">
                      <GradientText>{course.feeNote ?? "Contact for fee"}</GradientText>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Limited seats. Message us for the latest fee and schedule.
                    </div>
                  </>
                )}
              </div>

              <div className="border-t border-border pt-5">
                <h3 className="mb-1 font-display font-semibold">Enroll in this course</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Leave your details — we&apos;ll call you back.
                </p>
                <LeadForm defaultCourse={course.title} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
