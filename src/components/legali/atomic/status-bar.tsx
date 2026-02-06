import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  time?: string;
  showIcons?: boolean;
}

const StatusBar = React.forwardRef<HTMLDivElement, StatusBarProps>(
  ({ className, time = "9:41", showIcons = true, ...props }, ref) => (
    <div
      className={cn(
        "flex h-11 items-center justify-between bg-gradient-to-b from-white/90 to-white/70 px-5 font-medium text-sm backdrop-blur-md",
        className
      )}
      ref={ref}
      {...props}
    >
      <span>{time}</span>
      {showIcons && (
        <span aria-label="Status icons" className="flex gap-1">
          📶 📡 🔋
        </span>
      )}
    </div>
  )
);
StatusBar.displayName = "StatusBar";

export { StatusBar };
