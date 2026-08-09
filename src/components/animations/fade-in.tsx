"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * FadeIn — pure CSS intersection-observer animation.
 * No framer-motion dependency (avoids React 19 SSR conflict).
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}s`;
          el.classList.add("fade-in-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in-base${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
