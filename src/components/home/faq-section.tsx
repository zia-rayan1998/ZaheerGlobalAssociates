"use client";

import { faqs } from "@/data/faq";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Common questions about HMDA permissions, GHMC approvals, Fire NOC, and our consultancy services in Hyderabad."
        />

        <div className="mx-auto max-w-3xl rounded-2xl border border-white bg-white px-6 shadow-xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
