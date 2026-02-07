import { cva, type VariantProps } from "class-variance-authority";
import { Flame, Heart, Star } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const statItemVariants = cva(
  "flex cursor-default items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110",
  {
    variants: {
      variant: {
        default:
          "border-white/40 bg-gradient-to-br from-white/60 to-white/40 text-slate-700 hover:border-blue-400/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15),inset_0_0_10px_rgba(59,130,246,0.05)]",
        streak:
          "border-orange-200/50 bg-gradient-to-br from-orange-50/80 to-orange-100/40 text-orange-600 hover:border-orange-400/50 hover:from-orange-100 hover:to-orange-50 hover:shadow-[0_0_15px_rgba(249,115,22,0.3),inset_0_0_10px_rgba(249,115,22,0.1)]",
        points:
          "border-amber-200/50 bg-gradient-to-br from-amber-50/80 to-amber-100/40 text-amber-600 hover:border-amber-400/50 hover:from-amber-100 hover:to-amber-50 hover:shadow-[0_0_15px_rgba(245,158,11,0.3),inset_0_0_10px_rgba(245,158,11,0.1)]",
        hearts:
          "border-rose-200/50 bg-gradient-to-br from-rose-50/80 to-rose-100/40 text-rose-600 hover:border-rose-400/50 hover:from-rose-100 hover:to-rose-50 hover:shadow-[0_0_15px_rgba(244,63,94,0.3),inset_0_0_10px_rgba(244,63,94,0.1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statItemVariants> {
  icon?: React.ReactNode;
  value: string | number;
  label?: string;
}

const StatItem = React.forwardRef<HTMLDivElement, StatItemProps>(
  ({ className, variant, icon, value, label, ...props }, ref) => {
    // Default icons if none provided
    let displayIcon = icon;
    if (!icon) {
      if (variant === "streak") displayIcon = <Flame className="h-4 w-4 fill-orange-400/20" />;
      if (variant === "points") displayIcon = <Star className="h-4 w-4 fill-amber-400/20" />;
      if (variant === "hearts") displayIcon = <Heart className="h-4 w-4 fill-rose-400/20" />;
    }

    return (
      <div className={cn(statItemVariants({ variant }), className)} ref={ref} {...props}>
        <span aria-hidden="true" className="flex items-center justify-center">
          {displayIcon}
        </span>
        <span className="font-bold font-mono text-sm tracking-tight">{value}</span>
        {label && (
          <span className="ml-1 font-bold text-xs uppercase tracking-wider opacity-80">
            {label}
          </span>
        )}
      </div>
    );
  }
);
StatItem.displayName = "StatItem";

export { StatItem, statItemVariants };
