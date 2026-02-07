import type { Meta } from "@storybook/react";
import { LawyerMarketplaceFlow } from "../screens/LawyerMarketplaceFlow";

const meta: Meta = {
  title: "Legali/Demo/Lawyer Marketplace",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

export const LawyerMarketplaceDemo = () => {
  return <LawyerMarketplaceFlow />;
};
