import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Services } from "@/components/sections/services";
import { LeadCTA } from "@/components/sections/lead-cta";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Career support services at Apex IT Skills Center Zafarwal: interview preparation, resume writing, career counselling, final year projects, and job placement assistance.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Services />
      <LeadCTA />
    </>
  );
}
