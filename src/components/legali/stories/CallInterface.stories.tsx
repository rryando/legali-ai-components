import type { Meta, StoryObj } from "@storybook/react";
import { demoLawyers } from "../data/marketplace-demo-content";
import { CallInterface } from "../composite/CallInterface";

const meta = {
  title: "Legali/Marketplace/Composite/CallInterface",
  component: CallInterface,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof CallInterface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AudioCall: Story = {
  args: {
    lawyer: demoLawyers[0],
    mode: "call",
    onEnd: () => console.log("Call ended"),
  },
};

export const VideoCall: Story = {
  args: {
    lawyer: demoLawyers[0],
    mode: "video",
    onEnd: () => console.log("Call ended"),
  },
};
