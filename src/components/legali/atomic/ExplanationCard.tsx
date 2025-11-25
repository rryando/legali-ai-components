import * as React from "react"
import { cn } from "@/lib/utils"

export interface ExplanationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  explanation: string
}

export const ExplanationCard = React.forwardRef<HTMLDivElement, ExplanationCardProps>(
  ({ className, explanation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-4 p-4 bg-blue-50 rounded-xl text-sm text-blue-800 leading-relaxed",
          className
        )}
        {...props}
      >
        <span className="font-bold block mb-1">Explanation:</span>
        {explanation}
      </div>
    )
  }
)
ExplanationCard.displayName = "ExplanationCard"
