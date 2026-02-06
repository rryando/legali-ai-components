# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React component library for Legali AI, built as a shadcn-compatible registry. Components follow atomic design patterns (atomic → composite → screens).

## Commands

```bash
pnpm dev              # Start Vite dev server
pnpm build            # Build library (TypeScript check + Vite build)
pnpm storybook        # Start Storybook on port 6006
pnpm build:storybook  # Build Storybook for deployment
pnpm build:registry   # Generate shadcn registry JSON files
pnpm dlx ultracite fix   # Auto-format code
pnpm dlx ultracite check # Check code quality
```

## Architecture

```
src/components/legali/
├── atomic/      # 24 primitive components (AnimatedCounter, GlassCard, TypingText, etc.)
├── composite/   # 18 composed components (FloatingMascot, QuizQuestion, NavigationBar, etc.)
├── screens/     # Full-page views (HomeScreen, QuizScreen, ProfileScreen, LandingPage, etc.)
├── landing/     # Landing page sections (LandingHero, FeaturesSection, FAQSection, etc.)
├── mascot/      # Mascot animation components
├── hooks/       # Custom React hooks
└── data/        # Demo content and data
```

**Key files:**
- `src/index.ts` - Main export barrel
- `src/lib/utils.ts` - `cn()` utility (clsx + twMerge)
- `src/components/legali/index.ts` - Legali component exports

## Tech Stack

- **React 19** with TypeScript 5.9 (strict mode)
- **Vite** for building
- **Tailwind CSS** with CSS custom properties for theming
- **shadcn/ui** components (Radix UI primitives)
- **Motion** for animations
- **CVA** (class-variance-authority) for component variants
- **Storybook** for component documentation

## Code Standards (Ultracite/Biome)

Code is auto-formatted on save and pre-commit via Ultracite (Biome preset).

**Key conventions:**
- Use `@/` path alias for all imports (not relative paths)
- Function components only, hooks at top level
- Explicit types for function parameters and return values
- Prefer `unknown` over `any`
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Early returns for error handling
- `const` by default, `let` when needed, never `var`

**Component pattern:**
```tsx
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva("base-classes", {
  variants: { /* ... */ },
  defaultVariants: { /* ... */ }
})

type ComponentProps = React.ComponentProps<"div"> & VariantProps<typeof componentVariants>

function Component({ className, variant, ...props }: ComponentProps) {
  return <div className={cn(componentVariants({ variant }), className)} {...props} />
}

export { Component, type ComponentProps }
```

**React 19 notes:**
- Use ref as prop directly (no `forwardRef` needed)
- Use `key` prop with unique IDs (not array indices)

## Styling

- Tailwind CSS with extended theme (custom keyframes, sidebar colors)
- Use `cn()` utility to merge Tailwind classes
- Theme colors use CSS custom properties in HSL format
- Animation keyframes defined in `tailwind.config.ts`
