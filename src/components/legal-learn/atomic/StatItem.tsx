import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Flame, Star, Heart } from "lucide-react"

const statItemVariants = cva(
  "flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-110 cursor-default border shadow-sm backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "bg-white/60 border-white/40 text-slate-700",
        streak: "bg-orange-100/80 border-orange-200/50 text-orange-600 hover:bg-orange-200 hover:shadow-orange-500/20",
        points: "bg-amber-100/80 border-amber-200/50 text-amber-600 hover:bg-amber-200 hover:shadow-amber-500/20",
        hearts: "bg-rose-100/80 border-rose-200/50 text-rose-600 hover:bg-rose-200 hover:shadow-rose-500/20",
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
