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

| Bundle | Registry Name | Description |
|--------|--------------|-------------|
| **Full Kit** | `legali-kit` | Everything: education, marketplace, landing page, mascot |
| **User Marketplace** | `legali-marketplace-flow` | 4-step client flow: Intake → Matching → Consultation → Receipt |
| **Lawyer Marketplace** | `legali-lawyer-marketplace-flow` | 5-step lawyer flow: Dashboard → Case Review → Consultation → Assessment → Payout |
| **Landing Page** | `legali-landing-page` | Full landing page with hero, features, FAQ, CTA, testimonials |
| **Landing Sections** | `legali-landing-sections` | All 10 landing page section components |

### Individual Components

Install any single component by name:

```bash
REGISTRY_BASE="https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry"

# Atomic
npx shadcn@latest add "$REGISTRY_BASE/legali-spotlight-card.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-gradient-text.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-case-status-badge.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-step-indicator.json"

# Composite
npx shadcn@latest add "$REGISTRY_BASE/legali-consultation-chat.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-payout-summary.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-case-review-panel.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-nav-dropdown.json"

# Screens
npx shadcn@latest add "$REGISTRY_BASE/legali-lawyer-dashboard-screen.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-marketplace-intake-screen.json"

# Data & hooks
npx shadcn@latest add "$REGISTRY_BASE/legali-marketplace-types.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-marketplace-demo-content.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-hook-use-marketplace-flow.json"
npx shadcn@latest add "$REGISTRY_BASE/legali-hook-use-lawyer-marketplace-flow.json"
```

<details>
<summary><strong>Full Component Catalog (108 items)</strong></summary>

**Atomic (marketplace + landing)**

| Name | Description |
|------|-------------|
| `legali-spotlight-card` | Card with mouse-follow glow effect |
| `legali-gradient-text` | Branded gradient headings |
| `legali-lawyer-avatar` | Lawyer avatar with size/status variants |
| `legali-step-indicator` | Multi-step progress indicator |
| `legali-chat-bubble` | Chat message bubble (user/bot/lawyer) |
| `legali-chat-input` | Text input with voice button |
| `legali-consultation-timer` | Live consultation timer |
| `legali-matching-pulse` | Animated matching indicator |
| `legali-animated-counter` | Counter with animation |
| `legali-section-badge` | Section label badge |
| `legali-contact-info-field` | Validated contact field |
| `legali-case-status-badge` | Case status (new/pending/in_progress) |
| `legali-ai-thinking-indicator` | AI processing dots |
| `legali-suggestion-chip` | Clickable suggestion pill |
| `legali-floating-particle` | Decorative particle element |
| `legali-cursor-glow` | Mouse-follow glow effect |
| `legali-gradient-mesh-background` | Animated mesh gradient |
| `legali-tilt-card` | 3D tilt-on-hover card |
| `legali-voice-input-button` | Microphone toggle button |

**Composite (marketplace + landing)**

| Name | Description |
|------|-------------|
| `legali-animated-background` | Parallax animated background |
| `legali-call-interface` | Video/audio call UI |
| `legali-case-assessment-card` | AI-generated case assessment display |
| `legali-case-understanding-card` | Case summary with key facts |
| `legali-chat-window` | Scrolling chat message list |
| `legali-consultation-chat` | Full chat interface with timer |
| `legali-consultation-receipt` | Post-consultation receipt |
| `legali-contact-info-form` | Contact information form |
| `legali-floating-mascot` | Animated floating mascot |
| `legali-intake-chat-panel` | AI intake chat with suggestions |
| `legali-lawyer-profile-card` | Lawyer profile with rating/specialties |
| `legali-live-ticker` | Notification ticker |
| `legali-matching-animation` | Lawyer matching animation |
| `legali-nav-dropdown` | Navigation dropdown menu |
| `legali-scroll-progress-indicator` | Scroll progress bar |
| `legali-floating-particles-system` | Decorative floating particles |
| `legali-interactive-stats-card` | Animated stats display |
| `legali-smart-suggestions-dropdown` | AI suggestion dropdown |
| `legali-case-request-card` | Case request card (lawyer-side) |
| `legali-case-review-panel` | Case review panel (lawyer-side) |
| `legali-assessment-writing-form` | Assessment form (lawyer-side) |
| `legali-payout-summary` | Payout breakdown (lawyer-side) |

**Landing Page Sections**

| Name | Description |
|------|-------------|
| `legali-landing-hero` | Hero section with interactive demo |
| `legali-landing-header` | Navigation header with dropdowns |
| `legali-landing-footer` | Footer with links |
| `legali-cta-section` | Call-to-action section |
| `legali-faq-section` | Expandable FAQ section |
| `legali-features-section` | Feature grid |
| `legali-how-it-works-section` | Step-by-step explainer |
| `legali-problem-section` | Problem statement section |
| `legali-testimonials-section` | User testimonials |
| `legali-trust-logos` | Trust/partner logos |

**Screens**

| Name | Description |
|------|-------------|
| `legali-marketplace-intake-screen` | Client intake (user-side step 1) |
| `legali-marketplace-matching-screen` | Lawyer matching (user-side step 2) |
| `legali-marketplace-consultation-screen` | Consultation (user-side step 3) |
| `legali-marketplace-receipt-screen` | Receipt (user-side step 4) |
| `legali-marketplace-flow` | Complete user-side flow orchestrator |
| `legali-lawyer-dashboard-screen` | Case dashboard (lawyer-side step 1) |
| `legali-lawyer-case-review-screen` | Case review (lawyer-side step 2) |
| `legali-lawyer-consultation-screen` | Consultation (lawyer-side step 3) |
| `legali-lawyer-assessment-screen` | Assessment writing (lawyer-side step 4) |
| `legali-lawyer-payout-screen` | Payout summary (lawyer-side step 5) |
| `legali-lawyer-marketplace-flow` | Complete lawyer-side flow orchestrator |
| `legali-landing-page` | Full landing page screen |

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
