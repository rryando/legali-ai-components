// Atomic Components

export {
  AnimatedCounter,
  type AnimatedCounterProps,
} from "./atomic/AnimatedCounter";
export { Answer, type AnswerProps } from "./atomic/Answer";
export {
  GradientText,
  type GradientTextProps,
  type GradientTextVariant,
} from "./atomic/GradientText";
export {
  LessonDot,
  type LessonDotProps,
  lessonDotVariants,
} from "./atomic/LessonDot";
export {
  ProgressBar,
  type ProgressBarProps,
  progressBarVariants,
} from "./atomic/ProgressBar";
export {
  SectionBadge,
  type SectionBadgeProps,
  type SectionBadgeVariant,
} from "./atomic/SectionBadge";
export { SpotlightCard, type SpotlightCardProps } from "./atomic/SpotlightCard";
export {
  StatItem,
  type StatItemProps,
  statItemVariants,
} from "./atomic/StatItem";
export { StatRow, type StatRowProps } from "./atomic/StatRow";
export { StatusBar, type StatusBarProps } from "./atomic/StatusBar";
export {
  AnimatedBackground,
  type AnimatedBackgroundProps,
} from "./composite/AnimatedBackground";
export {
  FloatingMascot,
  type FloatingMascotProps,
} from "./composite/FloatingMascot";
export {
  LiveTicker,
  type LiveTickerNotification,
  type LiveTickerProps,
} from "./composite/LiveTicker";
export {
  type Lesson,
  ModuleCard,
  type ModuleCardProps,
  type ModuleStatus,
} from "./composite/ModuleCard";
export {
  NavDropdown,
  type NavDropdownItem,
  type NavDropdownProps,
} from "./composite/NavDropdown";
export {
  type NavItem,
  NavigationBar,
  type NavigationBarProps,
} from "./composite/NavigationBar";
export {
  ProgressSection,
  type ProgressSectionProps,
} from "./composite/ProgressSection";
export { QuizFeedback, type QuizFeedbackProps } from "./composite/QuizFeedback";
export { QuizHeader, type QuizHeaderProps } from "./composite/QuizHeader";
export { QuizQuestion, type QuizQuestionProps } from "./composite/QuizQuestion";
export {
  ResultsCard,
  type ResultsCardProps,
  type ResultsStat,
} from "./composite/ResultsCard";
export {
  ScrollProgressIndicator,
  type ScrollProgressIndicatorProps,
} from "./composite/ScrollProgressIndicator";
// Composite Components
export { UserStatsBar, type UserStatsBarProps } from "./composite/UserStatsBar";
// Landing Section Components
export {
  CTASection,
  type CTASectionProps,
  type FAQ,
  FAQSection,
  type FAQSectionProps,
  type Feature,
  FeaturesSection,
  type FeaturesSectionProps,
  type FooterLinkGroup,
  HowItWorksSection,
  type HowItWorksSectionProps,
  LandingFooter,
  type LandingFooterProps,
  LandingHeader,
  type LandingHeaderProps,
  LandingHero,
  type LandingHeroProps,
  type ProblemItem,
  ProblemSection,
  type ProblemSectionProps,
  type QuickAction,
  type Step,
  type Testimonial,
  TestimonialsSection,
  type TestimonialsSectionProps,
  type TrustLogo,
  TrustLogos,
  type TrustLogosProps,
} from "./landing";
// Mascot Components
export {
  LegaliMascot,
  type LegaliMascotProps,
  MascotMotion,
  MascotMotionLabels,
  type MascotMotionType,
} from "./mascot";
// Screen Components
export {
  HomeScreen,
  type HomeScreenProps,
  type Module,
} from "./screens/HomeScreen";
export type { LandingPageV3Props } from "./screens/LandingPageV3";
export { LandingPageV3 } from "./screens/LandingPageV3";
export {
  type Question,
  QuizScreen,
  type QuizScreenProps,
} from "./screens/QuizScreen";
export {
  ResultsScreen,
  type ResultsScreenProps,
} from "./screens/ResultsScreen";
