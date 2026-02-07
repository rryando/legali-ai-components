import type { Meta, StoryObj } from "@storybook/react";
import { ResultsScreen } from "../screens/ResultsScreen";

const meta: Meta<typeof ResultsScreen> = {
  title: "Legali/Screens/ResultsScreen",
  component: ResultsScreen,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-results-screen.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ResultsScreen } from "@/components/ui/legali/screens/ResultsScreen"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ResultsScreen\n  score={5}\n  totalQuestions={5}\n  badgeTitle="Discovery Master Badge Earned!"\n  onContinue={() => {}}\n  onReviewMistakes={() => {}}\n/>\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ResultsScreen>;

export const PerfectScore: Story = {
  args: {
    score: 5,
    totalQuestions: 5,
    badgeTitle: "Discovery Master Badge Earned!",
    onContinue: () => console.log("Continue clicked"),
    onReviewMistakes: () => console.log("Review mistakes clicked"),
  },
};

export const GoodScore: Story = {
  args: {
    score: 4,
    totalQuestions: 5,
    badgeTitle: "Discovery Detective Badge Earned!",
    onContinue: () => console.log("Continue clicked"),
    onReviewMistakes: () => console.log("Review mistakes clicked"),
  },
};

export const PassingScore: Story = {
  args: {
    score: 3,
    totalQuestions: 5,
    onContinue: () => console.log("Continue clicked"),
    onReviewMistakes: () => console.log("Review mistakes clicked"),
  },
};

export const LowScore: Story = {
  args: {
    score: 1,
    totalQuestions: 5,
    onContinue: () => console.log("Continue clicked"),
    onReviewMistakes: () => console.log("Review mistakes clicked"),
  },
};

export const WithoutReviewButton: Story = {
  args: {
    score: 5,
    totalQuestions: 5,
    badgeTitle: "Perfect Score Champion!",
    onContinue: () => console.log("Continue clicked"),
  },
};

export const LongStreak: Story = {
  args: {
    score: 4,
    totalQuestions: 5,
    badgeTitle: "Consistency Master!",
    onContinue: () => console.log("Continue clicked"),
  },
};
