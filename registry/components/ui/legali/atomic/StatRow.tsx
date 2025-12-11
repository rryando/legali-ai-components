import * as React from "react"
import { cn } from "@/lib/utils"

export interface StatRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  icon?: React.ReactNode
}

const StatRow = React.forwardRef<HTMLDivElement, StatRowProps>(
  ({ className, label, value, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between py-3 border-b border-slate-200/50 last:border-b-0",
          className
        )}
        {...props}
      >
        <span className="text-gray-600 text-sm md:text-base flex items-center gap-2">
          {icon && <span aria-hidden="true">{icon}</span>}
          {label}
        </span>
        <span className="text-gray-900 font-semibold text-sm md:text-base">
          {value}
        </span>
      </div>
    )
  }
)
StatRow.displayName = "StatRow"

export { StatRow }
