"use client";

import { faqs } from "@/content/faqs";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradientText } from "@/components/shared/gradient-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="container py-20 sm:py-28">
      <SectionHeading
        eyebrow="FAQ"
        title={<>Questions? <GradientText>Answered.</GradientText></>}
        subtitle="Everything you need to know before you enroll."
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible>
          {faqs.map((f) => (
            <AccordionItem key={f.id} value={f.id}>
              <AccordionTrigger>{f.question}</AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
