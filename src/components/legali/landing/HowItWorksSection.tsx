/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-how-it-works-section.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-how-it-works-section.json"
 */
import { ArrowRight, ArrowUpRight, Search, Zap } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "../atomic/SpotlightCard";
import { AnimatedBackground } from "../composite/AnimatedBackground";

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export interface HowItWorksSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Steps to display */
  steps?: Step[];
  /** Section title */
  title?: React.ReactNode;
}

const defaultSteps: Step[] = [
  {
    number: "01",
    title: "Describe Your Situation",
    description:
      "Upload documents or tell us about your legal matter. Our AI understands context and complexity.",
    icon: <Search className="h-6 w-6" />,
    gradient: "from-[#4eaed0] to-[#667eea]",
  },
  {
    number: "02",
    title: "Get Instant Analysis",
    description:
      "Receive a comprehensive risk assessment in plain language with actionable recommendations.",
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-[#667eea] to-[#764ba2]",
  },
  {
    number: "03",
    title: "Choose Your Path",
    description:
      "Handle it yourself with our tools, connect with an attorney, or let us file on your behalf.",
    icon: <ArrowUpRight className="h-6 w-6" />,
    gradient: "from-[#764ba2] to-[#f472b6]",
  },
];

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
          <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            legal clarity
          </span>
        </>
      ),
      ...props
    },
    ref
  ) => {
    const getSpotlightColor = (gradient: string) => {
      if (gradient.includes("4eaed0")) return "rgba(78, 174, 208, 0.15)";
      if (gradient.includes("764ba2")) return "rgba(118, 75, 162, 0.15)";
      return "rgba(244, 114, 182, 0.15)";
    };

    return (
      <section
        className={cn("relative overflow-hidden px-6 py-24", className)}
        id="how-it-works"
        ref={ref}
        {...props}
      >
        <AnimatedBackground />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-3xl text-slate-900 tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 right-0 left-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] md:block" />

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div className="relative" key={step.number}>
                  <SpotlightCard
                    className="group rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2"
                    spotlightColor={getSpotlightColor(step.gradient)}
                  >
                    {/* Step icon */}
                    <div
                      className={`relative z-10 mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center font-bold text-2xl text-white shadow-xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      {step.icon}
                    </div>

                    <div
                      className={`bg-gradient-to-r bg-clip-text font-bold text-sm text-transparent ${step.gradient} mb-2`}
                    >
                      Step {step.number}
                    </div>

                    <h3 className="mb-3 font-bold text-slate-900 text-xl">{step.title}</h3>

                    <p className="text-slate-600">{step.description}</p>
                  </SpotlightCard>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg md:flex">
                      <ArrowRight className="h-4 w-4 text-[#667eea]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HowItWorksSection.displayName = "HowItWorksSection";

export { HowItWorksSection };
