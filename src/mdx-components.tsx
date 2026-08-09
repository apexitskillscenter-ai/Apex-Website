import type { MDXComponents } from "mdx/types";
import components from "@/components/blog/mdx-content";

/**
 * Required by @next/mdx — applies custom typography components
 * to all MDX files globally.
 */
export function useMDXComponents(inherited: MDXComponents): MDXComponents {
  return { ...inherited, ...components };
}
