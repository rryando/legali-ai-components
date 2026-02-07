# Legali AI Components

A React component library for shadcn registry built with TypeScript, Tailwind CSS, and Storybook. Includes a two-sided legal marketplace (client + lawyer), a full landing page, and an education/quiz module.

## Features

- **Tailwind CSS** — Utility-first styling with shadcn/ui design system
- **Storybook** — Interactive component documentation and development
- **TypeScript** — Fully typed components with exported prop interfaces
- **Vite** — Lightning-fast build tool
- **shadcn Registry** — Install individual components or full feature bundles via `npx shadcn@latest add`

---

## Consumer Guide

### 1. Install Components

Point the shadcn CLI at this repo's raw registry URL:

```bash
# Install everything
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-kit.json"

# Or install specific feature bundles
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-flow.json"
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-marketplace-flow.json"
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-landing-page.json"
```

Dependencies are resolved automatically — installing a screen pulls in its composites, atomics, hooks, and types.

### 2. Install Peer Dependencies

Components require these npm packages (the CLI installs most automatically, but verify):

```bash
npm install motion lucide-react class-variance-authority clsx tailwind-merge @rive-app/react-canvas
```

### 3. Set Up CSS Variables

Add the required CSS custom properties to your global stylesheet. You can install the globals via registry:

```bash
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-style-globals.json"
```

Or manually add to your CSS:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap");

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --sidebar: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

### 4. Extend Tailwind Config

Merge these extensions into your `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slide-in-from-bottom": {
          from: { transform: "translateY(16px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(59,130,246,0.3)", boxShadow: "0 0 10px rgba(59,130,246,0.1)" },
          "50%": { borderColor: "rgba(59,130,246,0.6)", boxShadow: "0 0 20px rgba(59,130,246,0.2)" },
        },
      },
      animation: {
        "border-glow": "border-glow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-in forwards",
        "slide-in-from-bottom": "slide-in-from-bottom 0.4s ease-out forwards",
      },
    },
  },
};
```

### 5. Host the Mascot Animation

The `LegaliMascot` component uses a Rive animation file. Place `legali.riv` in your public directory:

```
public/animations/legali.riv
```

Or pass a custom path: `<LegaliMascot src="/my-path/legali.riv" />`

---

## Usage Examples

### User Marketplace Flow (self-contained)

The `MarketplaceFlow` component runs the full 4-step client journey with built-in demo data. No props required.

```tsx
import { MarketplaceFlow } from "@/components/ui/legali/screens/MarketplaceFlow";

export default function UserMarketplacePage() {
  return <MarketplaceFlow />;
}
```

**Steps:** Intake → Matching → Consultation → Receipt

### Lawyer Marketplace Flow (self-contained)

The `LawyerMarketplaceFlow` component runs the full 5-step lawyer journey with built-in demo data. No props required.

```tsx
import { LawyerMarketplaceFlow } from "@/components/ui/legali/screens/LawyerMarketplaceFlow";

export default function LawyerMarketplacePage() {
  return <LawyerMarketplaceFlow />;
}
```

**Steps:** Dashboard → Case Review → Consultation → Assessment → Payout

### Landing Page

The `LandingPage` renders a complete marketing page. All sections have sensible defaults; customize via `textConfig`.

```tsx
import { LandingPage } from "@/components/ui/legali/screens/LandingPage";

export default function Home() {
  return (
    <LandingPage
      onGetStarted={() => router.push("/signup")}
      onWatchDemo={() => router.push("/demo")}
      textConfig={{
        header: {
          ctaLabel: "Get Started",
          navigationItems: {
            solutions: [
              {
                label: "For Individuals",
                href: "/marketplace",
                description: "Find the right lawyer",
              },
              {
                label: "For Lawyers",
                href: "/lawyer",
                description: "Manage your practice",
              },
            ],
          },
        },
        hero: {
          headline: "Your custom headline",
          subtitle: "Your custom subtitle",
        },
      }}
    />
  );
}
```

