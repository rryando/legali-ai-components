import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseRequests } from "../data/marketplace-demo-content";
import { LawyerCaseReviewScreen } from "../screens/LawyerCaseReviewScreen";

const meta = {
  title: "Legali/Marketplace/Screens/LawyerCaseReviewScreen",
  component: LawyerCaseReviewScreen,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerCaseReviewScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caseRequest: demoCaseRequests[0],
    onAccept: () => console.log("Accepted"),
    onDecline: () => console.log("Declined"),
    onRefer: () => console.log("Referred"),
  },
};
