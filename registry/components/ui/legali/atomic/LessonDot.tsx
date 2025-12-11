import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const lessonDotVariants = cva(
  "rounded-full transition-all duration-200",
  {
    variants: {
      status: {
        pending: "bg-slate-300/50 backdrop-blur-sm",
        current: "bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5),inset_0_0_5px_rgba(255,255,255,0.5)] animate-pulse ring-2 ring-blue-200/50",
        completed: "bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.3)]",
        locked: "bg-slate-200/50 backdrop-blur-sm",
      },
      size: {
        sm: "w-2 h-2",
        md: "w-3 h-3",
        lg: "w-4 h-4",
      },
    },
    defaultVariants: {
      status: "pending",
      size: "md",
    },
  }
)

export interface LessonDotProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof lessonDotVariants> {
  completed?: boolean
  current?: boolean
  locked?: boolean
}

const LessonDot = React.forwardRef<HTMLDivElement, LessonDotProps>(
  ({ 
    className, 
    size, 
    completed = false,
    current = false,
    locked = false,
    ...props 
  }, ref) => {
    const status = completed 
      ? "completed" 
      : current 
      ? "current" 
      : locked 
      ? "locked" 
      : "pending"

    const ariaLabel = completed 
      ? "Lesson completed" 
      : current 
      ? "Current lesson" 
      : locked 
      ? "Lesson locked" 
      : "Lesson pending"

    return (
      <div
        ref={ref}
        className={cn(lessonDotVariants({ status, size, className }))}
        role="status"
        aria-label={ariaLabel}
        {...props}
      />
    )
  }
)
LessonDot.displayName = "LessonDot"

export { LessonDot, lessonDotVariants }
