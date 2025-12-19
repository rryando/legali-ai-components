// Atomic Components
export { StatItem, statItemVariants, type StatItemProps } from './atomic/StatItem'
export { ProgressBar, progressBarVariants, type ProgressBarProps } from './atomic/ProgressBar'
export { LessonDot, lessonDotVariants, type LessonDotProps } from './atomic/LessonDot'
export { Answer, type AnswerProps } from './atomic/Answer'
export { StatRow, type StatRowProps } from './atomic/StatRow'
export { StatusBar, type StatusBarProps } from './atomic/StatusBar'
export { SpotlightCard, type SpotlightCardProps } from './atomic/SpotlightCard'
export { AnimatedCounter, type AnimatedCounterProps } from './atomic/AnimatedCounter'
export { SectionBadge, type SectionBadgeProps, type SectionBadgeVariant } from './atomic/SectionBadge'
export { GradientText, type GradientTextProps, type GradientTextVariant } from './atomic/GradientText'

// Composite Components
export { UserStatsBar, type UserStatsBarProps } from './composite/UserStatsBar'
export { ProgressSection, type ProgressSectionProps } from './composite/ProgressSection'
export { ModuleCard, type ModuleCardProps, type ModuleStatus, type Lesson } from './composite/ModuleCard'
export { QuizHeader, type QuizHeaderProps } from './composite/QuizHeader'
export { QuizQuestion, type QuizQuestionProps } from './composite/QuizQuestion'
export { QuizFeedback, type QuizFeedbackProps } from './composite/QuizFeedback'
export { ResultsCard, type ResultsCardProps, type ResultsStat } from './composite/ResultsCard'
export { NavigationBar, type NavigationBarProps, type NavItem } from './composite/NavigationBar'
export { ScrollProgressIndicator, type ScrollProgressIndicatorProps } from './composite/ScrollProgressIndicator'
export { FloatingMascot, type FloatingMascotProps } from './composite/FloatingMascot'
export { LiveTicker, type LiveTickerProps, type LiveTickerNotification } from './composite/LiveTicker'
export { NavDropdown, type NavDropdownProps, type NavDropdownItem } from './composite/NavDropdown'
export { AnimatedBackground, type AnimatedBackgroundProps } from './composite/AnimatedBackground'

// Screen Components
export { HomeScreen, type HomeScreenProps, type Module } from './screens/HomeScreen'
export { QuizScreen, type QuizScreenProps, type Question } from './screens/QuizScreen'
export { ResultsScreen, type ResultsScreenProps } from './screens/ResultsScreen'
export { LandingPage, type LandingPageProps } from './screens/LandingPage'
export { LandingPageV2, type LandingPageV2Props } from './screens/LandingPageV2'
export { LandingPageV3 } from './screens/LandingPageV3'
export type { LandingPageV3Props } from './screens/LandingPageV3'

// Landing Section Components
export {
  LandingHeader,
  LandingHero,
  TrustLogos,
  ProblemSection,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
  LandingFooter,
  type LandingHeaderProps,
  type LandingHeroProps,
  type QuickAction,
  type TrustLogosProps,
  type TrustLogo,
  type ProblemSectionProps,
  type ProblemItem,
  type FeaturesSectionProps,
  type Feature,
  type HowItWorksSectionProps,
  type Step,
  type TestimonialsSectionProps,
  type Testimonial,
  type FAQSectionProps,
  type FAQ,
  type CTASectionProps,
  type LandingFooterProps,
  type FooterLinkGroup,
} from './landing'

// Mascot Components
export {
  LegaliMascot,
  MascotMotion,
  MascotMotionLabels,
  type MascotMotionType,
  type LegaliMascotProps,
} from './mascot'
