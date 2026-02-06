// Atomic Components

export {
  AnimatedCounter,
  type AnimatedCounterProps,
} from "./atomic/animated-counter";
export { Answer, type AnswerProps } from "./atomic/answer";
export {
  GradientText,
  type GradientTextProps,
  type GradientTextVariant,
} from "./atomic/gradient-text";
export {
  LessonDot,
  type LessonDotProps,
  lessonDotVariants,
} from "./atomic/lesson-dot";
export {
  ProgressBar,
  type ProgressBarProps,
  progressBarVariants,
} from "./atomic/progress-bar";
export {
  SectionBadge,
  type SectionBadgeProps,
  type SectionBadgeVariant,
} from "./atomic/section-badge";
export { SpotlightCard, type SpotlightCardProps } from "./atomic/spotlight-card";
export {
  StatItem,
  type StatItemProps,
  statItemVariants,
} from "./atomic/stat-item";
export { StatRow, type StatRowProps } from "./atomic/stat-row";
export { StatusBar, type StatusBarProps } from "./atomic/status-bar";
export {
  AnimatedBackground,
  type AnimatedBackgroundProps,
} from "./composite/animated-background";
export {
  FloatingMascot,
  type FloatingMascotProps,
} from "./composite/floating-mascot";
export {
  LiveTicker,
  type LiveTickerNotification,
  type LiveTickerProps,
} from "./composite/live-ticker";
export {
  type Lesson,
  ModuleCard,
  type ModuleCardProps,
  type ModuleStatus,
} from "./composite/module-card";
export {
  NavDropdown,
  type NavDropdownItem,
  type NavDropdownProps,
} from "./composite/nav-dropdown";
export {
  type NavItem,
  NavigationBar,
  type NavigationBarProps,
} from "./composite/navigation-bar";
export {
  ProgressSection,
  type ProgressSectionProps,
} from "./composite/progress-section";
export { QuizFeedback, type QuizFeedbackProps } from "./composite/quiz-feedback";
export { QuizHeader, type QuizHeaderProps } from "./composite/quiz-header";
export { QuizQuestion, type QuizQuestionProps } from "./composite/quiz-question";
export {
  ResultsCard,
  type ResultsCardProps,
  type ResultsStat,
} from "./composite/results-card";
export {
  ScrollProgressIndicator,
  type ScrollProgressIndicatorProps,
} from "./composite/scroll-progress-indicator";
// Composite Components
export { UserStatsBar, type UserStatsBarProps } from "./composite/user-stats-bar";
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
} from "./screens/home-screen";
export type { LandingPageProps, LandingPageTextConfig } from "./screens/landing-page";
export { LandingPage } from "./screens/landing-page";
export {
  type Question,
  QuizScreen,
  type QuizScreenProps,
} from "./screens/quiz-screen";
export {
  ResultsScreen,
  type ResultsScreenProps,
} from "./screens/results-screen";
