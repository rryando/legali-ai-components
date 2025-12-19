import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "../atomic/GlassCard";
import { ResultsCard } from "../composite/ResultsCard";

export interface ResultsScreenProps
  extends React.HTMLAttributes<HTMLDivElement> {
  score: number;
  totalQuestions: number;
  badgeTitle?: string;
  onContinue: () => void;
  onReviewMistakes?: () => void;
  streak?: number;
  xpEarned?: number;
}

const ResultsScreen = React.forwardRef<HTMLDivElement, ResultsScreenProps>(
  (
    {
      className,
      score,
      totalQuestions,
      badgeTitle,
      onContinue,
      onReviewMistakes,
      streak = 5,
      xpEarned,
      ...props
    },
    ref
  ) => {
    // Calculate stats based on score
    const percentage = Math.round((score / totalQuestions) * 100);
    const finalXpEarned = xpEarned ?? score * 10 + 20; // Base XP + Bonus

    return (
      <div
        className={cn(
          "relative flex h-full min-h-screen flex-col items-center justify-center overflow-hidden p-6",
          // Celebratory Blue/Gold Gradient
          "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100 via-blue-50 to-white",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Decorative Confetti/Orbs */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
          <div className="absolute top-[10%] left-[10%] h-64 w-64 animate-pulse rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute right-[10%] bottom-[10%] h-64 w-64 animate-pulse rounded-full bg-sky-400/20 blur-3xl delay-700" />
          <div className="absolute top-[20%] right-[20%] h-32 w-32 animate-bounce rounded-full bg-yellow-400/30 blur-2xl duration-[3000ms]" />
        </div>

        <GlassCard
          className="w-full max-w-md rounded-3xl border-white/60 shadow-2xl shadow-blue-500/10"
          intensity="high"
        >
          <ResultsCard
            accuracy={percentage}
            badgeTitle={badgeTitle}
            className="bg-transparent"
            onContinue={onContinue}
            onReviewMistakes={onReviewMistakes}
            score={score}
            streak={streak}
            totalQuestions={totalQuestions}
            xpEarned={finalXpEarned} // Allow GlassCard background to show
          />
        </GlassCard>
      </div>
    );
  }
);
ResultsScreen.displayName = "ResultsScreen";

export { ResultsScreen };
