/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-mascot.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-mascot.json"
 */
/**
 * LegaliMascot Component
 *
 * A React wrapper for the Rive mascot animation with support for
 * View Model data binding and motion state control.
 *
 * @module LegaliMascot
 */

import RiveCanvas from "@rive-app/react-canvas";

const { Alignment, Fit, Layout, useRive } = RiveCanvas;
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { TypingText } from "@/components/ui/legali/atomic/TypingText";

/**
 * Available motion states for the mascot animation.
 * These correspond to the MOTIONS enum in the Rive View Model.
 */
export const MascotMotion = {
  EXIT: "EXIT",
  NORMAL: "NORMAL",
  LAPTOP: "LAPTOP",
  WRITING: "WRITING",
  IDLE: "IDLE",
  THINKING: "THINKING",
  CRYING: "CRYING",
  SPEAKING: "SPEAKING",
  CONFUSED: "CONFUSED",
  WAVING: "WAVING",
  SHRUG: "SHRUG",
  CELEBRATE: "CELEBRATE",
  SCHEDULED: "SCHEDULED",
  IDEA: "IDEA",
  READING: "READING",
  THROPHY: "THROPHY",
  THUMBSUP: "THUMBSUP",
} as const;

export type MascotMotionType = (typeof MascotMotion)[keyof typeof MascotMotion];

/**
 * Human-readable labels for each motion state.
 */
export const MascotMotionLabels: Record<MascotMotionType, string> = {
  [MascotMotion.EXIT]: "Exit",
  [MascotMotion.NORMAL]: "Normal",
  [MascotMotion.LAPTOP]: "Laptop",
  [MascotMotion.WRITING]: "Writing",
  [MascotMotion.IDLE]: "Idle",
  [MascotMotion.THINKING]: "Thinking",
  [MascotMotion.CRYING]: "Crying",
  [MascotMotion.SPEAKING]: "Speaking",
  [MascotMotion.CONFUSED]: "Confused",
  [MascotMotion.WAVING]: "Waving",
  [MascotMotion.SHRUG]: "Shrug",
  [MascotMotion.CELEBRATE]: "Celebrate",
  [MascotMotion.SCHEDULED]: "Scheduled",
  [MascotMotion.IDEA]: "Idea",
  [MascotMotion.READING]: "Reading",
  [MascotMotion.THROPHY]: "Throphy",
  [MascotMotion.THUMBSUP]: "Thumbsup",
};

/**
 * Position of the speech bubble relative to the mascot.
 */
export type SpeechBubblePosition = "top" | "top-left" | "top-right" | "left" | "right";

export type LegaliMascotProps = {
  /**
   * The current motion/animation state to display.
   * When speechText is provided, this will be overridden to SPEAKING.
   * @default MascotMotion.IDLE
   */
  motion?: MascotMotionType;

  /**
   * Whether the mascot should blink.
   * @default true
   */
  isBlink?: boolean;

  /**
   * Width of the canvas container.
   * @default 300
   */
  width?: number | string;

  /**
   * Height of the canvas container.
   * @default 300
   */
  height?: number | string;

  /**
   * Path to the .riv animation file.
   * @default '/srchttps://raw.githubusercontent.com/rryando/legali-ai-components/main/public/animations/legali.riv'
   */
  src?: string;

  /**
   * Name of the state machine to use.
   * @default 'SM_MASCOT'
   */
  stateMachine?: string;

  /**
   * Additional CSS class names for the container.
   */
  className?: string;

  /**
   * Callback fired when the Rive animation is loaded.
   */
  onLoad?: () => void;

  /**
   * Callback fired when the motion state changes.
   */
  onMotionChange?: (motion: MascotMotionType) => void;

  // ─────────────────────────────────────────────────────────────────────────
  // Speech Bubble Props
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Text to display in the speech bubble. When provided, the mascot will
   * automatically switch to SPEAKING motion and show the speech bubble.
   */
  speechText?: string;

  /**
   * Array of texts to cycle through in the speech bubble.
   * Takes precedence over speechText if provided.
   */
  speechTexts?: string[];

  /**
   * Typing speed for the speech bubble text in milliseconds.
   * @default 40
   */
  speechSpeed?: number;

  /**
   * Whether to loop through speechTexts.
   * @default false
   */
  speechLoop?: boolean;

  /**
   * Pause duration between text cycles in milliseconds.
   * @default 2000
   */
  speechPauseDuration?: number;

  /**
   * Position of the speech bubble relative to the mascot.
   * @default "top-right"
   */
  speechBubblePosition?: SpeechBubblePosition;

  /**
   * Additional CSS class names for the speech bubble.
   */
  speechBubbleClassName?: string;

  /**
   * Whether to show the cursor in the typing animation.
   * @default true
   */
  showCursor?: boolean;

  /**
   * Callback fired when the speech typing completes.
   */
  onSpeechComplete?: () => void;

  /**
   * Maximum width of the speech bubble.
   * @default 200
   */
  speechBubbleMaxWidth?: number;
};

/**
 * Get position classes for speech bubble placement.
 */
function getSpeechBubblePositionClasses(position: SpeechBubblePosition): string {
  const positionClasses: Record<SpeechBubblePosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    "top-left": "bottom-full right-1/4 mb-2",
    "top-right": "bottom-full left-1/4 mb-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };
  return positionClasses[position];
}

/**
 * Get tail position classes for speech bubble tail.
 */