### Building a Custom Flow with the Hook

Use the state machine hook to build your own UI on top of the marketplace logic:

```tsx
import { useMarketplaceFlow } from "@/components/ui/legali/hooks/useMarketplaceFlow";
import type { CaseDetails, Lawyer } from "@/components/ui/legali/data/marketplace-types";

function CustomMarketplace() {
  const {
    state,        // { currentStep, caseDetails, selectedLawyer, ... }
    stepIndex,    // 0-3
    nextStep,     // advance to next step
    goToStep,     // jump to specific step
    setCaseDetails,
    setSelectedLawyer,
    reset,
  } = useMarketplaceFlow();

  return (
    <div>
      <p>Current step: {state.currentStep} ({stepIndex + 1}/4)</p>
      <button onClick={nextStep}>Next</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

The lawyer-side hook works the same way:

```tsx
import { useLawyerMarketplaceFlow } from "@/components/ui/legali/hooks/useLawyerMarketplaceFlow";
import { demoCaseRequests } from "@/components/ui/legali/data/marketplace-demo-content";

function CustomLawyerDashboard() {
  const {
    state,        // { currentStep, caseRequests, selectedCase, ... }
    stepIndex,    // 0-4
    nextStep,
    selectCase,
    setAssessment,
    setPayout,
    reset,
  } = useLawyerMarketplaceFlow(demoCaseRequests);

  // ...
}
```

### Individual Screen Components

Each screen can be used standalone with your own data:

```tsx
import { LawyerDashboardScreen } from "@/components/ui/legali/screens/LawyerDashboardScreen";
import type { Lawyer, CaseRequest } from "@/components/ui/legali/data/marketplace-types";

function MyDashboard({ lawyer, cases }: { lawyer: Lawyer; cases: CaseRequest[] }) {
  return (
    <LawyerDashboardScreen
      lawyer={lawyer}
      caseRequests={cases}
      onSelectCase={(c) => router.push(`/cases/${c.id}`)}
    />
  );
}
```

```tsx
import { LawyerCaseReviewScreen } from "@/components/ui/legali/screens/LawyerCaseReviewScreen";

<LawyerCaseReviewScreen
  caseRequest={selectedCase}
  onAccept={() => handleAccept()}
  onDecline={() => handleDecline()}
  onRefer={() => handleRefer()}
/>
```

```tsx
import { MarketplaceReceiptScreen } from "@/components/ui/legali/screens/MarketplaceReceiptScreen";

<MarketplaceReceiptScreen
  receipt={receiptData}
  onReturnHome={() => router.push("/")}
/>
```

### Composite Components

Use composites to build custom layouts:

```tsx
import { ConsultationChat } from "@/components/ui/legali/composite/ConsultationChat";
import type { ChatMessage, Lawyer } from "@/components/ui/legali/data/marketplace-types";

function MyChat({ lawyer, messages }: { lawyer: Lawyer; messages: ChatMessage[] }) {
  return (
    <ConsultationChat
      lawyer={lawyer}
      messages={messages}
      onSendMessage={(text) => sendMessage(text)}
      activeMode="text"
    />
  );
}
```

```tsx
import { CaseReviewPanel } from "@/components/ui/legali/composite/CaseReviewPanel";

<CaseReviewPanel
  caseRequest={caseRequest}
  onAccept={() => acceptCase(caseRequest.id)}
  onDecline={() => declineCase(caseRequest.id)}
  onRefer={() => referCase(caseRequest.id)}
/>
```

```tsx
import { PayoutSummary } from "@/components/ui/legali/composite/PayoutSummary";

<PayoutSummary
  payout={payoutData}
  onDownload={() => downloadInvoice()}
  onReturnHome={() => router.push("/dashboard")}
/>
```

```tsx
import { LawyerProfileCard } from "@/components/ui/legali/composite/LawyerProfileCard";

<LawyerProfileCard
  lawyer={lawyerData}
  onStartConsultation={() => startConsultation(lawyerData.id)}
