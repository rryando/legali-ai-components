/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-landing-hero.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-landing-hero.json"
 */
import { AnimatePresence, motion } from "motion/react";
import { Search, Sparkles } from "lucide-react";
import type { ChangeEvent, HTMLAttributes } from "react";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { AIThinkingIndicator } from "../atomic/AIThinkingIndicator";
import { CursorGlow } from "../atomic/CursorGlow";
import { GradientMeshBackground } from "../atomic/GradientMeshBackground";
import { TiltCard } from "../atomic/TiltCard";
import { VoiceInputButton } from "../atomic/VoiceInputButton";
import { FloatingParticlesSystem } from "../composite/FloatingParticlesSystem";
import { InteractiveStatsCard } from "../composite/InteractiveStatsCard";
import { SmartSuggestionsDropdown, type Suggestion } from "../composite/SmartSuggestionsDropdown";
import { useTypingAnimation } from "../hooks/useAnimations";
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot/LegaliMascot";

type HeroStat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  color?: string;
};

type LandingHeroProps = {
  /** Callback when Analyze button is clicked */
  onGetStarted?: () => void;
  /** Typing animation placeholder phrases */
  placeholderPhrases?: string[];
  /** Stats to display */
  stats?: HeroStat[];
  /** Badge text */
  badgeText?: string;
  /** Main headline */
  headline?: React.ReactNode;
  /** Subtitle text */
  subtitle?: string;
  /** Analyze button text */
  analyzeButtonText?: string;
  /** Default input placeholder when not typing */
  defaultInputPlaceholder?: string;
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

// Speech bubble sequence messages
type SpeechMessage = {
  title: string;
  description: string;
};

const speechSequence: SpeechMessage[] = [
  {
    title: "legali revolutionizes access to justice",
    description:
      "Change starts from you and we are here to assist. Every action here sends a signal to the legal system to make justice work for everyone.",
  },
  {
    title: "legali came from lived experience",
    description:
      "Even the smartest people get trapped in a legal system that's too complex to navigate.",
  },
];

// Custom speech bubble content component with bold title and description
const SpeechBubbleContent = ({
  message,
  isTyping,
  onComplete,
}: {
  message: SpeechMessage;
  isTyping: boolean;
  onComplete?: () => void;
}) => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [phase, setPhase] = useState<"title" | "description" | "done">("title");

  // Reset when message changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: Reset is intentionally triggered when message prop changes
  useEffect(() => {
    setDisplayedTitle("");
    setDisplayedDescription("");
    setPhase("title");
  }, [message.title]);

  // Typing effect for title
  useEffect(() => {
    if (!isTyping || phase !== "title") {
      return;
    }

    if (displayedTitle.length < message.title.length) {
      const timer = setTimeout(() => {
        setDisplayedTitle(message.title.slice(0, displayedTitle.length + 1));
      }, 35);
      return () => clearTimeout(timer);
    }
    // Title done, move to description
    const pauseTimer = setTimeout(() => setPhase("description"), 200);
    return () => clearTimeout(pauseTimer);
  }, [displayedTitle, message.title, phase, isTyping]);

  // Typing effect for description
  useEffect(() => {
    if (!isTyping || phase !== "description") {
      return;
    }

    if (displayedDescription.length < message.description.length) {
      const timer = setTimeout(() => {
        setDisplayedDescription(message.description.slice(0, displayedDescription.length + 1));
      }, 25);
      return () => clearTimeout(timer);
    }
    // Description done
    setPhase("done");
    onComplete?.();
  }, [displayedDescription, message.description, phase, isTyping, onComplete]);

  return (
    <div className="space-y-1">
      <p className="font-bold text-slate-800">
        {displayedTitle}
        {phase === "title" && (
          <span className="ml-0.5 inline-block animate-pulse text-slate-400">▍</span>
        )}
      </p>
      {phase !== "title" && (
        <p className="text-slate-600">
          {displayedDescription}
          {phase === "description" && (
            <span className="ml-0.5 inline-block animate-pulse text-slate-400">▍</span>
          )}
        </p>
      )}
    </div>
  );
};

