import * as React from "react";
import { cn } from "@/lib/utils";

export interface QuestionNumberBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  number: number;
  status?: "correct" | "incorrect" | "neutral";
}

export const QuestionNumberBadge = React.forwardRef<HTMLDivElement, QuestionNumberBadgeProps>(
  ({ className, number, status = "neutral", ...props }, ref) => (
    <div
      className={cn(
        "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border font-bold text-sm backdrop-blur-sm",
        status === "correct" &&
          "border-emerald-200/50 bg-gradient-to-br from-emerald-100/90 to-emerald-50/50 text-emerald-700 shadow-[0_0_10px_rgba(16,185,129,0.2)]",
        status === "incorrect" &&
          "border-rose-200/50 bg-gradient-to-br from-rose-100/90 to-rose-50/50 text-rose-700 shadow-[0_0_10px_rgba(244,63,94,0.2)]",
        status === "neutral" &&
          "border-slate-200/50 bg-gradient-to-br from-slate-100/90 to-slate-50/50 text-slate-700",
        className
      )}
      ref={ref}
      {...props}
    >
      {number}
    </div>
  )
);
QuestionNumberBadge.displayName = "QuestionNumberBadge";
