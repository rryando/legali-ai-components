// Atomic Components

export { Answer, type AnswerProps } from "./atomic/Answer";
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
  StatItem,
  type StatItemProps,
  statItemVariants,
} from "./atomic/StatItem";
export { StatRow, type StatRowProps } from "./atomic/StatRow";
export { StatusBar, type StatusBarProps } from "./atomic/StatusBar";
export {
  type Lesson,
  ModuleCard,
  type ModuleCardProps,
  type ModuleStatus,
} from "./composite/ModuleCard";
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
// Composite Components
export { UserStatsBar, type UserStatsBarProps } from "./composite/UserStatsBar";
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
export {
  type Question,
  QuizScreen,
  type QuizScreenProps,
} from "./screens/QuizScreen";
export {
  ResultsScreen,
  type ResultsScreenProps,
} from "./screens/ResultsScreen";
