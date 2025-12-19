import { Search, Sparkles } from "lucide-react";
import type { ChangeEvent, HTMLAttributes } from "react";
import { forwardRef, useCallback, useState } from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { AIThinkingIndicator } from "../atomic/AIThinkingIndicator";
import { CursorGlow } from "../atomic/CursorGlow";
import { GradientMeshBackground } from "../atomic/GradientMeshBackground";
import { TiltCard } from "../atomic/TiltCard";
import { VoiceInputButton } from "../atomic/VoiceInputButton";
import { FloatingParticlesSystem } from "../composite/FloatingParticlesSystem";
import { InteractiveStatsCard } from "../composite/InteractiveStatsCard";
import {
  SmartSuggestionsDropdown,
  type Suggestion,
} from "../composite/SmartSuggestionsDropdown";
import { useTypingAnimation } from "../hooks/useAnimations";
import {
  LegaliMascot,
  MascotMotion,
  type MascotMotionType,
} from "../mascot/LegaliMascot";

type HeroStat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  color?: string;
};

type LandingHeroV2Props = {
  /** Callback when Analyze button is clicked */
  onGetStarted?: () => void;
  /** Typing animation placeholder phrases */
  placeholderPhrases?: string[];
  /** Stats to display */
  stats?: HeroStat[];
} & HTMLAttributes<HTMLElement>;

const defaultPlaceholders = [
  "I received an eviction notice...",
  "My employer didn't pay overtime...",
  "I need to review a contract...",
  "How do I file a small claims case?",
  "What are my rights as a tenant?",
];

const defaultStats: HeroStat[] = [
  { value: 50, suffix: "K+", label: "Cases Analyzed", color: "#4eaed0" },
  { value: 98, suffix: "%", label: "Accuracy Rate", color: "#667eea" },
  { value: 500, suffix: "+", label: "Partner Attorneys", color: "#764ba2" },
  { value: 4.9, suffix: "", label: "User Rating", color: "#f472b6" },
];

/**
 * Enhanced hero section with modern interactivity and visual effects.
 * Features 3D tilt cards, cursor glow, smart suggestions, and more.
 *
 * @example
 * ```tsx
 * <LandingHeroV2 onGetStarted={() => navigate('/analyze')} />
 * ```
 */
