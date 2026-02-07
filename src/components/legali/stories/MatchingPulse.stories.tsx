import type { Meta, StoryObj } from "@storybook/react";
import { MatchingPulse } from "../atomic/MatchingPulse";

const meta = {
  title: "Legali/Marketplace/Atomic/MatchingPulse",
  component: MatchingPulse,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof MatchingPulse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ringCount: 4,
    size: 280,
  },
};

export const Small: Story = {
  args: {
    ringCount: 3,
    size: 160,
  },
};
