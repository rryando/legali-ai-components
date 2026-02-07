import type { Meta, StoryObj } from "@storybook/react";
import { matchingSearchMessages } from "../data/marketplace-demo-content";
import { MatchingAnimation } from "../composite/MatchingAnimation";

const meta = {
  title: "Legali/Marketplace/Composite/MatchingAnimation",
  component: MatchingAnimation,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof MatchingAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchMessages: matchingSearchMessages,
    matchDelayMs: 5000,
    onMatchComplete: () => console.log("Match complete!"),
  },
};

export const FastMatch: Story = {
  args: {
    searchMessages: matchingSearchMessages,
    matchDelayMs: 2000,
  },
};
