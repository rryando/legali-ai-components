import type { Meta, StoryObj } from "@storybook/react";
import { ResultsCard } from "../composite/ResultsCard";

const meta = {
  title: "Legali/Composite/ResultsCard",
  component: ResultsCard,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-results-card.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ResultsCard } from "@/components/ui/legali/composite/ResultsCard"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ResultsCard\n  score={5}\n  totalQuestions={5}\n  xpEarned={100}\n  accuracy={100}\n  streak={7}\n  badgeTitle="Perfect Score!"\n  onContinue={() => {}}\n  onReviewMistakes={() => {}}\n/>\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    score: { control: "number" },
    totalQuestions: { control: "number" },
    xpEarned: { control: "number" },
    accuracy: { control: "number" },
    streak: { control: "number" },
    badgeTitle: { control: "text" },
  },
} satisfies Meta<typeof ResultsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PerfectScore: Story = {
  args: {
    score: 5,
    totalQuestions: 5,
    xpEarned: 100,
    accuracy: 100,
    streak: 7,
    badgeTitle: "Perfect Score!",
    onContinue: () => console.log("Continue clicked"),
    onReviewMistakes: () => console.log("Review clicked"),
  },
};

export const GoodScore: Story = {
  args: {
    score: 4,
    totalQuestions: 5,
    xpEarned: 80,
    accuracy: 80,
    streak: 3,
    badgeTitle: "Great Job!",
    onContinue: () => console.log("Continue clicked"),
    onReviewMistakes: () => console.log("Review clicked"),
  },
};

export const NeedsImprovement: Story = {
  args: {
    score: 2,
    totalQuestions: 5,
    xpEarned: 40,
    accuracy: 40,
    streak: 1,
    badgeTitle: "Keep Practicing!",
    onContinue: () => console.log("Continue clicked"),
    onReviewMistakes: () => console.log("Review clicked"),
  },
};
