import * as React from "react";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "../hooks/useAnimations";

export interface ScrollProgressIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color of the progress bar (CSS gradient) */
  progressColor?: string;
  /** Whether to show percentage text */
  showPercentage?: boolean;
  /** Position of the indicator */
  position?: "left" | "right";
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
    const progress = useScrollProgress();

    const positionClasses = position === "left" ? "left-4" : "right-4";

    return (
      <div
        className={cn(
          "fixed top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 xl:flex",
          positionClasses,
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="h-32 w-1 overflow-hidden rounded-full bg-slate-200">
          <div
            className="w-full rounded-full transition-all duration-150"
            style={{
              height: `${progress}%`,
              background: progressColor,
            }}
          />
        </div>
        {showPercentage && (
          <span className="font-medium text-slate-400 text-xs">{Math.round(progress)}%</span>
        )}
      </div>
    );
  }
);

ScrollProgressIndicator.displayName = "ScrollProgressIndicator";

export { ScrollProgressIndicator };
