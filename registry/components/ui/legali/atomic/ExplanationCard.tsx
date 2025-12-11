import * as React from "react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./GlassCard"

export interface ExplanationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  explanation: string
}

export const ExplanationCard = React.forwardRef<HTMLDivElement, ExplanationCardProps>(
  ({ className, explanation, ...props }, ref) => {
    return (
      <GlassCard
        ref={ref}
        intensity="low"
        className={cn(
          "mt-4 p-4 rounded-xl text-sm text-blue-800 leading-relaxed border-blue-200/50 bg-blue-50/30",
          className
        )}
        {...props}
      >
        <span className="font-bold block mb-1">Explanation:</span>
        {explanation}
      </GlassCard>
    )
  }
)
ExplanationCard.displayName = "ExplanationCard"
