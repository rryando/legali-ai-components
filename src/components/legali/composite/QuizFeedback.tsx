import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

export interface QuizFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  correct: boolean;
  explanation: string;
  onContinue: () => void;
}

const QuizFeedback = React.forwardRef<HTMLDivElement, QuizFeedbackProps>(
  ({ className, show, correct, explanation, onContinue, ...props }, ref) => {
    if (!show) return null;

    return (
      <div
        className={cn(
          "absolute right-0 bottom-0 left-0 z-50 animate-slide-up rounded-t-[2rem] border-t p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl",
          correct
            ? "border-emerald-200/50 bg-gradient-to-t from-emerald-50/95 via-emerald-50/90 to-emerald-100/80 shadow-[0_-5px_25px_rgba(16,185,129,0.15),inset_0_1px_20px_rgba(16,185,129,0.1)]"
            : "border-rose-200/50 bg-gradient-to-t from-rose-50/95 via-rose-50/90 to-rose-100/80 shadow-[0_-5px_25px_rgba(244,63,94,0.15),inset_0_1px_20px_rgba(244,63,94,0.1)]",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mb-4 flex items-start gap-4">
          <div className="mt-1 shrink-0">
            {correct ? (
              <CheckCircle2 className="h-8 w-8 animate-zoom-in text-emerald-600" strokeWidth={3} />
            ) : (
              <XCircle className="h-8 w-8 animate-zoom-in text-rose-600" strokeWidth={3} />
            )}
          </div>

          <div className="flex-1">
            <h3
              className={cn(
                "mb-2 font-bold font-serif text-xl",
                correct ? "text-emerald-800" : "text-rose-800"
              )}
            >
              {correct ? "Correct!" : "Incorrect"}
            </h3>
            <p
              className={cn(
                "text-sm leading-relaxed",
                correct ? "text-emerald-700" : "text-rose-700"
              )}
            >
              {explanation}
            </p>
          </div>
        </div>

        <Button
          className={cn(
            "w-full rounded-xl py-6 font-bold text-base shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0",
            correct
              ? "bg-emerald-600 text-white shadow-emerald-200 hover:bg-emerald-700"
              : "bg-rose-600 text-white shadow-rose-200 hover:bg-rose-700"
          )}
          onClick={onContinue}
        >
          <span className="flex items-center gap-2">
            Continue <ArrowRight className="h-5 w-5" />
          </span>
        </Button>
      </div>
    );
  }
);
QuizFeedback.displayName = "QuizFeedback";

export { QuizFeedback };
