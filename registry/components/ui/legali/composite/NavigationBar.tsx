import { Home, Trophy, User } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

export interface NavigationBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: NavItem[];
  activeItem: string;
  onItemClick: (id: string) => void;
}

const NavigationBar = React.forwardRef<HTMLDivElement, NavigationBarProps>(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center justify-between px-2", // Layout container
          className
        )}
        ref={ref}
        {...props}
      >
        {items.map((item) => {
          const isActive = activeItem === item.id;

          // Map string icons to Lucide if needed
          let iconNode = item.icon;
          if (typeof item.icon === "string") {
            if (item.id === "learn") iconNode = <Home className="h-6 w-6" />;
            if (item.id === "progress")
              iconNode = <Trophy className="h-6 w-6" />;
            if (item.id === "profile") iconNode = <User className="h-6 w-6" />;
          }

          return (
            <button
              className={cn(
                "flex min-w-[72px] flex-col items-center gap-1 rounded-2xl border border-transparent p-3 transition-all duration-300",
                isActive
                  ? "scale-105 animate-border-glow border-blue-200/50 bg-gradient-to-br from-blue-50/90 to-blue-100/50 text-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.2),inset_0_0_10px_rgba(59,130,246,0.1)]"
                  : "text-slate-400 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white/20 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
              )}
              key={item.id}
              onClick={() => onItemClick(item.id)}
            >
              <div
                className={cn(
                  "transition-transform duration-300",
                  isActive && "-translate-y-0.5"
                )}
              >
                {iconNode}
              </div>
              <span
                className={cn(
                  "font-bold text-[10px] uppercase tracking-wide transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-60"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    );
  }
);
NavigationBar.displayName = "NavigationBar";

export { NavigationBar };
