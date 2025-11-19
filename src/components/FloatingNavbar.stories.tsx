import type { Meta, StoryObj } from "@storybook/react";
import { FloatingNavbar } from "./FloatingNavbar";

const meta: Meta<typeof FloatingNavbar> = {
  title: "Components/FloatingNavbar",
  component: FloatingNavbar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FloatingNavbar>;

export const Default: Story = {
  render: () => (
    <div className="min-h-[200vh] bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-950 dark:to-slate-900">
      <FloatingNavbar />
      
      <div className="container mx-auto pt-32 px-4">
        <h1 className="text-4xl font-bold mb-6">Scroll down to see the magic ✨</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The navbar starts full-width and transparent. As you scroll, it transforms into a floating glassmorphism pill.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 bg-white/50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-800 rounded mb-4" />
              <div className="h-4 w-full bg-slate-100 dark:bg-slate-800/50 rounded mb-2" />
              <div className="h-4 w-full bg-slate-100 dark:bg-slate-800/50 rounded mb-2" />
              <div className="h-4 w-2/3 bg-slate-100 dark:bg-slate-800/50 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
