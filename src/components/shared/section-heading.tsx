import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent section header used across every page section. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start",
        className
      )}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
