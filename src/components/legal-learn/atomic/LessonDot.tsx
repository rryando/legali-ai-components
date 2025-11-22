import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const lessonDotVariants = cva(
  "rounded-full transition-all duration-200",
  {
    variants: {
      status: {
        pending: "bg-gray-300",
        current: "bg-blue-500 ring-2 ring-blue-200",
        completed: "bg-green-500",
        locked: "bg-gray-200",
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
