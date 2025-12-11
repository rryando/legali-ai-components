import * as React from "react"
import { cn } from "@/lib/utils"
import { StatItem } from "../atomic/StatItem"

export interface UserStatsBarProps extends React.HTMLAttributes<HTMLDivElement> {
  streak: number
  points: number
  hearts: number
  maxHearts?: number
}

const UserStatsBar = React.forwardRef<HTMLDivElement, UserStatsBarProps>(
  ({ className, streak, points, hearts, maxHearts = 5, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between gap-2 py-3 ",
          className
        )}
        {...props}
      >
        <StatItem
          value={streak}
          variant="streak"
          className="shadow-sm"
        />
        <StatItem
          value={points}
          variant="points"
          className="shadow-sm"
        />
        <StatItem
          value={`${hearts}`} // Simplified to just show current hearts like Duolingo
          variant="hearts"
          className="shadow-sm"
        />
      </div>
    )
  }
)
UserStatsBar.displayName = "UserStatsBar"

export { UserStatsBar }
