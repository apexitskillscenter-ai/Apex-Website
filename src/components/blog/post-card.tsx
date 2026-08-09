import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import type { Post } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
        <CardContent className="flex h-full flex-col gap-3 p-6">
          <div className="flex items-center gap-2">
            <Badge>{post.category}</Badge>
          </div>
          <h3 className="font-display text-lg font-semibold leading-tight group-hover:text-primary">
            {post.title}
          </h3>
          <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
            </span>
            {post.readingTime ? (
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime} min read
              </span>
            ) : null}
            <span className="ml-auto flex items-center gap-1 font-medium text-primary">
              Read
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
