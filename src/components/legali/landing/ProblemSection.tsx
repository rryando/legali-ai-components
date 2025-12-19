import { AlertTriangle, HelpCircle, Scale, Users } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "../atomic/SectionBadge";
import { SpotlightCard } from "../atomic/SpotlightCard";
import { AnimatedBackground } from "../composite/AnimatedBackground";
import { LegaliMascot, MascotMotion } from "../mascot/LegaliMascot";

export interface ProblemItem {
  stat: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export interface ProblemSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Problems/stats to display */
  problems?: ProblemItem[];
  /** Mascot speech bubble text */
  mascotMessage?: React.ReactNode;
}

const defaultProblems: ProblemItem[] = [
  {
    stat: "15M",
    title: "Americans navigate courts alone",
    description:
      "Every year, millions face the legal system without guidance, overwhelmed by complex procedures.",
    icon: <Users className="h-6 w-6" />,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    stat: "75%",
    title: "Civil cases self-represented",
    description:
      "Three-quarters of civil cases involve people who can't afford traditional legal representation.",
    icon: <HelpCircle className="h-6 w-6" />,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    stat: "3%",
    title: "Win rate without help",
    description:
      "Without proper guidance, people often accept unfair settlements or lose winnable cases.",
    icon: <Scale className="h-6 w-6" />,
    gradient: "from-red-500 to-rose-500",
  },
];

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
          <span className="font-bold text-[#4eaed0]">equal access to justice</span>
          ."
        </>
      ),
      ...props
    },
    ref
  ) => {
    const getSpotlightColor = (gradient: string) => {
      if (gradient.includes("rose")) return "rgba(225, 29, 72, 0.15)";
      if (gradient.includes("amber")) return "rgba(217, 119, 6, 0.15)";
      return "rgba(225, 29, 72, 0.15)";
    };

    return (
      <section
        className={cn("relative overflow-hidden px-6 py-24", className)}
        id="problem"
        ref={ref}
        {...props}
      >
        <AnimatedBackground />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <SectionBadge
              className="mb-6"
              icon={<AlertTriangle className="h-4 w-4" />}
              label="The Justice Gap"
              variant="danger"
            />
            <h2 className="mb-4 font-bold text-3xl text-slate-900 tracking-tight md:text-4xl lg:text-5xl">
              The legal system wasn't built
              <br />
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                for everyone
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Millions of people are denied justice every year simply because they can't afford—or
              access—proper legal help.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <SpotlightCard
                className="group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
                key={problem.title}
                spotlightColor={getSpotlightColor(problem.gradient)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute top-0 right-0 h-24 w-24 bg-gradient-to-br ${problem.gradient} rounded-tr-3xl rounded-bl-[100px] opacity-10 transition-opacity group-hover:opacity-20`}
                />

                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${problem.gradient} mb-6 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  {problem.icon}
                </div>

                <div className="mb-3 font-bold text-5xl text-slate-900 tracking-tight">
                  {problem.stat}
                </div>

                <h3 className="mb-3 font-bold text-slate-800 text-xl">{problem.title}</h3>

                <p className="text-slate-600 leading-relaxed">{problem.description}</p>
              </SpotlightCard>
            ))}
          </div>

          {/* Mascot with speech bubble */}
          <div className="mt-16 flex flex-col items-center justify-center gap-8 md:flex-row md:items-end md:gap-4">
            <LegaliMascot
              className="shrink-0"
              height={200}
              motion={MascotMotion.IDEA}
              width={200}
            />
            <SpotlightCard className="relative w-full max-w-md rounded-2xl p-6">
              <div className="absolute bottom-4 left-0 hidden h-4 w-4 -translate-x-2 rotate-45 bg-white/80 md:block" />
              <div className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-2 rotate-45 bg-white/80 md:hidden" />
              <p className="relative z-10 text-center font-medium text-slate-700 md:text-left">
                {mascotMessage}
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>
    );
  }
);

ProblemSection.displayName = "ProblemSection";

export { ProblemSection };
