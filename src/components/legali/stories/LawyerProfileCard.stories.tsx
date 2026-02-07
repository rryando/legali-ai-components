import type { Meta, StoryObj } from "@storybook/react";
import { demoLawyers } from "../data/marketplace-demo-content";
import { LawyerProfileCard } from "../composite/LawyerProfileCard";

const meta = {
  title: "Legali/Marketplace/Composite/LawyerProfileCard",
  component: LawyerProfileCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FamilyLawyer: Story = {
  args: {
    lawyer: demoLawyers[0],
    onStartConsultation: () => console.log("Start consultation"),
  },
};

export const EmploymentLawyer: Story = {
  args: {
    lawyer: demoLawyers[1],
    onStartConsultation: () => console.log("Start consultation"),
  },
};
