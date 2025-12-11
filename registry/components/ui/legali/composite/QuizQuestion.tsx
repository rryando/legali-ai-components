import * as React from "react"
import { cn } from "@/lib/utils"

export interface QuizQuestionProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string
  questionNumber?: number
}

const QuizQuestion = React.forwardRef<HTMLDivElement, QuizQuestionProps>(
  ({ 
    className, 
    question,
    questionNumber,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mb-6", className)}
        {...props}
      >
        {questionNumber && (
          <div className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wide">
            Question {questionNumber}
          </div>
        )}
        <h2 className="text-2xl font-bold text-slate-800 leading-tight">
          {question}
        </h2>
      </div>
    )
  }
)
QuizQuestion.displayName = "QuizQuestion"

export { QuizQuestion }
