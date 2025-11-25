import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Flame, Star, Heart } from "lucide-react"

const statItemVariants = cva(
  "flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-110 cursor-default border shadow-sm backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-white/60 to-white/40 border-white/40 text-slate-700 hover:shadow-[0_0_15px_rgba(59,130,246,0.15),inset_0_0_10px_rgba(59,130,246,0.05)] hover:border-blue-400/30",
        streak: "bg-gradient-to-br from-orange-50/80 to-orange-100/40 border-orange-200/50 text-orange-600 hover:from-orange-100 hover:to-orange-50 hover:shadow-[0_0_15px_rgba(249,115,22,0.3),inset_0_0_10px_rgba(249,115,22,0.1)] hover:border-orange-400/50",
        points: "bg-gradient-to-br from-amber-50/80 to-amber-100/40 border-amber-200/50 text-amber-600 hover:from-amber-100 hover:to-amber-50 hover:shadow-[0_0_15px_rgba(245,158,11,0.3),inset_0_0_10px_rgba(245,158,11,0.1)] hover:border-amber-400/50",
        hearts: "bg-gradient-to-br from-rose-50/80 to-rose-100/40 border-rose-200/50 text-rose-600 hover:from-rose-100 hover:to-rose-50 hover:shadow-[0_0_15px_rgba(244,63,94,0.3),inset_0_0_10px_rgba(244,63,94,0.1)] hover:border-rose-400/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface StatItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statItemVariants> {
  icon?: React.ReactNode
  value: string | number
  label?: string
}

const StatItem = React.forwardRef<HTMLDivElement, StatItemProps>(
  ({ className, variant, icon, value, label, ...props }, ref) => {
    
    // Default icons if none provided
    let displayIcon = icon
    if (!icon) {
      if (variant === 'streak') displayIcon = <Flame className="w-4 h-4 fill-orange-400/20" />
      if (variant === 'points') displayIcon = <Star className="w-4 h-4 fill-amber-400/20" />
      if (variant === 'hearts') displayIcon = <Heart className="w-4 h-4 fill-rose-400/20" />
    }

    return (
      <div
        ref={ref}
        className={cn(statItemVariants({ variant }), className)}
        {...props}
      >
        <span className="flex items-center justify-center" aria-hidden="true">
          {displayIcon}
        </span>
        <span className="font-bold text-sm font-mono tracking-tight">
          {value}
        </span>
        {label && (
          <span className="text-xs font-bold opacity-80 uppercase tracking-wider ml-1">
            {label}
          </span>
        )}
      </div>
    )
  }
)
StatItem.displayName = "StatItem"

export { StatItem, statItemVariants }
