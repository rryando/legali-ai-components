import { Check, X } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface AnswerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  shortcut?: string;
}

const Answer = React.forwardRef<HTMLButtonElement, AnswerProps>(
  ({ className, children, selected, correct, incorrect, shortcut, ...props }, ref) => {
    return (
      <button
        className={cn(
          "group relative w-full rounded-xl border p-4 text-left backdrop-blur-md transition-all duration-300",
          "hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
          // Default
          !(selected || correct || incorrect) && [
            "border-white/40 bg-gradient-to-br from-white/60 via-white/40 to-white/20",
            "hover:from-blue-50/40 hover:via-white/50 hover:to-blue-50/20",
            "hover:animate-border-glow hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15),inset_0_0_15px_rgba(59,130,246,0.05)]",
            "text-slate-700",
          ],
          // Selected
          selected &&
            !correct &&
            !incorrect && [
              "border-blue-500/50 bg-gradient-to-br from-blue-50/70 via-blue-50/40 to-blue-100/20 text-blue-700",
              "animate-border-glow shadow-[0_0_25px_rgba(59,130,246,0.2),inset_0_0_20px_rgba(59,130,246,0.1)]",
            ],
          // Correct
          correct &&
            "border-emerald-500/50 bg-gradient-to-br from-emerald-50/80 via-emerald-50/50 to-emerald-100/20 text-emerald-700 shadow-[0_0_25px_rgba(16,185,129,0.2),inset_0_0_20px_rgba(16,185,129,0.1)]",
          // Incorrect
          incorrect &&
            "border-rose-500/50 bg-gradient-to-br from-rose-50/80 via-rose-50/50 to-rose-100/20 text-rose-700 shadow-[0_0_25px_rgba(244,63,94,0.2),inset_0_0_20px_rgba(244,63,94,0.1)]",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center gap-3">
          {shortcut && (
            <span
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded border font-bold text-xs transition-colors",
                selected
                  ? "border-blue-300 bg-blue-100 text-blue-600"
                  : "border-slate-200 bg-slate-50 text-slate-400 group-hover:border-slate-300"
              )}
            >
              {shortcut}
            </span>
          )}

          <span className="flex-1 font-medium text-lg">{children}</span>

          {/* Status Icons */}
          <div className="shrink-0">
            {correct && (
              <Check
                className="zoom-in h-6 w-6 animate-in text-emerald-600 duration-200"
                strokeWidth={3}
              />
            )}
            {incorrect && (
              <X
                className="zoom-in h-6 w-6 animate-in text-rose-600 duration-200"
                strokeWidth={3}
              />
            )}
          </div>
        </div>
      </button>
    );
  }
);
Answer.displayName = "Answer";

export { Answer };
