import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Check,
  DollarSign,
  Sparkles,
  Users,
} from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "../atomic/SectionBadge";
import { SpotlightCard } from "../atomic/SpotlightCard";
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot/LegaliMascot";

export interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  mascotMotion: MascotMotionType;
  gradient: string;
  highlights: string[];
}

export interface FeaturesSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Features to display */
  features?: Feature[];
  /** Section title */
  title?: React.ReactNode;
  /** Badge label text */
  badgeLabel?: string;
}

const defaultFeatures: Feature[] = [
  {
    id: 0,
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Red Flag Analysis",
    subtitle: "Instant Risk Assessment",
    description:
      "Upload any document or describe your situation. Our AI instantly identifies legal risks, critical deadlines, and key issues in plain language.",
    mascotMotion: MascotMotion.READING,
    gradient: "from-rose-500 to-pink-500",
    highlights: [
      "Document scanning",
      "Deadline detection",
      "Risk scoring",
      "Plain language explanations",
    ],
  },
  {
    id: 1,
    icon: <Building2 className="h-6 w-6" />,
    title: "Case Builder",
    subtitle: "Build Your Legal Strategy",
    description:
      "Transform your story into a court-ready case with organized evidence, timelines, legal arguments, and attorney-ready dossiers.",
    mascotMotion: MascotMotion.WRITING,
    gradient: "from-[#4eaed0] to-[#667eea]",
    highlights: [
      "Evidence organization",
      "Timeline creation",
      "Legal drafting",
      "Filing assistance",
    ],
  },
  {
    id: 2,
    icon: <Users className="h-6 w-6" />,
    title: "Lawyer Marketplace",
    subtitle: "Find Your Perfect Match",
    description:
      "Browse verified attorneys by expertise, share your case instantly, get upfront pricing, and communicate directly through our platform.",
    mascotMotion: MascotMotion.SPEAKING,
    gradient: "from-violet-500 to-purple-500",
    highlights: [
      "Verified attorneys",
      "Transparent pricing",
      "Instant sharing",
      "Direct messaging",
    ],
  },
  {
    id: 3,
    icon: <DollarSign className="h-6 w-6" />,
    title: "Litigation Funding",
    subtitle: "Fund Your Fight",
    description:
      "Launch transparent campaigns for funding or invest in meritorious cases. Track progress and milestones in real-time.",
    mascotMotion: MascotMotion.CELEBRATE,
    gradient: "from-emerald-500 to-teal-500",
    highlights: [
      "Transparent campaigns",
      "Milestone tracking",
      "Investor matching",
      "Real-time updates",
    ],
  },
];

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
          <span className="bg-gradient-to-r from-[#4eaed0] to-[#667eea] bg-clip-text text-transparent">
            one platform
          </span>
        </>
      ),
      badgeLabel = "Complete Legal Toolkit",
      ...props
    },
    ref
  ) => {
    const [activeFeature, setActiveFeature] = React.useState(0);
    const [mascotMotion, setMascotMotion] = React.useState<MascotMotionType>(MascotMotion.LAPTOP);

    React.useEffect(() => {
      setMascotMotion(features[activeFeature].mascotMotion);
    }, [activeFeature, features]);

    return (
      <section
        className={cn("relative overflow-hidden bg-slate-50/50 px-6 py-24", className)}
        id="features"
        ref={ref}
        {...props}
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <SectionBadge
              className="mb-6"
              icon={<Sparkles className="h-4 w-4" />}
              label={badgeLabel}
            />
            <h2 className="mb-4 font-bold text-3xl text-slate-900 tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  className={cn(
                    "w-full rounded-2xl p-6 text-left transition-all duration-500",
                    activeFeature === index
                      ? "border border-slate-100 bg-white shadow-slate-200/50 shadow-xl"
                      : "border border-transparent bg-transparent hover:bg-white/50"
                  )}
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                        activeFeature === index
                          ? `bg-gradient-to-br ${feature.gradient} text-white shadow-lg`
                          : "bg-slate-100 text-slate-500"
                      )}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h3
                          className={cn(
                            "font-bold text-lg transition-colors",
                            activeFeature === index ? "text-slate-900" : "text-slate-700"
                          )}
                        >
                          {feature.title}
                        </h3>
                        {activeFeature === index && (
                          <ArrowRight className="slide-in-from-left h-4 w-4 animate-in text-[#4eaed0]" />
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
                    <div className="fade-in slide-in-from-top mt-4 animate-in border-slate-100 border-t pt-4 duration-300">
                      <p className="mb-4 text-slate-600">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.highlights.map((highlight) => (
                          <span
                            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-3 py-1 font-medium text-slate-700 text-xs"
                            key={highlight}
                          >
                            <Check className="h-3 w-3 text-emerald-500" />
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
                  className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].gradient} scale-110 rounded-full opacity-20 blur-3xl transition-all duration-500`}
                />

                <SpotlightCard className="absolute inset-x-0 bottom-0 -z-10 translate-y-8 transform rounded-2xl p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-xl bg-gradient-to-br ${features[activeFeature].gradient} flex items-center justify-center text-white`}
                    >
                      {features[activeFeature].icon}
                    </div>
                    <span className="font-bold text-slate-800">
                      {features[activeFeature].title}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full bg-gradient-to-r ${features[activeFeature].gradient} rounded-full transition-all duration-500`}
                      style={{ width: "75%" }}
                    />
                  </div>
                </SpotlightCard>

                <LegaliMascot
                  className="relative z-10 max-w-[280px] drop-shadow-2xl md:max-w-[350px]"
                  height={350}
                  motion={mascotMotion}
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

FeaturesSection.displayName = "FeaturesSection";

export { FeaturesSection };
