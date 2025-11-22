import * as React from "react"
import { cn } from "@/lib/utils"
import { ResultsCard } from "../composite/ResultsCard"
import { GlassCard } from "../atomic/GlassCard"

export interface ResultsScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  score: number
  totalQuestions: number
  badgeTitle?: string
  onContinue: () => void
  onReviewMistakes?: () => void
}

const ResultsScreen = React.forwardRef<HTMLDivElement, ResultsScreenProps>(
  ({ className, score, totalQuestions, badgeTitle, onContinue, onReviewMistakes, ...props }, ref) => {
    // Calculate stats based on score
    const percentage = Math.round((score / totalQuestions) * 100)
    const xpEarned = score * 10 + 20 // Base XP + Bonus
    const streak = 5 // Mock streak

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col h-full min-h-screen relative overflow-hidden items-center justify-center p-6",
          // Mesh Gradient Background (Celebratory)
          "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-orange-50 to-white",
          className
        )}
        {...props}
      >
        {/* Decorative Confetti/Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <GlassCard 
          intensity="high" 
          className="w-full max-w-md rounded-3xl shadow-2xl shadow-orange-500/10 border-white/60"
        >
          <ResultsCard
            score={score}
            totalQuestions={totalQuestions}
            xpEarned={xpEarned}
            accuracy={percentage}
            streak={streak}
            badgeTitle={badgeTitle}
            onContinue={onContinue}
            onReviewMistakes={onReviewMistakes}
            className="bg-transparent" // Allow GlassCard background to show
          />
        </GlassCard>
      </div>
    )
  }
)
ResultsScreen.displayName = "ResultsScreen"

export { ResultsScreen }
