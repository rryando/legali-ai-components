/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-review-screen.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-review-screen.json"
 */
import { ArrowLeft } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/legali/button";
import { cn } from "@/lib/utils";
import { Answer } from "../atomic/Answer";
import { ExplanationCard } from "../atomic/ExplanationCard";
import { QuestionNumberBadge } from "../atomic/QuestionNumberBadge";
import type { Question } from "./QuizScreen";

export interface ReviewScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  questions: Question[];
  userAnswers: Record<string | number, string | number>;
  onClose: () => void;
}

export const ReviewScreen = React.forwardRef<HTMLDivElement, ReviewScreenProps>(
  ({ className, questions, userAnswers, onClose, ...props }, ref) => {
    return (
      <div
        className={cn("flex h-full min-h-screen flex-col bg-slate-50", className)}
        ref={ref}
        {...props}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center gap-4 border-slate-200 border-b bg-white/80 px-5 py-4 backdrop-blur-md">
          <Button className="-ml-2" onClick={onClose} size="icon" variant="ghost">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-bold text-lg text-slate-900">Review Answers</h1>
        </div>

        <div className="flex-1 space-y-12 overflow-y-auto px-5 py-8">
          <div className="mx-auto max-w-2xl space-y-12">
            {questions.map((question, index) => {
              const userAnswerId = userAnswers[question.id];
              const isCorrect = question.answers.find((a) => a.id === userAnswerId)?.correct;

              return (
                <div className="space-y-6" key={question.id}>
                  <div className="flex items-start gap-4">
                    <QuestionNumberBadge
                      number={index + 1}
                      status={isCorrect ? "correct" : "incorrect"}
                    />
                    <div className="flex-1">
                      <h3 className="mb-4 font-medium text-lg text-slate-900">
                        {question.question}
                      </h3>

                      <div className="space-y-3">
                        {question.answers.map((answer, aIndex) => {
                          const isSelected = userAnswerId === answer.id;
                          const isAnswerCorrect = answer.correct;

                          return (
                            <Answer
                              className="cursor-default opacity-100 hover:translate-y-0 hover:shadow-none"
                              correct={isAnswerCorrect}
                              disabled={true}
                              incorrect={isSelected && !isAnswerCorrect}
                              key={answer.id}
                              selected={isSelected}
                              shortcut={String.fromCharCode(65 + aIndex)}
                            >
                              {answer.text}
                            </Answer>
                          );
                        })}
                      </div>

                      <ExplanationCard explanation={question.explanation} />
                    </div>
                  </div>
                  {index < questions.length - 1 && <div className="h-px bg-slate-200" />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-slate-200 border-t bg-white p-5">
          <div className="mx-auto max-w-2xl">
            <Button className="w-full rounded-2xl py-6 text-lg" onClick={onClose}>
              Return to Results
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

ReviewScreen.displayName = "ReviewScreen";
