import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

/**
 * MDX typography components — applied automatically when blog posts render.
 * Styled for the light navy+red theme.
 */
const components = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-10 mb-4 font-display text-2xl font-semibold text-foreground" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-8 mb-3 font-display text-xl font-semibold text-foreground" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-4 ml-5 list-disc space-y-2 text-muted-foreground" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mb-4 ml-5 list-decimal space-y-2 text-muted-foreground" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="my-6 rounded-r-lg border-l-4 border-primary bg-secondary/50 py-3 pl-5 pr-4 italic text-foreground" {...props} />
  ),
  a: ({ href = "#", ...props }: ComponentPropsWithoutRef<"a">) => {
    if (href.startsWith("/")) {
      return <Link href={href} className="text-primary underline-offset-4 hover:underline" {...props} />;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline" {...props} />;
  },
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
};

export default components;
