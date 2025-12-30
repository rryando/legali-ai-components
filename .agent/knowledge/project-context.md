# Project Context: legali-ai-components

## Overview
- **Name**: legali-ai-components
- **Description**: A specialized React component library designed for the shadcn registry, focusing on legal tech UI/UX with high-fidelity animations and interactive elements.
- **Type**: UI Component Library
- **Primary Language**: TypeScript
- **Runtime**: Node.js / Bun (CI uses Bun, local development uses pnpm)
- **Initialized**: 2025-12-30

## Tech Stack
- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS (utility-first), PostCSS
- **UI Components**: Radix UI (primitives), Lucide React (icons), CMDK (command menu)
- **Animations**: Framer Motion (`motion`), Rive (@rive-app/react-canvas)
- **Editor**: CodeMirror (@uiw/react-codemirror)
- **Data Fetching/State**: React Hook Form, Zod (schema validation), Recharts (charts)
- **Build Tools**: Vite, Storybook 8, TypeScript 5
- **Registry System**: Custom shadcn-compatible registry generator (`scripts/build-legali-registry.mjs`)

## Code Organization
- `src/components/`: Base UI components (standard shadcn-style).
- `src/components/legali/`: Specialized domain-specific components for the Legali platform.
    - `atomic/`: Low-level building blocks (Badges, Cards, Indicators).
    - `composite/`: Mid-level components (Mascot cards, Stats sections).
    - `screens/`: High-level page-level components (HomeScreen, QuizScreen, etc.).
    - `hooks/`: Custom hooks for animations and UI interactions.
- `src/lib/`: Global utilities (e.g., `utils.ts` for Tailwind class merging).
- `src/styles/`: Global CSS (`globals.css`) and Tailwind definitions.
- `src/stories/`: Documentation and component showcases.
- `scripts/`: Build and registry generation scripts.
- `public/`: Static assets including Rive animations and branding logos.

## Coding Conventions
- **Linter/Formatter**: Biome with the `ultracite` preset (Zero-config, high-performance).
- **Style**: Functional components with hooks. Tailwind CSS for all styling.
- **Imports**: Uses `@/*` as an absolute alias for the `./src/` directory.
- **Exports**: Barrel exports in `src/index.ts` and `src/components/legali/index.ts`.
- **Registry Integration**: Components must be added to the `files` array in `scripts/build-legali-registry.mjs` to be included in the distributed shadcn registry.

## Testing & Quality Assurance
- **CI**: GitHub Actions (`ci.yml`) executes linting (via Ultracite), type checking, and library build on every push to `main` or `feature/*`.
- **Husky**: Pre-commit hooks run `lint-staged` which executes `ultracite fix` for automatic code quality enforcement.
- **Storybook**: Serves as the primary manual testing and documentation environment.

## Project Structure (Key Files)
- `package.json`: Project manifest and pnpm/bun scripts.
- `biome.jsonc`: Biome configuration extending Ultracite.
- `tailwind.config.ts`: Project-wide Tailwind theme and plugin setup.
- `tsconfig.json`: Strict TypeScript configuration.
- `vite.config.ts`: Vite setup for library mode and Storybook integration.
