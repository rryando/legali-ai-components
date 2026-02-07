import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseRequests } from "../data/marketplace-demo-content";
import { CaseRequestCard } from "../composite/CaseRequestCard";

const meta = {
  title: "Legali/Marketplace/Composite/CaseRequestCard",
  component: CaseRequestCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CaseRequestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewCase: Story = {
  args: {
    caseRequest: demoCaseRequests[0],
  },
};

export const PendingCase: Story = {
  args: {
    caseRequest: demoCaseRequests[1],
  },
};

export const InProgressCase: Story = {
  args: {
    caseRequest: demoCaseRequests[2],
  },
};

export const Selected: Story = {
  args: {
    caseRequest: demoCaseRequests[0],
    isSelected: true,
  },
};
