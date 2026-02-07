import type { Meta, StoryObj } from "@storybook/react";
import { ScrollProgressIndicator } from "../composite/ScrollProgressIndicator";

const meta: Meta<typeof ScrollProgressIndicator> = {
  title: "Legali/Composite/ScrollProgressIndicator",
  component: ScrollProgressIndicator,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-scroll-progress-indicator.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollProgressIndicator>;

export const Default: Story = {
  render: () => (
    <div style={{ height: "200vh", padding: "20px" }}>
      <ScrollProgressIndicator />
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 font-bold text-3xl">Scroll to see the progress indicator</h1>
        <p className="mb-8 text-slate-600">
          The progress indicator is on the left side of the screen. Scroll down to see it fill up.
        </p>
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="mb-8 rounded-xl bg-slate-100 p-6" key={i}>
            <h2 className="mb-2 font-bold text-xl">Section {i + 1}</h2>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const RightPosition: Story = {
  render: () => (
    <div style={{ height: "200vh", padding: "20px" }}>
      <ScrollProgressIndicator position="right" />
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 font-bold text-3xl">Right-side Progress Indicator</h1>
        <p className="text-slate-600">
          This version is positioned on the right side of the screen.
        </p>
      </div>
    </div>
  ),
};

export const NoPercentage: Story = {
  render: () => (
    <div style={{ height: "200vh", padding: "20px" }}>
      <ScrollProgressIndicator showPercentage={false} />
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 font-bold text-3xl">Without Percentage</h1>
        <p className="text-slate-600">This version hides the percentage display.</p>
      </div>
    </div>
  ),
};
