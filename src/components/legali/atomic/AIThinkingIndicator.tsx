/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-ai-thinking-indicator.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-ai-thinking-indicator.json"
 */
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type AIThinkingIndicatorProps = {
  /** Current state of the indicator */
  state?: "idle" | "thinking" | "complete";
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Primary color */
  color?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Animated AI processing indicator with pulsing dots.
 * Shows visual feedback during AI operations.
 *
 * @example
 * ```tsx
 * <AIThinkingIndicator state="thinking" />
 * ```
 */
const AIThinkingIndicator = forwardRef<HTMLDivElement, AIThinkingIndicatorProps>(
  ({ className, state = "idle", size = "md", color = "#4eaed0", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-4 gap-1",
      md: "h-6 gap-1.5",
      lg: "h-8 gap-2",
    };

    const dotSizes = {
      sm: "h-1.5 w-1.5",
      md: "h-2 w-2",
      lg: "h-2.5 w-2.5",
    };

    if (state === "idle") {
      return null;
    }

    if (state === "complete") {
      return (
        <div className={cn("flex items-center", sizeClasses[size], className)} ref={ref} {...props}>
          <svg
            className="zoom-in h-4 w-4 animate-in duration-300"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    }

    return (
      <div className={cn("flex items-center", sizeClasses[size], className)} ref={ref} {...props}>
        {[0, 1, 2].map((i) => (
          <div
            className={cn("rounded-full", dotSizes[size])}
            key={i}
            style={{
              backgroundColor: color,
              animation: "aiPulse 1.4s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        <style>{`
          @keyframes aiPulse {
            0%, 80%, 100% {
              transform: scale(0.6);
              opacity: 0.4;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }
);

AIThinkingIndicator.displayName = "AIThinkingIndicator";

export { AIThinkingIndicator };
export type { AIThinkingIndicatorProps };
