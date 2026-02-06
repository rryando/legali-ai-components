import type { Meta, StoryObj } from "@storybook/react";
import { demoLawyers } from "../data/marketplace-demo-content";
import type { ChatMessage } from "../data/marketplace-types";
import { ConsultationChat } from "../composite/ConsultationChat";

const sampleMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "lawyer",
    text: "Guten Tag! Ich habe die Zusammenfassung Ihres Falles erhalten.",
    timestamp: new Date(),
  },
  {
    id: "2",
    sender: "user",
    text: "Vielen Dank! Ich freue mich auf Ihre Einschätzung.",
    timestamp: new Date(),
  },
];

const meta = {
  title: "Legali/Marketplace/Composite/ConsultationChat",
  component: ConsultationChat,
  parameters: { layout: "padded" },
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
