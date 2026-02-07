import type { Meta, StoryObj } from "@storybook/react";
import { ChatInput } from "../atomic/ChatInput";

const meta = {
  title: "Legali/Marketplace/Atomic/ChatInput",
  component: ChatInput,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-chat-input.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ChatInput } from "@/components/ui/legali/atomic/ChatInput"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ChatInput onSend={() => {}} />\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSend: (msg: string) => console.log("Sent:", msg),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const NoExtras: Story = {
  args: {
    showVoice: false,
    showAttach: false,
    onSend: (msg: string) => console.log("Sent:", msg),
  },
};
