import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { ProgressBar } from "../atomic/ProgressBar"

export interface QuizHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void
  currentQuestion: number
  totalQuestions: number
  progress: number
}

const QuizHeader = React.forwardRef<HTMLDivElement, QuizHeaderProps>(
  ({ 
    className, 
    onClose,
    currentQuestion,
    totalQuestions,
    progress,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white border-b border-slate-100 px-5 py-4 flex items-center gap-4",
          className
        )}
        {...props}
      >
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-full p-2 transition-all -ml-2 active:scale-90"
          aria-label="Close quiz"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex-1">
          <ProgressBar
            value={progress}
            variant="quiz"
            size="lg"
            className="bg-slate-100"
          />
        </div>
        
        <span className="font-serif font-bold text-slate-700 whitespace-nowrap min-w-[3ch] text-center">
          {currentQuestion} <span className="text-slate-300 font-sans">/</span> {totalQuestions}
        </span>
      </div>
    )
  }
)
QuizHeader.displayName = "QuizHeader"

export { QuizHeader }
