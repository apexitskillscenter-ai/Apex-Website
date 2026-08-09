import {
  Code2,
  Atom,
  Palette,
  Figma,
  Monitor,
  Table2,
  TrendingUp,
  Briefcase,
  Ruler,
  LineChart,
  Languages,
  Baby,
  Clapperboard,
  Share2,
  ShoppingCart,
  Keyboard,
  FolderKanban,
  FlaskConical,
  BookOpenCheck,
  Headphones,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** Maps the `icon` string in course content to a Lucide component. */
const ICONS: Record<string, LucideIcon> = {
  Code2,
  Atom,
  Palette,
  Figma,
  Monitor,
  Table2,
  TrendingUp,
  Briefcase,
  Ruler,
  LineChart,
  Languages,
  Baby,
  Clapperboard,
  Share2,
  ShoppingCart,
  Keyboard,
  FolderKanban,
  FlaskConical,
  BookOpenCheck,
  Headphones,
  GraduationCap,
};

export function CourseIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? GraduationCap;
  return <Icon className={cn("h-6 w-6", className)} />;
}
