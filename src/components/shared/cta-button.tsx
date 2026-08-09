import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/** Internal-link CTA. */
export function CTAButton({
  href,
  children,
  ...props
}: { href: string; children: React.ReactNode } & ButtonProps) {
  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

/** Click-to-call CTA — opens the dialer on mobile. */
export function CallButton(props: ButtonProps) {
  return (
    <Button asChild variant="outline" {...props}>
      <a href={`tel:${siteConfig.contact.phone}`}>
        <Phone className="h-4 w-4" />
        {siteConfig.contact.phoneDisplay}
      </a>
    </Button>
  );
}

/**
 * WhatsApp CTA — opens a chat with a pre-filled message. The signature green
 * keeps it instantly recognisable. `message` lets callers customise the text
 * (e.g. per course). Reusable anywhere a WhatsApp action is needed.
 */
export function WhatsAppButton({
  message = `Assalam o Alaikum! I'm interested in courses at ${siteConfig.shortName}.`,
  children = "WhatsApp",
  className,
  ...props
}: { message?: string; children?: React.ReactNode } & ButtonProps) {
  const href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  return (
    <Button
      asChild
      // Secondary variant has no gradient/glow; we override to WhatsApp green.
      variant="secondary"
      className={cn(
        "bg-[#25D366] font-semibold text-white hover:bg-[#1ebe5d]",
        className
      )}
      {...props}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-4 w-4" />
        {children}
      </a>
    </Button>
  );
}
