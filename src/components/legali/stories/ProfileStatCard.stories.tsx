import type { Meta, StoryObj } from "@storybook/react";
import { Clock, Flame, Target, Trophy } from "lucide-react";
import { ProfileStatCard } from "../atomic/ProfileStatCard";

const meta = {
  title: "Legali/Atomic/ProfileStatCard",
  component: ProfileStatCard,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-profile-stat-card.json"\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    colorClass: { control: "text" },
  },
} satisfies Meta<typeof ProfileStatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Trophy,
    label: "Total XP",
    value: "12,450",
    colorClass: "text-yellow-600 bg-yellow-50",
  },
};

export const Streak: Story = {
  args: {
    icon: Flame,
    label: "Day Streak",
    value: "14",
    colorClass: "text-orange-600 bg-orange-50",
  },
};

export const Accuracy: Story = {
  args: {
    icon: Target,
    label: "Accuracy",
    value: "94%",
    colorClass: "text-emerald-600 bg-emerald-50",
  },
};

export const TimeSpent: Story = {
  args: {
    icon: Clock,
    label: "Hours",
    value: "28.5",
    colorClass: "text-blue-600 bg-blue-50",
  },
};
