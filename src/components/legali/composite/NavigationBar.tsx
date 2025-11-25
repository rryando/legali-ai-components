import * as React from "react"
import { cn } from "@/lib/utils"
import { Home, Trophy, User } from "lucide-react"

export interface NavItem {
  id: string
  icon: React.ReactNode
  label: string
}

export interface NavigationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: NavItem[]
  activeItem: string
  onItemClick: (id: string) => void
}

const NavigationBar = React.forwardRef<HTMLDivElement, NavigationBarProps>(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex justify-between items-center px-2", // Layout container
          className
        )}
        {...props}
      >
        {items.map((item) => {
          const isActive = activeItem === item.id
          
          // Map string icons to Lucide if needed
          let iconNode = item.icon
          if (typeof item.icon === 'string') {
             if (item.id === 'learn') iconNode = <Home className="w-6 h-6" />
             if (item.id === 'progress') iconNode = <Trophy className="w-6 h-6" />
             if (item.id === 'profile') iconNode = <User className="w-6 h-6" />
          }

          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 min-w-[72px] border border-transparent",
                isActive 
                  ? "text-blue-600 bg-gradient-to-br from-blue-50/90 to-blue-100/50 shadow-[0_0_20px_rgba(59,130,246,0.2),inset_0_0_10px_rgba(59,130,246,0.1)] border-blue-200/50 scale-105 animate-border-glow" 
                  : "text-slate-400 hover:text-blue-500 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
              )}
            >
              <div className={cn(
                "transition-transform duration-300",
                isActive && "-translate-y-0.5"
              )}>
                {iconNode}
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-wide transition-opacity duration-300",
                isActive ? "opacity-100" : "opacity-60"
              )}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    )
  }
)
NavigationBar.displayName = "NavigationBar"

export { NavigationBar }
