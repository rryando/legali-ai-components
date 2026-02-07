import fs from "fs/promises";
import path from "path";

const repoRoot = process.cwd();
const outDir = path.join(repoRoot, "registry");

// Public URLs for assets so consumers don't need to handle binary files manually.
const ASSET_BASE = "https://raw.githubusercontent.com/rryando/legali-ai-components/main";

const replacements = [
  // Move legali components under the shadcn-conventional ui path.
  { from: /@\/components\/legali/g, to: "@/components/ui/legali" },
  // Map shared ui dependencies to prefixed versions shipped in this registry.
  { from: /@\/components\/button/g, to: "@/components/ui/legali/button" },
  { from: /@\/components\/switch/g, to: "@/components/ui/legali/switch" },
  { from: /@\/components\/avatar/g, to: "@/components/ui/legali/avatar" },
  { from: /@\/components\/badge/g, to: "@/components/ui/legali/badge" },
  { from: /@\/components\/chart/g, to: "@/components/ui/legali/chart" },
  {
    from: /@\/components\/dropdown-menu/g,
    to: "@/components/ui/legali/dropdown-menu",
  },
  // Keep logos and animation assets fetchable when added via registry.
  { from: /\/logo\/logo\.png/g, to: `${ASSET_BASE}/public/logo/logo.png` },
  {
    from: /\/animations\/legali\.riv/g,
    to: `${ASSET_BASE}/public/animations/legali.riv`,
  },
];

