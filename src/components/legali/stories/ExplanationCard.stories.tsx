import type { Meta, StoryObj } from "@storybook/react";
import { ExplanationCard } from "../atomic/ExplanationCard";

const meta = {
  title: "Legali/Atomic/ExplanationCard",
  component: ExplanationCard,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-explanation-card.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ExplanationCard } from "@/components/ui/legali/atomic/ExplanationCard"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ExplanationCard />\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    explanation: { control: "text" },
  },
} satisfies Meta<typeof ExplanationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    explanation:
      "Legali's eligibility checker evaluates claim amount, location, and dispute type to instantly confirm if small claims is the right forum and identifies the right court.",
  },
};

export const ShortExplanation: Story = {
  args: {
    explanation: "This is a short explanation.",
  },
};

export const LongExplanation: Story = {
  args: {
    explanation:
      "This is a much longer explanation that demonstrates how the card handles larger amounts of text. It should wrap comfortably and maintain readability within the card's boundaries, ensuring that users can easily digest complex legal concepts or detailed feedback provided by the system.",
  },
};
