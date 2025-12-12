import * as React from "react"
import { cn } from "@/lib/utils"
import { GlassCard } from "../atomic/GlassCard"
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot"
import { TypingText } from "../atomic/TypingText"

export type MascotHeroScriptStep = {
  motion: MascotMotionType
  /**
   * Duration for this step in milliseconds.
   * Use `null` for infinite duration (no auto-advance).
   */
  durationMs: number | null
  /**
   * Text snippets that will loop continuously in the marquee.
   */
  lines: string[]
}

export interface MascotHeroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heroTitle?: React.ReactNode
  active?: boolean

  /** Primary script that runs on mount / when activated. */
  script: MascotHeroScriptStep[]

  /** Script that runs when `triggerKey` changes (interrupt + restart). */
  interruptScript?: MascotHeroScriptStep[]

  /** Change this value to immediately restart the script. */
  triggerKey?: string | number

  inactiveMotion?: MascotMotionType

  mascotWidth?: number | string
  mascotHeight?: number | string
  mascotBlink?: boolean

  stream?: {
    /** Base typing speed (ms per character) when `fitToStepDuration` is false or step is infinite. */
    charIntervalMs?: number
    /** Pause between lines (ms). */
    linePauseMs?: number
    /** Whether to loop through lines continuously while the step is active. */
    loop?: boolean
    /** Whether to show a blinking cursor while typing. */
    showCursor?: boolean
    /** When step has a finite duration, scale typing speed to fit within it. */
    fitToStepDuration?: boolean
  }

  onStepChange?: (index: number) => void
  onMotionChange?: (motion: MascotMotionType) => void
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
]

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
    const scriptTimersRef = React.useRef<number[]>([])

    const clearScriptTimers = React.useCallback(() => {
      scriptTimersRef.current.forEach((t) => clearTimeout(t))
      scriptTimersRef.current = []
    }, [])

    const [stepIndex, setStepIndex] = React.useState(0)
    const [motion, setMotion] = React.useState<MascotMotionType>(inactiveMotion)

    const setStep = React.useCallback(
      (nextIndex: number, nextMotion: MascotMotionType) => {
        setStepIndex(nextIndex)
        setMotion(nextMotion)
        onStepChange?.(nextIndex)
        onMotionChange?.(nextMotion)
      },
      [onMotionChange, onStepChange]
    )

    const startScript = React.useCallback(
      (steps: MascotHeroScriptStep[]) => {
        clearScriptTimers()

        if (!steps.length) {
          setStep(0, inactiveMotion)
          return
        }

        setStep(0, steps[0].motion)

        let elapsed = 0
        for (let i = 0; i < steps.length - 1; i++) {
          const duration = steps[i].durationMs
          if (duration == null) break
          elapsed += duration

          const next = steps[i + 1]
          const handle = window.setTimeout(() => {
            setStep(i + 1, next.motion)
          }, elapsed)

          scriptTimersRef.current.push(handle)
        }
      },
      [clearScriptTimers, inactiveMotion, setStep]
    )

    const activeScript = React.useMemo(() => {
      return script?.length ? script : DEFAULT_SCRIPT
    }, [script])

    const interruptScriptResolved = React.useMemo(() => {
      return interruptScript?.length ? interruptScript : undefined
    }, [interruptScript])

    const prevTriggerKeyRef = React.useRef<string | number | undefined>(triggerKey)

    React.useEffect(() => {
      if (!active) {
        clearScriptTimers()
        setMotion(inactiveMotion)
        return
      }

      const isInterrupt = prevTriggerKeyRef.current !== triggerKey
      prevTriggerKeyRef.current = triggerKey

      startScript(isInterrupt && interruptScriptResolved ? interruptScriptResolved : activeScript)

      return () => {
        clearScriptTimers()
      }
    }, [
      active,
      triggerKey,
      activeScript,
      interruptScriptResolved,
      inactiveMotion,
      startScript,
      clearScriptTimers,
    ])

    const step = (activeScript[stepIndex] ?? activeScript[0] ?? DEFAULT_SCRIPT[0]) as MascotHeroScriptStep

    const prefersReducedMotion = React.useMemo(() => {
      if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }, [])

    const streamConfig = React.useMemo(() => {
      return {
        charIntervalMs: stream?.charIntervalMs ?? 28,
        linePauseMs: stream?.linePauseMs ?? 650,
        loop: stream?.loop ?? true,
        showCursor: stream?.showCursor ?? true,
        fitToStepDuration: stream?.fitToStepDuration ?? true,
      }
    }, [stream])

    const stepLines = React.useMemo(() => {
      return (step?.lines ?? []).map((l) => l?.trim()).filter(Boolean) as string[]
    }, [step?.lines])

    const computeTypingSpeedMs = React.useCallback(() => {
      const minMs = 50
      const maxMs = 120

      const clamp = (value: number) => Math.max(minMs, Math.min(maxMs, value))

      if (!streamConfig.fitToStepDuration || step.durationMs == null) {
        return clamp(streamConfig.charIntervalMs)
      }

      const totalChars = stepLines.reduce((sum, l) => sum + l.length, 0)
      if (totalChars <= 0) return clamp(streamConfig.charIntervalMs)

      const pauses = Math.max(0, stepLines.length - 1) * streamConfig.linePauseMs
      const available = Math.max(0, step.durationMs - pauses)
      const computed = available / totalChars
      return clamp(computed)
    }, [step.durationMs, stepLines, streamConfig.charIntervalMs, streamConfig.fitToStepDuration, streamConfig.linePauseMs])

    return (
      <GlassCard
        ref={ref}
        intensity="high"
        className={cn(
          "rounded-3xl overflow-hidden relative",
          // Stronger contrast vs page background
          "border-blue-300/60",
          "shadow-xl shadow-blue-900/10",
          "animate-border-glow",
          "bg-blue-500/40",
          // Hero glow (keep in-family with existing blue tokens)
          "shadow-[0_0_35px_rgba(59,130,246,0.22),inset_0_0_18px_rgba(59,130,246,0.10)]",
          className
        )}
        {...props}
      >
        {/* Glow accents */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-sky-200/45 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 md:gap-6">
           <div className="shrink-0 relative">
            {/* Smoky/Sky backdrop to make the mascot pop */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="absolute w-64 h-64 rounded-full bg-white/45 blur-3xl animate-pulse" />
              <div className="absolute w-64 h-64 rounded-full bg-white/60 blur-3xl animate-pulse delay-700" />
              <div className="absolute w-64 h-64 rounded-full bg-white/50 blur-2xl" />
            </div>
            {/* Smoky/Sky backdrop to make the mascot pop */}
            <LegaliMascot
              motion={motion}
              isBlink={mascotBlink}
              width={mascotWidth}
              height={mascotHeight}
              className="mx-auto"
            />
          </div>

          <div className="flex-1 w-full">
            {heroTitle ? (
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-bold text-lg md:text-xl text-slate-800 tracking-tight">
                  {heroTitle}
                </h2>
              </div>
            ) : null}

            <div
              key={stepIndex}
              className={cn(
                "mt-3 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-md px-4 py-3",
                "animate-in fade-in slide-in-from-bottom"
              )}
            >
              <div className="text-sm md:text-base text-slate-700 leading-relaxed">
                {prefersReducedMotion ? (
                  <p className="font-semibold">{stepLines[0] ?? ""}</p>
                ) : (
                  <TypingText
                    key={`${stepIndex}:${String(triggerKey ?? "")}`}
                    className="font-semibold"
                    texts={stepLines}
                    speed={computeTypingSpeedMs()}
                    delay={0}
                    showCursor={streamConfig.showCursor}
                    cursor="▍"
                    cursorClassName="text-slate-500"
                    loop={streamConfig.loop}
                    pauseDuration={streamConfig.linePauseMs}
                    startOnView={false}
                    once={false}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    )
  }
)

MascotHeroCard.displayName = "MascotHeroCard"

export { MascotHeroCard }
