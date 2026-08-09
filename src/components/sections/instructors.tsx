"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Youtube, Globe, ArrowRight } from "lucide-react";
import { instructors } from "@/content/instructors";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { Button } from "@/components/ui/button";

/**
 * Instructors (light theme)
 * Team cards with: circular photo on top, name + specialty, short bio, and
 * social + portfolio icons at the bottom. Photo falls back to a circular
 * gradient initial-avatar until a real photo is added to /public/images/team.
 */
export function Instructors() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <section className="container py-20 sm:py-28">
      <SectionHeading
        eyebrow="Our Team"
        title={<>Learn from <GradientText>working professionals</GradientText></>}
        subtitle="Our instructors don't just teach — they work in the field. You learn what actually gets results."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {instructors.map((ins) => {
          const broken = failed[ins.id] || !ins.image;
          const initial = ins.name.replace(/^(Sir|Miss|Mr|Ms|Mrs)\s+/i, "").charAt(0);
          return (
            <div
              key={ins.id}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Circular photo / avatar */}
              <div className="h-24 w-24 overflow-hidden rounded-full ring-4 ring-secondary">
                {!broken && ins.image ? (
                  <Image
                    src={ins.image}
                    alt={ins.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    onError={() => setFailed((f) => ({ ...f, [ins.id]: true }))}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-brand-gradient font-display text-3xl font-bold text-white">
                    {initial}
                  </div>
                )}
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold">{ins.name}</h3>
              <p className="text-sm font-medium text-primary">{ins.specialty}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                {ins.bio}
              </p>

              {/* Social + portfolio icons at the bottom */}
              <div className="mt-5 flex justify-center gap-2 border-t border-border pt-4">
                {ins.socials?.linkedin && (
                  <a href={ins.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${ins.name} on LinkedIn`} className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-white">
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {ins.socials?.facebook && (
                  <a href={ins.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${ins.name} on Facebook`} className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-white">
                    <Facebook className="h-4 w-4" />
                  </a>
                )}
                {ins.socials?.youtube && (
                  <a href={ins.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label={`${ins.name} on YouTube`} className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-white">
                    <Youtube className="h-4 w-4" />
                  </a>
                )}
                {ins.socials?.portfolio && (
                  <a href={ins.socials.portfolio} target="_blank" rel="noopener noreferrer" aria-label={`${ins.name} portfolio`} className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-white">
                    <Globe className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg" variant="outline">
          <Link href="/admissions">
            Enroll today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