const LandingHeroV2 = forwardRef<HTMLElement, LandingHeroV2Props>(
  (
    {
      className,
      onGetStarted,
      placeholderPhrases = defaultPlaceholders,
      stats = defaultStats,
      ...props
    },
    ref
  ) => {
    const [mascotMotion, setMascotMotion] = useState<MascotMotionType>(
      MascotMotion.WAVING
    );
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isVoiceActive, setIsVoiceActive] = useState(false);

    const typingText = useTypingAnimation(placeholderPhrases, 60, 30, 2500);

    // Determine AI indicator state
    const aiState = isTyping ? "thinking" : "idle";

    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
      setMascotMotion(MascotMotion.THINKING);
    }, []);

    const handleInputBlur = useCallback(() => {
      // Delay blur to allow suggestion click
      setTimeout(() => {
        setIsFocused(false);
        if (!inputValue) {
          setMascotMotion(MascotMotion.IDLE);
        }
      }, 200);
    }, [inputValue]);

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setIsTyping(value.length > 0);

        if (value.length > 20) {
          setMascotMotion(MascotMotion.READING);
        } else if (value.length > 0) {
          setMascotMotion(MascotMotion.THINKING);
        }

        // Reset typing indicator after a short delay
        setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      },
      []
    );

    const handleSuggestionSelect = useCallback((suggestion: Suggestion) => {
      setInputValue(suggestion.label);
      setIsFocused(false);
      setMascotMotion(MascotMotion.IDEA);
    }, []);

    const handleAnalyzeClick = useCallback(() => {
      setMascotMotion(MascotMotion.CELEBRATE);
      setTimeout(() => {
        onGetStarted?.();
      }, 500);
    }, [onGetStarted]);

    const handleVoiceToggle = useCallback((isListening: boolean) => {
      setIsVoiceActive(isListening);
      setMascotMotion(isListening ? MascotMotion.SPEAKING : MascotMotion.IDLE);
    }, []);

    return (
      <section
        className={cn(
          "relative min-h-screen overflow-hidden px-6 pt-32 pb-20",
          className
        )}
        id="hero"
        ref={ref}
        {...props}
      >
        {/* Gradient Mesh Background */}
        <GradientMeshBackground className="absolute inset-0" enableParallax />

        {/* Cursor Glow Container */}
        <CursorGlow
          blurAmount={100}
          className="relative mx-auto max-w-7xl"
          glowColor="rgba(78, 174, 208, 0.12)"
          glowSize={600}
        >
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
                      stroke="url(#underline-gradient-v2)"
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                    <defs>
                      <linearGradient
                        id="underline-gradient-v2"
                        x1="0"
                        x2="300"
                        y1="0"
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
              <p className="fade-in slide-in-from-bottom mx-auto mb-10 max-w-xl animate-in text-lg text-slate-600 leading-relaxed delay-200 duration-700 md:text-xl lg:mx-0">
                Navigate the legal system with confidence. Get instant
                AI-powered analysis, build your case, and connect with qualified
                attorneys—all in one platform.
              </p>

              {/* Search Input with 3D Tilt */}
              <div className="fade-in slide-in-from-bottom mx-auto mb-4 max-w-xl animate-in delay-300 duration-700 lg:mx-0">
                <TiltCard
                  className="rounded-3xl border-white/40 bg-white/60 p-2 shadow-2xl shadow-blue-500/5 ring-1 ring-white/50 backdrop-blur-2xl"
                  enableGlare
                  maxTilt={8}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        className="w-full bg-transparent py-4 pr-4 pl-12 text-base text-slate-800 outline-none placeholder:text-slate-400"
                        onBlur={handleInputBlur}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        placeholder={
                          inputValue
                            ? ""
                            : typingText || "Describe your legal situation..."
                        }
                        type="text"
                        value={inputValue}
                      />
                    </div>

                    {/* AI Thinking Indicator */}
                    <AIThinkingIndicator state={aiState} />

                    {/* Voice Input Button */}
                    <VoiceInputButton
                      isListening={isVoiceActive}
                      onToggle={handleVoiceToggle}
                      size="md"
                    />

                    <Button
                      className="h-auto animate-shimmer rounded-xl bg-[length:200%_100%] bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-500 hover:bg-right"
                      onClick={handleAnalyzeClick}
                    >
                      Analyze
                    </Button>
                  </div>
                </TiltCard>

                {/* Smart Suggestions Dropdown */}
                <SmartSuggestionsDropdown
                  isOpen={isFocused && !inputValue}
                  onSelect={handleSuggestionSelect}
                />
              </div>
            </div>

            {/* Right - Mascot with Floating Particles */}
            <div className="fade-in zoom-in relative order-1 flex animate-in justify-center duration-1000 lg:order-2 lg:justify-end">
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px]">
                {/* Glow background */}
                <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-[#4eaed0]/30 via-[#667eea]/20 to-[#764ba2]/30 blur-3xl" />

                {/* Floating Particles System */}
                <FloatingParticlesSystem particleCount={6} />

                {/* Mascot */}
                <LegaliMascot
                  className="relative z-10 mx-auto drop-shadow-2xl"
                  height={350}
                  motion={mascotMotion}
                  width="100%"
                />
              </div>
            </div>
          </div>

          {/* Interactive Stats Row */}
          <div className="fade-in slide-in-from-bottom mt-20 grid animate-in grid-cols-2 gap-4 delay-500 duration-700 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <InteractiveStatsCard
                accentColor={stat.color}
                key={stat.label}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
                value={stat.value}
              />
            ))}
          </div>
        </CursorGlow>
      </section>
    );
  }
);

LandingHeroV2.displayName = "LandingHeroV2";

export { LandingHeroV2 };
export type { LandingHeroV2Props, HeroStat };
