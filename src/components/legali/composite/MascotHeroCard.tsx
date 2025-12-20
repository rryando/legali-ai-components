import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "../atomic/GlassCard";
import { TypingText } from "../atomic/TypingText";
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot";

export type MascotHeroScriptStep = {
  motion: MascotMotionType;
  /**
   * Duration for this step in milliseconds.
   * Use `null` for infinite duration (no auto-advance).
   */
  durationMs: number | null;
  /**
   * Text snippets that will loop continuously in the marquee.
   */
  lines: string[];
};

export interface MascotHeroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heroTitle?: React.ReactNode;
  active?: boolean;

  /** Primary script that runs on mount / when activated. */
  script: MascotHeroScriptStep[];

  /** Script that runs when `triggerKey` changes (interrupt + restart). */
  interruptScript?: MascotHeroScriptStep[];

  /** Change this value to immediately restart the script. */
  triggerKey?: string | number;

  inactiveMotion?: MascotMotionType;

  mascotWidth?: number | string;
  mascotHeight?: number | string;
  mascotBlink?: boolean;

  stream?: {
    /** Base typing speed (ms per character) when `fitToStepDuration` is false or step is infinite. */
    charIntervalMs?: number;
    /** Pause between lines (ms). */
    linePauseMs?: number;
    /** Whether to loop through lines continuously while the step is active. */
    loop?: boolean;
    /** Whether to show a blinking cursor while typing. */
    showCursor?: boolean;
    /** When step has a finite duration, scale typing speed to fit within it. */
    fitToStepDuration?: boolean;
  };

  onStepChange?: (index: number) => void;
  onMotionChange?: (motion: MascotMotionType) => void;
}

const DEFAULT_SCRIPT: MascotHeroScriptStep[] = [
  {
    motion: MascotMotion.WAVING,
    durationMs: 2000,
    lines: ["Hey!", "Ready to learn?", "Pick a module to continue"],
  },
  {
    motion: MascotMotion.SPEAKING,
    durationMs: 5000,
    lines: ["Focus on the key terms", "Try one lesson at a time", "You’ve got this"],
  },
  {
    motion: MascotMotion.IDLE,
    durationMs: null,
    lines: ["Tap any module", "Your progress is saved", "Let’s keep going"],
  },
];

