import type { Meta, StoryObj } from "@storybook/react";
import { CaseStatusBadge } from "../atomic/CaseStatusBadge";

const meta = {
  title: "Legali/Marketplace/Atomic/CaseStatusBadge",
  component: CaseStatusBadge,
  tags: ["autodocs"],
} satisfies Meta<typeof CaseStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const New: Story = {
  args: { status: "new" },
};

export const Pending: Story = {
  args: { status: "pending" },
};

export const InProgress: Story = {
  args: { status: "in_progress" },
};

export const AllVariants = () => (
  <div className="flex gap-3">
    <CaseStatusBadge status="new" />
    <CaseStatusBadge status="pending" />
    <CaseStatusBadge status="in_progress" />
  </div>
);
