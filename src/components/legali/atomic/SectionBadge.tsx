import * as React from "react";
import { cn } from "@/lib/utils";

export type SectionBadgeVariant =
  | "info"
  | "warning"
  | "success"
  | "danger"
  | "neutral";

export interface SectionBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon to display before the label */
  icon?: React.ReactNode;
  /** Badge label text */
  label: string;
  /** Visual style variant */
  variant?: SectionBadgeVariant;
}

const variantStyles: Record<SectionBadgeVariant, string> = {
  info: "bg-gradient-to-r from-[#4eaed0]/10 to-[#667eea]/10 border-[#4eaed0]/20 text-[#4eaed0]",
  warning: "bg-amber-50 border-amber-100 text-amber-600",
  success: "bg-emerald-50 border-emerald-100 text-emerald-600",
  danger: "bg-rose-50 border-rose-100 text-rose-600",
  neutral: "bg-slate-50 border-slate-100 text-slate-600",
};

/**
 * A badge component for section headers.
 * Displays an icon and label with configurable color variants.
 */
const SectionBadge = React.forwardRef<HTMLDivElement, SectionBadgeProps>(
  ({ className, icon, label, variant = "info", ...props }, ref) => (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 font-medium text-sm",
        variantStyles[variant],
        className
      )}
      ref={ref}
      {...props}
    >
      {icon && <span className="h-4 w-4 flex-shrink-0">{icon}</span>}
      <span>{label}</span>
    </div>
  )
);

SectionBadge.displayName = "SectionBadge";

export { SectionBadge };
