import type { Meta, StoryObj } from "@storybook/react";
import { QuestionNumberBadge } from "../atomic/QuestionNumberBadge";

const meta = {
  title: "Legali/Atomic/QuestionNumberBadge",
  component: QuestionNumberBadge,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-question-number-badge.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { QuestionNumberBadge } from "@/components/ui/legali/atomic/QuestionNumberBadge"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<QuestionNumberBadge number={1} status="neutral" />\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    number: { control: "number" },
    status: {
      control: "select",
      options: ["correct", "incorrect", "neutral"],
    },
  },
} satisfies Meta<typeof QuestionNumberBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    number: 1,
    status: "neutral",
  },
};

export const Correct: Story = {
  args: {
    number: 2,
    status: "correct",
  },
};

export const Incorrect: Story = {
  args: {
    number: 3,
    status: "incorrect",
  },
};
