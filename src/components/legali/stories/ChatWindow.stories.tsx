import type { Meta, StoryObj } from "@storybook/react";
import type { ChatMessage } from "../data/marketplace-types";
import { ChatWindow } from "../composite/ChatWindow";

const sampleMessages: ChatMessage[] = [
  { id: "1", sender: "ai", text: "Willkommen! Wie kann ich Ihnen helfen?", timestamp: new Date() },
  { id: "2", sender: "user", text: "Ich brauche Hilfe bei meiner Scheidung.", timestamp: new Date() },
  { id: "3", sender: "ai", text: "Verstehe. Können Sie mir mehr über Ihre Situation erzählen?", timestamp: new Date() },
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
  decorators: [(Story) => <div className="h-[400px]"><Story /></div>],
};

export const WithTyping: Story = {
  args: { messages: sampleMessages, isTyping: true },
  decorators: [(Story) => <div className="h-[400px]"><Story /></div>],
};
