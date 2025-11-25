import * as React from "react"
import { cn } from "@/lib/utils"
import { ProgressBar } from "../atomic/ProgressBar"
import { GlassCard } from "../atomic/GlassCard"

export interface ProgressSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  progress: number
  variant?: "header" | "card"
  showPercentage?: boolean
}

const ProgressSection = React.forwardRef<HTMLDivElement, ProgressSectionProps>(
  ({ 
    className, 
    title, 
    progress, 
    variant = "header",
    showPercentage = true,
    ...props 
  }, ref) => {
    return (
      <GlassCard
        ref={ref}
        intensity={variant === "header" ? "high" : "low"}
        className={cn(
          "rounded-xl p-4",
          variant === "header" && "border-white/40",
          variant === "card" && "border-slate-200/50",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between mb-3 text-sm">
          <span className="font-semibold text-slate-700">
            {title}
          </span>
          {showPercentage && (
            <span className="font-bold text-slate-900">
              {progress}%
            </span>
          )}
        </div>
        <ProgressBar
          value={progress}
          variant="default"
          className="bg-slate-100/50"
        />
      </GlassCard>
    )
  }
)
ProgressSection.displayName = "ProgressSection"

export { ProgressSection }
