import type { Metadata } from "next";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { faqs } from "@/content/faqs";
import { FAQSection } from "@/components/sections/faq-section";
import { LeadCTA } from "@/components/sections/lead-cta";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about courses, fees, certificates, timings and admissions at Apex IT Skills Center Zafarwal.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      {/* FAQPage structured data for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <FAQSection />
      <LeadCTA />
    </>
  );
}
