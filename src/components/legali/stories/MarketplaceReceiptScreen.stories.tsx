import type { Meta, StoryObj } from "@storybook/react";
import { demoReceipt } from "../data/marketplace-demo-content";
import { MarketplaceReceiptScreen } from "../screens/MarketplaceReceiptScreen";

const meta = {
  title: "Legali/Marketplace/Screens/MarketplaceReceiptScreen",
  component: MarketplaceReceiptScreen,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketplaceReceiptScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    receipt: demoReceipt,
    onReturnHome: () => console.log("Return home"),
  },
};
