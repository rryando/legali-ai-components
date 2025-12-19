import * as React from "react";
import { cn } from "@/lib/utils";
import { TypingText } from "../atomic/TypingText";
import { LegaliMascot, MascotMotion, type MascotMotionType } from "../mascot";

export type QuizMascotScriptStep = {
  motion: MascotMotionType;
  /** Duration for this step in milliseconds. Use `null` for infinite duration (no auto-advance). */
  durationMs: number | null;
  /** Text snippets that will loop continuously while the step is active. */
  lines: string[];
};

export type QuizMascotStreamConfig = {
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

export interface QuizMascotPromptProps
  extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;

  /** Primary script that runs when activated. */
  script: QuizMascotScriptStep[];

  /** Script that runs when `triggerKey` changes (interrupt + restart). */
  interruptScript?: QuizMascotScriptStep[];

  /** Change this value to immediately restart the script. */
  triggerKey?: string | number;

  inactiveMotion?: MascotMotionType;

  mascotWidth?: number | string;
  mascotHeight?: number | string;
  mascotBlink?: boolean;

  stream?: QuizMascotStreamConfig;

  onStepChange?: (index: number) => void;
  onMotionChange?: (motion: MascotMotionType) => void;
}

const DEFAULT_SCRIPT: QuizMascotScriptStep[] = [
  {
    motion: MascotMotion.SPEAKING,
    durationMs: 3500,
    lines: [
      "Quick tip:",
      "Read for what the court needs: amount, venue, and timing.",
    ],
  },
  {
    motion: MascotMotion.THINKING,
    durationMs: null,
    lines: [
      "Pick the best answer.",
      "If unsure, eliminate obvious mismatches.",
    ],
  },
];

const QuizMascotPrompt = React.forwardRef<
  HTMLDivElement,
  QuizMascotPromptProps
>(
  ({
    className,
    active = true,
    script,
    interruptScript,
    triggerKey,
    inactiveMotion = MascotMotion.IDLE,
    mascotWidth = 140,
    mascotHeight = 140,
    mascotBlink = true,
    stream,
    onStepChange,
    onMotionChange,
    ...props
  }) => {
    const scriptTimersRef = React.useRef<number[]>([]);

    const clearScriptTimers = React.useCallback(() => {
      scriptTimersRef.current.forEach((t) => clearTimeout(t));
      scriptTimersRef.current = [];
    }, []);

    const [stepIndex, setStepIndex] = React.useState(0);
    const [motion, setMotion] =
      React.useState<MascotMotionType>(inactiveMotion);

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
      (steps: QuizMascotScriptStep[]) => {
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

    const activeScript = React.useMemo(
      () => (script?.length ? script : DEFAULT_SCRIPT),
      [script]
    );

    const interruptScriptResolved = React.useMemo(
      () => (interruptScript?.length ? interruptScript : undefined),
      [interruptScript]
    );

    const prevTriggerKeyRef = React.useRef<string | number | undefined>(
      triggerKey
    );

    React.useEffect(() => {
      if (!active) {
        clearScriptTimers();
        setMotion(inactiveMotion);
        return;
      }

      const isInterrupt = prevTriggerKeyRef.current !== triggerKey;
      prevTriggerKeyRef.current = triggerKey;

      startScript(
        isInterrupt && interruptScriptResolved
          ? interruptScriptResolved
          : activeScript
      );

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
      DEFAULT_SCRIPT[0]) as QuizMascotScriptStep;

    const prefersReducedMotion = React.useMemo(() => {
      if (
        typeof window === "undefined" ||
        typeof window.matchMedia !== "function"
      )
        return false;
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }, []);

    const streamConfig = React.useMemo(
      () => ({
        charIntervalMs: stream?.charIntervalMs ?? 28,
        linePauseMs: stream?.linePauseMs ?? 5000,
        loop: stream?.loop ?? true,
        showCursor: stream?.showCursor ?? false,
        fitToStepDuration: stream?.fitToStepDuration ?? true,
      }),
      [stream]
    );

    const stepLines = React.useMemo(
      () =>
        (step?.lines ?? []).map((l) => l?.trim()).filter(Boolean) as string[],
      [step?.lines]
    );

    const computeTypingSpeedMs = React.useCallback(() => {
      const minMs = 56;
      const maxMs = 120;
      const clamp = (value: number) => Math.max(minMs, Math.min(maxMs, value));

      if (!streamConfig.fitToStepDuration || step.durationMs == null) {
        return clamp(streamConfig.charIntervalMs);
      }

      const totalChars = stepLines.reduce((sum, l) => sum + l.length, 0);
      if (totalChars <= 0) return clamp(streamConfig.charIntervalMs);

      const pauses =
        Math.max(0, stepLines.length - 1) * streamConfig.linePauseMs;
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
      <div className={cn("mx-auto w-full max-w-md", className)} {...props}>
        <div className="flex items-center gap-2 p-2">
          <div className="relative shrink-0">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="absolute h-44 w-44 rounded-full bg-white/55 blur-3xl" />
            </div>
            <LegaliMascot
              className="mx-auto"
              height={mascotHeight}
              isBlink={mascotBlink}
              motion={motion}
              width={mascotWidth}
            />
          </div>

          <div className="flex-1">
            <div
              className={cn(
                "rounded-2xl border border-white/60 bg-white/70 px-2 py-3 backdrop-blur-md"
              )}
            >
              <div className="text-slate-700 text-sm leading-relaxed md:text-base">
                {prefersReducedMotion ? (
                  active ? (
                    <p className="font-semibold">{stepLines[0] ?? ""}</p>
                  ) : null
                ) : active ? (
                  <TypingText
                    className="font-semibold"
                    cursor="▍"
                    cursorClassName="text-slate-500"
                    delay={500}
                    key={`${stepIndex}:${String(triggerKey ?? "")}`}
                    loop={streamConfig.loop}
                    once={false}
                    pauseDuration={streamConfig.linePauseMs}
                    showCursor={streamConfig.showCursor}
                    speed={computeTypingSpeedMs()}
                    startOnView={false}
                    texts={stepLines}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

QuizMascotPrompt.displayName = "QuizMascotPrompt";

export { QuizMascotPrompt };
