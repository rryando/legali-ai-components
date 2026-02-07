import type { Meta, StoryObj } from "@storybook/react";
import { LawyerMarketplaceFlow } from "../screens/LawyerMarketplaceFlow";

const meta = {
  title: "Legali/Marketplace/Screens/LawyerMarketplaceFlow",
  component: LawyerMarketplaceFlow,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerMarketplaceFlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullDemo: Story = {
  args: {},
};
