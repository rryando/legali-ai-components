import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

export interface AnswerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  correct?: boolean
  incorrect?: boolean
  shortcut?: string
}

const Answer = React.forwardRef<HTMLButtonElement, AnswerProps>(
  ({ className, children, selected, correct, incorrect, shortcut, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "w-full text-left p-4 rounded-xl border transition-all duration-300 relative group backdrop-blur-md",
          "hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
          // Default
          !selected && !correct && !incorrect && [
            "bg-gradient-to-br from-white/60 via-white/40 to-white/20 border-white/40",
            "hover:from-blue-50/40 hover:via-white/50 hover:to-blue-50/20",
            "hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15),inset_0_0_15px_rgba(59,130,246,0.05)] hover:animate-border-glow",
            "text-slate-700"
          ],
          // Selected
          selected && !correct && !incorrect && [
            "bg-gradient-to-br from-blue-50/70 via-blue-50/40 to-blue-100/20 border-blue-500/50 text-blue-700",
            "shadow-[0_0_25px_rgba(59,130,246,0.2),inset_0_0_20px_rgba(59,130,246,0.1)] animate-border-glow"
          ],
          // Correct
          correct && "bg-gradient-to-br from-emerald-50/80 via-emerald-50/50 to-emerald-100/20 border-emerald-500/50 text-emerald-700 shadow-[0_0_25px_rgba(16,185,129,0.2),inset_0_0_20px_rgba(16,185,129,0.1)]",
          // Incorrect
          incorrect && "bg-gradient-to-br from-rose-50/80 via-rose-50/50 to-rose-100/20 border-rose-500/50 text-rose-700 shadow-[0_0_25px_rgba(244,63,94,0.2),inset_0_0_20px_rgba(244,63,94,0.1)]",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          {shortcut && (
            <span className={cn(
              "flex items-center justify-center w-6 h-6 rounded border text-xs font-bold transition-colors",
              selected ? "border-blue-300 bg-blue-100 text-blue-600" : "border-slate-200 bg-slate-50 text-slate-400 group-hover:border-slate-300"
            )}>
              {shortcut}
            </span>
          )}
          
          <span className="flex-1 font-medium text-lg">
            {children}
          </span>

          {/* Status Icons */}
          <div className="shrink-0">
            {correct && <Check className="w-6 h-6 text-emerald-600 animate-in zoom-in duration-200" strokeWidth={3} />}
            {incorrect && <X className="w-6 h-6 text-rose-600 animate-in zoom-in duration-200" strokeWidth={3} />}
          </div>
        </div>
      </button>
    )
  }
)
Answer.displayName = "Answer"

export { Answer }
