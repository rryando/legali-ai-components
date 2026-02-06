# Project Context: legali-ai-components

Initialized: 2025-12-30

## Project Identity
- **Name**: legali-ai-components
- **Type**: React Component Library (Shadcn Registry Compatible)
- **Description**: A high-quality React component library designed for the Legali ecosystem, following Shadcn/UI patterns and registry distribution.

## Tech Stack
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Documentation**: Storybook 8
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion (Motion), Rive (@rive-app/react-canvas)
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Code Editing**: CodeMirror 6 (@uiw/react-codemirror)
- **Validation**: Zod, React Hook Form
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Architecture & Code Organization
- **Pattern**: Modular component library with a focus on registry distribution.
- **Directories**:
  - `src/components/legali/atomic`: Low-level base components (e.g., `AIThinkingIndicator`, `GlassCard`).
  - `src/components/legali/composite`: More complex components built from atomic pieces.
  - `src/components/legali/screens`: Full-screen layouts/components.
  - `src/components/legali/mascot`: Rive-based mascot components.
  - `src/lib`: Core utilities (e.g., `utils.ts` with `cn` helper).
  - `registry`: Output directory for the registry build process.
  - `scripts`: Custom scripts (e.g., `build-legali-registry.mjs`).

## Coding Conventions
- **Language**: TypeScript (Strict mode)
- **Component Pattern**: 
  - Functional components using `forwardRef`.
  - Props defined as types, often extending `HTMLAttributes`.
  - Use of `cn` utility for all class name merging.
- **Styling**: Utility-first CSS using Tailwind. Shared variants defined with `class-variance-authority`.
- **Formatting/Linting**: Biome (via `ultracite` preset).
- **Naming**: PascalCase for components, camelCase for variables/functions.

## Distribution & Build
- **Registry**: The project uses a custom script `scripts/build-legali-registry.mjs` to transform source code into a shadcn-compatible registry format.
- **Paths**: The registry build process rewrites `@/components/legali` to `@/components/ui/legali` for consumers.
- **Husky**: Pre-commit hooks via Husky and `lint-staged` run `ultracite fix`.

## Testing & Quality
- **Storybook**: Extensive story coverage for all components in `src/components/stories/`.
- **Linting**: Biome checks enforced on commit.

## Development Workflow
1. Develop components in `src/components/legali`.
2. Create stories in `src/components/stories` for verification.
3. Run `pnpm dev` for Vite or `pnpm storybook` for Storybook.
4. Run `pnpm build:registry` to generate the registry files.
