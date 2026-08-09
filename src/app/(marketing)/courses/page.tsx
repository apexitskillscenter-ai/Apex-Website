import type { Metadata } from "next";
import { getCourses } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { CourseFilter } from "@/components/sections/course-filter";
import { GradientText } from "@/components/shared/gradient-text";
import { LeadCTA } from "@/components/sections/lead-cta";

export const metadata: Metadata = buildMetadata({
  title: "Courses",
  description:
    "Explore all courses at Apex IT Skills Center Zafarwal — graphic design, web development, digital marketing, freelancing, spoken English, IELTS, kids programs and more. Filter and search by category.",
  path: "/courses",
});

export default async function CoursesPage() {
  // Data comes through the CMS-ready data layer; the client filter handles UI.
  const courses = await getCourses();

  return (
    <>
      <section className="container py-20 sm:py-24">
        <SectionHeading
          eyebrow="All Courses"
          title={<>Find the <GradientText>right course</GradientText> for you</>}
          subtitle="From complete beginner to job-ready professional — choose a path and start building skills that earn."
        />

        <div className="mt-12">
          <CourseFilter courses={courses} />
        </div>
      </section>

      <LeadCTA />
    </>
  );
}
