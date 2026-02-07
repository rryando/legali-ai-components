import type { Meta, StoryObj } from "@storybook/react";
import { demoPayout } from "../data/marketplace-demo-content";
import { PayoutSummary } from "../composite/PayoutSummary";

const meta = {
  title: "Legali/Marketplace/Composite/PayoutSummary",
  component: PayoutSummary,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[520px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PayoutSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    payout: demoPayout,
    onDownload: () => console.log("Download"),
    onReturnHome: () => console.log("Return home"),
  },
};

export const WithoutReturnButton: Story = {
  args: {
    payout: demoPayout,
    onDownload: () => console.log("Download"),
  },
};