function getSpeechBubbleTailClasses(position: SpeechBubblePosition): string {
  const tailClasses: Record<SpeechBubblePosition, string> = {
    top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-white",
    "top-left":
      "top-full right-6 border-l-transparent border-r-transparent border-b-transparent border-t-white",
    "top-right":
      "top-full left-6 border-l-transparent border-r-transparent border-b-transparent border-t-white",
    left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-white",
    right:
      "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-white",
  };
  return tailClasses[position];
}

// Rive view model property type
type RiveViewModelProperty = { value: unknown };

/**
 * LegaliMascot Component
 *
 * Displays an animated mascot character using Rive animations.
 * The mascot supports multiple motion states and blinking control
 * through View Model data binding. Optionally displays a speech bubble
 * with animated typing text.
 */
export function LegaliMascot({
  motion: motionProp = MascotMotion.IDLE,
  isBlink = true,
  width = 300,
  height = 300,
  src = "https://raw.githubusercontent.com/rryando/legali-ai-components/main/public/animations/legali.riv",
  stateMachine = "SM_MASCOT",
  className = "",
  onLoad,
  onMotionChange,
  // Speech bubble props
  speechText,
  speechTexts,
  speechSpeed = 40,
  speechLoop = false,
  speechPauseDuration = 2000,
  speechBubblePosition = "top-right",
  speechBubbleClassName,
  showCursor = true,
  onSpeechComplete,
  speechBubbleMaxWidth = 200,
}: LegaliMascotProps) {
  // Determine if we should show the speech bubble
  const hasSpeech = Boolean(speechText || (speechTexts && speechTexts.length > 0));

  // When speaking, override the motion to SPEAKING
  const effectiveMotion = hasSpeech ? MascotMotion.SPEAKING : motionProp;

  // Store references to view model properties
  const blinkPropertyRef = useRef<RiveViewModelProperty | null>(null);
  const animatesPropertyRef = useRef<RiveViewModelProperty | null>(null);
  const isInitializedRef = useRef(false);

  const handleRiveLoad = () => {
    // This function is called when the Rive animation is loaded.
    // The actual initialization logic is in the useEffect hook.
  };

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines: stateMachine,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
    autoBind: true,
    onLoad: handleRiveLoad,
  });

  // Initialize view model properties when rive becomes available
  useEffect(() => {
    if (!rive || isInitializedRef.current) {
      return;
    }

    try {
      const vmi = rive.viewModelInstance;
      if (!vmi) {
        return;
      }

      blinkPropertyRef.current = vmi.boolean("isBlink");
      animatesPropertyRef.current = vmi.enum("animates");

      if (blinkPropertyRef.current) {
        blinkPropertyRef.current.value = isBlink;
      }
      if (animatesPropertyRef.current) {
        animatesPropertyRef.current.value = effectiveMotion;
      }

      isInitializedRef.current = true;
      onLoad?.();
    } catch (error) {
      console.warn("Failed to initialize view model:", error);
    }
  }, [rive, isBlink, effectiveMotion, onLoad]);

  // Update blink state when prop changes
  useEffect(() => {
    if (blinkPropertyRef.current && isInitializedRef.current) {
      blinkPropertyRef.current.value = isBlink;
    }
  }, [isBlink]);

  // Track previous motion to detect changes
  const prevMotionRef = useRef<MascotMotionType>(effectiveMotion);

  // Update motion state when prop changes - reset to NORMAL first
  useEffect(() => {
    if (!(animatesPropertyRef.current && isInitializedRef.current)) {
      return;
    }
    if (prevMotionRef.current === effectiveMotion) {
      return;
    }

    // First, set to NORMAL to reset all animation attributes
    animatesPropertyRef.current.value = MascotMotion.NORMAL;

    // After 300ms, apply the target motion
    const timer = setTimeout(() => {
      if (animatesPropertyRef.current) {
        animatesPropertyRef.current.value = effectiveMotion;
        onMotionChange?.(effectiveMotion);
      }
    }, 300);

    prevMotionRef.current = effectiveMotion;

    return () => clearTimeout(timer);
  }, [effectiveMotion, onMotionChange]);

  return (
    <div
      className={cn("rive-mascot-container relative", className)}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      <RiveComponent />

      {/* Speech Bubble */}
      <AnimatePresence>
        {hasSpeech ? (
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={cn("absolute z-10", getSpeechBubblePositionClasses(speechBubblePosition))}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div
              className={cn(
                "relative rounded-2xl border border-slate-200/60 bg-white px-4 py-3 shadow-lg",
                "text-slate-700 text-sm leading-relaxed",
                speechBubbleClassName
              )}
              style={{ maxWidth: speechBubbleMaxWidth }}
            >
              <TypingText
                cursor="▍"
                cursorClassName="text-slate-400"
                delay={100}
                loop={speechLoop}
                onComplete={onSpeechComplete}
                pauseDuration={speechPauseDuration}
                showCursor={showCursor}
                speed={speechSpeed}
                startOnView={false}
                text={speechTexts && speechTexts.length > 0 ? undefined : speechText}
                texts={speechTexts && speechTexts.length > 0 ? speechTexts : undefined}
              />

              {/* Speech Bubble Tail */}
              <div
                className={cn(
                  "absolute h-0 w-0 border-8 border-solid",
                  getSpeechBubbleTailClasses(speechBubblePosition)
                )}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default LegaliMascot;
