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
  header?: Pick<LandingHeaderProps, "loginLabel" | "ctaLabel">;
  /** Hero section text */
  hero?: Pick<
    LandingHeroProps,
    "badgeText" | "headline" | "subtitle" | "analyzeButtonText" | "defaultInputPlaceholder"
  >;
  /** Trust logos section text */
  trustLogos?: Pick<TrustLogosProps, "title">;
  /** Problem section text */
  problem?: Pick<ProblemSectionProps, "badgeLabel" | "title" | "subtitle" | "mascotMessage">;
  /** Features section text */
  features?: Pick<FeaturesSectionProps, "badgeLabel" | "title">;
  /** How it works section text */
  howItWorks?: Pick<HowItWorksSectionProps, "title">;
  /** Testimonials section text */
  testimonials?: Pick<TestimonialsSectionProps, "badgeLabel" | "title">;
  /** FAQ section text */
  faq?: Pick<FAQSectionProps, "title" | "subtitle">;
  /** CTA section text */
  cta?: Pick<CTASectionProps, "title" | "subtitle">;
  /** Footer section text */
  footer?: Pick<LandingFooterProps, "description" | "copyright" | "disclaimer">;
  /** Live ticker text */
  liveTicker?: Pick<LiveTickerProps, "fromLabel" | "justLabel">;
  /** Floating mascot text */
  floatingMascot?: Pick<FloatingMascotProps, "easterEggMessage">;
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
