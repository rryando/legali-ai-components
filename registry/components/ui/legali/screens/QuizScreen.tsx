import * as React from "react"
import { cn } from "@/lib/utils"
import { QuizHeader } from "../composite/QuizHeader"
import { QuizQuestion } from "../composite/QuizQuestion"
import { QuizFeedback } from "../composite/QuizFeedback"
import { QuizMascotPrompt, type QuizMascotScriptStep, type QuizMascotStreamConfig } from "../composite/QuizMascotPrompt"
import { Answer } from "../atomic/Answer"
import { Button } from "@/components/ui/legali/button"
import { MascotMotion } from "../mascot"

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

  typing?: {
    /** Typing speed for the question (ms per character). */
    speedMs?: number
    /** Whether to show the cursor while typing the question. */
    showCursor?: boolean
  }

  mascot?: {
    /** Looping script that runs after the question finishes typing (until feedback). */
    script?: QuizMascotScriptStep[]
    /** One-shot script to run (after question typing) when the answer is correct. */
    onRevealCorrect?: QuizMascotScriptStep[]
    /** One-shot script to run (after question typing) when the answer is incorrect. */
    onRevealIncorrect?: QuizMascotScriptStep[]
    /** TypingText behavior for mascot lines. */
    stream?: QuizMascotStreamConfig
  }
}

export interface QuizScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  questions: Question[]
  onClose: () => void
  onQuizComplete: (score: number, total: number, userAnswers: Record<string | number, string | number>) => void
}

