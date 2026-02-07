import type { Meta, StoryObj } from "@storybook/react";
import { demoReceipt } from "../data/marketplace-demo-content";
import { ConsultationReceipt } from "../composite/ConsultationReceipt";

const meta = {
  title: "Legali/Marketplace/Composite/ConsultationReceipt",
  component: ConsultationReceipt,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof ConsultationReceipt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    receipt: demoReceipt,
    onDownload: () => console.log("Download"),
    onShare: () => console.log("Share"),
    onReturnHome: () => console.log("Return home"),
  },
};
