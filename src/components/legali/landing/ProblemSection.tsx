import * as React from "react"
import { cn } from "@/lib/utils"
import { AlertTriangle, Users, HelpCircle, Scale } from "lucide-react"
import { LegaliMascot, MascotMotion } from "../mascot/LegaliMascot"
import { AnimatedBackground } from "../composite/AnimatedBackground"
import { SpotlightCard } from "../atomic/SpotlightCard"
import { SectionBadge } from "../atomic/SectionBadge"

export interface ProblemItem {
  stat: string
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
}

export interface ProblemSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Problems/stats to display */
  problems?: ProblemItem[]
  /** Mascot speech bubble text */
  mascotMessage?: React.ReactNode
}

const defaultProblems: ProblemItem[] = [
  {
    stat: "15M",
    title: "Americans navigate courts alone",
    description:
      "Every year, millions face the legal system without guidance, overwhelmed by complex procedures.",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    stat: "75%",
    title: "Civil cases self-represented",
    description:
      "Three-quarters of civil cases involve people who can't afford traditional legal representation.",
    icon: <HelpCircle className="w-6 h-6" />,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    stat: "3%",
    title: "Win rate without help",
    description:
      "Without proper guidance, people often accept unfair settlements or lose winnable cases.",
    icon: <Scale className="w-6 h-6" />,
    gradient: "from-red-500 to-rose-500",
  },
]

/**
 * Problem/justice gap section with stat cards and mascot.
 * Highlights the issues that the product solves.
 */
const ProblemSection = React.forwardRef<HTMLElement, ProblemSectionProps>(
  (
    {
      className,
      problems = defaultProblems,
      mascotMessage = (
        <>
          "That's why we built Legali—to level the playing field and give everyone{" "}
          <span className="text-[#4eaed0] font-bold">equal access to justice</span>
          ."
        </>
      ),
      ...props
    },
    ref
  ) => {
    const getSpotlightColor = (gradient: string) => {
      if (gradient.includes("rose")) return "rgba(225, 29, 72, 0.15)"
      if (gradient.includes("amber")) return "rgba(217, 119, 6, 0.15)"
      return "rgba(225, 29, 72, 0.15)"
    }

    return (
      <section
        id="problem"
        ref={ref}
        className={cn("relative py-24 px-6 overflow-hidden", className)}
        {...props}
      >
        <AnimatedBackground />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionBadge
              icon={<AlertTriangle className="w-4 h-4" />}
              label="The Justice Gap"
              variant="danger"
              className="mb-6"
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              The legal system wasn't built
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
                for everyone
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Millions of people are denied justice every year simply because they
              can't afford—or access—proper legal help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <SpotlightCard
                key={problem.title}
                className="relative p-8 rounded-3xl group transition-all duration-500 hover:-translate-y-2"
                spotlightColor={getSpotlightColor(problem.gradient)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${problem.gradient} opacity-10 rounded-bl-[100px] rounded-tr-3xl group-hover:opacity-20 transition-opacity`}
                />

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${problem.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {problem.icon}
                </div>

                <div className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                  {problem.stat}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {problem.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">{problem.description}</p>
              </SpotlightCard>
            ))}
          </div>

          {/* Mascot with speech bubble */}
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-4">
            <LegaliMascot
              motion={MascotMotion.IDEA}
              width={200}
              height={200}
              className="shrink-0"
            />
            <SpotlightCard className="p-6 rounded-2xl max-w-md relative w-full">
              <div className="hidden md:block absolute left-0 bottom-4 -translate-x-2 w-4 h-4 bg-white/80 rotate-45" />
              <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-white/80 rotate-45" />
              <p className="text-slate-700 font-medium relative z-10 text-center md:text-left">
                {mascotMessage}
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>
    )
  }
)

ProblemSection.displayName = "ProblemSection"

export { ProblemSection }
