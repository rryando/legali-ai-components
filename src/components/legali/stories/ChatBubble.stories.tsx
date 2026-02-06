import type { Meta, StoryObj } from "@storybook/react";
import { ChatBubble } from "../atomic/ChatBubble";

const meta = {
  title: "Legali/Marketplace/Atomic/ChatBubble",
  component: ChatBubble,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    sender: {
      control: "select",
      options: ["user", "ai", "lawyer", "system"],
    },
  },
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const User: Story = {
  args: {
    text: "Ich brauche Hilfe bei meiner Scheidung.",
    sender: "user",
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const AI: Story = {
  args: {
    text: "Willkommen bei Legali AI! Ich helfe Ihnen, den passenden Anwalt zu finden. Was beschäftigt Sie?",
    sender: "ai",
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const Lawyer: Story = {
  args: {
    text: "Guten Tag! Ich habe die Zusammenfassung Ihres Falles erhalten. Lassen Sie uns Ihre Situation besprechen.",
    sender: "lawyer",
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const System: Story = {
  args: {
    text: "Kontaktdaten übermittelt: Max Mustermann",
    sender: "system",
  },
};

export const WithAttachments: Story = {
  args: {
    text: "Hier sind die relevanten Dokumente.",
    sender: "user",
    attachments: [
      { id: "1", type: "pdf", name: "Vertrag.pdf", url: "#" },
      { id: "2", type: "document", name: "Bescheid.docx", url: "#" },
    ],
  },
};