const files = [
  // Core utilities & styles
  {
    name: "legali-lib-utils",
    type: "registry:lib",
    files: ["lib/utils.ts"],
    dependencies: ["clsx", "tailwind-merge"],
  },
  {
    name: "legali-style-globals",
    type: "registry:style",
    files: ["styles/globals.css"],
  },
  {
    name: "legali-hook-use-mobile",
    type: "registry:hook",
    files: ["hooks/use-mobile.ts"],
  },

  // Shared base UI pieces (prefixed)
  {
    name: "legali-button",
    type: "registry:ui",
    files: ["components/ui/legali/button.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-avatar",
    type: "registry:ui",
    files: ["components/ui/legali/avatar.tsx"],
    dependencies: ["@radix-ui/react-avatar"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-badge",
    type: "registry:ui",
    files: ["components/ui/legali/badge.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-switch",
    type: "registry:ui",
    files: ["components/ui/legali/switch.tsx"],
    dependencies: ["@radix-ui/react-switch"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-chart",
    type: "registry:ui",
    files: ["components/ui/legali/chart.tsx"],
    dependencies: ["recharts"],
    registryDependencies: ["legali-lib-utils"],
  },

  // Atomic
  {
    name: "legali-answer",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/Answer.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-glass-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/GlassCard.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-typing-text",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/TypingText.tsx"],
    dependencies: ["motion", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-lesson-dot",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/LessonDot.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-progress-bar",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ProgressBar.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-stat-item",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/StatItem.tsx"],
    dependencies: ["class-variance-authority", "lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-stat-row",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/StatRow.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-status-bar",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/StatusBar.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-explanation-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ExplanationCard.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils", "legali-glass-card"],
  },
  {
    name: "legali-question-number-badge",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/QuestionNumberBadge.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-setting-item",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/SettingItem.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-switch"],
  },
  {
    name: "legali-profile-stat-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ProfileStatCard.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils", "legali-glass-card"],
  },

  // Composite
  {
    name: "legali-module-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ModuleCard.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lesson-dot", "legali-glass-card", "legali-lib-utils"],
  },
  {
    name: "legali-mascot-hero-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/MascotHeroCard.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-glass-card",
      "legali-mascot",
      "legali-typing-text",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-navigation-bar",
    type: "registry:ui",
    files: ["components/ui/legali/composite/NavigationBar.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-progress-section",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ProgressSection.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-progress-bar", "legali-glass-card", "legali-lib-utils"],
  },
  {
    name: "legali-quiz-feedback",
    type: "registry:ui",
    files: ["components/ui/legali/composite/QuizFeedback.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-button", "legali-lib-utils"],
  },
  {
    name: "legali-quiz-header",
    type: "registry:ui",
    files: ["components/ui/legali/composite/QuizHeader.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-progress-bar", "legali-lib-utils"],
  },
  {
    name: "legali-quiz-question",
    type: "registry:ui",
    files: ["components/ui/legali/composite/QuizQuestion.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-results-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ResultsCard.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-button",
      "legali-stat-row",
      "legali-glass-card",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-user-stats-bar",
    type: "registry:ui",
    files: ["components/ui/legali/composite/UserStatsBar.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-stat-item", "legali-lib-utils"],
  },

  // Screens
  {
    name: "legali-home-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/HomeScreen.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-user-stats-bar",
      "legali-module-card",
      "legali-navigation-bar",
      "legali-mascot",
      "legali-mascot-hero-card",
      "legali-progress-screen",
      "legali-profile-screen",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-quiz-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/QuizScreen.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-quiz-header",
      "legali-quiz-question",
      "legali-quiz-feedback",
      "legali-answer",
      "legali-button",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-review-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/ReviewScreen.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-answer",
      "legali-explanation-card",
      "legali-question-number-badge",
      "legali-button",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-results-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/ResultsScreen.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-results-card", "legali-glass-card", "legali-lib-utils"],
  },
  {
    name: "legali-progress-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/ProgressScreen.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge", "recharts"],
    registryDependencies: ["legali-glass-card", "legali-lib-utils", "legali-chart"],
  },
  {
    name: "legali-profile-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/ProfileScreen.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-glass-card",
      "legali-profile-stat-card",
      "legali-setting-item",
      "legali-avatar",
      "legali-badge",
      "legali-button",
      "legali-lib-utils",
    ],
  },

  // Marketplace Atomic
  {
    name: "legali-spotlight-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/SpotlightCard.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-gradient-text",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/GradientText.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-lawyer-avatar",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/LawyerAvatar.tsx"],
    dependencies: ["class-variance-authority", "lucide-react"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-step-indicator",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/StepIndicator.tsx"],
    dependencies: ["class-variance-authority", "lucide-react"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-chat-bubble",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ChatBubble.tsx"],
    dependencies: ["class-variance-authority", "motion"],
    registryDependencies: ["legali-lib-utils", "legali-marketplace-types"],
  },
  {
    name: "legali-voice-input-button",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/VoiceInputButton.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-chat-input",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ChatInput.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-lib-utils", "legali-voice-input-button"],
  },
  {
    name: "legali-consultation-timer",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ConsultationTimer.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-matching-pulse",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/MatchingPulse.tsx"],
    dependencies: ["motion"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-animated-counter",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/AnimatedCounter.tsx"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-spotlight-card",
      "legali-hook-use-animations",
    ],
  },
  {
    name: "legali-section-badge",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/SectionBadge.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-contact-info-field",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ContactInfoField.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-case-status-badge",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/CaseStatusBadge.tsx"],
    dependencies: ["class-variance-authority"],
    registryDependencies: ["legali-lib-utils", "legali-marketplace-types"],
  },
  {
    name: "legali-ai-thinking-indicator",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/AIThinkingIndicator.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-suggestion-chip",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/SuggestionChip.tsx"],
    dependencies: ["motion"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-floating-particle",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/FloatingParticle.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-cursor-glow",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/CursorGlow.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-gradient-mesh-background",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/GradientMeshBackground.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-tilt-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/TiltCard.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },

  // Marketplace Composite
  {
    name: "legali-animated-background",
    type: "registry:ui",
    files: ["components/ui/legali/composite/AnimatedBackground.tsx"],
    registryDependencies: ["legali-lib-utils", "legali-hook-use-animations"],
  },
  {
    name: "legali-call-interface",
    type: "registry:ui",
    files: ["components/ui/legali/composite/CallInterface.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-consultation-timer",
      "legali-lawyer-avatar",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-case-assessment-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/CaseAssessmentCard.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-glass-card",
      "legali-gradient-text",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-case-understanding-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/CaseUnderstandingCard.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-gradient-text",
      "legali-spotlight-card",
      "legali-button",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-chat-window",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ChatWindow.tsx"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-ai-thinking-indicator",
      "legali-chat-bubble",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-consultation-chat",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ConsultationChat.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-chat-input",
      "legali-consultation-timer",
      "legali-lawyer-avatar",
      "legali-chat-window",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-consultation-receipt",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ConsultationReceipt.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-gradient-text",
      "legali-lawyer-avatar",
      "legali-spotlight-card",
      "legali-button",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-contact-info-form",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ContactInfoForm.tsx"],
    dependencies: ["motion"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-contact-info-field",
      "legali-glass-card",
      "legali-button",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-floating-mascot",
    type: "registry:ui",
    files: ["components/ui/legali/composite/FloatingMascot.tsx"],
    registryDependencies: ["legali-lib-utils", "legali-hook-use-animations", "legali-mascot"],
  },
  {
    name: "legali-intake-chat-panel",
    type: "registry:ui",
    files: ["components/ui/legali/composite/IntakeChatPanel.tsx"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-chat-input",
      "legali-suggestion-chip",
      "legali-chat-window",
      "legali-contact-info-form",
      "legali-mascot",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-lawyer-profile-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/LawyerProfileCard.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-gradient-text",
      "legali-lawyer-avatar",
      "legali-spotlight-card",
      "legali-button",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-live-ticker",
    type: "registry:ui",
    files: ["components/ui/legali/composite/LiveTicker.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-lib-utils", "legali-spotlight-card"],
  },
  {
    name: "legali-matching-animation",
    type: "registry:ui",
    files: ["components/ui/legali/composite/MatchingAnimation.tsx"],
    dependencies: ["motion"],
    registryDependencies: ["legali-lib-utils", "legali-matching-pulse", "legali-mascot"],
  },
  {
    name: "legali-nav-dropdown",
    type: "registry:ui",
    files: ["components/ui/legali/composite/NavDropdown.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-lib-utils", "legali-dropdown-menu"],
  },
  {
    name: "legali-scroll-progress-indicator",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ScrollProgressIndicator.tsx"],
    registryDependencies: ["legali-lib-utils", "legali-hook-use-animations"],
  },
  {
    name: "legali-floating-particles-system",
    type: "registry:ui",
    files: ["components/ui/legali/composite/FloatingParticlesSystem.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-lib-utils", "legali-floating-particle"],
  },
  {
    name: "legali-interactive-stats-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/InteractiveStatsCard.tsx"],
    dependencies: ["motion"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-smart-suggestions-dropdown",
    type: "registry:ui",
    files: ["components/ui/legali/composite/SmartSuggestionsDropdown.tsx"],
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["legali-lib-utils", "legali-suggestion-chip"],
  },
  {
    name: "legali-case-request-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/CaseRequestCard.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-case-status-badge",
      "legali-spotlight-card",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-case-review-panel",
    type: "registry:ui",
    files: ["components/ui/legali/composite/CaseReviewPanel.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-gradient-text",
      "legali-spotlight-card",
      "legali-button",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-assessment-writing-form",
    type: "registry:ui",
    files: ["components/ui/legali/composite/AssessmentWritingForm.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["legali-lib-utils", "legali-gradient-text", "legali-spotlight-card"],
  },
  {
    name: "legali-payout-summary",
    type: "registry:ui",
    files: ["components/ui/legali/composite/PayoutSummary.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-gradient-text",
      "legali-lawyer-avatar",
      "legali-spotlight-card",
      "legali-button",
      "legali-marketplace-types",
    ],
  },

  // Landing Page Sections
  {
    name: "legali-landing-hero",
    type: "registry:ui",
    files: ["components/ui/legali/landing/LandingHero.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-button",
      "legali-mascot",
      "legali-ai-thinking-indicator",
      "legali-cursor-glow",
      "legali-gradient-mesh-background",
      "legali-tilt-card",
      "legali-voice-input-button",
      "legali-floating-particles-system",
      "legali-interactive-stats-card",
      "legali-smart-suggestions-dropdown",
      "legali-hook-use-animations",
    ],
  },
  {
    name: "legali-landing-header",
    type: "registry:ui",
    files: ["components/ui/legali/landing/LandingHeader.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-lib-utils", "legali-button", "legali-nav-dropdown"],
  },
  {
    name: "legali-landing-footer",
    type: "registry:ui",
    files: ["components/ui/legali/landing/LandingFooter.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-cta-section",
    type: "registry:ui",
    files: ["components/ui/legali/landing/CTASection.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-lib-utils", "legali-button", "legali-mascot"],
  },
  {
    name: "legali-faq-section",
    type: "registry:ui",
    files: ["components/ui/legali/landing/FAQSection.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-spotlight-card",
      "legali-animated-background",
    ],
  },
  {
    name: "legali-features-section",
    type: "registry:ui",
    files: ["components/ui/legali/landing/FeaturesSection.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-section-badge",
      "legali-spotlight-card",
      "legali-mascot",
    ],
  },
  {
    name: "legali-how-it-works-section",
    type: "registry:ui",
    files: ["components/ui/legali/landing/HowItWorksSection.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-spotlight-card",
      "legali-animated-background",
    ],
  },
  {
    name: "legali-problem-section",
    type: "registry:ui",
    files: ["components/ui/legali/landing/ProblemSection.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-section-badge",
      "legali-spotlight-card",
      "legali-animated-background",
      "legali-mascot",
    ],
  },
  {
    name: "legali-testimonials-section",
    type: "registry:ui",
    files: ["components/ui/legali/landing/TestimonialsSection.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-lib-utils", "legali-section-badge", "legali-spotlight-card"],
  },
  {
    name: "legali-trust-logos",
    type: "registry:ui",
    files: ["components/ui/legali/landing/TrustLogos.tsx"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-landing-sections",
    type: "registry:ui",
    files: ["components/ui/legali/landing/index.ts"],
    registryDependencies: [
      "legali-landing-hero",
      "legali-landing-header",
      "legali-landing-footer",
      "legali-cta-section",
      "legali-faq-section",
      "legali-features-section",
      "legali-how-it-works-section",
      "legali-problem-section",
      "legali-testimonials-section",
      "legali-trust-logos",
    ],
  },

  // Marketplace Screens (User-side)
  {
    name: "legali-marketplace-intake-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/MarketplaceIntakeScreen.tsx"],
    dependencies: ["motion"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-step-indicator",
      "legali-case-understanding-card",
      "legali-intake-chat-panel",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-marketplace-matching-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/MarketplaceMatchingScreen.tsx"],
    dependencies: ["motion"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-step-indicator",
      "legali-lawyer-profile-card",
      "legali-matching-animation",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-marketplace-consultation-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/MarketplaceConsultationScreen.tsx"],
    dependencies: ["motion"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-step-indicator",
      "legali-call-interface",
      "legali-case-assessment-card",
      "legali-consultation-chat",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-marketplace-receipt-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/MarketplaceReceiptScreen.tsx"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-step-indicator",
      "legali-consultation-receipt",
      "legali-mascot",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-marketplace-flow",
    type: "registry:ui",
    files: ["components/ui/legali/screens/MarketplaceFlow.tsx"],
    dependencies: ["motion"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-marketplace-demo-content",
      "legali-marketplace-types",
      "legali-hook-use-marketplace-flow",
      "legali-marketplace-intake-screen",
      "legali-marketplace-matching-screen",
      "legali-marketplace-consultation-screen",
      "legali-marketplace-receipt-screen",
    ],
  },

  // Marketplace Screens (Lawyer-side)
  {
    name: "legali-lawyer-dashboard-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/LawyerDashboardScreen.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-gradient-text",
      "legali-lawyer-avatar",
      "legali-step-indicator",
      "legali-case-request-card",
      "legali-mascot",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-lawyer-case-review-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/LawyerCaseReviewScreen.tsx"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-step-indicator",
      "legali-case-review-panel",
      "legali-mascot",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-lawyer-consultation-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/LawyerConsultationScreen.tsx"],
    dependencies: ["motion", "lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-step-indicator",
      "legali-call-interface",
      "legali-consultation-chat",
      "legali-button",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-lawyer-assessment-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/LawyerAssessmentScreen.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-step-indicator",
      "legali-assessment-writing-form",
      "legali-button",
      "legali-mascot",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-lawyer-payout-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/LawyerPayoutScreen.tsx"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-step-indicator",
      "legali-payout-summary",
      "legali-mascot",
      "legali-marketplace-types",
    ],
  },
  {
    name: "legali-lawyer-marketplace-flow",
    type: "registry:ui",
    files: ["components/ui/legali/screens/LawyerMarketplaceFlow.tsx"],
    dependencies: ["motion"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-marketplace-demo-content",
      "legali-marketplace-types",
      "legali-hook-use-lawyer-marketplace-flow",
      "legali-lawyer-dashboard-screen",
      "legali-lawyer-case-review-screen",
      "legali-lawyer-consultation-screen",
      "legali-lawyer-assessment-screen",
      "legali-lawyer-payout-screen",
    ],
  },

  // Landing Page Screen
  {
    name: "legali-landing-page",
    type: "registry:ui",
    files: ["components/ui/legali/screens/LandingPage.tsx"],
    registryDependencies: [
      "legali-lib-utils",
      "legali-floating-mascot",
      "legali-live-ticker",
      "legali-scroll-progress-indicator",
      "legali-landing-sections",
    ],
  },

  // Marketplace Data & Hooks
  {
    name: "legali-marketplace-types",
    type: "registry:lib",
    files: ["components/ui/legali/data/marketplace-types.ts"],
    registryDependencies: ["legali-mascot"],
  },
  {
    name: "legali-marketplace-demo-content",
    type: "registry:lib",
    files: ["components/ui/legali/data/marketplace-demo-content.ts"],
    registryDependencies: ["legali-mascot", "legali-marketplace-types"],
  },
  {
    name: "legali-hook-use-animations",
    type: "registry:hook",
    files: ["components/ui/legali/hooks/useAnimations.ts"],
  },
  {
    name: "legali-hook-use-marketplace-flow",
    type: "registry:hook",
    files: ["components/ui/legali/hooks/useMarketplaceFlow.ts"],
    registryDependencies: ["legali-marketplace-types"],
  },
  {
    name: "legali-hook-use-lawyer-marketplace-flow",
    type: "registry:hook",
    files: ["components/ui/legali/hooks/useLawyerMarketplaceFlow.ts"],
    registryDependencies: ["legali-marketplace-types", "legali-marketplace-demo-content"],
  },

  // Shared UI: dropdown-menu
  {
    name: "legali-dropdown-menu",
    type: "registry:ui",
    files: ["components/ui/legali/dropdown-menu.tsx"],
    dependencies: ["@radix-ui/react-dropdown-menu", "lucide-react"],
    registryDependencies: ["legali-lib-utils"],
  },

  // Mascot
  {
    name: "legali-mascot",
    type: "registry:ui",
    files: [
      "components/ui/legali/mascot/LegaliMascot.tsx",
      "components/ui/legali/mascot/index.ts",
      "components/ui/legali/mascot/RiveGuide.mdx",
    ],
    dependencies: ["@rive-app/react-canvas"],
  },

  // Data and barrel
  {
    name: "legali-demo-content",
    type: "registry:lib",
    files: ["components/ui/legali/data/legali-demo-content.ts"],
    registryDependencies: ["legali-quiz-screen"],
  },
  {
    name: "legali-kit",
    type: "registry:lib",
    files: ["components/ui/legali/index.ts"],
    registryDependencies: [
      // Education atomic
      "legali-answer",
      "legali-typing-text",
      "legali-glass-card",
      "legali-lesson-dot",
      "legali-progress-bar",
      "legali-stat-item",
      "legali-stat-row",
      "legali-status-bar",
      "legali-explanation-card",
      "legali-question-number-badge",
      "legali-setting-item",
      "legali-profile-stat-card",
      // Marketplace atomic
      "legali-spotlight-card",
      "legali-gradient-text",
      "legali-lawyer-avatar",
      "legali-step-indicator",
      "legali-chat-bubble",
      "legali-voice-input-button",
      "legali-chat-input",
      "legali-consultation-timer",
      "legali-matching-pulse",
      "legali-animated-counter",
      "legali-section-badge",
      "legali-contact-info-field",
      "legali-case-status-badge",
      "legali-ai-thinking-indicator",
      "legali-suggestion-chip",
      "legali-floating-particle",
      "legali-cursor-glow",
      "legali-gradient-mesh-background",
      "legali-tilt-card",
      // Education composite
      "legali-user-stats-bar",
      "legali-progress-section",
      "legali-module-card",
      "legali-mascot-hero-card",
      "legali-quiz-header",
      "legali-quiz-question",
      "legali-quiz-feedback",
      "legali-results-card",
      "legali-navigation-bar",
      // Marketplace composite
      "legali-animated-background",
      "legali-call-interface",
      "legali-case-assessment-card",
      "legali-case-understanding-card",
      "legali-chat-window",
      "legali-consultation-chat",
      "legali-consultation-receipt",
      "legali-contact-info-form",
      "legali-floating-mascot",
      "legali-intake-chat-panel",
      "legali-lawyer-profile-card",
      "legali-live-ticker",
      "legali-matching-animation",
      "legali-nav-dropdown",
      "legali-scroll-progress-indicator",
      "legali-floating-particles-system",
      "legali-interactive-stats-card",
      "legali-smart-suggestions-dropdown",
      "legali-case-request-card",
      "legali-case-review-panel",
      "legali-assessment-writing-form",
      "legali-payout-summary",
      // Landing sections
      "legali-landing-sections",
      // Education screens
      "legali-home-screen",
      "legali-quiz-screen",
      "legali-results-screen",
      "legali-review-screen",
      "legali-progress-screen",
      "legali-profile-screen",
      // Marketplace screens
      "legali-marketplace-intake-screen",
      "legali-marketplace-matching-screen",
      "legali-marketplace-consultation-screen",
      "legali-marketplace-receipt-screen",
      "legali-marketplace-flow",
      // Lawyer marketplace screens
      "legali-lawyer-dashboard-screen",
      "legali-lawyer-case-review-screen",
      "legali-lawyer-consultation-screen",
      "legali-lawyer-assessment-screen",
      "legali-lawyer-payout-screen",
      "legali-lawyer-marketplace-flow",
      // Landing page
      "legali-landing-page",
      // Data & hooks
      "legali-marketplace-types",
      "legali-marketplace-demo-content",
      "legali-demo-content",
      "legali-hook-use-animations",
      "legali-hook-use-marketplace-flow",
      "legali-hook-use-lawyer-marketplace-flow",
      // Mascot & shared UI
      "legali-mascot",
      "legali-dropdown-menu",
    ],
  },
];

async function rewriteContent(content) {
  return replacements.reduce((acc, rule) => acc.replace(rule.from, rule.to), content);
}

async function copyWithRewrite(srcRel, destRel) {
  const candidatePaths = [
    path.join(repoRoot, "src", srcRel),
    path.join(repoRoot, "src", srcRel.replace(/^components\/ui\/legali\//, "components/legali/")),
    path.join(repoRoot, "src", srcRel.replace(/^components\/ui\/legali\//, "components/")),
  ];

  const srcPath = await (async () => {
    for (const candidate of candidatePaths) {
      try {
        await fs.access(candidate);
        return candidate;
      } catch {
        // keep trying
      }
    }
    throw new Error(`Source not found for ${srcRel}`);
  })();

  const destPath = path.join(outDir, destRel);
  const raw = await fs.readFile(srcPath, "utf8");
  const rewritten = await rewriteContent(raw);
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  await fs.writeFile(destPath, rewritten, "utf8");
}

async function build() {
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  // Flatten all unique file paths we need to copy.
  const allPaths = new Set(files.flatMap((item) => item.files));
  for (const destRel of allPaths) {
    await copyWithRewrite(destRel, destRel);
  }

  // Generate registry index with embedded content.
  const items = [];
  for (const item of files) {
    const fileEntries = [];
    for (const file of item.files) {
      const absPath = path.join(outDir, file);
      const content = await fs.readFile(absPath, "utf8");
      fileEntries.push({
        path: file,
        content,
        type: item.type,
      });
    }
    items.push({
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      ...item,
      files: fileEntries,
    });
  }

  const index = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "@legali",
    homepage: "https://github.com/rryando/legali-ai-components",
    items,
  };

  await fs.writeFile(path.join(outDir, "index.json"), JSON.stringify(index, null, 2));
  await fs.writeFile(path.join(outDir, "registry.json"), JSON.stringify(index, null, 2));

  // Emit per-item files so CLI can consume a direct URL without a registry mapping.
  // Convert registryDependencies from names to full URLs for external resolution.
  const registryBaseUrl =
    "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry";
  for (const item of items) {
    // Convert local registryDependencies (legali-*) to full URLs
    const resolvedDeps = (item.registryDependencies || []).map((dep) => {
      if (dep.startsWith("legali-")) {
        return `${registryBaseUrl}/${dep}.json`;
      }
      return dep; // Keep shadcn core deps as-is (e.g., "button", "card")
    });

    const itemWithResolvedDeps = {
      ...item,
      registryDependencies: resolvedDeps.length > 0 ? resolvedDeps : undefined,
    };
    await fs.writeFile(
      path.join(outDir, `${item.name}.json`),
      JSON.stringify(itemWithResolvedDeps, null, 2)
    );
  }

  console.log(`✅ Registry built with ${items.length} items at ${outDir}`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
