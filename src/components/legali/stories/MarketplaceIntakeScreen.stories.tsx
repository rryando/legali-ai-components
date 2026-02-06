import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseDetails, intakeChatScript } from "../data/marketplace-demo-content";
import { MarketplaceIntakeScreen } from "../screens/MarketplaceIntakeScreen";

const meta = {
  title: "Legali/Marketplace/Screens/MarketplaceIntakeScreen",
  component: MarketplaceIntakeScreen,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketplaceIntakeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    script: intakeChatScript,
    caseDetails: demoCaseDetails,
    onConfirmCase: (caseDetails) => console.log("Confirmed:", caseDetails),
  },
};
