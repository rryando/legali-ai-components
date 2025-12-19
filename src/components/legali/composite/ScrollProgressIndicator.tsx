import * as React from "react"
import { cn } from "@/lib/utils"
import { useScrollProgress } from "../hooks/useAnimations"

export interface ScrollProgressIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color of the progress bar (CSS gradient) */
  progressColor?: string
  /** Whether to show percentage text */
  showPercentage?: boolean
  /** Position of the indicator */
  position?: "left" | "right"
}

/**
 * A fixed vertical progress bar showing scroll position.
 * Hidden on smaller screens.
 */
const ScrollProgressIndicator = React.forwardRef<HTMLDivElement, ScrollProgressIndicatorProps>(
  (
    {
      className,
      progressColor = "linear-gradient(to bottom, #4eaed0, #764ba2)",
      showPercentage = true,
      position = "left",
      ...props
    },
    ref
  ) => {
    const progress = useScrollProgress()

    const positionClasses = position === "left" ? "left-4" : "right-4"

    return (
      <div
        ref={ref}
        className={cn(
          "fixed top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2",
          positionClasses,
          className
        )}
        {...props}
      >
        <div className="w-1 h-32 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="w-full rounded-full transition-all duration-150"
            style={{
              height: `${progress}%`,
              background: progressColor,
            }}
          />
        </div>
        {showPercentage && (
          <span className="text-xs text-slate-400 font-medium">
            {Math.round(progress)}%
          </span>
        )}
      </div>
    )
  }
)

ScrollProgressIndicator.displayName = "ScrollProgressIndicator"

export { ScrollProgressIndicator }