/**
 * Enhanced hero section with modern interactivity and visual effects.
 * Features 3D tilt cards, cursor glow, smart suggestions, and more.
 *
 * @example
 * ```tsx
 * <LandingHeroV2 onGetStarted={() => navigate('/analyze')} />
 * ```
 */
const LandingHero = forwardRef<HTMLElement, LandingHeroProps>(
  (
    {
      className,
      onGetStarted,
      placeholderPhrases = defaultPlaceholders,
      stats = defaultStats,
      badgeText = "AI-Powered Legal Intelligence",
      headline = (
        <>
          Legal guidance
          <br />
          <span className="relative">
            <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              reimagined
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              fill="none"
              role="img"
              viewBox="0 0 300 12"
            >
              <title>Underline decoration</title>
              <path
                d="M2 10C50 2 250 2 298 10"
                stroke="url(#underline-gradient-v2)"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <defs>
                <linearGradient id="underline-gradient-v2" x1="0" x2="300" y1="0" y2="0">
                  <stop stopColor="#4eaed0" />
                  <stop offset="0.5" stopColor="#667eea" />
                  <stop offset="1" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </>
      ),
      subtitle = "Navigate the legal system with confidence. Get instant AI-powered analysis, build your case, and connect with qualified attorneys—all in one platform.",
      analyzeButtonText = "Analyze",
      defaultInputPlaceholder = "Describe your legal situation...",
      ...props
    },
    ref
  ) => {
    const [mascotMotion, setMascotMotion] = useState<MascotMotionType>(MascotMotion.WAVING);
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isVoiceActive, setIsVoiceActive] = useState(false);

    // Speech bubble sequence state
    const [showSpeechBubble, setShowSpeechBubble] = useState(false);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [speechLoopCount, setLoopCount] = useState(0);
    const [isTypingSpeech, setIsTypingSpeech] = useState(false);
    const waveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const MAX_LOOPS = 5;
    const WAVE_DURATION = 2000; // 2 seconds of waving before speech
    const PAUSE_BETWEEN_MESSAGES = 3000; // 3 seconds pause between messages

    // Start the wave -> speech sequence when not interacting
    useEffect(() => {
      // Clear existing timers
      if (waveTimerRef.current) {
        clearTimeout(waveTimerRef.current);
      }
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }

      // If user is interacting, hide speech bubble and reset
      if (isFocused || inputValue) {
        setShowSpeechBubble(false);
        setIsTypingSpeech(false);
        return;
      }

      // If we've completed all loops, stay idle
      if (speechLoopCount >= MAX_LOOPS) {
        setMascotMotion(MascotMotion.IDLE);
        return;
      }

      // Start with waving animation
      setMascotMotion(MascotMotion.WAVING);

      // After wave duration, show speech bubble
      waveTimerRef.current = setTimeout(() => {
        setShowSpeechBubble(true);
        setIsTypingSpeech(true);
        setMascotMotion(MascotMotion.SPEAKING);
      }, WAVE_DURATION);

      return () => {
        if (waveTimerRef.current) {
          clearTimeout(waveTimerRef.current);
        }
      };
    }, [isFocused, inputValue, speechLoopCount]);

    // Handle speech completion - move to next message or loop
    const handleSpeechComplete = useCallback(() => {
      setIsTypingSpeech(false);

      pauseTimerRef.current = setTimeout(() => {
        const nextIndex = currentMessageIndex + 1;

        if (nextIndex >= speechSequence.length) {
          // Completed one full loop of all messages
          setLoopCount((prev) => prev + 1);
          setCurrentMessageIndex(0);
        } else {
          setCurrentMessageIndex(nextIndex);
        }

        // If not at max loops, restart the typing
        if (speechLoopCount < MAX_LOOPS - 1 || currentMessageIndex < speechSequence.length - 1) {
          setIsTypingSpeech(true);
        } else {
          // We're done, hide the bubble and go idle
          setShowSpeechBubble(false);
          setMascotMotion(MascotMotion.IDLE);
        }
      }, PAUSE_BETWEEN_MESSAGES);
    }, [currentMessageIndex, speechLoopCount]);

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

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
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
    }, []);

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
      <section className={cn("relative", className)} id="hero" ref={ref} {...props}>
        {/* Gradient Mesh Background - Full Width */}
        <GradientMeshBackground className="absolute inset-0" enableParallax />

        {/* Content Container with Padding */}
        <div className="relative mt-20 w-full lg:pb-20">
          <CursorGlow
            blurAmount={100}
            className="relative mx-auto -mt-20 h-full"
            glowColor="rgba(78, 174, 208, 0.12)"
            glowSize={600}
          >
            <div className="mx-auto mt-20 grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Left Content */}
              <div className="order-1 text-center lg:text-left">
                {/* Badge */}
                <div className="fade-in slide-in-from-bottom mb-8 inline-flex animate-in items-center gap-2 rounded-full border border-[#4eaed0]/20 bg-gradient-to-r from-[#4eaed0]/10 to-[#667eea]/10 px-4 py-2 duration-700">
                  <Sparkles className="h-4 w-4 text-[#4eaed0]" />
                  <span className="font-medium text-slate-700 text-sm">{badgeText}</span>
                </div>

                {/* Headline */}
                <h1 className="fade-in slide-in-from-bottom mb-6 animate-in font-bold text-4xl text-slate-900 leading-[1.1] tracking-tight delay-100 duration-700 md:text-5xl lg:text-6xl xl:text-7xl">
                  {headline}
                </h1>

                {/* Subtext */}
                <p className="fade-in slide-in-from-bottom mx-auto mb-10 max-w-xl animate-in text-lg text-slate-600 leading-relaxed delay-200 duration-700 md:text-xl lg:mx-0">
                  {subtitle}
                </p>

                {/* Search Input with 3D Tilt */}
                <div className="fade-in slide-in-from-bottom mx-auto mb-4 max-w-xl animate-in delay-300 duration-700 lg:mx-0">
                  <TiltCard
                    className="rounded-3xl border-white/40 bg-white/60 p-2 shadow-2xl shadow-blue-500/5 ring-1 ring-white/50 backdrop-blur-2xl"
                    // enableGlare
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
                          placeholder={inputValue ? "" : typingText || defaultInputPlaceholder}
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
                        {analyzeButtonText}
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

              {/* Right - Mascot with Floating Particles and Speech Bubble */}
              <div className="fade-in zoom-in relative order-2 flex animate-in justify-center duration-1000 lg:justify-end">
                <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px]">
                  {/* Glow background */}
                  <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-[#4eaed0]/30 via-[#667eea]/20 to-[#764ba2]/30 blur-3xl" />

                  {/* Floating Particles System */}
                  <FloatingParticlesSystem particleCount={6} />

                  {/* Speech Bubble */}
                  <AnimatePresence>
                    {showSpeechBubble ? (
                      <motion.div
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="absolute inset-x-0 bottom-4 z-20 mx-auto w-fit"
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="relative max-w-[320px] rounded-2xl border border-slate-200/60 bg-white px-4 py-3 text-sm shadow-lg">
                          {/* Speech bubble tail - pointing up */}
                          <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-slate-200/60 border-t border-l bg-white" />
                          <SpeechBubbleContent
                            isTyping={isTypingSpeech}
                            message={speechSequence[currentMessageIndex]}
                            onComplete={handleSpeechComplete}
                          />
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

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
            <div className="fade-in slide-in-from-bottom mx-auto mt-12 grid max-w-7xl animate-in grid-cols-2 gap-4 delay-500 duration-700 md:grid-cols-4 md:gap-6 lg:mt-16">
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
        </div>
      </section>
    );
  }
);

LandingHero.displayName = "LandingHero";

export { LandingHero };
export type { LandingHeroProps, HeroStat };
