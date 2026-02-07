import type { Meta, StoryObj } from "@storybook/react";
import { MatchingPulse } from "../atomic/MatchingPulse";

const meta = {
  title: "Legali/Marketplace/Atomic/MatchingPulse",
  component: MatchingPulse,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-matching-pulse.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { MatchingPulse } from "@/components/ui/legali/atomic/MatchingPulse"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<MatchingPulse ringCount={4} size={280} />\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MatchingPulse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ringCount: 4,
    size: 280,
  },
};

export const Small: Story = {
  args: {
    ringCount: 3,
    size: 160,
  },
};
