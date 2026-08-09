import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import type { Course } from "@/types";

/**
 * Build per-route metadata. Call from each page's `generateMetadata` or
 * exported `metadata` so titles, canonicals and Open Graph stay consistent.
 */
export function buildMetadata({
  title,
  description,
  path = "",
  image = "/images/og/default.png",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc = description ?? siteConfig.description;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
  };
}

/** EducationalOrganization schema — strengthens local + brand SEO. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    // Dual type: EducationalOrganization for relevance + LocalBusiness for the
    // local map pack (geo, hours, price range power local results).
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "₨₨",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
    sameAs: Object.values(siteConfig.socials),
  };
}

/** Course schema for course detail pages — eligible for rich results. */
export function courseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    // Price + currency help eligibility for richer course results.
    ...(course.monthlyFee != null && {
      offers: {
        "@type": "Offer",
        price: course.monthlyFee,
        priceCurrency: "PKR",
        category: "Monthly fee",
      },
    }),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      ...(course.duration && { courseWorkload: course.duration }),
      location: {
        "@type": "Place",
        name: siteConfig.name,
        address: siteConfig.contact.address,
      },
    },
  };
}

/** Article (BlogPosting) schema for blog posts. */
export function articleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  coverImage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    ...(post.coverImage && { image: `${siteConfig.url}${post.coverImage}` }),
  };
}

/** FAQPage schema — can earn FAQ rich snippets in Google. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
