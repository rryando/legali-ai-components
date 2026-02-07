import { ChevronDown } from "lucide-react";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { cn } from "@/lib/utils";

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  onClick?: () => void;
}

export interface NavDropdownProps {
  /** Trigger label text */
  label: string;
  /** Menu items to display */
  items: NavDropdownItem[];
  /** Additional class names for the trigger */
  className?: string;
}

/**
 * A navigation dropdown menu with support for descriptions.
 * Designed for use in navigation headers.
 */
const NavDropdown = React.forwardRef<HTMLButtonElement, NavDropdownProps>(
  ({ label, items, className }, ref) => (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "group flex items-center gap-1.5 font-medium text-slate-700 text-sm outline-none transition-colors hover:text-[#4eaed0]",
          className
        )}
        ref={ref}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[280px] rounded-2xl border border-slate-200/50 bg-white/95 p-3 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">
        {items.map((item) => (
          <DropdownMenuItem asChild key={item.label}>
            <a
              className="group flex flex-col gap-1 rounded-xl px-4 py-3 transition-all hover:bg-gradient-to-r hover:from-[#4eaed0]/5 hover:to-transparent"
              href={item.href}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
            >
              <span className="font-medium text-slate-800 transition-colors group-hover:text-[#4eaed0]">
                {item.label}
              </span>
              {item.description && (
                <span className="text-slate-500 text-xs">{item.description}</span>
              )}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
);

NavDropdown.displayName = "NavDropdown";

export { NavDropdown };
