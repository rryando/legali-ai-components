/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-quiz-header.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-quiz-header.json"
 */
import { X } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ProgressBar } from "../atomic/ProgressBar";

export interface QuizHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
}

const QuizHeader = React.forwardRef<HTMLDivElement, QuizHeaderProps>(
  ({ className, onClose, currentQuestion, totalQuestions, progress, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center gap-4 border-white/40 border-b bg-gradient-to-b from-white/90 to-white/70 px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] backdrop-blur-md",
          className
        )}
        ref={ref}
        {...props}
      >
        <button
          aria-label="Close quiz"
          className="-ml-2 rounded-full p-2 text-slate-400 transition-all hover:bg-slate-50 hover:text-slate-700 active:scale-90"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex-1 items-center">
          <img
            alt="Legali AI Logo"
            className="h-auto w-24"
            src="/logo/logo.png" // Adjust height and width as needed
          />
        </div>

        <div className="flex-1">
          <ProgressBar className="bg-slate-100" size="lg" value={progress} variant="quiz" />
        </div>

        <span className="min-w-[3ch] whitespace-nowrap text-center font-bold font-serif text-slate-700">
          {currentQuestion} <span className="font-sans text-slate-300">/</span> {totalQuestions}
        </span>
      </div>
    );
  }
);
QuizHeader.displayName = "QuizHeader";

export { QuizHeader };
