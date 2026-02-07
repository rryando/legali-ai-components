import type { Meta, StoryObj } from "@storybook/react";
import { intakeChatScript } from "../data/marketplace-demo-content";
import { IntakeChatPanel } from "../composite/IntakeChatPanel";

const meta = {
  title: "Legali/Marketplace/Composite/IntakeChatPanel",
  component: IntakeChatPanel,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof IntakeChatPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    script: intakeChatScript,
    onComplete: (messages, contactInfo) => console.log("Complete:", { messages, contactInfo }),
  },
};
