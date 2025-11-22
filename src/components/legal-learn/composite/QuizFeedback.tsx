import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react"

export interface QuizFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean
  correct: boolean
  explanation: string
  onContinue: () => void
}

const QuizFeedback = React.forwardRef<HTMLDivElement, QuizFeedbackProps>(
  ({ className, show, correct, explanation, onContinue, ...props }, ref) => {
    if (!show) return null

    return (
      <div
        ref={ref}
        className={cn(
          "absolute bottom-0 left-0 right-0 p-6 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t animate-slide-up z-50",
          correct 
            ? "bg-emerald-50 border-emerald-100" 
            : "bg-rose-50 border-rose-100",
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 mt-1">
            {correct ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-zoom-in" strokeWidth={3} />
            ) : (
              <XCircle className="w-8 h-8 text-rose-600 animate-zoom-in" strokeWidth={3} />
            )}
          </div>
          
          <div className="flex-1">
            <h3 className={cn(
              "font-serif font-bold text-xl mb-2",
              correct ? "text-emerald-800" : "text-rose-800"
            )}>
              {correct ? "Correct!" : "Incorrect"}
            </h3>
            <p className={cn(
              "text-sm leading-relaxed",
              correct ? "text-emerald-700" : "text-rose-700"
            )}>
              {explanation}
            </p>
          </div>
        </div>

        <Button
          onClick={onContinue}
          className={cn(
            "w-full font-bold py-6 text-base rounded-xl shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0",
            correct 
              ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200" 
              : "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200"
          )}
        >
          <span className="flex items-center gap-2">
            Continue <ArrowRight className="w-5 h-5" />
          </span>
        </Button>
      </div>
    )
  }
)
QuizFeedback.displayName = "QuizFeedback"

export { QuizFeedback }
