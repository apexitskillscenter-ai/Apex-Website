/**
 * Shared domain types. Defined once, used everywhere (content files,
 * components, API). A typo in /content fails the build, not production.
 */

export type CourseCategory =
  | "IT & Computer"
  | "Design"
  | "Marketing"
  | "Freelancing"
  | "Spoken English"
  | "Finance"
  | "Kids";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  slug: string;
  title: string;
  category: CourseCategory;
  duration: string;
  /** Monthly fee in PKR. Optional — some courses show a note instead. */
  monthlyFee?: number;
  /** Shown in place of a price when there's no fixed monthly fee (e.g. "Contact for fee"). */
  feeNote?: string;
  /** Optional diploma fee (e.g. 6-month / 1-year). */
  diplomaFee?: { sixMonth: number; oneYear: number };
  level: CourseLevel;
  /** Approx lessons/students shown as quick badges. */
  lessons?: number;
  students?: number;
  /** Optional age range for kids/youth programs (e.g. "Class 2–10"). */
  ageRange?: string;
  /** Optional class timing shown on the detail page. */
  timing?: string;
  summary: string;
  /** Longer description shown on the detail page. */
  description: string;
  /** What the student can do after finishing. */
  outcomes: string[];
  /** Curriculum / module list for the detail page. */
  modules: string[];
  /** Lucide icon name, resolved in the UI. */
  icon: string;
  /** Optional card image (top of course card). Falls back to an icon banner. */
  image?: string;
  featured?: boolean;
}

/** Blog post — sourced from MDX files now, a CMS later. */
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  /** Reading time in minutes (computed). */
  readingTime?: number;
  coverImage?: string;
  /** Compiled MDX body is attached at read time, not stored here. */
}

/** A professional service (resume writing, career counselling, etc.). */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  quote: string;
  /** Star rating 1–5 (defaults to 5 in the UI if omitted). */
  rating?: number;
  /** Tangible before/after outcome, e.g. "Earning Rs 50,000/month freelancing". */
  outcome?: string;
  /** Optional photo path under /public/images/team. Falls back to an initial avatar. */
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  course: string;
  /** The tangible outcome, e.g. "Earning Rs 45,000/month freelancing". */
  outcome: string;
  story: string;
  /** Optional photo under /public/images/team. */
  image?: string;
}

export interface GalleryItem {
  id: string;
  /** Image path under /public/images/gallery. */
  src: string;
  /** Descriptive alt text — also helps local SEO. */
  alt: string;
  /** Optional caption shown on hover / in lightbox. */
  caption?: string;
}

export interface Instructor {
  id: string;
  name: string;
  /** What they teach, e.g. "Web Development & React". */
  specialty: string;
  bio: string;
  /** Optional photo under /public/images/team. */
  image?: string;
  socials?: {
    linkedin?: string;
    facebook?: string;
    youtube?: string;
    portfolio?: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

/** Payload accepted by the lead API. Mirrors the Zod schema. */
export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  course?: string;
  message?: string;
}
