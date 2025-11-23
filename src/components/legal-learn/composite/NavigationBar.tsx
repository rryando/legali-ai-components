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
                "flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-300 min-w-[72px]",
                isActive 
                  ? "text-blue-600 bg-blue-50/80 shadow-sm scale-105" 
                  : "text-slate-400 hover:text-blue-500 hover:bg-blue-50/40"
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
