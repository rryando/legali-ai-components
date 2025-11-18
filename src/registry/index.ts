export const registry = {
  button: {
    name: "button",
    type: "components:ui",
    files: ["src/components/button.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: [],
  },
};

export type RegistryEntry = typeof registry[keyof typeof registry];
