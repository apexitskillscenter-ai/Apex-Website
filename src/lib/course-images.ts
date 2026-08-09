import type { CourseCategory } from "@/types";

/**
 * Course card images. Real Apex course flyer images are used where available
 * (set per-slug below); otherwise a category default is used.
 *
 * To set a real image for any course, drop the file in
 * public/images/courses/ and add a SLUG_IMAGES entry, OR set `image` directly
 * on the course in content/courses.ts.
 */

// Real images we have on disk, keyed by course slug.
const SLUG_IMAGES: Record<string, string> = {
  "graphic-designing": "/images/courses/graphic-designing.jpg",
  "digital-marketing": "/images/courses/digital-marketing.jpg",
  freelancing: "/images/courses/freelancing.jpg",
  "office-management": "/images/courses/office-management.jpg",
};

// Category fallbacks (Unsplash placeholders — swap for local files later).
const CATEGORY_IMAGES: Record<CourseCategory, string> = {
  "IT & Computer":
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  Design:
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
  Marketing:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  Freelancing:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  "Spoken English":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  Finance:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  Kids:
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
};

/** Resolve a course's card image: explicit > real-by-slug > category default. */
export function courseImage(course: {
  slug: string;
  image?: string;
  category: CourseCategory;
}): string {
  return course.image ?? SLUG_IMAGES[course.slug] ?? CATEGORY_IMAGES[course.category];
}
