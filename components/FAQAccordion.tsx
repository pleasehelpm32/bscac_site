// components/FAQAccordion.tsx
"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({
  items,
  className = "",
}: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={className}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b border-gray-200"
        >
          <AccordionTrigger className="text-left text-lg font-medium text-primary hover:text-primary/80 py-4">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
