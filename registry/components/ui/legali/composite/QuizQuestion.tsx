import * as React from "react"
import { cn } from "@/lib/utils"
import { TypingText } from "../atomic/TypingText"

export interface QuizQuestionProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string
  questionNumber?: number
  typingKey?: string | number
  typingSpeedMs?: number
  showCursor?: boolean
  onTypedComplete?: () => void
}

const QuizQuestion = React.forwardRef<HTMLDivElement, QuizQuestionProps>(
  ({ 
    className, 
    question,
    questionNumber,
    typingKey,
    typingSpeedMs = 24,
    showCursor = true,
    onTypedComplete,
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
          <TypingText
            key={String(typingKey ?? questionNumber ?? question)}
            className="font-bold"
            text={question}
            speed={typingSpeedMs}
            startOnView={false}
            once={false}
            showCursor={showCursor}
            cursor="▍"
            cursorClassName="text-slate-400"
            onComplete={onTypedComplete}
          />
        </h2>
      </div>
    )
  }
)
QuizQuestion.displayName = "QuizQuestion"

export { QuizQuestion }
