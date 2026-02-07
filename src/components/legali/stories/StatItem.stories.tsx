import type { Meta, StoryObj } from "@storybook/react";
import { StatItem } from "../atomic/StatItem";

const meta: Meta<typeof StatItem> = {
  title: "Legali/Atomic/StatItem",
  component: StatItem,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-stat-item.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "streak", "points", "hearts"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatItem>;

export const Streak: Story = {
  args: {
    icon: "🔥",
    value: 7,
    label: "day streak",
    variant: "streak",
  },
};

export const Points: Story = {
  args: {
    icon: "⭐",
    value: 340,
    label: "XP",
    variant: "points",
  },
};

export const Hearts: Story = {
  args: {
    icon: "❤️",
    value: "5/5",
    variant: "hearts",
  },
};

export const Default: Story = {
  args: {
    icon: "📊",
    value: 42,
    label: "items",
    variant: "default",
  },
};

export const Small: Story = {
  args: {
    icon: "🔥",
    value: 10,
    label: "days",
    variant: "streak",
  },
};

export const Large: Story = {
  args: {
    icon: "⭐",
    value: 1000,
    label: "XP",
    variant: "points",
  },
};
