import * as React from "react"
import { cn } from "@/lib/utils"
import { ProgressBar } from "../atomic/ProgressBar"

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
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-4 border",
          variant === "header" && "bg-white border-slate-200 shadow-sm",
          variant === "card" && "bg-slate-50 border-slate-200",
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
          className="bg-slate-100"
        />
      </div>
    )
  }
)
ProgressSection.displayName = "ProgressSection"

export { ProgressSection }
