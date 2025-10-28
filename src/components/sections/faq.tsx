"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

// A simple utility for conditional class names, similar to `clsx`.
// This is typically located in `src/lib/utils.ts` in a shadcn/ui project.
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

// Custom Accordion components based on shadcn/ui but adapted for this section's specific needs (e.g., plus/minus icon).

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("bg-card rounded-lg shadow-sm border-none overflow-hidden", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between p-6 text-left font-semibold text-lg text-card-foreground transition-all hover:no-underline",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-data-[state=open]:hidden" />
      <Minus className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-data-[state=closed]:hidden" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-6 pb-6 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = AccordionPrimitive.Content.displayName;

const faqData = [
  {
    id: "item-1",
    question: "What is the typical cost of an STP/ETP plant?",
    answer: "The cost of an STP/ETP plant varies significantly based on factors like capacity, technology used, site conditions, and effluent quality requirements. We provide custom quotes after a detailed assessment of your needs. A small-scale plant might start from ₹5 lakhs, while large industrial plants can cost several crores.",
  },
  {
    id: "item-2",
    question: "Do you handle government approvals?",
    answer: "Yes, absolutely. We provide end-to-end solutions, which include assistance with all necessary government and Pollution Control Board (PCB) approvals. Our team is well-versed in the regulatory landscape to ensure your plant is fully compliant.",
  },
  {
    id: "item-3",
    question: "Do you provide maintenance services?",
    answer: "Yes, we offer comprehensive Annual Maintenance Contracts (AMC) to ensure your plant operates efficiently and sustainably. Our services include regular check-ups, operational support, and troubleshooting to maximize plant uptime and performance.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-blue-50/50 py-24 sm:py-28 dark:bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get answers to common questions about our water treatment solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <CustomAccordionTrigger>{item.question}</CustomAccordionTrigger>
                <CustomAccordionContent>
                  <p className="text-muted">
                    {item.answer}
                  </p>
                </CustomAccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <a href="#office">
            <Button size="lg" className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}