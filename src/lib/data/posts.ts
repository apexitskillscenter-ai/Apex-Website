import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post } from "@/types";

/**
 * Blog data-access layer — reads frontmatter from MDX files.
 * The actual MDX content is imported dynamically in the blog post page
 * using native @next/mdx support.
 */

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

function readFrontmatter(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { data, content };
}

export async function getPosts(): Promise<Post[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { data, content } = readFrontmatter(slug);
    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      category: data.category ?? "General",
      author: data.author ?? "Apex IT Skills",
      coverImage: data.coverImage ?? undefined,
      readingTime: Math.ceil(readingTime(content).minutes),
    } satisfies Post;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Returns post metadata only (content is imported separately via @next/mdx). */
export async function getPostBySlug(
  slug: string
): Promise<{ post: Post; content: string } | null> {
  try {
    const { data, content } = readFrontmatter(slug);
    const post: Post = {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      category: data.category ?? "General",
      author: data.author ?? "Apex IT Skills",
      coverImage: data.coverImage ?? undefined,
      readingTime: Math.ceil(readingTime(content).minutes),
    };
    return { post, content };
  } catch {
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
