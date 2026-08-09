import type { Metadata } from "next";
import { getPosts } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { PostCard } from "@/components/blog/post-card";
import { LeadCTA } from "@/components/sections/lead-cta";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Tips and guides on freelancing, graphic design, digital marketing and IT careers from Apex IT Skills Center Zafarwal.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="container py-20 sm:py-24">
        <SectionHeading
          eyebrow="Blog"
          title={<>Tips to <GradientText>grow your skills</GradientText></>}
          subtitle="Practical advice on freelancing, design, digital marketing and building an IT career in Pakistan."
        />

        {posts.length === 0 ? (
          <p className="mt-14 text-center text-muted-foreground">
            No posts yet — check back soon.
          </p>
        ) : (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <LeadCTA />
    </>
  );
}
