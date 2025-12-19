import * as React from "react";
import { cn } from "@/lib/utils";
import { FloatingMascot } from "../composite/FloatingMascot";
import { LiveTicker } from "../composite/LiveTicker";
// Composite components
import { ScrollProgressIndicator } from "../composite/ScrollProgressIndicator";
import { CTASection } from "../landing/CTASection";
import { FAQSection } from "../landing/FAQSection";
import { FeaturesSection } from "../landing/FeaturesSection";
import { HowItWorksSection } from "../landing/HowItWorksSection";
import { LandingFooter } from "../landing/LandingFooter";
// Landing section components
import { LandingHeader } from "../landing/LandingHeader";
import { LandingHeroV2 } from "../landing/LandingHeroV2";
import { ProblemSection } from "../landing/ProblemSection";
import { TestimonialsSection } from "../landing/TestimonialsSection";
import { TrustLogos } from "../landing/TrustLogos";

// ============================================================================
// Types
// ============================================================================

export interface LandingPageV3Props
  extends React.HTMLAttributes<HTMLDivElement> {
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
}

// ============================================================================
// Main Component
// ============================================================================

const LandingPageV3 = React.forwardRef<HTMLDivElement, LandingPageV3Props>(
  ({ className, onGetStarted, onWatchDemo, ...props }, ref) => {
    return (
      <div
        className={cn("min-h-screen bg-white font-sans antialiased", className)}
        ref={ref}
        {...props}
      >
        {/* Global Interactive Components */}
        <ScrollProgressIndicator />
        <FloatingMascot />
        <LiveTicker />

        {/* Page Sections */}
        <LandingHeader onGetStarted={onGetStarted} />
        <LandingHeroV2 onGetStarted={onGetStarted} />
        <TrustLogos />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection onGetStarted={onGetStarted} onWatchDemo={onWatchDemo} />
        <LandingFooter />
      </div>
    );
  }
);

LandingPageV3.displayName = "LandingPageV3";

export { LandingPageV3 };
