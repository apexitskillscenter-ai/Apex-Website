"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ImageIcon } from "lucide-react";
import { gallery } from "@/content/gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import type { GalleryItem } from "@/types";

/**
 * Gallery with lightbox. Until real photos are added under
 * /public/images/gallery, each tile falls back to a branded placeholder
 * (the onError handler hides the broken image and shows the gradient).
 */
export function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="container py-20 sm:py-28">
        <SectionHeading
          eyebrow="Campus & Classes"
          title={
            <>
              Take a look <GradientText>inside Apex</GradientText>
            </>
          }
          subtitle="A real place, real equipment, and real students. Come see where your IT journey begins."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {gallery.map((item) => {
            const broken = failed[item.id];
            return (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-secondary"
                aria-label={`View ${item.caption ?? item.alt}`}
              >
                {!broken ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() =>
                      setFailed((f) => ({ ...f, [item.id]: true }))
                    }
                  />
                ) : (
                  // Branded placeholder until a real photo is dropped in
                  <div className="flex h-full w-full flex-col items-center justify-center bg-brand-gradient/10 text-primary">
                    <ImageIcon className="h-8 w-8 opacity-50" />
                  </div>
                )}

                {/* Caption overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs font-medium text-foreground">
                    {item.caption}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-6 top-6 text-muted-foreground hover:text-foreground"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative max-h-[80vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!failed[active.id] ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card text-primary">
                <ImageIcon className="h-12 w-12 opacity-50" />
                <p className="text-sm text-muted-foreground">{active.alt}</p>
              </div>
            )}
            {active.caption && (
              <p className="mt-3 text-center text-sm text-muted-foreground">
                {active.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
