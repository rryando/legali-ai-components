import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { type FloatingMascotProps, FloatingMascot } from "../composite/FloatingMascot";
import { type LiveTickerProps, LiveTicker } from "../composite/LiveTicker";
// Composite components
import { ScrollProgressIndicator } from "../composite/ScrollProgressIndicator";
import { type CTASectionProps, CTASection } from "../landing/CTASection";
import { type FAQSectionProps, FAQSection } from "../landing/FAQSection";
import { type FeaturesSectionProps, FeaturesSection } from "../landing/FeaturesSection";
import { type HowItWorksSectionProps, HowItWorksSection } from "../landing/HowItWorksSection";
import { type LandingFooterProps, LandingFooter } from "../landing/LandingFooter";
// Landing section components
import { type LandingHeaderProps, LandingHeader } from "../landing/LandingHeader";
import { type LandingHeroProps, LandingHero } from "../landing/LandingHero";
import { type ProblemSectionProps, ProblemSection } from "../landing/ProblemSection";
import { type TestimonialsSectionProps, TestimonialsSection } from "../landing/TestimonialsSection";
import { type TrustLogosProps, TrustLogos } from "../landing/TrustLogos";

// ============================================================================
// Types
// ============================================================================

/** Configuration for all customizable text in the landing page */
export type LandingPageTextConfig = {
  /** Header section text */
  header?: Partial<LandingHeaderProps>;
  /** Hero section text */
  hero?: Partial<LandingHeroProps>;
  /** Trust logos section text */
  trustLogos?: Partial<TrustLogosProps>;
  /** Problem section text */
  problem?: Partial<ProblemSectionProps>;
  /** Features section text */
  features?: Partial<FeaturesSectionProps>;
  /** How it works section text */
  howItWorks?: Partial<HowItWorksSectionProps>;
  /** Testimonials section text */
  testimonials?: Partial<TestimonialsSectionProps>;
  /** FAQ section text */
  faq?: Partial<FAQSectionProps>;
  /** CTA section text */
  cta?: Partial<CTASectionProps>;
  /** Footer section text */
  footer?: Partial<LandingFooterProps>;
  /** Live ticker text */
  liveTicker?: Partial<LiveTickerProps>;
  /** Floating mascot text */
  floatingMascot?: Partial<FloatingMascotProps>;
};

export type LandingPageProps = {
  /** Callback when Get Started is clicked */
  onGetStarted?: () => void;
  /** Callback when Watch Demo is clicked */
  onWatchDemo?: () => void;
  /** Configuration for all customizable text */
  textConfig?: LandingPageTextConfig;
} & HTMLAttributes<HTMLDivElement>;

// ============================================================================
// Main Component
// ============================================================================

/**
 * Complete landing page component with all sections.
 * All text is customizable via the textConfig prop.
 *
 * @example
 * ```tsx
 * <LandingPage
 *   onGetStarted={() => navigate('/signup')}
 *   textConfig={{
 *     hero: { headline: "Custom headline", badgeText: "Custom badge" },
 *     cta: { subtitle: "Custom CTA text" }
 *   }}
 * />
 * ```
 */
const LandingPage = forwardRef<HTMLDivElement, LandingPageProps>(
  ({ className, onGetStarted, onWatchDemo, textConfig = {}, ...props }, ref) => {
    return (
      <div
        className={cn("min-h-screen overflow-x-hidden bg-white font-sans antialiased", className)}
        ref={ref}
        {...props}
      >
        {/* Global Interactive Components */}
        <ScrollProgressIndicator />
        <FloatingMascot {...textConfig.floatingMascot} />
        <LiveTicker {...textConfig.liveTicker} />

        {/* Page Sections */}
        <LandingHeader onGetStarted={onGetStarted} {...textConfig.header} />
        <LandingHero onGetStarted={onGetStarted} {...textConfig.hero} />
        <TrustLogos {...textConfig.trustLogos} />
        <ProblemSection {...textConfig.problem} />
        <FeaturesSection {...textConfig.features} />
        <HowItWorksSection {...textConfig.howItWorks} />
        <TestimonialsSection {...textConfig.testimonials} />
        <FAQSection {...textConfig.faq} />
        <CTASection onGetStarted={onGetStarted} onWatchDemo={onWatchDemo} {...textConfig.cta} />
        <LandingFooter {...textConfig.footer} />
      </div>
    );
  }
);

LandingPage.displayName = "LandingPage";

export { LandingPage };
