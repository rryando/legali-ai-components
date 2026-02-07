import type { Meta, StoryObj } from "@storybook/react";
import { ConsultationTimer } from "../atomic/ConsultationTimer";

const meta = {
  title: "Legali/Marketplace/Atomic/ConsultationTimer",
  component: ConsultationTimer,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-consultation-timer.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ConsultationTimer } from "@/components/ui/legali/atomic/ConsultationTimer"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ConsultationTimer\n  isRunning={true, startTime: 0}\n/>\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ConsultationTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Running: Story = {
  args: { isRunning: true, startTime: 0 },
};

export const Paused: Story = {
  args: { isRunning: false, startTime: 125 },
};
