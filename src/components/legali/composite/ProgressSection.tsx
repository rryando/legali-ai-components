/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-progress-section.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-progress-section.json"
 */
import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "../atomic/GlassCard";
import { ProgressBar } from "../atomic/ProgressBar";

export interface ProgressSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  progress: number;
  variant?: "header" | "card";
  showPercentage?: boolean;
}

const ProgressSection = React.forwardRef<HTMLDivElement, ProgressSectionProps>(
  ({ className, title, progress, variant = "header", showPercentage = true, ...props }, ref) => (
    <GlassCard
      className={cn(
        "rounded-xl p-4",
        variant === "header" && "border-white/40",
        variant === "card" && "border-slate-200/50",
        className
      )}
      intensity={variant === "header" ? "high" : "low"}
      ref={ref}
      {...props}
    >
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-700">{title}</span>
        {showPercentage && <span className="font-bold text-slate-900">{progress}%</span>}
      </div>
      <ProgressBar className="bg-slate-100/50" value={progress} variant="default" />
    </GlassCard>
  )
);
ProgressSection.displayName = "ProgressSection";

export { ProgressSection };
