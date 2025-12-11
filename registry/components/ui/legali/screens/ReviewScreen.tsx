import * as React from "react"
import { cn } from "@/lib/utils"
import { Answer } from "../atomic/Answer"
import { ExplanationCard } from "../atomic/ExplanationCard"
import { QuestionNumberBadge } from "../atomic/QuestionNumberBadge"
import { Button } from "@/components/ui/legali/button"
import { ArrowLeft } from "lucide-react"
import { Question } from "./QuizScreen"

export interface ReviewScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  questions: Question[]
  userAnswers: Record<string | number, string | number>
  onClose: () => void
}

export const ReviewScreen = React.forwardRef<HTMLDivElement, ReviewScreenProps>(
  ({ className, questions, userAnswers, onClose, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col h-full min-h-screen bg-slate-50",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-5 py-4 flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onClose} className="-ml-2">
                <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-bold text-slate-900">Review Answers</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-8 space-y-12">
            <div className="max-w-2xl mx-auto space-y-12">
                {questions.map((question, index) => {
                    const userAnswerId = userAnswers[question.id]
                    const isCorrect = question.answers.find(a => a.id === userAnswerId)?.correct

                    return (
                        <div key={question.id} className="space-y-6">
                            <div className="flex items-start gap-4">
                                <QuestionNumberBadge 
                                    number={index + 1} 
                                    status={isCorrect ? 'correct' : 'incorrect'} 
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-slate-900 mb-4">{question.question}</h3>
                                    
                                    <div className="space-y-3">
                                        {question.answers.map((answer, aIndex) => {
                                            const isSelected = userAnswerId === answer.id
                                            const isAnswerCorrect = answer.correct
                                            
                                            return (
                                                <Answer
                                                    key={answer.id}
                                                    selected={isSelected}
                                                    correct={isAnswerCorrect}
                                                    incorrect={isSelected && !isAnswerCorrect}
                                                    disabled={true}
                                                    shortcut={String.fromCharCode(65 + aIndex)}
                                                    className="opacity-100 cursor-default hover:translate-y-0 hover:shadow-none"
                                                >
                                                    {answer.text}
                                                </Answer>
                                            )
                                        })}
                                    </div>

                                    <ExplanationCard explanation={question.explanation} />
                                </div>
                            </div>
                            {index < questions.length - 1 && <div className="h-px bg-slate-200" />}
                        </div>
                    )
                })}
            </div>
        </div>
        
        <div className="p-5 border-t border-slate-200 bg-white">
            <div className="max-w-2xl mx-auto">
                <Button onClick={onClose} className="w-full py-6 text-lg rounded-2xl">
                    Return to Results
                </Button>
            </div>
        </div>
      </div>
    )
  }
)

ReviewScreen.displayName = "ReviewScreen"
