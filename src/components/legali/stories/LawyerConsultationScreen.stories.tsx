import type { Meta, StoryObj } from "@storybook/react";
import { demoLawyers, lawyerConsultationScript } from "../data/marketplace-demo-content";
import { LawyerConsultationScreen } from "../screens/LawyerConsultationScreen";

const meta = {
  title: "Legali/Marketplace/Screens/LawyerConsultationScreen",
  component: LawyerConsultationScreen,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerConsultationScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lawyer: demoLawyers[0],
    script: lawyerConsultationScript,
    onConsultationComplete: () => console.log("Consultation complete"),
  },
};
