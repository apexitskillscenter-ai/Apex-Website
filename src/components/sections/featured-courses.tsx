"use client";
import Link from "next/link";
import Image from "next/image";
import { Clock, BarChart3, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { courses } from "@/content/courses";
import { SectionHeading } from "@/components/shared/section-heading";
import { courseImage } from "@/lib/course-images";

const CATEGORY_COLORS: Record<string, string> = {
  "IT & Computer": "bg-blue-600", "Design": "bg-purple-600", "Marketing": "bg-orange-500",
  "Freelancing": "bg-green-600", "Spoken English": "bg-teal-600", "Finance": "bg-yellow-600", "Kids": "bg-pink-500",
};

export function FeaturedCourses() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "l" | "r") => scrollRef.current?.scrollBy({ left: dir === "l" ? -320 : 320, behavior: "smooth" });

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container">
        <div className="flex items-end justify-between">
          <SectionHeading eyebrow="Our Popular Courses" title={<>Industry-Focused <span className="text-primary">Courses</span></>} align="left" />
          <div className="hidden items-center gap-2 md:flex">
            <button onClick={() => scroll("l")} className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"><ChevronLeft className="h-4 w-4" /></button>
            <button onClick={() => scroll("r")} className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"><ChevronRight className="h-4 w-4" /></button>
            <Link href="/courses" className="ml-2 flex items-center gap-1 text-sm font-medium text-primary hover:underline">View All Courses <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div ref={scrollRef} className="mt-8 flex gap-5 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollSnapType: "x mandatory" }}>
          {courses.map((course) => {
            const btnColor = CATEGORY_COLORS[course.category] ?? "bg-primary";
            return (
              <div key={course.slug} className="group w-[260px] flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg" style={{ scrollSnapAlign: "start" }}>
                <div className="relative h-40 w-full overflow-hidden">
                  <Image src={courseImage(course)} alt={course.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="260px" />
                  <span className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white ${btnColor}`}>{course.category}</span>
                  <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">{course.level}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary">{course.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{course.summary}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><BarChart3 className="h-3.5 w-3.5" /> {course.level}</span>
                  </div>
                  <div className="mt-4">
                    <Link href={`/courses/${course.slug}`} className={`inline-flex w-full items-center justify-center gap-1 rounded-lg py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 ${btnColor}`}>Enroll Now <ArrowRight className="h-3.5 w-3.5" /></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Link href="/courses" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white">View All Courses <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
