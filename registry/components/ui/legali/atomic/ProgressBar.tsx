import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const progressBarVariants = cva(
  "w-full rounded-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gray-200",
        quiz: "bg-white/30",
        module: "bg-white/30",
      },
      size: {
        sm: "h-1.5",
        md: "h-2.5",
        lg: "h-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const progressFillVariants = cva(
  "h-full transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-green-500",
        quiz: "bg-white",
        module: "bg-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  value: number
  showLabel?: boolean
  label?: string
  animated?: boolean
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ 
    className, 
    variant, 
    size, 
    value, 
    showLabel = false, 
    label,
    animated = true,
    ...props 
  }, ref) => {
    const clampedValue = Math.min(Math.max(value, 0), 100)

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {showLabel && (
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className="text-gray-700">{label}</span>
            <span className="font-semibold">{clampedValue}%</span>
          </div>
        )}
        <div className={cn(progressBarVariants({ variant, size }))}>
          <div
            className={cn(
              progressFillVariants({ variant }),
              !animated && "transition-none"
            )}
            style={{ width: `${clampedValue}%` }}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    )
  }
)
ProgressBar.displayName = "ProgressBar"

export { ProgressBar, progressBarVariants }
