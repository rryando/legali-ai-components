/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-glass-card.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-glass-card.json"
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "dark";
  intensity?: "low" | "medium" | "high";
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", intensity = "medium", ...props }, ref) => {
    return (
      <div
        className={cn(
          // Base glass styles
          "border backdrop-blur-xl transition-all duration-300",

          // Intensity variants (Background opacity)
          intensity === "low" && "bg-gradient-to-br from-white/40 via-white/30 to-white/10",
          intensity === "medium" && "bg-gradient-to-br from-white/60 via-white/40 to-white/20",
          intensity === "high" && "bg-gradient-to-br from-white/80 via-white/60 to-white/40",

          // Border styles
          "border-white/40 shadow-blue-900/5 shadow-lg",

          // Interactive variant
          variant === "interactive" && [
            "cursor-pointer hover:-translate-y-1",
            "hover:from-blue-50/40 hover:via-white/50 hover:to-blue-50/20",
            "hover:shadow-[0_0_25px_rgba(59,130,246,0.15),inset_0_0_15px_rgba(59,130,246,0.05)]", // Bluish glow with inner reflection
            "hover:border-blue-400/50", // Bluish border
            "hover:animate-border-glow", // Animation
            "active:scale-[0.98] active:bg-white/80",
          ],

          // Dark variant (for contrast elements)
          variant === "dark" && [
            "border-slate-700/50 bg-slate-900/80 text-white",
            "hover:border-blue-500/30 hover:bg-slate-900/90 hover:shadow-blue-500/10",
          ],

          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
