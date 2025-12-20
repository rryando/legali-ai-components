import * as React from "react";
import { cn } from "@/lib/utils";
import { TypingText } from "../atomic/TypingText";

export interface QuizQuestionProps extends React.HTMLAttributes<HTMLDivElement> {
  question: string;
  questionNumber?: number;
  typingKey?: string | number;
  typingSpeedMs?: number;
  showCursor?: boolean;
  onTypedComplete?: () => void;
}

const QuizQuestion = React.forwardRef<HTMLDivElement, QuizQuestionProps>(
  (
    {
      className,
      question,
      questionNumber,
      typingKey,
      typingSpeedMs = 24,
      showCursor = true,
      onTypedComplete,
      ...props
    },
    ref
  ) => (
    <div className={cn("mb-6", className)} ref={ref} {...props}>
      {questionNumber && (
        <div className="mb-3 font-bold text-blue-600 text-sm uppercase tracking-wide">
          Question {questionNumber}
        </div>
      )}
      <h2 className="font-bold text-2xl text-slate-800 leading-tight">
        <TypingText
          className="font-bold"
          cursor="▍"
          cursorClassName="text-slate-400"
          key={String(typingKey ?? questionNumber ?? question)}
          onComplete={onTypedComplete}
          once={false}
          showCursor={showCursor}
          speed={typingSpeedMs}
          startOnView={false}
          text={question}
        />
      </h2>
    </div>
  )
);
QuizQuestion.displayName = "QuizQuestion";

export { QuizQuestion };
