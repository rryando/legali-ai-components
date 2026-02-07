import type { Meta, StoryObj } from "@storybook/react";
import { ChatInput } from "../atomic/ChatInput";

const meta = {
  title: "Legali/Marketplace/Atomic/ChatInput",
  component: ChatInput,
  parameters: { layout: "padded" },
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
