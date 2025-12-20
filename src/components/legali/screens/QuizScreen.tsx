import * as React from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { Answer } from "../atomic/Answer";
import { QuizFeedback } from "../composite/QuizFeedback";
import { QuizHeader } from "../composite/QuizHeader";
import {
  QuizMascotPrompt,
  type QuizMascotScriptStep,
  type QuizMascotStreamConfig,
} from "../composite/QuizMascotPrompt";
import { QuizQuestion } from "../composite/QuizQuestion";
import { MascotMotion } from "../mascot";

export interface AnswerOption {
  id: string | number;
  text: string;
  correct: boolean;
}

export interface Question {
  id: string | number;
  question: string;
  answers: AnswerOption[];
  explanation: string;

  typing?: {
    /** Typing speed for the question (ms per character). */
    speedMs?: number;
    /** Whether to show the cursor while typing the question. */
    showCursor?: boolean;
  };

  mascot?: {
    /** Looping script that runs while the question is typing (pre-hint, pre-feedback). */
    onReading?: QuizMascotScriptStep[];
    /** Looping script that runs after the question finishes typing (until feedback). */
    script?: QuizMascotScriptStep[];
    /** One-shot script to run (after question typing) when the answer is correct. */
    onRevealCorrect?: QuizMascotScriptStep[];
    /** One-shot script to run (after question typing) when the answer is incorrect. */
    onRevealIncorrect?: QuizMascotScriptStep[];
    /** TypingText behavior for mascot lines. */
    stream?: QuizMascotStreamConfig;
  };
}

export interface QuizScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  questions: Question[];
  onClose: () => void;
  onQuizComplete: (
    score: number,
    total: number,
    userAnswers: Record<string | number, string | number>
  ) => void;
}

