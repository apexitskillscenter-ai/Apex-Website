"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Stagger + StaggerItem — pure CSS staggered reveal.
 * No framer-motion dependency.
 */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("stagger-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`stagger-parent${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`stagger-item${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
