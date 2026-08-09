"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Course } from "@/types";
import { courseCategories } from "@/content/courses";
import { CourseCard } from "@/components/shared/course-card";
import { cn } from "@/lib/utils";

/**
 * CourseFilter — category tabs + search, CSS transitions on cards.
 * No framer-motion dependency.
 */
export function CourseFilter({ courses }: { courses: Course[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const tabs = useMemo(() => ["All", ...courseCategories], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const matchesCategory =
        activeCategory === "All" || c.category === activeCategory;
      const matchesQuery =
        q === "" ||
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [courses, activeCategory, query]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5">
        <div className="relative mx-auto w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses..."
            aria-label="Search courses"
            className="h-11 w-full rounded-full border border-input bg-secondary/40 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => {
            const active = activeCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                aria-pressed={active}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-gradient text-white"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                )}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Count */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Showing {filtered.length} {filtered.length === 1 ? "course" : "courses"}
      </p>

      {/* Grid — CSS transition on opacity/transform */}
      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">
          No courses match your search.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <div
              key={course.slug}
              className="transition-all duration-300"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
