/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-explanation-card.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-explanation-card.json"
 */
import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./GlassCard";

export interface ExplanationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  explanation: string;
}

export const ExplanationCard = React.forwardRef<HTMLDivElement, ExplanationCardProps>(
  ({ className, explanation, ...props }, ref) => (
    <GlassCard
      className={cn(
        "mt-4 rounded-xl border-blue-200/50 bg-blue-50/30 p-4 text-blue-800 text-sm leading-relaxed",
        className
      )}
      intensity="low"
      ref={ref}
      {...props}
    >
      <span className="mb-1 block font-bold">Explanation:</span>
      {explanation}
    </GlassCard>
  )
);
ExplanationCard.displayName = "ExplanationCard";
