import { CheckCircle2, Flame, Medal, Star, Target } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/legali/button";
import { cn } from "@/lib/utils";
import { GlassCard } from "../atomic/GlassCard";
import { StatRow } from "../atomic/StatRow";

export interface ResultsStat {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export interface ResultsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  score: number;
  totalQuestions: number;
  xpEarned: number;
  accuracy: number;
  streak: number;
  badgeTitle?: string;
  stats?: ResultsStat[];
  onContinue: () => void;
  onReviewMistakes?: () => void;
}

const ResultsCard = React.forwardRef<HTMLDivElement, ResultsCardProps>(
  (
    {
      className,
      score,
      totalQuestions,
      xpEarned,
      accuracy,
      streak,
      badgeTitle,
      stats,
      onContinue,
      onReviewMistakes,
      ...props
    },
    ref
  ) => {
    const defaultStats: ResultsStat[] = stats || [
      {
        label: "Questions Correct",
        value: `${score}/${totalQuestions}`,
        icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      },
      {
        label: "XP Earned",
        value: `+${xpEarned}`,
        icon: <Star className="h-5 w-5 fill-amber-100 text-amber-500" />,
      },
      {
        label: "Accuracy",
        value: `${accuracy}%`,
        icon: <Target className="h-5 w-5 text-blue-500" />,
      },
      {
        label: "Streak",
        value: `${streak} days`,
        icon: <Flame className="h-5 w-5 fill-orange-100 text-orange-500" />,
      },
    ];

    return (
      <GlassCard
        className={cn(
          "mx-auto flex w-full max-w-sm flex-col items-center p-8 text-center",
          className
        )}
        intensity="high"
        ref={ref}
        {...props}
      >
        {/* Success Animation Placeholder */}
        <div className="zoom-in mb-6 flex h-24 w-24 animate-in items-center justify-center rounded-full bg-emerald-100 duration-500">
          <TrophyIcon className="h-12 w-12 text-emerald-600" />
        </div>

        <h2 className="mb-2 font-bold font-serif text-3xl text-slate-900">
          Lesson Complete!
        </h2>

        <div className="mb-8 font-medium text-lg text-slate-500">
          You're making great progress.
        </div>

        {badgeTitle && (
          <div className="mb-8 flex w-full items-center justify-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-6 py-3 font-bold text-amber-800 shadow-sm">
            <Medal className="h-6 w-6 text-amber-600" />
            {badgeTitle}
          </div>
        )}

        <div className="mb-8 w-full divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
          {defaultStats.map((stat, index) => (
            <StatRow
              className="p-4"
              icon={stat.icon}
              key={index}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>

        <div className="w-full space-y-3">
          <Button
            className="w-full rounded-xl bg-slate-900 py-6 font-bold text-lg text-white shadow-lg shadow-slate-200 transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
            onClick={onContinue}
          >
            Continue
          </Button>

          {onReviewMistakes && score < totalQuestions && (
            <Button
              className="w-full py-6 font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              onClick={onReviewMistakes}
              variant="ghost"
            >
              Review Mistakes
            </Button>
          )}
        </div>
      </GlassCard>
    );
  }
);
ResultsCard.displayName = "ResultsCard";

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export { ResultsCard };
