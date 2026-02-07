import type { Meta } from "@storybook/react";
import { MarketplaceFlow } from "../screens/MarketplaceFlow";

const meta: Meta = {
  title: "Legali/Demo/Marketplace",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

export const MarketplaceDemo = () => {
  return <MarketplaceFlow />;
};
