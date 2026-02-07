import type { Meta, StoryObj } from "@storybook/react";
import { GlassCard } from "../atomic/GlassCard";

const meta = {
  title: "Legali/Atomic/GlassCard",
  component: GlassCard,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-glass-card.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { GlassCard } from "@/components/ui/legali/atomic/GlassCard"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<GlassCard variant="default" intensity="medium" />\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "interactive", "dark"],
    },
    intensity: {
      control: "select",
      options: ["low", "medium", "high"],
    },
  },
} satisfies Meta<typeof GlassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="p-4">This is a default glass card content.</div>,
    variant: "default",
    intensity: "medium",
  },
};

export const Interactive: Story = {
  args: {
    children: <div className="p-4">Hover over me! I am interactive.</div>,
    variant: "interactive",
    intensity: "medium",
  },
};

export const Dark: Story = {
  args: {
    children: <div className="p-4">This is a dark variant glass card.</div>,
    variant: "dark",
    intensity: "medium",
  },
};

export const LowIntensity: Story = {
  args: {
    children: <div className="p-4">Low intensity glass effect.</div>,
    intensity: "low",
  },
};

export const HighIntensity: Story = {
  args: {
    children: <div className="p-4">High intensity glass effect.</div>,
    intensity: "high",
  },
};
