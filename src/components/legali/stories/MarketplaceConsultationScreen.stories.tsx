import type { Meta, StoryObj } from "@storybook/react";
import {
  consultationScript,
  demoCaseAssessment,
  demoLawyers,
} from "../data/marketplace-demo-content";
import { MarketplaceConsultationScreen } from "../screens/MarketplaceConsultationScreen";

const meta = {
  title: "Legali/Marketplace/Screens/MarketplaceConsultationScreen",
  component: MarketplaceConsultationScreen,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketplaceConsultationScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lawyer: demoLawyers[0],
    script: consultationScript,
    assessment: demoCaseAssessment,
    onViewReceipt: () => console.log("View receipt"),
  },
};
