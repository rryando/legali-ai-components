import type { Meta, StoryObj } from "@storybook/react";
import { demoReceipt } from "../data/marketplace-demo-content";
import { MarketplaceReceiptScreen } from "../screens/MarketplaceReceiptScreen";

const meta = {
  title: "Legali/Marketplace/Screens/MarketplaceReceiptScreen",
  component: MarketplaceReceiptScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-receipt-screen.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketplaceReceiptScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    receipt: demoReceipt,
    onReturnHome: () => console.log("Return home"),
  },
};