/>
```

### Atomic Components

```tsx
import { SpotlightCard } from "@/components/ui/legali/atomic/SpotlightCard";

<SpotlightCard spotlightColor="rgba(78, 174, 208, 0.15)">
  <h3>Card content</h3>
</SpotlightCard>
```

```tsx
import { CaseStatusBadge } from "@/components/ui/legali/atomic/CaseStatusBadge";

<CaseStatusBadge status="new" />       {/* cyan + pulse dot */}
<CaseStatusBadge status="pending" />   {/* amber */}
<CaseStatusBadge status="in_progress" /> {/* green */}
```

```tsx
import { GradientText } from "@/components/ui/legali/atomic/GradientText";

<GradientText variant="primary">Branded heading</GradientText>
```

```tsx
import { StepIndicator } from "@/components/ui/legali/atomic/StepIndicator";

<StepIndicator
  steps={[
    { label: "Intake", status: "completed" },
    { label: "Matching", status: "active" },
    { label: "Consultation", status: "upcoming" },
    { label: "Receipt", status: "upcoming" },
  ]}
/>
```

### Mascot

```tsx
import { LegaliMascot, MascotMotion } from "@/components/ui/legali/mascot";

<LegaliMascot
  motion={MascotMotion.WAVING}
  width={200}
  height={200}
  speechText="Hello! How can I help?"
  speechBubblePosition="top-right"
/>
```

Available motions: `EXIT`, `NORMAL`, `LAPTOP`, `WRITING`, `IDLE`, `THINKING`, `CRYING`, `SPEAKING`, `CONFUSED`, `WAVING`, `SHRUG`, `CELEBRATE`, `SCHEDULED`, `IDEA`, `READING`, `THROPHY`, `THUMBSUP`

### Using Demo Data for Prototyping

The library ships demo data that's ready to use:

```tsx
import {
  demoLawyers,
  demoCaseRequests,
  demoCaseDetails,
  demoCaseAssessment,
  demoPayout,
  demoReceipt,
  consultationScript,
  lawyerConsultationScript,
  assessmentWritingScript,
  intakeChatScript,
} from "@/components/ui/legali/data/marketplace-demo-content";

// Use in any component
<LawyerDashboardScreen lawyer={demoLawyers[0]} caseRequests={demoCaseRequests} />
<PayoutSummary payout={demoPayout} />
```

---

## Key Types Reference

```typescript
interface Lawyer {
  id: string;
  name: string;
  avatar: string;
  title: string;
  firm: string;
  specializations: string[];
  rating: number;
  reviewCount: number;
  consultationFee: number;
  bio: string;
  isVerified: boolean;
  isOnline: boolean;
}

interface CaseDetails {
  category: string;
  summary: string;
  keyFacts: string[];
  complexity: "low" | "medium" | "high";
  urgency: "low" | "normal" | "urgent";
  recommendedSpecialization: string;
  attachments: ChatAttachment[];
  contactInfo: ContactInfo;
}

interface CaseRequest {
  id: string;
  clientName: string;
  caseDetails: CaseDetails;
  status: "new" | "pending" | "in_progress";
  submittedAt: Date;
  platformFee: number;
}

interface CaseAssessment {
  summary: string;
  strengths: string[];
  concerns: string[];
  recommendedSteps: string[];
  timeline: string;
  costRange: string;
  decision: "accepted" | "declined" | "referred";
}

interface PayoutData {
  lawyer: Lawyer;
  caseDetails: CaseDetails;
  assessment: CaseAssessment;
  duration: number;
  lineItems: PayoutLineItem[];
  grossAmount: number;
  deductions: number;
  netPayout: number;
  nextSteps: string[];
  referenceNumber: string;
  payoutDate: string;
}

interface ReceiptData {
  lawyer: Lawyer;
  caseDetails: CaseDetails;
  assessment: CaseAssessment;
  duration: number;
  lineItems: ReceiptLineItem[];
  total: number;
  nextSteps: string[];
  referenceNumber: string;
}

