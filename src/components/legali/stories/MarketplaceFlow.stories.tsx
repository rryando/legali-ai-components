import type { Meta, StoryObj } from "@storybook/react";
import { MarketplaceFlow } from "../screens/MarketplaceFlow";

const meta = {
  title: "Legali/Marketplace/Screens/MarketplaceFlow",
  component: MarketplaceFlow,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketplaceFlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullDemo: Story = {
  args: {},
};
