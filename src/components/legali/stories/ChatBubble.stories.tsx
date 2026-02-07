import type { Meta, StoryObj } from "@storybook/react";
import { ChatBubble } from "../atomic/ChatBubble";

const meta = {
  title: "Legali/Marketplace/Atomic/ChatBubble",
  component: ChatBubble,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-chat-bubble.json"\n\`\`\``,
      },
    },
    layout: "padded",
  },
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
    text: "I need help with my divorce.",
    sender: "user",
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const AI: Story = {
  args: {
    text: "Welcome to Legali AI! I'll help you find the right lawyer. What's on your mind?",
    sender: "ai",
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const Lawyer: Story = {
  args: {
    text: "Hello! I've received the summary of your case. Let's discuss your situation.",
    sender: "lawyer",
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const System: Story = {
  args: {
    text: "Contact details submitted: John Smith",
    sender: "system",
  },
};

export const WithAttachments: Story = {
  args: {
    text: "Here are the relevant documents.",
    sender: "user",
    attachments: [
      { id: "1", type: "pdf", name: "Contract.pdf", url: "#" },
      { id: "2", type: "document", name: "Notice.docx", url: "#" },
    ],
  },
};
