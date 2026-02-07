import type { Meta, StoryObj } from "@storybook/react";
import { demoLawyers } from "../data/marketplace-demo-content";
import type { ChatMessage } from "../data/marketplace-types";
import { ConsultationChat } from "../composite/ConsultationChat";

const sampleMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "lawyer",
    text: "Hello! I've received the summary of your case.",
    timestamp: new Date(),
  },
  {
    id: "2",
    sender: "user",
    text: "Thank you! I'm looking forward to your assessment.",
    timestamp: new Date(),
  },
];

const meta = {
  title: "Legali/Marketplace/Composite/ConsultationChat",
  component: ConsultationChat,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-consultation-chat.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ConsultationChat } from "@/components/ui/legali/composite/ConsultationChat"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ConsultationChat lawyer={lawyer} messages={sampleMessages} />\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ConsultationChat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lawyer: demoLawyers[0],
    messages: sampleMessages,
  },
};

export const LawyerTyping: Story = {
  args: {
    lawyer: demoLawyers[0],
    messages: sampleMessages,
    isLawyerTyping: true,
  },
};
