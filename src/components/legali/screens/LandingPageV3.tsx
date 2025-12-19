import * as React from "react"
import { cn } from "@/lib/utils"

// Composite components
import { ScrollProgressIndicator } from "../composite/ScrollProgressIndicator"
import { FloatingMascot } from "../composite/FloatingMascot"
import { LiveTicker } from "../composite/LiveTicker"

// Landing section components
import { LandingHeader } from "../landing/LandingHeader"
import { LandingHero } from "../landing/LandingHero"
import { TrustLogos } from "../landing/TrustLogos"
import { ProblemSection } from "../landing/ProblemSection"
import { FeaturesSection } from "../landing/FeaturesSection"
import { HowItWorksSection } from "../landing/HowItWorksSection"
import { TestimonialsSection } from "../landing/TestimonialsSection"
import { FAQSection } from "../landing/FAQSection"
import { CTASection } from "../landing/CTASection"
import { LandingFooter } from "../landing/LandingFooter"

// ============================================================================
// Types
// ============================================================================

export interface LandingPageV3Props extends React.HTMLAttributes<HTMLDivElement> {
  onGetStarted?: () => void
  onWatchDemo?: () => void
}

// ============================================================================
// Main Component
// ============================================================================

const LandingPageV3 = React.forwardRef<HTMLDivElement, LandingPageV3Props>(
  ({ className, onGetStarted, onWatchDemo, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("min-h-screen bg-white font-sans antialiased", className)}
        {...props}
      >
        {/* Global Interactive Components */}
        <ScrollProgressIndicator />
        <FloatingMascot />
        <LiveTicker />

        {/* Page Sections */}
        <LandingHeader onGetStarted={onGetStarted} />
        <LandingHero onGetStarted={onGetStarted} />
        <TrustLogos />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection onGetStarted={onGetStarted} onWatchDemo={onWatchDemo} />
        <LandingFooter />
      </div>
    )
  }
)

LandingPageV3.displayName = "LandingPageV3"

export { LandingPageV3 }
