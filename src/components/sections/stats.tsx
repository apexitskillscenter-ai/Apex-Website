"use client";
import { Users, BookOpen, Award, TrendingUp, Briefcase, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, value: "1,000+", label: "Students Trained" },
  { icon: BookOpen, value: "15+", label: "Professional Courses" },
  { icon: Award, value: "10+", label: "Expert Instructors" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
  { icon: Briefcase, value: "500+", label: "Projects Completed" },
  { icon: Star, value: "6+", label: "Years of Excellence" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); o.disconnect(); } }, { threshold: 0.2 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return (
    <section ref={ref} className="bg-slate-900 py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center transition-all duration-500"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transitionDelay: `${i * 80}ms` }}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary"><Icon className="h-6 w-6" /></span>
              <span className="font-display text-2xl font-bold text-white">{value}</span>
              <span className="text-xs text-white/60">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
