// Atomic Components

export {
  AnimatedCounter,
  type AnimatedCounterProps,
} from "./atomic/AnimatedCounter";
export { Answer, type AnswerProps } from "./atomic/Answer";
export {
  ChatBubble,
  chatBubbleVariants,
  type ChatBubbleProps,
} from "./atomic/ChatBubble";
export { ChatInput, type ChatInputProps } from "./atomic/ChatInput";
export {
  ContactInfoField,
  type ContactInfoFieldProps,
  type ValidationState,
} from "./atomic/ContactInfoField";
export {
  ConsultationTimer,
  type ConsultationTimerProps,
} from "./atomic/ConsultationTimer";
export {
  GradientText,
  type GradientTextProps,
  type GradientTextVariant,
} from "./atomic/GradientText";
export {
  LawyerAvatar,
  lawyerAvatarVariants,
  type LawyerAvatarProps,
} from "./atomic/LawyerAvatar";
export {
  LessonDot,
  type LessonDotProps,
  lessonDotVariants,
} from "./atomic/LessonDot";
export { MatchingPulse, type MatchingPulseProps } from "./atomic/MatchingPulse";
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
  StepIndicator,
  stepVariants,
  type StepIndicatorProps,
  type StepIndicatorStep,
} from "./atomic/StepIndicator";

// Composite Components

export {
  AnimatedBackground,
  type AnimatedBackgroundProps,
} from "./composite/AnimatedBackground";
export {
  CallInterface,
  type CallInterfaceProps,
  type CallMode,
} from "./composite/CallInterface";
export {
  CaseAssessmentCard,
  type CaseAssessmentCardProps,
} from "./composite/CaseAssessmentCard";
export {
  CaseUnderstandingCard,
  type CaseUnderstandingCardProps,
} from "./composite/CaseUnderstandingCard";
export { ChatWindow, type ChatWindowProps } from "./composite/ChatWindow";
export {
  ConsultationChat,
  type ConsultationChatProps,
  type ConsultationMode,
} from "./composite/ConsultationChat";
export {
  ConsultationReceipt,
  type ConsultationReceiptProps,
} from "./composite/ConsultationReceipt";
export {
  ContactInfoForm,
  type ContactInfoFormProps,
} from "./composite/ContactInfoForm";
export {
  FloatingMascot,
  type FloatingMascotProps,
} from "./composite/FloatingMascot";
export {
  IntakeChatPanel,
  type IntakeChatPanelProps,
} from "./composite/IntakeChatPanel";
export {
  LawyerProfileCard,
  type LawyerProfileCardProps,
} from "./composite/LawyerProfileCard";
export {
  LiveTicker,
  type LiveTickerNotification,
  type LiveTickerProps,
} from "./composite/LiveTicker";
export {
  MatchingAnimation,
  type MatchingAnimationProps,
} from "./composite/MatchingAnimation";
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
export type { LandingPageProps, LandingPageTextConfig } from "./screens/LandingPage";
export { LandingPage } from "./screens/LandingPage";
export { MarketplaceFlow, type MarketplaceFlowProps } from "./screens/MarketplaceFlow";
export { MarketplaceIntakeScreen, type MarketplaceIntakeScreenProps } from "./screens/MarketplaceIntakeScreen";
export { MarketplaceMatchingScreen, type MarketplaceMatchingScreenProps } from "./screens/MarketplaceMatchingScreen";
export { MarketplaceConsultationScreen, type MarketplaceConsultationScreenProps } from "./screens/MarketplaceConsultationScreen";
export { MarketplaceReceiptScreen, type MarketplaceReceiptScreenProps } from "./screens/MarketplaceReceiptScreen";
export {
  type Question,
  QuizScreen,
  type QuizScreenProps,
} from "./screens/QuizScreen";
export {
  ResultsScreen,
  type ResultsScreenProps,
} from "./screens/ResultsScreen";

// Data Types
export type {
  CaseAssessment,
  CaseComplexity,
  CaseDecision,
  CaseDetails,
  CaseUrgency,
  ChatAttachment,
  ChatMessage,
  ChatSender,
  ConsultationScriptStep,
  ContactInfo,
  IntakeChatScriptStep,
  Lawyer,
  MarketplaceFlowState,
  MarketplaceStep,
  MatchingCriteria,
  ReceiptData,
  ReceiptLineItem,
} from "./data/marketplace-types";

// Demo Content
export {
  consultationScript,
  demoCaseAssessment,
  demoCaseDetails,
  demoLawyers,
  demoReceipt,
  intakeChatScript,
  matchingSearchMessages,
} from "./data/marketplace-demo-content";

// Hooks
export { useMarketplaceFlow } from "./hooks/useMarketplaceFlow";
