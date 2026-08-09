import { cn } from "@/lib/utils";

/** Applies the brand cyan→violet gradient to inline text. */
export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("text-gradient", className)}>{children}</span>;
}
