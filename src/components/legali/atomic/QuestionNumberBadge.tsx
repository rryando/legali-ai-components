import * as React from "react"
import { cn } from "@/lib/utils"

export interface QuestionNumberBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  number: number
  status?: 'correct' | 'incorrect' | 'neutral'
}

export const QuestionNumberBadge = React.forwardRef<HTMLDivElement, QuestionNumberBadgeProps>(
  ({ className, number, status = 'neutral', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
          status === 'correct' && "bg-green-100 text-green-700",
          status === 'incorrect' && "bg-red-100 text-red-700",
          status === 'neutral' && "bg-slate-100 text-slate-700",
          className
        )}
        {...props}
      >
        {number}
      </div>
    )
  }
)
QuestionNumberBadge.displayName = "QuestionNumberBadge"
