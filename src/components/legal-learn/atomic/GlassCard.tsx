import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "dark"
  intensity?: "low" | "medium" | "high"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", intensity = "medium", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base glass styles
          "backdrop-blur-xl border transition-all duration-300",
          
          // Intensity variants (Background opacity)
          intensity === "low" && "bg-white/40",
          intensity === "medium" && "bg-white/60",
          intensity === "high" && "bg-white/80",

          // Border styles
          "border-white/40 shadow-lg shadow-black/5",

          // Interactive variant
          variant === "interactive" && [
            "cursor-pointer hover:-translate-y-1 hover:bg-white/70",
            "hover:shadow-xl hover:shadow-indigo-500/10 hover:border-white/60",
            "active:scale-[0.98] active:bg-white/80"
          ],

          // Dark variant (for contrast elements)
          variant === "dark" && [
            "bg-slate-900/80 border-slate-700/50 text-white",
            "hover:bg-slate-900/90"
          ],

          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
