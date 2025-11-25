import * as React from "react"
import { cn } from "@/lib/utils"

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  time?: string
  showIcons?: boolean
}

const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(
  ({ className, time = "9:41", showIcons = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "h-11 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md flex items-center justify-between px-5 text-sm font-medium",
          className
        )}
        {...props}
      >
        <span>{time}</span>
        {showIcons && (
          <span className="flex gap-1" aria-label="Status icons">
            📶 📡 🔋
          </span>
        )}
      </div>
    )
  }
)
StatusBar.displayName = "StatusBar"

export { StatusBar }
