import * as React from "react"
import { cn } from "@/lib/utils"
import {
  AlertTriangle,
  Building2,
  Users,
  DollarSign,
  Sparkles,
  Check,
  ArrowRight,
} from "lucide-react"
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot/LegaliMascot"
import { SpotlightCard } from "../atomic/SpotlightCard"
import { SectionBadge } from "../atomic/SectionBadge"

export interface Feature {
  id: number
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  mascotMotion: MascotMotionType
  gradient: string
  highlights: string[]
}

export interface FeaturesSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Features to display */
  features?: Feature[]
  /** Section title */
  title?: React.ReactNode
}

const defaultFeatures: Feature[] = [
  {
    id: 0,
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Red Flag Analysis",
    subtitle: "Instant Risk Assessment",
    description:
      "Upload any document or describe your situation. Our AI instantly identifies legal risks, critical deadlines, and key issues in plain language.",
    mascotMotion: MascotMotion.READING,
    gradient: "from-rose-500 to-pink-500",
    highlights: ["Document scanning", "Deadline detection", "Risk scoring", "Plain language explanations"],
  },
  {
    id: 1,
    icon: <Building2 className="w-6 h-6" />,
    title: "Case Builder",
    subtitle: "Build Your Legal Strategy",
    description:
      "Transform your story into a court-ready case with organized evidence, timelines, legal arguments, and attorney-ready dossiers.",
    mascotMotion: MascotMotion.WRITING,
    gradient: "from-[#4eaed0] to-[#667eea]",
    highlights: ["Evidence organization", "Timeline creation", "Legal drafting", "Filing assistance"],
  },
  {
    id: 2,
    icon: <Users className="w-6 h-6" />,
    title: "Lawyer Marketplace",
    subtitle: "Find Your Perfect Match",
    description:
      "Browse verified attorneys by expertise, share your case instantly, get upfront pricing, and communicate directly through our platform.",
    mascotMotion: MascotMotion.SPEAKING,
    gradient: "from-violet-500 to-purple-500",
    highlights: ["Verified attorneys", "Transparent pricing", "Instant sharing", "Direct messaging"],
  },
  {
    id: 3,
    icon: <DollarSign className="w-6 h-6" />,
    title: "Litigation Funding",
    subtitle: "Fund Your Fight",
    description:
      "Launch transparent campaigns for funding or invest in meritorious cases. Track progress and milestones in real-time.",
    mascotMotion: MascotMotion.CELEBRATE,
    gradient: "from-emerald-500 to-teal-500",
    highlights: ["Transparent campaigns", "Milestone tracking", "Investor matching", "Real-time updates"],
  },
]

/**
 * Features section with interactive tabs and mascot.
 * Shows feature details with highlights on selection.
 */
const FeaturesSection = React.forwardRef<HTMLElement, FeaturesSectionProps>(
  (
    {
      className,
      features = defaultFeatures,
      title = (
        <>
          Everything you need,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4eaed0] to-[#667eea]">
            one platform
          </span>
        </>
      ),
      ...props
    },
    ref
  ) => {
    const [activeFeature, setActiveFeature] = React.useState(0)
    const [mascotMotion, setMascotMotion] = React.useState<MascotMotionType>(
      MascotMotion.LAPTOP
    )

    React.useEffect(() => {
      setMascotMotion(features[activeFeature].mascotMotion)
    }, [activeFeature, features])

    return (
      <section
        id="features"
        ref={ref}
        className={cn("relative py-24 px-6 overflow-hidden bg-slate-50/50", className)}
        {...props}
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionBadge
              icon={<Sparkles className="w-4 h-4" />}
              label="Complete Legal Toolkit"
              className="mb-6"
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              {title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={cn(
                    "w-full text-left p-6 rounded-2xl transition-all duration-500",
                    activeFeature === index
                      ? "bg-white shadow-xl shadow-slate-200/50 border border-slate-100"
                      : "bg-transparent hover:bg-white/50 border border-transparent"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                        activeFeature === index
                          ? `bg-gradient-to-br ${feature.gradient} text-white shadow-lg`
                          : "bg-slate-100 text-slate-500"
                      )}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={cn(
                            "font-bold text-lg transition-colors",
                            activeFeature === index ? "text-slate-900" : "text-slate-700"
                          )}
                        >
                          {feature.title}
                        </h3>
                        {activeFeature === index && (
                          <ArrowRight className="w-4 h-4 text-[#4eaed0] animate-in slide-in-from-left" />
                        )}
                      </div>
                      <p
                        className={cn(
                          "text-sm transition-colors",
                          activeFeature === index ? "text-slate-600" : "text-slate-500"
                        )}
                      >
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>

                  {activeFeature === index && (
                    <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top duration-300">
                      <p className="text-slate-600 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700"
                          >
                            <Check className="w-3 h-3 text-emerald-500" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Mascot Display */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[350px]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].gradient} opacity-20 rounded-full blur-3xl scale-110 transition-all duration-500`}
                />

                <SpotlightCard className="absolute inset-x-0 bottom-0 p-6 rounded-2xl -z-10 transform translate-y-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${features[activeFeature].gradient} flex items-center justify-center text-white`}
                    >
                      {features[activeFeature].icon}
                    </div>
                    <span className="font-bold text-slate-800">
                      {features[activeFeature].title}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${features[activeFeature].gradient} rounded-full transition-all duration-500`}
                      style={{ width: "75%" }}
                    />
                  </div>
                </SpotlightCard>

                <LegaliMascot
                  motion={mascotMotion}
                  width="100%"
                  height={350}
                  className="relative z-10 drop-shadow-2xl max-w-[280px] md:max-w-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

FeaturesSection.displayName = "FeaturesSection"

export { FeaturesSection }
