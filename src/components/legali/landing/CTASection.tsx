/**
 * @see {@link https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-cta-section.json} — Install:
 * @example npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-cta-section.json"
 */
import { ArrowRight, Clock, Play, Shield, Star } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { LegaliMascot, MascotMotion } from "../mascot/LegaliMascot";

export interface CTASectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Callback when Get Started is clicked */
  onGetStarted?: () => void;
  /** Callback when Watch Demo is clicked */
  onWatchDemo?: () => void;
  /** Section title */
  title?: React.ReactNode;
  /** Section subtitle */
  subtitle?: string;
  /** Trust badges to display */
  badges?: { icon: React.ReactNode; label: string }[];
}

const defaultBadges = [
  { icon: <Shield className="h-5 w-5" />, label: "SOC 2 Compliant" },
  { icon: <Clock className="h-5 w-5" />, label: "24/7 Support" },
  { icon: <Star className="h-5 w-5" />, label: "4.9/5 Rating" },
];

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
          <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
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
        className={cn("relative overflow-hidden px-6 py-32", className)}
        id="cta"
        ref={ref}
        {...props}
      >
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#4eaed0]/30 to-transparent blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[#764ba2]/30 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Mascot */}
          <div className="mb-12">
            <LegaliMascot
              className="mx-auto max-w-[200px]"
              height="auto"
              motion={MascotMotion.CELEBRATE}
              width="100%"
            />
          </div>

          <h2 className="mb-6 font-bold text-4xl text-white leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-slate-300 text-xl">{subtitle}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="group h-14 rounded-2xl bg-[length:200%_100%] bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] px-10 font-semibold text-lg text-white shadow-2xl shadow-purple-500/30 transition-all duration-500 hover:bg-right"
              onClick={onGetStarted}
            >
              <span className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              className="group h-14 rounded-2xl px-8 font-medium text-lg text-white/80 transition-all hover:bg-white/10 hover:text-white"
              onClick={onWatchDemo}
              variant="ghost"
            >
              <span className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </span>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400">
            {badges.map((badge) => (
              <div className="flex items-center gap-2" key={badge.label}>
                {badge.icon}
                <span className="text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

CTASection.displayName = "CTASection";

export { CTASection };
