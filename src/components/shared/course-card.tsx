import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BarChart3 } from "lucide-react";
import type { Course } from "@/types";
import { formatPKR } from "@/lib/utils";
import { courseImage } from "@/lib/course-images";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseIcon } from "@/components/shared/course-icon";

/**
 * CourseCard (light theme, with image header)
 * Each card now leads with a category image, then icon + details below.
 */
export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Image header */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={courseImage(course)}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Icon chip overlapping the image bottom-left */}
          <span className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-md">
            <CourseIcon name={course.icon} className="h-5 w-5" />
          </span>
          {/* Level badge top-right */}
          <span className="absolute right-3 top-3">
            <Badge>{course.level}</Badge>
          </span>
        </div>

        <CardContent className="flex h-full flex-col gap-3 p-5 pt-7">
          <h3 className="font-display text-lg font-semibold leading-tight group-hover:text-primary">
            {course.title}
          </h3>
          <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
            {course.summary}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 className="h-3.5 w-3.5" /> {course.category}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="font-display font-semibold text-foreground">
              {course.monthlyFee != null ? (
                <>
                  {formatPKR(course.monthlyFee)}
                  <span className="text-xs font-normal text-muted-foreground">/mo</span>
                </>
              ) : (
                <span className="text-sm font-medium text-muted-foreground">
                  {course.feeNote ?? "Contact for fee"}
                </span>
              )}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-primary">
              View
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
