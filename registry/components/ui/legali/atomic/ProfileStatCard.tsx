import * as React from "react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./GlassCard"
import { LucideIcon } from "lucide-react"

export interface ProfileStatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  label: string
  value: string | number
  colorClass: string
}

const ProfileStatCard = React.forwardRef<HTMLDivElement, ProfileStatCardProps>(
  ({ className, icon: Icon, label, value, colorClass, ...props }, ref) => {
    return (
      <GlassCard 
        ref={ref}
        className={cn(
          "p-4 flex flex-col items-center justify-center gap-2 text-center group hover:-translate-y-1 rounded-2xl",
          className
        )}
        {...props}
      >
        <div className={cn("p-3 rounded-xl bg-white/50 shadow-sm transition-transform group-hover:scale-110", colorClass)}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-800">{value}</div>
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</div>
        </div>
      </GlassCard>
    )
  }
)
ProfileStatCard.displayName = "ProfileStatCard"

export { ProfileStatCard }
