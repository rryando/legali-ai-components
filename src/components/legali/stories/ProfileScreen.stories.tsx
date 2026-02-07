import type { Meta, StoryObj } from "@storybook/react";
import { ProfileScreen } from "../screens/ProfileScreen";

const meta = {
  title: "Legali/Screens/ProfileScreen",
  component: ProfileScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-profile-screen.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "Ryan Ryn",
      handle: "@ryanryn",
      level: 5,
      title: "Legal Scholar",
      joinDate: "November 2025",
    },
    stats: {
      xp: 1250,
      streak: 5,
      lessonsCompleted: 12,
      accuracy: 92,
    },
  },
};

export const NewUser: Story = {
  args: {
    user: {
      name: "Jane Doe",
      handle: "@janedoe",
      level: 1,
      title: "Novice",
      joinDate: "December 2025",
    },
    stats: {
      xp: 0,
      streak: 0,
      lessonsCompleted: 0,
      accuracy: 0,
    },
  },
};

export const PowerUser: Story = {
  args: {
    user: {
      name: "Alex Smith",
      handle: "@alexsmith",
      level: 50,
      title: "Supreme Court Justice",
      joinDate: "January 2024",
    },
    stats: {
      xp: 50_000,
      streak: 365,
      lessonsCompleted: 500,
      accuracy: 99,
    },
  },
};
