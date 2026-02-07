import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseDetails } from "../data/marketplace-demo-content";
import { CaseUnderstandingCard } from "../composite/CaseUnderstandingCard";

const meta = {
  title: "Legali/Marketplace/Composite/CaseUnderstandingCard",
  component: CaseUnderstandingCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof CaseUnderstandingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caseDetails: demoCaseDetails,
    onConfirm: () => console.log("Confirmed"),
    onEdit: () => console.log("Edit"),
  },
};
