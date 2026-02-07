import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseAssessment } from "../data/marketplace-demo-content";
import { CaseAssessmentCard } from "../composite/CaseAssessmentCard";

const meta = {
  title: "Legali/Marketplace/Composite/CaseAssessmentCard",
  component: CaseAssessmentCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof CaseAssessmentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accepted: Story = {
  args: {
    assessment: demoCaseAssessment,
    onViewReceipt: () => console.log("View receipt"),
  },
};

export const Declined: Story = {
  args: {
    assessment: { ...demoCaseAssessment, decision: "declined" as const },
  },
};

export const Referred: Story = {
  args: {
    assessment: { ...demoCaseAssessment, decision: "referred" as const },
  },
};