const MascotHeroCard = React.forwardRef<HTMLDivElement, MascotHeroCardProps>(
  (
    {
      className,
      heroTitle,
      active = true,
      script,
      interruptScript,
      triggerKey,
      inactiveMotion = MascotMotion.IDLE,
      mascotWidth = 240,
      mascotHeight = 240,
      mascotBlink = true,
      stream,
      onStepChange,
      onMotionChange,
      ...props
    },
    ref
  ) => {
    const scriptTimersRef = React.useRef<number[]>([]);

    const clearScriptTimers = React.useCallback(() => {
      scriptTimersRef.current.forEach((t) => clearTimeout(t));
      scriptTimersRef.current = [];
    }, []);

    const [stepIndex, setStepIndex] = React.useState(0);
    const [motion, setMotion] = React.useState<MascotMotionType>(inactiveMotion);

    const setStep = React.useCallback(
      (nextIndex: number, nextMotion: MascotMotionType) => {
        setStepIndex(nextIndex);
        setMotion(nextMotion);
        onStepChange?.(nextIndex);
        onMotionChange?.(nextMotion);
      },
      [onMotionChange, onStepChange]
    );

    const startScript = React.useCallback(
      (steps: MascotHeroScriptStep[]) => {
        clearScriptTimers();

        if (!steps.length) {
          setStep(0, inactiveMotion);
          return;
        }

        setStep(0, steps[0].motion);

        let elapsed = 0;
        for (let i = 0; i < steps.length - 1; i++) {
          const duration = steps[i].durationMs;
          if (duration == null) break;
          elapsed += duration;

          const next = steps[i + 1];
          const handle = window.setTimeout(() => {
            setStep(i + 1, next.motion);
          }, elapsed);

          scriptTimersRef.current.push(handle);
        }
      },
      [clearScriptTimers, inactiveMotion, setStep]
    );

    const activeScript = React.useMemo(() => (script?.length ? script : DEFAULT_SCRIPT), [script]);

    const interruptScriptResolved = React.useMemo(
      () => (interruptScript?.length ? interruptScript : undefined),
      [interruptScript]
    );

    const prevTriggerKeyRef = React.useRef<string | number | undefined>(triggerKey);

    React.useEffect(() => {
      if (!active) {
        clearScriptTimers();
        setMotion(inactiveMotion);
        return;
      }

      const isInterrupt = prevTriggerKeyRef.current !== triggerKey;
      prevTriggerKeyRef.current = triggerKey;

      startScript(isInterrupt && interruptScriptResolved ? interruptScriptResolved : activeScript);

      return () => {
        clearScriptTimers();
      };
    }, [
      active,
      triggerKey,
      activeScript,
      interruptScriptResolved,
      inactiveMotion,
      startScript,
      clearScriptTimers,
    ]);

    const step = (activeScript[stepIndex] ??
      activeScript[0] ??
      DEFAULT_SCRIPT[0]) as MascotHeroScriptStep;

    const prefersReducedMotion = React.useMemo(() => {
      if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }, []);

    const streamConfig = React.useMemo(
      () => ({
        charIntervalMs: stream?.charIntervalMs ?? 28,
        linePauseMs: stream?.linePauseMs ?? 650,
        loop: stream?.loop ?? true,
        showCursor: stream?.showCursor ?? true,
        fitToStepDuration: stream?.fitToStepDuration ?? true,
      }),
      [stream]
    );

    const stepLines = React.useMemo(
      () => (step?.lines ?? []).map((l) => l?.trim()).filter(Boolean) as string[],
      [step?.lines]
    );

    const computeTypingSpeedMs = React.useCallback(() => {
      const minMs = 50;
      const maxMs = 120;

      const clamp = (value: number) => Math.max(minMs, Math.min(maxMs, value));

      if (!streamConfig.fitToStepDuration || step.durationMs == null) {
        return clamp(streamConfig.charIntervalMs);
      }

      const totalChars = stepLines.reduce((sum, l) => sum + l.length, 0);
      if (totalChars <= 0) return clamp(streamConfig.charIntervalMs);

      const pauses = Math.max(0, stepLines.length - 1) * streamConfig.linePauseMs;
      const available = Math.max(0, step.durationMs - pauses);
      const computed = available / totalChars;
      return clamp(computed);
    }, [
      step.durationMs,
      stepLines,
      streamConfig.charIntervalMs,
      streamConfig.fitToStepDuration,
      streamConfig.linePauseMs,
    ]);

    return (
      <GlassCard
        className={cn(
          "relative overflow-hidden rounded-3xl",
          // Stronger contrast vs page background
          "border-blue-300/60",
          "shadow-blue-900/10 shadow-xl",
          "animate-border-glow",
          "bg-blue-500/40",
          // Hero glow (keep in-family with existing blue tokens)
          "shadow-[0_0_35px_rgba(59,130,246,0.22),inset_0_0_18px_rgba(59,130,246,0.10)]",
          className
        )}
        intensity="high"
        ref={ref}
        {...props}
      >
        {/* Glow accents */}
        <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-sky-200/45 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative flex flex-col items-center gap-4 p-4 md:flex-row md:gap-6 md:p-5">
          <div className="relative shrink-0">
            {/* Smoky/Sky backdrop to make the mascot pop */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="absolute h-64 w-64 animate-pulse rounded-full bg-white/45 blur-3xl" />
              <div className="absolute h-64 w-64 animate-pulse rounded-full bg-white/60 blur-3xl delay-700" />
              <div className="absolute h-64 w-64 rounded-full bg-white/50 blur-2xl" />
            </div>
            {/* Smoky/Sky backdrop to make the mascot pop */}
            <LegaliMascot
              className="mx-auto"
              height={mascotHeight}
              isBlink={mascotBlink}
              motion={motion}
              width={mascotWidth}
            />
          </div>

          <div className="w-full flex-1">
            {heroTitle ? (
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-bold text-lg text-slate-800 tracking-tight md:text-xl">
                  {heroTitle}
                </h2>
              </div>
            ) : null}

            <div
              className={cn(
                "mt-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 backdrop-blur-md",
                "fade-in slide-in-from-bottom animate-in"
              )}
              key={stepIndex}
            >
              <div className="text-slate-700 text-sm leading-relaxed md:text-base">
                {prefersReducedMotion ? (
                  <p className="font-semibold">{stepLines[0] ?? ""}</p>
                ) : (
                  <TypingText
                    className="font-semibold"
                    cursor="▍"
                    cursorClassName="text-slate-500"
                    delay={0}
                    key={`${stepIndex}:${String(triggerKey ?? "")}`}
                    loop={streamConfig.loop}
                    once={false}
                    pauseDuration={streamConfig.linePauseMs}
                    showCursor={streamConfig.showCursor}
                    speed={computeTypingSpeedMs()}
                    startOnView={false}
                    texts={stepLines}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    );
  }
);

MascotHeroCard.displayName = "MascotHeroCard";

export { MascotHeroCard };
