import type { LucideIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./GlassCard";

export interface ProfileStatCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  label: string;
  value: string | number;
  colorClass: string;
}

const ProfileStatCard = React.forwardRef<HTMLDivElement, ProfileStatCardProps>(
  ({ className, icon: Icon, label, value, colorClass, ...props }, ref) => (
    <GlassCard
      className={cn(
        "group flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center hover:-translate-y-1",
        className
      )}
      ref={ref}
      {...props}
    >
      <div
        className={cn(
          "rounded-xl bg-white/50 p-3 shadow-sm transition-transform group-hover:scale-110",
          colorClass
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="font-bold text-2xl text-slate-800">{value}</div>
        <div className="font-medium text-slate-500 text-xs uppercase tracking-wider">
          {label}
        </div>
      </div>
    </GlassCard>
  )
);
ProfileStatCard.displayName = "ProfileStatCard";

export { ProfileStatCard };
