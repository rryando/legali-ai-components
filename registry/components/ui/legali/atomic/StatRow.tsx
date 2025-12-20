import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

const StatRow = React.forwardRef<HTMLDivElement, StatRowProps>(
  ({ className, label, value, icon, ...props }, ref) => (
    <div
      className={cn(
        "flex items-center justify-between border-slate-200/50 border-b py-3 last:border-b-0",
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
        {icon && <span aria-hidden="true">{icon}</span>}
        {label}
      </span>
      <span className="font-semibold text-gray-900 text-sm md:text-base">
        {value}
      </span>
    </div>
  )
);
StatRow.displayName = "StatRow";

export { StatRow };
