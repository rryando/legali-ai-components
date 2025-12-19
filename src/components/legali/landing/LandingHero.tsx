import { AlertTriangle, BookOpen, FileText, Gavel, Scale, Search, Sparkles } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "../atomic/AnimatedCounter";
import { SpotlightCard } from "../atomic/SpotlightCard";
import { AnimatedBackground } from "../composite/AnimatedBackground";
import { useTypingAnimation } from "../hooks/useAnimations";
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot/LegaliMascot";

export interface QuickAction {
  icon: React.ReactNode;
  label: string;
}

export interface HeroStat {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface LandingHeroProps extends React.HTMLAttributes<HTMLElement> {
  /** Callback when Analyze button is clicked */
  onGetStarted?: () => void;
  /** Quick action buttons below search */
  quickActions?: QuickAction[];
  /** Typing animation placeholder phrases */
  placeholderPhrases?: string[];
  /** Stats to display */
  stats?: HeroStat[];
}

const defaultQuickActions: QuickAction[] = [
  { icon: <AlertTriangle className="h-4 w-4" />, label: "Red Flag Analysis" },
  { icon: <FileText className="h-4 w-4" />, label: "Document Review" },
  { icon: <Scale className="h-4 w-4" />, label: "Case Builder" },
];

const defaultPlaceholders = [
  "I received an eviction notice...",
  "My employer didn't pay overtime...",
  "I need to review a contract...",
  "How do I file a small claims case?",
  "What are my rights as a tenant?",
];

const defaultStats: HeroStat[] = [
  { target: 50, suffix: "K+", label: "Cases Analyzed" },
  { target: 98, suffix: "%", label: "Accuracy Rate" },
  { target: 500, suffix: "+", label: "Partner Attorneys" },
  { target: 49, suffix: "", label: "User Rating" },
];

/**
 * Hero section with search input, mascot, and stats.
 * Includes typing animation and interactive mascot reactions.
 */
const LandingHero = React.forwardRef<HTMLElement, LandingHeroProps>(
  (
    {
      className,
      onGetStarted,
      quickActions = defaultQuickActions,
      placeholderPhrases = defaultPlaceholders,
      stats = defaultStats,
      ...props
    },
    ref
  ) => {
    const [mascotMotion, setMascotMotion] = React.useState<MascotMotionType>(MascotMotion.WAVING);
    const [inputValue, setInputValue] = React.useState("");
    const [isFocused, setIsFocused] = React.useState(false);

    const typingText = useTypingAnimation(placeholderPhrases, 60, 30, 2500);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        if (!(isFocused || inputValue)) {
          setMascotMotion(MascotMotion.IDLE);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }, [isFocused, inputValue]);

    const handleInputFocus = () => {
      setIsFocused(true);
      setMascotMotion(MascotMotion.THINKING);
    };

    const handleInputBlur = () => {
      setIsFocused(false);
      if (!inputValue) {
        setMascotMotion(MascotMotion.IDLE);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);

      if (value.length > 20) {
        setMascotMotion(MascotMotion.READING);
      } else if (value.length > 0) {
        setMascotMotion(MascotMotion.THINKING);
      }
    };

    const handleAnalyzeClick = () => {
      setMascotMotion(MascotMotion.CELEBRATE);
      setTimeout(() => {
        onGetStarted?.();
      }, 500);
    };

    return (
      <section
        className={cn("relative min-h-screen overflow-hidden px-6 pt-32 pb-20", className)}
        id="hero"
        ref={ref}
        {...props}
      >
        <AnimatedBackground enableParallax />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Content */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              {/* Badge */}
              <div className="fade-in slide-in-from-bottom mb-8 inline-flex animate-in items-center gap-2 rounded-full border border-[#4eaed0]/20 bg-gradient-to-r from-[#4eaed0]/10 to-[#667eea]/10 px-4 py-2 duration-700">
                <Sparkles className="h-4 w-4 text-[#4eaed0]" />
                <span className="font-medium text-slate-700 text-sm">
                  AI-Powered Legal Intelligence
                </span>
              </div>

              {/* Headline */}
              <h1 className="fade-in slide-in-from-bottom mb-6 animate-in font-bold text-4xl text-slate-900 leading-[1.1] tracking-tight delay-100 duration-700 md:text-5xl lg:text-6xl xl:text-7xl">
                Legal guidance
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                    reimagined
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    fill="none"
                    viewBox="0 0 300 12"
                  >
                    <path
                      d="M2 10C50 2 250 2 298 10"
                      stroke="url(#underline-gradient)"
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" x2="300" y1="0" y2="0">
                        <stop stopColor="#4eaed0" />
                        <stop offset="0.5" stopColor="#667eea" />
                        <stop offset="1" stopColor="#764ba2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              {/* Subtext */}
              <p className="fade-in slide-in-from-bottom mx-auto mb-10 max-w-xl animate-in text-lg text-slate-600 leading-relaxed delay-200 duration-700 md:text-xl lg:mx-0">
                Navigate the legal system with confidence. Get instant AI-powered analysis, build
                your case, and connect with qualified attorneys—all in one platform.
              </p>

              {/* Search Input */}
              <div className="fade-in slide-in-from-bottom mx-auto mb-8 max-w-xl animate-in delay-300 duration-700 lg:mx-0">
                <SpotlightCard className="rounded-3xl border-white/40 p-2 shadow-2xl shadow-blue-500/5 ring-1 ring-white/50 backdrop-blur-2xl">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        className="w-full bg-transparent py-4 pr-4 pl-12 text-base text-slate-800 outline-none placeholder:text-slate-400"
                        onBlur={handleInputBlur}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        placeholder={
                          inputValue ? "" : typingText || "Describe your legal situation..."
                        }
                        type="text"
                        value={inputValue}
                      />
                    </div>
                    <Button
                      className="h-auto animate-shimmer rounded-xl bg-[length:200%_100%] bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-500 hover:bg-right"
                      onClick={handleAnalyzeClick}
                    >
                      Analyze
                    </Button>
                  </div>
                </SpotlightCard>
              </div>

              {/* Quick Actions */}
              <div className="fade-in slide-in-from-bottom flex animate-in flex-wrap justify-center gap-3 delay-400 duration-700 lg:justify-start">
                {quickActions.map((item) => (
                  <button
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white/60 px-4 py-2.5 font-medium text-slate-700 text-sm backdrop-blur-sm transition-all duration-300 hover:border-[#4eaed0]/30 hover:bg-white hover:text-[#4eaed0] hover:shadow-lg hover:shadow-slate-200/50"
                    key={item.label}
                  >
                    <span className="text-[#4eaed0] transition-transform group-hover:scale-110">
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Mascot */}
            <div className="fade-in zoom-in relative order-last my-8 h-[300px] w-full animate-in duration-1000 lg:hidden">
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-[#4eaed0]/30 via-[#667eea]/20 to-[#764ba2]/30 blur-3xl" />
              <div
                className="absolute top-0 right-10 flex h-12 w-12 animate-bounce items-center justify-center rounded-xl bg-white/80 shadow-xl backdrop-blur-xl"
                style={{ animationDuration: "3s" }}
              >
                <Scale className="h-6 w-6 text-[#4eaed0]" />
              </div>
              <div
                className="absolute bottom-10 left-10 flex h-10 w-10 animate-bounce items-center justify-center rounded-lg bg-white/80 shadow-xl backdrop-blur-xl"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <Sparkles className="h-5 w-5 text-[#764ba2]" />
              </div>
              <LegaliMascot
                className="relative z-10 mx-auto drop-shadow-2xl"
                height={300}
                motion={mascotMotion}
                width="100%"
              />
            </div>

            {/* Desktop Mascot */}
            <div className="fade-in zoom-in relative order-1 hidden animate-in justify-center duration-1000 lg:order-2 lg:flex lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-[#4eaed0]/30 via-[#667eea]/20 to-[#764ba2]/30 blur-3xl" />
                <div
                  className="absolute -top-8 -left-8 flex h-16 w-16 animate-bounce items-center justify-center rounded-2xl bg-white/80 shadow-xl backdrop-blur-xl"
                  style={{ animationDuration: "3s" }}
                >
                  <Scale className="h-8 w-8 text-[#4eaed0]" />
                </div>
                <div
                  className="absolute -bottom-4 -left-12 flex h-14 w-14 animate-bounce items-center justify-center rounded-2xl bg-white/80 shadow-xl backdrop-blur-xl"
                  style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
                >
                  <FileText className="h-7 w-7 text-[#667eea]" />
                </div>
                <div
                  className="absolute top-1/4 -right-8 flex h-12 w-12 animate-bounce items-center justify-center rounded-xl bg-white/80 shadow-xl backdrop-blur-xl"
                  style={{ animationDuration: "4s", animationDelay: "1s" }}
                >
                  <Sparkles className="h-6 w-6 text-[#764ba2]" />
                </div>
                <div
                  className="absolute -right-6 bottom-1/3 flex h-10 w-10 animate-bounce items-center justify-center rounded-lg bg-white/80 shadow-xl backdrop-blur-xl"
                  style={{ animationDuration: "3.2s", animationDelay: "1.5s" }}
                >
                  <Gavel className="h-5 w-5 text-[#4eaed0]" />
                </div>
                <div
                  className="absolute top-1/2 -left-6 flex h-10 w-10 animate-bounce items-center justify-center rounded-lg bg-white/80 shadow-xl backdrop-blur-xl"
                  style={{ animationDuration: "4.5s", animationDelay: "0.8s" }}
                >
                  <BookOpen className="h-5 w-5 text-[#f472b6]" />
                </div>
                <LegaliMascot
                  className="relative z-10 drop-shadow-2xl"
                  height={400}
                  motion={mascotMotion}
                  width={400}
                />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="fade-in slide-in-from-bottom mt-20 grid animate-in grid-cols-2 gap-6 delay-500 duration-700 md:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
                target={stat.target}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

LandingHero.displayName = "LandingHero";

export { LandingHero };
