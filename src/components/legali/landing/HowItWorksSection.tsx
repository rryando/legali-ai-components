import * as React from "react"
import { cn } from "@/lib/utils"
import { Search, Zap, ArrowUpRight, ArrowRight } from "lucide-react"
import { AnimatedBackground } from "../composite/AnimatedBackground"
import { SpotlightCard } from "../atomic/SpotlightCard"

export interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
}

export interface HowItWorksSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Steps to display */
  steps?: Step[]
  /** Section title */
  title?: React.ReactNode
}

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Describe Your Situation",
    description:
      "Upload documents or tell us about your legal matter. Our AI understands context and complexity.",
    icon: <Search className="w-6 h-6" />,
    gradient: "from-[#4eaed0] to-[#667eea]",
  },
  {
    number: "02",
    title: "Get Instant Analysis",
    description:
      "Receive a comprehensive risk assessment in plain language with actionable recommendations.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-[#667eea] to-[#764ba2]",
  },
  {
    number: "03",
    title: "Choose Your Path",
    description:
      "Handle it yourself with our tools, connect with an attorney, or let us file on your behalf.",
    icon: <ArrowUpRight className="w-6 h-6" />,
    gradient: "from-[#764ba2] to-[#f472b6]",
  },
]

/**
 * How it works section with numbered step cards.
 * Includes connection line between steps.
 */
const HowItWorksSection = React.forwardRef<HTMLElement, HowItWorksSectionProps>(
  (
    {
      className,
      steps = defaultSteps,
      title = (
        <>
          Three simple steps to
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2]">
            legal clarity
          </span>
        </>
      ),
      ...props
    },
    ref
  ) => {
    const getSpotlightColor = (gradient: string) => {
      if (gradient.includes("4eaed0")) return "rgba(78, 174, 208, 0.15)"
      if (gradient.includes("764ba2")) return "rgba(118, 75, 162, 0.15)"
      return "rgba(244, 114, 182, 0.15)"
    }

    return (
      <section
        id="how-it-works"
        ref={ref}
        className={cn("relative py-24 px-6 overflow-hidden", className)}
        {...props}
      >
        <AnimatedBackground />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              {title}
            </h2>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] -translate-y-1/2" />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <SpotlightCard
                    className="p-8 rounded-3xl text-center hover:-translate-y-2 transition-all duration-500 group"
                    spotlightColor={getSpotlightColor(step.gradient)}
                  >
                    {/* Step icon */}
                    <div
                      className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.icon}
                    </div>

                    <div
                      className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.gradient} mb-2`}
                    >
                      Step {step.number}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-slate-600">{step.description}</p>
                  </SpotlightCard>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 w-8 h-8 bg-white rounded-full shadow-lg items-center justify-center z-10 -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-[#667eea]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
)

HowItWorksSection.displayName = "HowItWorksSection"

export { HowItWorksSection }
