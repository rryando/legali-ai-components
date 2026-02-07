/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-faq-section.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-faq-section.json"
 */
import { ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "../atomic/SpotlightCard";
import { AnimatedBackground } from "../composite/AnimatedBackground";

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** FAQ items to display */
  faqs?: FAQ[];
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
}

const defaultFAQs: FAQ[] = [
  {
    question: "Is Legali a law firm?",
    answer:
      "No, Legali is an AI-powered legal intelligence platform. We provide information, tools, and connections to lawyers, but we do not provide legal advice or representation directly.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "Our AI is trained on millions of legal documents and case laws. While highly accurate for identifying risks and issues, it should be used as a starting point and verified by a qualified attorney for important decisions.",
  },
  {
    question: "Can I use Legali for any type of case?",
    answer:
      "Legali currently specializes in civil litigation, contract disputes, employment law, and personal injury. We are constantly expanding our capabilities to cover more practice areas.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer a free tier for basic analysis and document organization. Premium features like advanced case building and lawyer matching are available starting at $29/month.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption, are SOC 2 Type II compliant, and never share your data with third parties. Your legal information stays completely private.",
  },
];

/**
 * FAQ section with expandable accordion items.
 * Uses native details/summary elements with custom styling.
 */
const FAQSection = React.forwardRef<HTMLElement, FAQSectionProps>(
  (
    {
      className,
      faqs = defaultFAQs,
      title = "Frequently asked questions",
      subtitle = "Everything you need to know about Legali",
      ...props
    },
    ref
  ) => (
    <section
      className={cn("relative overflow-hidden px-6 py-24", className)}
      id="faq"
      ref={ref}
      {...props}
    >
      <AnimatedBackground />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl text-slate-900 tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="text-lg text-slate-600">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <SpotlightCard
              className="overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg"
              key={index}
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                  <h3 className="pr-8 font-semibold text-lg text-slate-900">{faq.question}</h3>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4eaed0]/10 text-[#4eaed0] transition-all duration-300 group-open:rotate-180 group-open:bg-[#4eaed0] group-open:text-white">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </summary>
                <div className="fade-in slide-in-from-top-2 animate-in px-6 pb-6 text-slate-600 leading-relaxed duration-300">
                  {faq.answer}
                </div>
              </details>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
);

FAQSection.displayName = "FAQSection";

export { FAQSection };
