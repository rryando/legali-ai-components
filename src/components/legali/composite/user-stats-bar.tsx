import * as React from "react";
import { cn } from "@/lib/utils";
import { StatItem } from "../atomic/StatItem";

export interface UserStatsBarProps extends React.HTMLAttributes<HTMLDivElement> {
  streak: number;
  points: number;
  hearts: number;
  maxHearts?: number;
}

const UserStatsBar = React.forwardRef<HTMLDivElement, UserStatsBarProps>(
  ({ className, streak, points, hearts, maxHearts = 5, ...props }, ref) => {
    return (
      <div
        className={cn("flex items-center justify-between gap-2 py-3", className)}
        ref={ref}
        {...props}
      >
        <StatItem className="shadow-sm" value={streak} variant="streak" />
        <StatItem className="shadow-sm" value={points} variant="points" />
        <StatItem
          className="shadow-sm" // Simplified to just show current hearts like Duolingo
          value={`${hearts}`}
          variant="hearts"
        />
      </div>
    );
  }
);
UserStatsBar.displayName = "UserStatsBar";

export { UserStatsBar };
