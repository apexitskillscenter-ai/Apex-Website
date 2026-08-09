import { courses, getCourseBySlug as _getBySlug, featuredCourses } from "@/content/courses";
import type { Course } from "@/types";

/**
 * Data-access layer for courses. Pages call THESE functions, never the
 * content files directly. To migrate to a CMS later, rewrite the bodies here
 * (e.g. fetch from Sanity) — the Course type and every component stay the same.
 */

export async function getCourses(): Promise<Course[]> {
  return courses;
}

export async function getFeaturedCourses(): Promise<Course[]> {
  return featuredCourses;
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  return _getBySlug(slug);
}

export async function getCourseSlugs(): Promise<string[]> {
  return courses.map((c) => c.slug);
}
