import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedBy } from "@/components/sections/trusted-by";
import { CTABand } from "@/components/sections/cta-band";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQSection } from "@/components/sections/faq-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <TrustedBy />
      <CTABand />
      <BlogPreview />
      <FAQSection />
    </>
  );
}
