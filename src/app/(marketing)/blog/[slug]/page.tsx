import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getPostSlugs, getPostBySlug } from "@/lib/data";
import { buildMetadata, articleSchema } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { LeadCTA } from "@/components/sections/lead-cta";


// Use dynamic rendering for blog posts — MDX compilation works correctly
// at request time in the Next.js runtime but not in the build worker.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPostBySlug(slug);
  if (!data) return buildMetadata({ title: "Post Not Found" });
  return buildMetadata({
    title: data.post.title,
    description: data.post.excerpt,
    path: `/blog/${slug}`,
  });
}

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-PK", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getPostBySlug(slug);
  if (!data) notFound();

  const { post } = data;

  // Dynamic import of the MDX file — Next.js compiles it at build time
  let PostContent: React.ComponentType;
  try {
    const mod = await import(`@/content/posts/${slug}.mdx`);
    PostContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema({ ...post, slug })),
        }}
      />
      <article className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-brand-radial opacity-30" />
        <div className="container relative max-w-3xl py-16">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>

          <header className="space-y-4">
            <Badge>{post.category}</Badge>
            <h1 className="font-display text-4xl font-bold tracking-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {formatDate(post.date)}</span>
              {post.readingTime ? (
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readingTime} min read</span>
              ) : null}
            </div>
          </header>

          <div className="prose prose-slate mt-10 max-w-none">
            <PostContent />
          </div>
        </div>
      </article>
      <LeadCTA />
    </>
  );
}
