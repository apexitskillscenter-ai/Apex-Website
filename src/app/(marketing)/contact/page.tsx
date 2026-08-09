import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import { LeadForm } from "@/components/forms/lead-form";
import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Apex IT Skills Center Zafarwal. Call, email, or message us on WhatsApp. We're here to help you start your IT journey.",
  path: "/contact",
});

const channels = [
  { icon: Phone, label: "Phone", value: siteConfig.contact.phoneDisplay, href: `tel:${siteConfig.contact.phone}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${siteConfig.contact.whatsapp}` },
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: MapPin, label: "Address", value: siteConfig.contact.address, href: siteConfig.contact.mapsUrl },
];

export default function ContactPage() {
  return (
    <section className="container py-20 sm:py-24">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let&apos;s <GradientText>talk</GradientText></>}
        subtitle="Have a question about a course, fee, or batch timing? Reach out — we usually reply the same day."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="space-y-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <c.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-sm text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <div className="text-sm text-muted-foreground">Office hours</div>
                <div className="font-medium">Mon–Sat, 9:00 AM – 8:00 PM</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glow rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="mb-1 font-display text-xl font-semibold">Send a message</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              We&apos;ll get back to you as soon as possible.
            </p>
            <LeadForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
