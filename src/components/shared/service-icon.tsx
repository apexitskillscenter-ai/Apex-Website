import {
  MessagesSquare,
  TrendingUp,
  FileText,
  Compass,
  GraduationCap,
  Handshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  MessagesSquare,
  TrendingUp,
  FileText,
  Compass,
  GraduationCap,
  Handshake,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Sparkles;
  return <Icon className={cn("h-6 w-6", className)} />;
}