const QuizScreen = React.forwardRef<HTMLDivElement, QuizScreenProps>(
  ({ className, questions, onClose, onQuizComplete, ...props }, ref) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
    const [selectedAnswerId, setSelectedAnswerId] = React.useState<string | number | null>(null)
    const [userAnswers, setUserAnswers] = React.useState<Record<string | number, string | number>>({})
    const [isAnswerChecked, setIsAnswerChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [showFeedback, setShowFeedback] = React.useState(false)

    const [questionTypedDone, setQuestionTypedDone] = React.useState(false)
    const [promptDelayDone, setPromptDelayDone] = React.useState(false)
    const [pendingResult, setPendingResult] = React.useState<boolean | null>(null)
    const [reactionPlayed, setReactionPlayed] = React.useState(false)

    const currentQuestion = questions?.[currentQuestionIndex]
    
    if (!currentQuestion) {
      return <div className="p-8 text-center text-slate-500">No questions available.</div>
    }

    const isLastQuestion = currentQuestionIndex === questions.length - 1
    const progress = ((currentQuestionIndex) / questions.length) * 100

    React.useEffect(() => {
      setQuestionTypedDone(false)
      setPromptDelayDone(false)
      setPendingResult(null)
      setReactionPlayed(false)
    }, [currentQuestion.id])

    React.useEffect(() => {
      if (showFeedback) {
        setPromptDelayDone(false)
        return
      }

      if (!questionTypedDone) {
        setPromptDelayDone(false)
        return
      }

      const timer = window.setTimeout(() => {
        setPromptDelayDone(true)
      }, 8000)

      return () => window.clearTimeout(timer)
    }, [questionTypedDone, showFeedback, currentQuestion.id])

    const defaultHintScript = React.useMemo<QuizMascotScriptStep[]>(() => {
      return [
        {
          motion: MascotMotion.SPEAKING,
          durationMs: 2800,
          lines: ["Quick tip:", "Look for jurisdiction, money limits, and timing."],
        },
        {
          motion: MascotMotion.THINKING,
          durationMs: null,
          lines: ["Eliminate obvious mismatches.", "Then choose the best fit."],
        },
      ]
    }, [])

    const defaultCorrectScript = React.useMemo<QuizMascotScriptStep[]>(() => {
      return [
        {
          motion: MascotMotion.CELEBRATE,
          durationMs: 2200,
          lines: ["Nice!", "That’s the right idea."],
        },
        {
          motion: MascotMotion.SPEAKING,
          durationMs: 2600,
          lines: ["Keep going — one question at a time."],
        },
      ]
    }, [])

    const defaultIncorrectScript = React.useMemo<QuizMascotScriptStep[]>(() => {
      return [
        {
          motion: MascotMotion.CONFUSED,
          durationMs: 2400,
          lines: ["Close — but not quite.", "Let’s use the explanation to lock it in."],
        },
        {
          motion: MascotMotion.SPEAKING,
          durationMs: 2600,
          lines: ["You’ll spot this pattern next time."],
        },
      ]
    }, [])

    const hintScript = React.useMemo(() => {
      return currentQuestion.mascot?.script?.length ? currentQuestion.mascot.script : defaultHintScript
    }, [currentQuestion.mascot?.script, defaultHintScript])

    const correctScript = React.useMemo(() => {
      return currentQuestion.mascot?.onRevealCorrect?.length
        ? currentQuestion.mascot.onRevealCorrect
        : defaultCorrectScript
    }, [currentQuestion.mascot?.onRevealCorrect, defaultCorrectScript])

    const incorrectScript = React.useMemo(() => {
      return currentQuestion.mascot?.onRevealIncorrect?.length
        ? currentQuestion.mascot.onRevealIncorrect
        : defaultIncorrectScript
    }, [currentQuestion.mascot?.onRevealIncorrect, defaultIncorrectScript])

    const shouldPlayReaction =
      showFeedback && pendingResult != null && questionTypedDone && !reactionPlayed

    React.useEffect(() => {
      if (!shouldPlayReaction) return

      const steps = pendingResult ? correctScript : incorrectScript
      const totalMs = steps.reduce((sum, s) => sum + (s.durationMs ?? 0), 0)
      const timer = window.setTimeout(() => {
        setReactionPlayed(true)
      }, Math.max(1200, totalMs))

      return () => window.clearTimeout(timer)
    }, [shouldPlayReaction, pendingResult, correctScript, incorrectScript])

    const handleAnswerSelect = (id: string | number) => {
      if (isAnswerChecked) return
      setSelectedAnswerId(id)
    }

    const handleCheck = () => {
      if (!selectedAnswerId) return
      
      const isCorrect = Boolean(currentQuestion.answers.find(a => a.id === selectedAnswerId)?.correct)
      if (isCorrect) setScore(s => s + 1)
      
      setUserAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: selectedAnswerId
      }))
      
      setIsAnswerChecked(true)
      setShowFeedback(true)

      setPendingResult(isCorrect)
    }

    const handleContinue = () => {
      if (isLastQuestion) {
        onQuizComplete(
          score + (currentQuestion.answers.find(a => a.id === selectedAnswerId)?.correct && !isAnswerChecked ? 1 : 0), // Handle case where check wasn't clicked if that's possible (though UI prevents it) - actually logic above sets score on check.
          questions.length,
          userAnswers
        )
      } else {
        setCurrentQuestionIndex(i => i + 1)
        setSelectedAnswerId(null)
        setIsAnswerChecked(false)
        setShowFeedback(false)

        setQuestionTypedDone(false)
        setPendingResult(null)
        setReactionPlayed(false)
      }
    }

    const promptActive = React.useMemo(() => {
      if (shouldPlayReaction) return true
      if (showFeedback) return false
      return questionTypedDone && promptDelayDone
    }, [promptDelayDone, questionTypedDone, shouldPlayReaction, showFeedback])

    const promptScript = React.useMemo<QuizMascotScriptStep[]>(() => {
      if (shouldPlayReaction) return pendingResult ? correctScript : incorrectScript
      return hintScript
    }, [correctScript, hintScript, incorrectScript, pendingResult, shouldPlayReaction])

    const promptStream = React.useMemo<QuizMascotStreamConfig>(() => {
      const base = currentQuestion.mascot?.stream ?? {}
      return {
        ...base,
        loop: shouldPlayReaction ? false : true,
      }
    }, [currentQuestion.mascot?.stream, shouldPlayReaction])

    const inactiveMotion = React.useMemo(() => {
      if (showFeedback) return MascotMotion.IDLE
      return questionTypedDone ? MascotMotion.IDLE : MascotMotion.WRITING
    }, [questionTypedDone, showFeedback])

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col h-full min-h-screen relative overflow-hidden",
          // New Bluish Gradient Background
          "bg-gradient-to-br from-sky-100 via-blue-50 to-white",
          className
        )}
        {...props}
      >
        {/* Decorative Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none animate-pulse delay-700" />

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
              typingKey={currentQuestion.id}
              typingSpeedMs={70}
              showCursor={currentQuestion.typing?.showCursor ?? false}
              onTypedComplete={() => setQuestionTypedDone(true)}
              className="mb-8"
            />
            <QuizMascotPrompt
              className="mb-6"
              active={promptActive}
              script={promptScript}
              stream={promptStream}
              inactiveMotion={inactiveMotion}
              mascotWidth={240}
              mascotHeight={240}
            />

            <div className="space-y-3 animate-slide-in-from-bottom">
              {currentQuestion.answers.map((answer, index) => (
                <Answer
                  key={answer.id}
                  selected={selectedAnswerId === answer.id}
                  correct={isAnswerChecked && answer.correct}
                  incorrect={isAnswerChecked && selectedAnswerId === answer.id && !answer.correct}
                  onClick={() => handleAnswerSelect(answer.id)}
                  disabled={isAnswerChecked}
                  shortcut={String.fromCharCode(65 + index)} // A, B, C, D
                  className="animate-fade-in bg-white/60 backdrop-blur-sm border-white/40 hover:bg-white/80"
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
                  "w-full font-bold py-6 text-lg rounded-2xl shadow-xl transition-all duration-300",
                  selectedAnswerId 
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30 hover:-translate-y-1 hover:shadow-2xl" 
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