interface ChatMessage {
  id: string;
  sender: "user" | "ai" | "lawyer" | "system";
  text: string;
  timestamp: Date;
  attachments?: ChatAttachment[];
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
```

---

## Available Bundles

| Bundle | Install | Description |
|--------|---------|-------------|
| **Full Kit** | `npx shadcn@latest add "REGISTRY/legali-kit.json"` | Everything: education, marketplace, landing page, mascot |
| **User Marketplace** | `npx shadcn@latest add "REGISTRY/legali-marketplace-flow.json"` | 4-step client flow: Intake → Matching → Consultation → Receipt |
| **Lawyer Marketplace** | `npx shadcn@latest add "REGISTRY/legali-lawyer-marketplace-flow.json"` | 5-step lawyer flow: Dashboard → Case Review → Consultation → Assessment → Payout |
| **Landing Page** | `npx shadcn@latest add "REGISTRY/legali-landing-page.json"` | Full landing page with hero, features, FAQ, CTA, testimonials |
| **Landing Sections** | `npx shadcn@latest add "REGISTRY/legali-landing-sections.json"` | All 10 landing page section components |

> `REGISTRY` = `https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry`

### Individual Components

Install any single component — dependencies are resolved automatically:

```bash
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/<name>.json"
```

<details>
<summary><strong>Full Component Catalog (108 items)</strong></summary>

#### Core Utilities

| Name | Install | Description |
|------|---------|-------------|
| `legali-lib-utils` | `npx shadcn@latest add "REGISTRY/legali-lib-utils.json"` | Core `cn()` utility (clsx + tailwind-merge) |
| `legali-style-globals` | `npx shadcn@latest add "REGISTRY/legali-style-globals.json"` | Global CSS custom properties and fonts |
| `legali-hook-use-mobile` | `npx shadcn@latest add "REGISTRY/legali-hook-use-mobile.json"` | Mobile viewport detection hook |

#### Shared UI

| Name | Install | Description |
|------|---------|-------------|
| `legali-button` | `npx shadcn@latest add "REGISTRY/legali-button.json"` | Button with CVA variants |
| `legali-avatar` | `npx shadcn@latest add "REGISTRY/legali-avatar.json"` | Avatar component (Radix) |
| `legali-badge` | `npx shadcn@latest add "REGISTRY/legali-badge.json"` | Badge with CVA variants |
| `legali-switch` | `npx shadcn@latest add "REGISTRY/legali-switch.json"` | Toggle switch (Radix) |
| `legali-chart` | `npx shadcn@latest add "REGISTRY/legali-chart.json"` | Chart component (recharts) |
| `legali-dropdown-menu` | `npx shadcn@latest add "REGISTRY/legali-dropdown-menu.json"` | Dropdown menu (Radix) |

#### Atomic — Education

| Name | Install | Description |
|------|---------|-------------|
| `legali-answer` | `npx shadcn@latest add "REGISTRY/legali-answer.json"` | Quiz answer option with correct/incorrect states |
| `legali-glass-card` | `npx shadcn@latest add "REGISTRY/legali-glass-card.json"` | Glassmorphism card with blur backdrop |
| `legali-typing-text` | `npx shadcn@latest add "REGISTRY/legali-typing-text.json"` | Typewriter text animation |
| `legali-lesson-dot` | `npx shadcn@latest add "REGISTRY/legali-lesson-dot.json"` | Lesson completion indicator dot |
| `legali-progress-bar` | `npx shadcn@latest add "REGISTRY/legali-progress-bar.json"` | Animated progress bar |
| `legali-stat-item` | `npx shadcn@latest add "REGISTRY/legali-stat-item.json"` | Stat display with icon and label |
| `legali-stat-row` | `npx shadcn@latest add "REGISTRY/legali-stat-row.json"` | Horizontal stat row |
| `legali-status-bar` | `npx shadcn@latest add "REGISTRY/legali-status-bar.json"` | Top status bar with level/XP |
| `legali-explanation-card` | `npx shadcn@latest add "REGISTRY/legali-explanation-card.json"` | Quiz answer explanation card |
| `legali-question-number-badge` | `npx shadcn@latest add "REGISTRY/legali-question-number-badge.json"` | Question number indicator |
| `legali-setting-item` | `npx shadcn@latest add "REGISTRY/legali-setting-item.json"` | Settings row with switch toggle |
| `legali-profile-stat-card` | `npx shadcn@latest add "REGISTRY/legali-profile-stat-card.json"` | Profile statistics card |

#### Atomic — Marketplace & Landing

| Name | Install | Description |
|------|---------|-------------|
| `legali-spotlight-card` | `npx shadcn@latest add "REGISTRY/legali-spotlight-card.json"` | Card with mouse-follow glow effect |
| `legali-gradient-text` | `npx shadcn@latest add "REGISTRY/legali-gradient-text.json"` | Branded gradient headings |
| `legali-lawyer-avatar` | `npx shadcn@latest add "REGISTRY/legali-lawyer-avatar.json"` | Lawyer avatar with size/status variants |
| `legali-step-indicator` | `npx shadcn@latest add "REGISTRY/legali-step-indicator.json"` | Multi-step progress indicator |
| `legali-chat-bubble` | `npx shadcn@latest add "REGISTRY/legali-chat-bubble.json"` | Chat message bubble (user/bot/lawyer) |
| `legali-chat-input` | `npx shadcn@latest add "REGISTRY/legali-chat-input.json"` | Text input with voice button |
| `legali-consultation-timer` | `npx shadcn@latest add "REGISTRY/legali-consultation-timer.json"` | Live consultation timer |
| `legali-matching-pulse` | `npx shadcn@latest add "REGISTRY/legali-matching-pulse.json"` | Animated matching indicator |
| `legali-animated-counter` | `npx shadcn@latest add "REGISTRY/legali-animated-counter.json"` | Counter with animation |
| `legali-section-badge` | `npx shadcn@latest add "REGISTRY/legali-section-badge.json"` | Section label badge |
| `legali-contact-info-field` | `npx shadcn@latest add "REGISTRY/legali-contact-info-field.json"` | Validated contact field |
| `legali-case-status-badge` | `npx shadcn@latest add "REGISTRY/legali-case-status-badge.json"` | Case status badge (new/pending/in_progress) |
| `legali-ai-thinking-indicator` | `npx shadcn@latest add "REGISTRY/legali-ai-thinking-indicator.json"` | AI processing dots animation |
| `legali-suggestion-chip` | `npx shadcn@latest add "REGISTRY/legali-suggestion-chip.json"` | Clickable suggestion pill |
| `legali-floating-particle` | `npx shadcn@latest add "REGISTRY/legali-floating-particle.json"` | Decorative particle element |
| `legali-cursor-glow` | `npx shadcn@latest add "REGISTRY/legali-cursor-glow.json"` | Mouse-follow glow effect |
| `legali-gradient-mesh-background` | `npx shadcn@latest add "REGISTRY/legali-gradient-mesh-background.json"` | Animated mesh gradient |
| `legali-tilt-card` | `npx shadcn@latest add "REGISTRY/legali-tilt-card.json"` | 3D tilt-on-hover card |
| `legali-voice-input-button` | `npx shadcn@latest add "REGISTRY/legali-voice-input-button.json"` | Microphone toggle button |

#### Composite — Education

| Name | Install | Description |
|------|---------|-------------|
| `legali-module-card` | `npx shadcn@latest add "REGISTRY/legali-module-card.json"` | Learning module card with lesson dots |
| `legali-mascot-hero-card` | `npx shadcn@latest add "REGISTRY/legali-mascot-hero-card.json"` | Hero card with mascot and typing text |
| `legali-navigation-bar` | `npx shadcn@latest add "REGISTRY/legali-navigation-bar.json"` | Bottom navigation bar |
| `legali-progress-section` | `npx shadcn@latest add "REGISTRY/legali-progress-section.json"` | Progress overview section |
| `legali-quiz-feedback` | `npx shadcn@latest add "REGISTRY/legali-quiz-feedback.json"` | Quiz correct/incorrect feedback |
| `legali-quiz-header` | `npx shadcn@latest add "REGISTRY/legali-quiz-header.json"` | Quiz progress header bar |
| `legali-quiz-question` | `npx shadcn@latest add "REGISTRY/legali-quiz-question.json"` | Quiz question display |
| `legali-results-card` | `npx shadcn@latest add "REGISTRY/legali-results-card.json"` | Quiz results summary card |
| `legali-user-stats-bar` | `npx shadcn@latest add "REGISTRY/legali-user-stats-bar.json"` | User stats bar (streak, XP, gems) |

#### Composite — Marketplace & Landing

| Name | Install | Description |
|------|---------|-------------|
| `legali-animated-background` | `npx shadcn@latest add "REGISTRY/legali-animated-background.json"` | Parallax animated background |
| `legali-call-interface` | `npx shadcn@latest add "REGISTRY/legali-call-interface.json"` | Video/audio call UI |
| `legali-case-assessment-card` | `npx shadcn@latest add "REGISTRY/legali-case-assessment-card.json"` | AI-generated case assessment display |
| `legali-case-understanding-card` | `npx shadcn@latest add "REGISTRY/legali-case-understanding-card.json"` | Case summary with key facts |
| `legali-chat-window` | `npx shadcn@latest add "REGISTRY/legali-chat-window.json"` | Scrolling chat message list |
| `legali-consultation-chat` | `npx shadcn@latest add "REGISTRY/legali-consultation-chat.json"` | Full chat interface with timer |
| `legali-consultation-receipt` | `npx shadcn@latest add "REGISTRY/legali-consultation-receipt.json"` | Post-consultation receipt |
| `legali-contact-info-form` | `npx shadcn@latest add "REGISTRY/legali-contact-info-form.json"` | Contact information form |
| `legali-floating-mascot` | `npx shadcn@latest add "REGISTRY/legali-floating-mascot.json"` | Animated floating mascot |
| `legali-intake-chat-panel` | `npx shadcn@latest add "REGISTRY/legali-intake-chat-panel.json"` | AI intake chat with suggestions |
| `legali-lawyer-profile-card` | `npx shadcn@latest add "REGISTRY/legali-lawyer-profile-card.json"` | Lawyer profile with rating/specialties |
| `legali-live-ticker` | `npx shadcn@latest add "REGISTRY/legali-live-ticker.json"` | Notification ticker |
| `legali-matching-animation` | `npx shadcn@latest add "REGISTRY/legali-matching-animation.json"` | Lawyer matching animation |
| `legali-nav-dropdown` | `npx shadcn@latest add "REGISTRY/legali-nav-dropdown.json"` | Navigation dropdown menu |
| `legali-scroll-progress-indicator` | `npx shadcn@latest add "REGISTRY/legali-scroll-progress-indicator.json"` | Scroll progress bar |
| `legali-floating-particles-system` | `npx shadcn@latest add "REGISTRY/legali-floating-particles-system.json"` | Decorative floating particles |
| `legali-interactive-stats-card` | `npx shadcn@latest add "REGISTRY/legali-interactive-stats-card.json"` | Animated stats display |
| `legali-smart-suggestions-dropdown` | `npx shadcn@latest add "REGISTRY/legali-smart-suggestions-dropdown.json"` | AI suggestion dropdown |
| `legali-case-request-card` | `npx shadcn@latest add "REGISTRY/legali-case-request-card.json"` | Case request card (lawyer-side) |
| `legali-case-review-panel` | `npx shadcn@latest add "REGISTRY/legali-case-review-panel.json"` | Case review panel (lawyer-side) |
| `legali-assessment-writing-form` | `npx shadcn@latest add "REGISTRY/legali-assessment-writing-form.json"` | Assessment form (lawyer-side) |
| `legali-payout-summary` | `npx shadcn@latest add "REGISTRY/legali-payout-summary.json"` | Payout breakdown (lawyer-side) |

#### Landing Page Sections

| Name | Install | Description |
|------|---------|-------------|
| `legali-landing-hero` | `npx shadcn@latest add "REGISTRY/legali-landing-hero.json"` | Hero section with interactive demo |
| `legali-landing-header` | `npx shadcn@latest add "REGISTRY/legali-landing-header.json"` | Navigation header with dropdowns |
| `legali-landing-footer` | `npx shadcn@latest add "REGISTRY/legali-landing-footer.json"` | Footer with links |
| `legali-cta-section` | `npx shadcn@latest add "REGISTRY/legali-cta-section.json"` | Call-to-action section |
| `legali-faq-section` | `npx shadcn@latest add "REGISTRY/legali-faq-section.json"` | Expandable FAQ section |
| `legali-features-section` | `npx shadcn@latest add "REGISTRY/legali-features-section.json"` | Feature grid |
| `legali-how-it-works-section` | `npx shadcn@latest add "REGISTRY/legali-how-it-works-section.json"` | Step-by-step explainer |
| `legali-problem-section` | `npx shadcn@latest add "REGISTRY/legali-problem-section.json"` | Problem statement section |
| `legali-testimonials-section` | `npx shadcn@latest add "REGISTRY/legali-testimonials-section.json"` | User testimonials |
| `legali-trust-logos` | `npx shadcn@latest add "REGISTRY/legali-trust-logos.json"` | Trust/partner logos |
| `legali-landing-sections` | `npx shadcn@latest add "REGISTRY/legali-landing-sections.json"` | All landing sections barrel export |

#### Screens — Education

| Name | Install | Description |
|------|---------|-------------|
| `legali-home-screen` | `npx shadcn@latest add "REGISTRY/legali-home-screen.json"` | Education home with modules and mascot |
| `legali-quiz-screen` | `npx shadcn@latest add "REGISTRY/legali-quiz-screen.json"` | Interactive quiz with answer feedback |
| `legali-review-screen` | `npx shadcn@latest add "REGISTRY/legali-review-screen.json"` | Quiz answer review with explanations |
| `legali-results-screen` | `npx shadcn@latest add "REGISTRY/legali-results-screen.json"` | Quiz results summary |
| `legali-progress-screen` | `npx shadcn@latest add "REGISTRY/legali-progress-screen.json"` | Learning progress with charts |
| `legali-profile-screen` | `npx shadcn@latest add "REGISTRY/legali-profile-screen.json"` | User profile with stats and settings |

#### Screens — User Marketplace

| Name | Install | Description |
|------|---------|-------------|
| `legali-marketplace-intake-screen` | `npx shadcn@latest add "REGISTRY/legali-marketplace-intake-screen.json"` | Client intake (step 1) |
| `legali-marketplace-matching-screen` | `npx shadcn@latest add "REGISTRY/legali-marketplace-matching-screen.json"` | Lawyer matching (step 2) |
| `legali-marketplace-consultation-screen` | `npx shadcn@latest add "REGISTRY/legali-marketplace-consultation-screen.json"` | Consultation (step 3) |
| `legali-marketplace-receipt-screen` | `npx shadcn@latest add "REGISTRY/legali-marketplace-receipt-screen.json"` | Receipt (step 4) |
| `legali-marketplace-flow` | `npx shadcn@latest add "REGISTRY/legali-marketplace-flow.json"` | Complete user-side flow orchestrator |

#### Screens — Lawyer Marketplace

| Name | Install | Description |
|------|---------|-------------|
| `legali-lawyer-dashboard-screen` | `npx shadcn@latest add "REGISTRY/legali-lawyer-dashboard-screen.json"` | Case dashboard (step 1) |
| `legali-lawyer-case-review-screen` | `npx shadcn@latest add "REGISTRY/legali-lawyer-case-review-screen.json"` | Case review (step 2) |
| `legali-lawyer-consultation-screen` | `npx shadcn@latest add "REGISTRY/legali-lawyer-consultation-screen.json"` | Consultation (step 3) |
| `legali-lawyer-assessment-screen` | `npx shadcn@latest add "REGISTRY/legali-lawyer-assessment-screen.json"` | Assessment writing (step 4) |
| `legali-lawyer-payout-screen` | `npx shadcn@latest add "REGISTRY/legali-lawyer-payout-screen.json"` | Payout summary (step 5) |
| `legali-lawyer-marketplace-flow` | `npx shadcn@latest add "REGISTRY/legali-lawyer-marketplace-flow.json"` | Complete lawyer-side flow orchestrator |

#### Landing Screen

| Name | Install | Description |
|------|---------|-------------|
| `legali-landing-page` | `npx shadcn@latest add "REGISTRY/legali-landing-page.json"` | Full landing page screen |

#### Mascot

| Name | Install | Description |
|------|---------|-------------|
| `legali-mascot` | `npx shadcn@latest add "REGISTRY/legali-mascot.json"` | Rive-based animated mascot with speech bubble |

#### Data & Hooks

| Name | Install | Description |
|------|---------|-------------|
| `legali-marketplace-types` | `npx shadcn@latest add "REGISTRY/legali-marketplace-types.json"` | TypeScript types (Lawyer, CaseDetails, etc.) |
| `legali-marketplace-demo-content` | `npx shadcn@latest add "REGISTRY/legali-marketplace-demo-content.json"` | Demo data for prototyping |
| `legali-demo-content` | `npx shadcn@latest add "REGISTRY/legali-demo-content.json"` | Education module demo data |
| `legali-hook-use-animations` | `npx shadcn@latest add "REGISTRY/legali-hook-use-animations.json"` | Scroll/intersection animation hook |
| `legali-hook-use-marketplace-flow` | `npx shadcn@latest add "REGISTRY/legali-hook-use-marketplace-flow.json"` | User marketplace state machine |
| `legali-hook-use-lawyer-marketplace-flow` | `npx shadcn@latest add "REGISTRY/legali-hook-use-lawyer-marketplace-flow.json"` | Lawyer marketplace state machine |

#### Meta Bundle

| Name | Install | Description |
|------|---------|-------------|
| `legali-kit` | `npx shadcn@latest add "REGISTRY/legali-kit.json"` | Full kit — installs all 108 components |

> All `REGISTRY` URLs above expand to `https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry`

</details>

### Building the Registry

```bash
pnpm build:registry   # Generates registry/ from source
```

This reads `scripts/build-legali-registry.mjs`, rewrites import paths for consumer projects (`@/components/legali` → `@/components/ui/legali`), and emits per-item JSON files plus a combined `registry.json`.

---

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
pnpm install
```

### Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | Build library (TypeScript + Vite) |
| `pnpm storybook` | Start Storybook at localhost:6006 |
| `pnpm build:storybook` | Build Storybook for deployment |
| `pnpm build:registry` | Generate shadcn registry JSON files |

### Project Structure

```
src/components/legali/
├── atomic/       # Primitive components (SpotlightCard, GradientText, CaseStatusBadge, ...)
├── composite/    # Composed components (ConsultationChat, PayoutSummary, CaseReviewPanel, ...)
├── screens/      # Full-page views (MarketplaceFlow, LawyerMarketplaceFlow, LandingPage, ...)
├── landing/      # Landing page sections (LandingHero, FeaturesSection, FAQSection, ...)
├── mascot/       # Rive-based mascot animation
├── hooks/        # useMarketplaceFlow, useLawyerMarketplaceFlow, useAnimations
└── data/         # Types and demo content
```

## License

MIT
