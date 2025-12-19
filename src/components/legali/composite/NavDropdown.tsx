import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"

export interface NavDropdownItem {
  label: string
  href: string
  description?: string
}

export interface NavDropdownProps {
  /** Trigger label text */
  label: string
  /** Menu items to display */
  items: NavDropdownItem[]
  /** Additional class names for the trigger */
  className?: string
}

/**
 * A navigation dropdown menu with support for descriptions.
 * Designed for use in navigation headers.
 */
const NavDropdown = React.forwardRef<HTMLButtonElement, NavDropdownProps>(
  ({ label, items, className }, ref) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          ref={ref}
          className={cn(
            "flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#4eaed0] transition-colors outline-none group",
            className
          )}
        >
          {label}
          <ChevronDown className="w-3.5 h-3.5 group-data-[state=open]:rotate-180 transition-transform duration-200" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/50 p-3 min-w-[280px]">
          {items.map((item) => (
            <DropdownMenuItem key={item.label} asChild>
              <a
                href={item.href}
                className="flex flex-col gap-1 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#4eaed0]/5 hover:to-transparent transition-all group"
              >
                <span className="font-medium text-slate-800 group-hover:text-[#4eaed0] transition-colors">
                  {item.label}
                </span>
                {item.description && (
                  <span className="text-xs text-slate-500">{item.description}</span>
                )}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
)

NavDropdown.displayName = "NavDropdown"

export { NavDropdown }
