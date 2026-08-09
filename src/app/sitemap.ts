import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { courses } from "@/content/courses";
import fs from "node:fs";
import path from "node:path";

/** Auto-generated sitemap — reads course and post data directly from source files. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "", "/courses", "/fee-structure", "/services",
    "/visa-consultancy", "/blog", "/about", "/admissions",
    "/demo", "/faq", "/contact",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((c) => ({
    url: `${base}/courses/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postsDir = path.join(process.cwd(), "src/content/posts");
  const postSlugs = fs.existsSync(postsDir)
    ? fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(".mdx", ""))
    : [];
  const postRoutes = postSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...postRoutes];
}
