import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseRequests, demoLawyers } from "../data/marketplace-demo-content";
import { LawyerDashboardScreen } from "../screens/LawyerDashboardScreen";

const meta = {
  title: "Legali/Marketplace/Screens/LawyerDashboardScreen",
  component: LawyerDashboardScreen,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerDashboardScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lawyer: demoLawyers[0],
    caseRequests: demoCaseRequests,
    onSelectCase: (c) => console.log("Selected:", c.clientName),
  },
};
