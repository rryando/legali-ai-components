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
          "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 relative group",
          "hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none",
          // Default
          !selected && !correct && !incorrect && "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700",
          // Selected
          selected && !correct && !incorrect && "bg-blue-50 border-blue-500 text-blue-700 ring-1 ring-blue-500",
          // Correct
          correct && "bg-emerald-50 border-emerald-500 text-emerald-700",
          // Incorrect
          incorrect && "bg-rose-50 border-rose-500 text-rose-700",
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
