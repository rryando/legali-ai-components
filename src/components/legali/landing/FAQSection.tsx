import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { AnimatedBackground } from "../composite/AnimatedBackground"
import { SpotlightCard } from "../atomic/SpotlightCard"

export interface FAQ {
  question: string
  answer: string
}

export interface FAQSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** FAQ items to display */
  faqs?: FAQ[]
  /** Section title */
  title?: string
  /** Section subtitle */
  subtitle?: string
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
]

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
  ) => {
    return (
      <section
        id="faq"
        ref={ref}
        className={cn("relative py-24 px-6 overflow-hidden", className)}
        {...props}
      >
        <AnimatedBackground />

        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-lg text-slate-600">{subtitle}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <SpotlightCard
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-slate-900 pr-8">
                      {faq.question}
                    </h3>
                    <div className="w-10 h-10 rounded-xl bg-[#4eaed0]/10 flex items-center justify-center text-[#4eaed0] transition-all duration-300 group-open:rotate-180 group-open:bg-[#4eaed0] group-open:text-white">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                </details>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

FAQSection.displayName = "FAQSection"

export { FAQSection }
