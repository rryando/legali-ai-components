import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Search,
  Sparkles,
  AlertTriangle,
  FileText,
  Scale,
  Gavel,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/button"
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot/LegaliMascot"
import { useTypingAnimation } from "../hooks/useAnimations"
import { AnimatedBackground } from "../composite/AnimatedBackground"
import { AnimatedCounter } from "../atomic/AnimatedCounter"
import { SpotlightCard } from "../atomic/SpotlightCard"

export interface QuickAction {
  icon: React.ReactNode
  label: string
}

export interface LandingHeroProps extends React.HTMLAttributes<HTMLElement> {
  /** Callback when Analyze button is clicked */
  onGetStarted?: () => void
  /** Quick action buttons below search */
  quickActions?: QuickAction[]
  /** Typing animation placeholder phrases */
  placeholderPhrases?: string[]
  /** Stats to display */
  stats?: { target: number; suffix?: string; prefix?: string; label: string }[]
}

const defaultQuickActions: QuickAction[] = [
  { icon: <AlertTriangle className="w-4 h-4" />, label: "Red Flag Analysis" },
  { icon: <FileText className="w-4 h-4" />, label: "Document Review" },
  { icon: <Scale className="w-4 h-4" />, label: "Case Builder" },
]

const defaultPlaceholders = [
  "I received an eviction notice...",
  "My employer didn't pay overtime...",
  "I need to review a contract...",
  "How do I file a small claims case?",
  "What are my rights as a tenant?",
]

const defaultStats = [
  { target: 50, suffix: "K+", label: "Cases Analyzed" },
  { target: 98, suffix: "%", label: "Accuracy Rate" },
  { target: 500, suffix: "+", label: "Partner Attorneys" },
  { target: 49, suffix: "", label: "User Rating" },
]

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
    const [mascotMotion, setMascotMotion] = React.useState<MascotMotionType>(
      MascotMotion.WAVING
    )
    const [inputValue, setInputValue] = React.useState("")
    const [isFocused, setIsFocused] = React.useState(false)

    const typingText = useTypingAnimation(placeholderPhrases, 60, 30, 2500)

    React.useEffect(() => {
      const timer = setTimeout(() => {
        if (!isFocused && !inputValue) {
          setMascotMotion(MascotMotion.IDLE)
        }
      }, 3000)
      return () => clearTimeout(timer)
    }, [isFocused, inputValue])

    const handleInputFocus = () => {
      setIsFocused(true)
      setMascotMotion(MascotMotion.THINKING)
    }

    const handleInputBlur = () => {
      setIsFocused(false)
      if (!inputValue) {
        setMascotMotion(MascotMotion.IDLE)
      }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setInputValue(value)

      if (value.length > 20) {
        setMascotMotion(MascotMotion.READING)
      } else if (value.length > 0) {
        setMascotMotion(MascotMotion.THINKING)
      }
    }

    const handleAnalyzeClick = () => {
      setMascotMotion(MascotMotion.CELEBRATE)
      setTimeout(() => {
        onGetStarted?.()
      }, 500)
    }

    return (
      <section
        id="hero"
        ref={ref}
        className={cn(
          "relative min-h-screen pt-32 pb-20 px-6 overflow-hidden",
          className
        )}
        {...props}
      >
        <AnimatedBackground enableParallax />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4eaed0]/10 to-[#667eea]/10 border border-[#4eaed0]/20 mb-8 animate-in fade-in slide-in-from-bottom duration-700">
                <Sparkles className="w-4 h-4 text-[#4eaed0]" />
                <span className="text-sm font-medium text-slate-700">
                  AI-Powered Legal Intelligence
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                Legal guidance
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                    reimagined
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C50 2 250 2 298 10"
                      stroke="url(#underline-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="underline-gradient"
                        x1="0"
                        y1="0"
                        x2="300"
                        y2="0"
                      >
                        <stop stopColor="#4eaed0" />
                        <stop offset="0.5" stopColor="#667eea" />
                        <stop offset="1" stopColor="#764ba2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                Navigate the legal system with confidence. Get instant AI-powered
                analysis, build your case, and connect with qualified attorneys—all
                in one platform.
              </p>

              {/* Search Input */}
              <div className="max-w-xl mx-auto lg:mx-0 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                <SpotlightCard className="rounded-3xl p-2 shadow-2xl shadow-blue-500/5 border-white/40 ring-1 ring-white/50 backdrop-blur-2xl">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder={
                          inputValue
                            ? ""
                            : typingText || "Describe your legal situation..."
                        }
                        className="w-full pl-12 pr-4 py-4 text-base text-slate-800 placeholder:text-slate-400 bg-transparent outline-none"
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>
                    <Button
                      onClick={handleAnalyzeClick}
                      className="h-auto py-3.5 px-6 bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-[length:200%_100%] hover:bg-right text-white font-semibold rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-500 animate-shimmer"
                    >
                      Analyze
                    </Button>
                  </div>
                </SpotlightCard>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                {quickActions.map((item) => (
                  <button
                    key={item.label}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-xl text-sm font-medium text-slate-700 hover:bg-white hover:border-[#4eaed0]/30 hover:text-[#4eaed0] hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group"
                  >
                    <span className="text-[#4eaed0] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Mascot */}
            <div className="lg:hidden relative w-full h-[300px] my-8 animate-in fade-in zoom-in duration-1000 order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4eaed0]/30 via-[#667eea]/20 to-[#764ba2]/30 rounded-full blur-3xl scale-110" />
              <div
                className="absolute top-0 right-10 w-12 h-12 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Scale className="w-6 h-6 text-[#4eaed0]" />
              </div>
              <div
                className="absolute bottom-10 left-10 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-lg shadow-xl flex items-center justify-center animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <Sparkles className="w-5 h-5 text-[#764ba2]" />
              </div>
              <LegaliMascot
                motion={mascotMotion}
                width="100%"
                height={300}
                className="relative z-10 drop-shadow-2xl mx-auto"
              />
            </div>

            {/* Desktop Mascot */}
            <div className="hidden lg:flex relative order-1 lg:order-2 justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4eaed0]/30 via-[#667eea]/20 to-[#764ba2]/30 rounded-full blur-3xl scale-110" />
                <div
                  className="absolute -top-8 -left-8 w-16 h-16 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl flex items-center justify-center animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <Scale className="w-8 h-8 text-[#4eaed0]" />
                </div>
                <div
                  className="absolute -bottom-4 -left-12 w-14 h-14 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl flex items-center justify-center animate-bounce"
                  style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
                >
                  <FileText className="w-7 h-7 text-[#667eea]" />
                </div>
                <div
                  className="absolute top-1/4 -right-8 w-12 h-12 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center animate-bounce"
                  style={{ animationDuration: "4s", animationDelay: "1s" }}
                >
                  <Sparkles className="w-6 h-6 text-[#764ba2]" />
                </div>
                <div
                  className="absolute bottom-1/3 -right-6 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-lg shadow-xl flex items-center justify-center animate-bounce"
                  style={{ animationDuration: "3.2s", animationDelay: "1.5s" }}
                >
                  <Gavel className="w-5 h-5 text-[#4eaed0]" />
                </div>
                <div
                  className="absolute top-1/2 -left-6 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-lg shadow-xl flex items-center justify-center animate-bounce"
                  style={{ animationDuration: "4.5s", animationDelay: "0.8s" }}
                >
                  <BookOpen className="w-5 h-5 text-[#f472b6]" />
                </div>
                <LegaliMascot
                  motion={mascotMotion}
                  width={400}
                  height={400}
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
)

LandingHero.displayName = "LandingHero"

export { LandingHero }