const QuizScreen = React.forwardRef<HTMLDivElement, QuizScreenProps>(
  ({ className, questions, onClose, onQuizComplete, ...props }, ref) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [selectedAnswerId, setSelectedAnswerId] = React.useState<string | number | null>(null);
    const [userAnswers, setUserAnswers] = React.useState<Record<string | number, string | number>>(
      {}
    );
    const [isAnswerChecked, setIsAnswerChecked] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [showFeedback, setShowFeedback] = React.useState(false);

    const [questionTypedDone, setQuestionTypedDone] = React.useState(false);
    const [promptDelayDone, setPromptDelayDone] = React.useState(false);
    const [pendingResult, setPendingResult] = React.useState<boolean | null>(null);
    const [reactionPlayed, setReactionPlayed] = React.useState(false);

    const currentQuestion = questions?.[currentQuestionIndex];

    if (!currentQuestion) {
      return <div className="p-8 text-center text-slate-500">No questions available.</div>;
    }

    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const progress = (currentQuestionIndex / questions.length) * 100;

    React.useEffect(() => {
      setQuestionTypedDone(false);
      setPromptDelayDone(false);
      setPendingResult(null);
      setReactionPlayed(false);
    }, [currentQuestion.id]);

    React.useEffect(() => {
      if (showFeedback) {
        setPromptDelayDone(false);
        return;
      }

      if (!questionTypedDone) {
        setPromptDelayDone(false);
        return;
      }

      const timer = window.setTimeout(() => {
        setPromptDelayDone(true);
      }, 8000);

      return () => window.clearTimeout(timer);
    }, [questionTypedDone, showFeedback, currentQuestion.id]);

    const defaultHintScript = React.useMemo<QuizMascotScriptStep[]>(
      () => [
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
      ],
      []
    );

    const defaultReadingScript = React.useMemo<QuizMascotScriptStep[]>(
      () => [
        {
          motion: MascotMotion.SPEAKING,
          durationMs: 2600,
          lines: ["Let’s read this carefully.", "Focus on the key detail."],
        },
        {
          motion: MascotMotion.SPEAKING,
          durationMs: null,
          lines: ["Take your time.", "Then choose the best answer."],
        },
      ],
      []
    );

    const defaultCorrectScript = React.useMemo<QuizMascotScriptStep[]>(
      () => [
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
      ],
      []
    );

    const defaultIncorrectScript = React.useMemo<QuizMascotScriptStep[]>(
      () => [
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
      ],
      []
    );

    const hintScript = React.useMemo(
      () =>
        currentQuestion.mascot?.script?.length ? currentQuestion.mascot.script : defaultHintScript,
      [currentQuestion.mascot?.script, defaultHintScript]
    );

    const readingScript = React.useMemo(
      () =>
        currentQuestion.mascot?.onReading?.length
          ? currentQuestion.mascot.onReading
          : defaultReadingScript,
      [currentQuestion.mascot?.onReading, defaultReadingScript]
    );

    const correctScript = React.useMemo(
      () =>
        currentQuestion.mascot?.onRevealCorrect?.length
          ? currentQuestion.mascot.onRevealCorrect
          : defaultCorrectScript,
      [currentQuestion.mascot?.onRevealCorrect, defaultCorrectScript]
    );

    const incorrectScript = React.useMemo(
      () =>
        currentQuestion.mascot?.onRevealIncorrect?.length
          ? currentQuestion.mascot.onRevealIncorrect
          : defaultIncorrectScript,
      [currentQuestion.mascot?.onRevealIncorrect, defaultIncorrectScript]
    );

    const shouldPlayReaction =
      showFeedback && pendingResult != null && questionTypedDone && !reactionPlayed;

    React.useEffect(() => {
      if (!shouldPlayReaction) return;

      const steps = pendingResult ? correctScript : incorrectScript;
      const totalMs = steps.reduce((sum, s) => sum + (s.durationMs ?? 0), 0);
      const timer = window.setTimeout(
        () => {
          setReactionPlayed(true);
        },
        Math.max(1200, totalMs)
      );

      return () => window.clearTimeout(timer);
    }, [shouldPlayReaction, pendingResult, correctScript, incorrectScript]);

    const handleAnswerSelect = (id: string | number) => {
      if (isAnswerChecked) return;
      setSelectedAnswerId(id);
    };

    const handleCheck = () => {
      if (!selectedAnswerId) return;

      const isCorrect = Boolean(
        currentQuestion.answers.find((a) => a.id === selectedAnswerId)?.correct
      );
      if (isCorrect) setScore((s) => s + 1);

      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: selectedAnswerId,
      }));

      setIsAnswerChecked(true);
      setShowFeedback(true);

      setPendingResult(isCorrect);
    };

    const handleContinue = () => {
      if (isLastQuestion) {
        onQuizComplete(
          score +
            (currentQuestion.answers.find((a) => a.id === selectedAnswerId)?.correct &&
            !isAnswerChecked
              ? 1
              : 0), // Handle case where check wasn't clicked if that's possible (though UI prevents it) - actually logic above sets score on check.
          questions.length,
          userAnswers
        );
      } else {
        setCurrentQuestionIndex((i) => i + 1);
        setSelectedAnswerId(null);
        setIsAnswerChecked(false);
        setShowFeedback(false);

        setQuestionTypedDone(false);
        setPendingResult(null);
        setReactionPlayed(false);
      }
    };

    const promptActive = React.useMemo(() => {
      if (showFeedback && pendingResult != null) return true;
      if (showFeedback) return false;
      return true;
    }, [pendingResult, showFeedback]);

    const promptTriggerKey = React.useMemo(() => {
      const resultKey = pendingResult == null ? "none" : pendingResult ? "correct" : "incorrect";
      const phaseKey = showFeedback ? "feedback" : promptDelayDone ? "hint" : "reading";
      return `${String(currentQuestion.id)}:${phaseKey}:${resultKey}`;
    }, [currentQuestion.id, pendingResult, promptDelayDone, showFeedback]);

    const promptScript = React.useMemo<QuizMascotScriptStep[]>(() => {
      if (shouldPlayReaction) return pendingResult ? correctScript : incorrectScript;
      if (showFeedback && pendingResult != null)
        return pendingResult ? correctScript : incorrectScript;
      if (!promptDelayDone) return readingScript;
      return hintScript;
    }, [
      correctScript,
      hintScript,
      incorrectScript,
      pendingResult,
      promptDelayDone,
      readingScript,
      shouldPlayReaction,
      showFeedback,
    ]);

    const promptStream = React.useMemo<QuizMascotStreamConfig>(() => {
      const base = currentQuestion.mascot?.stream ?? {};
      return {
        ...base,
        loop: shouldPlayReaction ? false : true,
      };
    }, [currentQuestion.mascot?.stream, shouldPlayReaction]);

    const inactiveMotion = React.useMemo(() => {
      if (showFeedback) {
        if (pendingResult === true) return MascotMotion.CELEBRATE;
        return MascotMotion.IDLE;
      }
      return questionTypedDone ? MascotMotion.IDLE : MascotMotion.WRITING;
    }, [pendingResult, questionTypedDone, showFeedback]);

    return (
      <div
        className={cn(
          "relative flex h-full min-h-screen flex-col overflow-hidden",
          // New Bluish Gradient Background
          "bg-gradient-to-br from-sky-100 via-blue-50 to-white",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Decorative Orbs */}
        <div className="pointer-events-none absolute top-[-10%] right-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-200/40 blur-3xl delay-700" />

        <QuizHeader
          className="sticky top-0 z-10 border-white/20 bg-white/40 backdrop-blur-md"
          currentQuestion={currentQuestionIndex + 1}
          onClose={onClose}
          progress={progress}
          totalQuestions={questions.length}
        />

        <div className="relative z-0 flex-1 overflow-y-auto px-5 py-8 pb-32">
          <div className="mx-auto max-w-2xl">
            <QuizQuestion
              className="mb-8"
              onTypedComplete={() => setQuestionTypedDone(true)}
              question={currentQuestion.question}
              questionNumber={currentQuestionIndex + 1}
              showCursor={currentQuestion.typing?.showCursor ?? false}
              typingKey={currentQuestion.id}
              typingSpeedMs={70}
            />
            <QuizMascotPrompt
              active={promptActive}
              className="mb-6"
              inactiveMotion={inactiveMotion}
              mascotHeight={240}
              mascotWidth={240}
              script={promptScript}
              stream={promptStream}
              triggerKey={promptTriggerKey}
            />

            <div className="animate-slide-in-from-bottom space-y-3">
              {currentQuestion.answers.map((answer, index) => (
                <Answer
                  className="animate-fade-in border-white/40 bg-white/60 backdrop-blur-sm hover:bg-white/80"
                  correct={isAnswerChecked && answer.correct}
                  disabled={isAnswerChecked}
                  incorrect={isAnswerChecked && selectedAnswerId === answer.id && !answer.correct}
                  key={answer.id}
                  onClick={() => handleAnswerSelect(answer.id)}
                  selected={selectedAnswerId === answer.id} // A, B, C, D
                  shortcut={String.fromCharCode(65 + index)}
                >
                  {answer.text}
                </Answer>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        {!showFeedback && (
          <div className="fixed right-0 bottom-0 left-0 z-10 border-white/20 border-t bg-white/30 p-5 backdrop-blur-xl">
            <div className="mx-auto max-w-2xl">
              <Button
                className={cn(
                  "w-full rounded-2xl py-6 font-bold text-lg shadow-xl transition-all duration-300",
                  selectedAnswerId
                    ? "bg-blue-600 text-white shadow-blue-500/30 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl"
                    : "cursor-not-allowed bg-slate-200 text-slate-400"
                )}
                disabled={!selectedAnswerId}
                onClick={handleCheck}
              >
                Check Answer
              </Button>
            </div>
          </div>
        )}

        <QuizFeedback
          className="border-white/40 border-t bg-white/80 backdrop-blur-xl"
          correct={currentQuestion.answers.find((a) => a.id === selectedAnswerId)?.correct ?? false}
          explanation={currentQuestion.explanation}
          onContinue={handleContinue}
          show={showFeedback}
        />
      </div>
    );
  }
);
QuizScreen.displayName = "QuizScreen";

export { QuizScreen };
