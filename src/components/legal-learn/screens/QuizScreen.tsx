import * as React from "react"
import { cn } from "@/lib/utils"
import { QuizHeader } from "../composite/QuizHeader"
import { QuizQuestion } from "../composite/QuizQuestion"
import { QuizFeedback } from "../composite/QuizFeedback"
import { Answer } from "../atomic/Answer"
import { Button } from "@/components/button"

export interface AnswerOption {
  id: string | number
  text: string
  correct: boolean
}

export interface Question {
  id: string | number
  question: string
  answers: AnswerOption[]
  explanation: string
}

export interface QuizScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  questions: Question[]
  onClose: () => void
  onQuizComplete: (score: number, total: number) => void
}

const QuizScreen = React.forwardRef<HTMLDivElement, QuizScreenProps>(
  ({ className, questions, onClose, onQuizComplete, ...props }, ref) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
    const [selectedAnswerId, setSelectedAnswerId] = React.useState<string | number | null>(null)
    const [isAnswerChecked, setIsAnswerChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [showFeedback, setShowFeedback] = React.useState(false)

    const currentQuestion = questions?.[currentQuestionIndex]
    
    if (!currentQuestion) {
      return <div className="p-8 text-center text-slate-500">No questions available.</div>
    }

    const isLastQuestion = currentQuestionIndex === questions.length - 1
    const progress = ((currentQuestionIndex) / questions.length) * 100

    const handleAnswerSelect = (id: string | number) => {
      if (isAnswerChecked) return
      setSelectedAnswerId(id)
    }

    const handleCheck = () => {
      if (!selectedAnswerId) return
      
      const isCorrect = currentQuestion.answers.find(a => a.id === selectedAnswerId)?.correct
      if (isCorrect) setScore(s => s + 1)
      
      setIsAnswerChecked(true)
      setShowFeedback(true)
    }

    const handleContinue = () => {
      if (isLastQuestion) {
        onQuizComplete(score + (currentQuestion.answers.find(a => a.id === selectedAnswerId)?.correct ? 1 : 0), questions.length)
      } else {
        setCurrentQuestionIndex(i => i + 1)
        setSelectedAnswerId(null)
        setIsAnswerChecked(false)
        setShowFeedback(false)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col h-full min-h-screen relative overflow-hidden",
          // Mesh Gradient Background (Same as Home)
          "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-purple-100 to-white",
          className
        )}
        {...props}
      >
        {/* Decorative Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

        <QuizHeader
          onClose={onClose}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          progress={progress}
          className="bg-white/40 backdrop-blur-md border-white/20 sticky top-0 z-10"
        />

        <div className="flex-1 overflow-y-auto px-5 py-8 pb-32 relative z-0">
          <div className="max-w-2xl mx-auto">
            <QuizQuestion
              question={currentQuestion.question}
              questionNumber={currentQuestionIndex + 1}
              className="mb-8"
            />

            <div className="space-y-3">
              {currentQuestion.answers.map((answer, index) => (
                <Answer
                  key={answer.id}
                  selected={selectedAnswerId === answer.id}
                  correct={isAnswerChecked && answer.correct}
                  incorrect={isAnswerChecked && selectedAnswerId === answer.id && !answer.correct}
                  onClick={() => handleAnswerSelect(answer.id)}
                  disabled={isAnswerChecked}
                  shortcut={String.fromCharCode(65 + index)} // A, B, C, D
                  className="bg-white/60 backdrop-blur-sm border-white/40 hover:bg-white/80"
                >
                  {answer.text}
                </Answer>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        {!showFeedback && (
          <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/30 backdrop-blur-xl border-t border-white/20 z-10">
            <div className="max-w-2xl mx-auto">
              <Button
                onClick={handleCheck}
                disabled={!selectedAnswerId}
                className={cn(
                  "w-full font-bold py-6 text-lg rounded-2xl shadow-xl transition-all",
                  selectedAnswerId 
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 hover:-translate-y-1" 
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                )}
              >
                Check Answer
              </Button>
            </div>
          </div>
        )}

        <QuizFeedback
          show={showFeedback}
          correct={currentQuestion.answers.find(a => a.id === selectedAnswerId)?.correct || false}
          explanation={currentQuestion.explanation}
          onContinue={handleContinue}
          className="backdrop-blur-xl bg-white/80 border-t border-white/40"
        />
      </div>
    )
  }
)
QuizScreen.displayName = "QuizScreen"

export { QuizScreen }
