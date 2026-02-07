import type { Meta, StoryObj } from "@storybook/react";
import type { ChatMessage } from "../data/marketplace-types";
import { ChatWindow } from "../composite/ChatWindow";

const sampleMessages: ChatMessage[] = [
  { id: "1", sender: "ai", text: "Welcome! How can I help you?", timestamp: new Date() },
  { id: "2", sender: "user", text: "I need help with my divorce.", timestamp: new Date() },
  {
    id: "3",
    sender: "ai",
    text: "I understand. Can you tell me more about your situation?",
    timestamp: new Date(),
  },
];

const meta = {
  title: "Legali/Marketplace/Composite/ChatWindow",
  component: ChatWindow,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-chat-window.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ChatWindow } from "@/components/ui/legali/composite/ChatWindow"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ChatWindow messages={sampleMessages} />\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { messages: sampleMessages },
  decorators: [
    (Story) => (
      <div className="h-[400px]">
        <Story />
      </div>
    ),
  ],
};

export const WithTyping: Story = {
  args: { messages: sampleMessages, isTyping: true },
  decorators: [
    (Story) => (
      <div className="h-[400px]">
        <Story />
      </div>
    ),
  ],
};
