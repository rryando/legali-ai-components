import * as React from "react"
import { cn } from "@/lib/utils"
import { StatRow } from "../atomic/StatRow"
import { Button } from "@/components/ui/legali/button"
import { CheckCircle2, Star, Target, Flame, Medal } from "lucide-react"
import { GlassCard } from "../atomic/GlassCard"

export interface ResultsStat {
  label: string
  value: string | number
  icon?: React.ReactNode
}

export interface ResultsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  score: number
  totalQuestions: number
  xpEarned: number
  accuracy: number
  streak: number
  badgeTitle?: string
  stats?: ResultsStat[]
  onContinue: () => void
  onReviewMistakes?: () => void
}

const ResultsCard = React.forwardRef<HTMLDivElement, ResultsCardProps>(
  ({ 
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
  }, ref) => {
    const defaultStats: ResultsStat[] = stats || [
      { label: "Questions Correct", value: `${score}/${totalQuestions}`, icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> },
      { label: "XP Earned", value: `+${xpEarned}`, icon: <Star className="w-5 h-5 text-amber-500 fill-amber-100" /> },
      { label: "Accuracy", value: `${accuracy}%`, icon: <Target className="w-5 h-5 text-blue-500" /> },
      { label: "Streak", value: `${streak} days`, icon: <Flame className="w-5 h-5 text-orange-500 fill-orange-100" /> },
    ]

    return (
      <GlassCard
        ref={ref}
        intensity="high"
        className={cn(
          "flex flex-col items-center text-center p-8 max-w-sm mx-auto w-full",
          className
        )}
        {...props}
      >
        {/* Success Animation Placeholder */}
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
           <TrophyIcon className="w-12 h-12 text-emerald-600" />
        </div>
        
        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">
          Lesson Complete!
        </h2>
        
        <div className="text-lg text-slate-500 mb-8 font-medium">
          You're making great progress.
        </div>

        {badgeTitle && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-3 rounded-xl font-bold mb-8 shadow-sm flex items-center gap-3 w-full justify-center">
            <Medal className="w-6 h-6 text-amber-600" />
            {badgeTitle}
          </div>
        )}

        <div className="w-full bg-white border border-slate-200 rounded-2xl p-1 mb-8 shadow-sm divide-y divide-slate-100">
          {defaultStats.map((stat, index) => (
            <StatRow
              key={index}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              className="p-4"
            />
          ))}
        </div>

        <div className="w-full space-y-3">
          <Button
            onClick={onContinue}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-6 text-lg rounded-xl shadow-lg shadow-slate-200 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Continue
          </Button>
          
          {onReviewMistakes && score < totalQuestions && (
            <Button
              onClick={onReviewMistakes}
              variant="ghost"
              className="w-full text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-semibold py-6"
            >
              Review Mistakes
            </Button>
          )}
        </div>
      </GlassCard>
    )
  }
)
ResultsCard.displayName = "ResultsCard"

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

export { ResultsCard }
