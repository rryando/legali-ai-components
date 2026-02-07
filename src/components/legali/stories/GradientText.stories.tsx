import type { Meta, StoryObj } from "@storybook/react";
import { GradientText } from "../atomic/GradientText";

const meta: Meta<typeof GradientText> = {
  title: "Legali/Atomic/GradientText",
  component: GradientText,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-gradient-text.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GradientText>;

export const Primary: Story = {
  args: {
    children: "Gradient Text",
    variant: "primary",
    className: "text-4xl font-bold",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Gradient",
    variant: "secondary",
    className: "text-4xl font-bold",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Gradient",
    variant: "danger",
    className: "text-4xl font-bold",
  },
};

export const Custom: Story = {
  args: {
    children: "Custom Gradient",
    variant: "custom",
    customGradient: "linear-gradient(to right, #f97316, #eab308, #22c55e)",
    className: "text-4xl font-bold",
  },
};

export const AsHeading: Story = {
  args: {
    children: "Heading with Gradient",
    as: "h1",
    variant: "primary",
    className: "text-5xl font-bold",
  },
};

export const InContext: Story = {
  render: () => (
    <div className="text-center">
      <h1 className="font-bold text-4xl text-slate-900">
        Legal guidance <GradientText variant="primary">reimagined</GradientText>
      </h1>
      <p className="mt-4 text-lg text-slate-600">This is how it looks in a real heading context.</p>
    </div>
  ),
};
