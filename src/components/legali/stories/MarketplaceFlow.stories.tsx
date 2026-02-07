import type { Meta, StoryObj } from "@storybook/react";
import { MarketplaceFlow } from "../screens/MarketplaceFlow";

const meta = {
  title: "Legali/Marketplace/Screens/MarketplaceFlow",
  component: MarketplaceFlow,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-flow.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketplaceFlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullDemo: Story = {
  args: {},
};
