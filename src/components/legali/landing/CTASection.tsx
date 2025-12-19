import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Play, Shield, Clock, Star } from "lucide-react"
import { Button } from "@/components/button"
import { LegaliMascot, MascotMotion } from "../mascot/LegaliMascot"

export interface CTASectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Callback when Get Started is clicked */
  onGetStarted?: () => void
  /** Callback when Watch Demo is clicked */
  onWatchDemo?: () => void
  /** Section title */
  title?: React.ReactNode
  /** Section subtitle */
  subtitle?: string
  /** Trust badges to display */
  badges?: { icon: React.ReactNode; label: string }[]
}

const defaultBadges = [
  { icon: <Shield className="w-5 h-5" />, label: "SOC 2 Compliant" },
  { icon: <Clock className="w-5 h-5" />, label: "24/7 Support" },
  { icon: <Star className="w-5 h-5" />, label: "4.9/5 Rating" },
]

/**
 * Call-to-action section with dark theme and mascot.
 * Includes primary and secondary action buttons with trust badges.
 */
const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(
  (
    {
      className,
      onGetStarted,
      onWatchDemo,
      title = (
        <>
          Ready to take control of your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2]">
            legal journey?
          </span>
        </>
      ),
      subtitle = "Join thousands of users who are navigating the legal system with confidence. Start free today—no credit card required.",
      badges = defaultBadges,
      ...props
    },
    ref
  ) => {
    return (
      <section
        id="cta"
        ref={ref}
        className={cn("relative py-32 px-6 overflow-hidden", className)}
        {...props}
      >
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#4eaed0]/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#764ba2]/30 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Mascot */}
          <div className="mb-12">
            <LegaliMascot
              motion={MascotMotion.CELEBRATE}
              width="100%"
              height="auto"
              className="mx-auto max-w-[200px]"
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {title}
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onGetStarted}
              className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-[length:200%_100%] hover:bg-right text-white rounded-2xl shadow-2xl shadow-purple-500/30 transition-all duration-500 group"
            >
              <span className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              variant="ghost"
              onClick={onWatchDemo}
              className="h-14 px-8 text-lg font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-2xl transition-all group"
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </span>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400">
            {badges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                {badge.icon}
                <span className="text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

CTASection.displayName = "CTASection"

export { CTASection }
