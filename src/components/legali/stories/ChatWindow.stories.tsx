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
  parameters: { layout: "padded" },
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
