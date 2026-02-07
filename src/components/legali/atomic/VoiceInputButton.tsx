/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-voice-input-button.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-voice-input-button.json"
 */
import { Mic } from "lucide-react";
import type { MouseEvent } from "react";
import { forwardRef, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type VoiceInputButtonProps = {
  /** Whether voice input is currently active */
  isListening?: boolean;
  /** Callback when button is clicked */
  onToggle?: (isListening: boolean) => void;
  /** Primary color for active state */
  activeColor?: string;
  /** Size of the button */
  size?: "sm" | "md" | "lg";
  /** Additional CSS classes */
  className?: string;
};

/**
 * Microphone button with waveform animation when active.
 * Shows pulsing ring and waveform bars when listening.
 *
 * @example
 * ```tsx
 * <VoiceInputButton
 *   isListening={isListening}
 *   onToggle={setIsListening}
 * />
 * ```
 */
const VoiceInputButton = forwardRef<HTMLButtonElement, VoiceInputButtonProps>(
  (
    {
      className,
      isListening: controlledListening,
      onToggle,
      activeColor = "#4eaed0",
      size = "md",
      ...props
    },
    ref
  ) => {
    const [internalListening, setInternalListening] = useState(false);
    const isListening = controlledListening ?? internalListening;

    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newState = !isListening;
        setInternalListening(newState);
        onToggle?.(newState);
      },
      [isListening, onToggle]
    );

    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    };

    const iconSizes = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    };

    return (
      <button
        className={cn(
          "relative flex items-center justify-center rounded-full",
          "bg-slate-100 transition-all duration-300",
          "hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
          sizeClasses[size],
          isListening && "bg-opacity-20",
          className
        )}
        onClick={handleClick}
        ref={ref}
        style={{
          backgroundColor: isListening ? `${activeColor}20` : undefined,
        }}
        type="button"
        {...props}
      >
        {/* Pulsing ring when listening */}
        {isListening ? (
          <>
            <span
              className="absolute inset-0 animate-ping rounded-full opacity-30"
              style={{ backgroundColor: activeColor }}
            />
            <span
              className="absolute inset-1 animate-pulse rounded-full opacity-20"
              style={{ backgroundColor: activeColor }}
            />
          </>
        ) : null}

        {/* Mic icon or waveform */}
        {isListening ? (
          <div className="relative flex items-end justify-center gap-0.5">
            {["bar-1", "bar-2", "bar-3", "bar-4", "bar-5"].map((id, i) => (
              <div
                className="w-0.5 rounded-full"
                key={id}
                style={{
                  backgroundColor: activeColor,
                  height: "16px",
                  animation: "waveform 0.8s ease-in-out infinite",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        ) : (
          <Mic className={cn(iconSizes[size], "text-slate-600")} />
        )}

        <style>{`
          @keyframes waveform {
            0%, 100% {
              transform: scaleY(0.4);
            }
            50% {
              transform: scaleY(1);
            }
          }
        `}</style>
      </button>
    );
  }
);

VoiceInputButton.displayName = "VoiceInputButton";

export { VoiceInputButton };
export type { VoiceInputButtonProps };
