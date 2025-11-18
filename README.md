# Legali AI Components

A React component library for shadcn registry built with TypeScript, Tailwind CSS, and Storybook.

## Features

- 🎨 **Tailwind CSS** - Utility-first styling with shadcn/ui design system
- 📚 **Storybook** - Interactive component documentation and development
- 🔧 **TypeScript** - Type-safe component development
- ⚡ **Vite** - Lightning-fast build tool
- 📦 **shadcn Registry** - Compatible with shadcn/ui component registry

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Installation

```bash
pnpm install
```

### Development

Start Storybook for component development:

```bash
pnpm storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006)

### Build

Build the component library:

```bash
pnpm build
```

## Project Structure

```
legali-ai-components/
├── src/
│   ├── components/       # React components
│   │   ├── button.tsx
│   │   └── button.stories.tsx
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── registry/         # shadcn registry configuration
│   │   └── index.ts
│   ├── styles/           # Global styles
│   │   └── globals.css
│   └── index.ts          # Main exports
├── .storybook/           # Storybook configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## Creating Components

Components should follow this structure:

1. Create component file in `src/components/`
2. Create Storybook stories file `*.stories.tsx`
3. Add to registry in `src/registry/index.ts`
4. Export from `src/index.ts`

### Example

See `src/components/button.tsx` for a complete example.

## Registry

Components are registered for shadcn compatibility in `src/registry/index.ts`. Each entry includes:

- Component name
- Type (e.g., "components:ui")
- File paths
- Dependencies
- Registry dependencies

## Scripts

- `pnpm dev` - Start Vite dev server
- `pnpm build` - Build the library
- `pnpm preview` - Preview production build
- `pnpm storybook` - Start Storybook dev server
- `pnpm build-storybook` - Build Storybook for deployment

## License

MIT

