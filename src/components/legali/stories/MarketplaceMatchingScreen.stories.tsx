import type { Meta, StoryObj } from "@storybook/react";
import { demoLawyers, matchingSearchMessages } from "../data/marketplace-demo-content";
import { MarketplaceMatchingScreen } from "../screens/MarketplaceMatchingScreen";

const meta = {
  title: "Legali/Marketplace/Screens/MarketplaceMatchingScreen",
  component: MarketplaceMatchingScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-matching-screen.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { MarketplaceMatchingScreen } from "@/components/ui/legali/screens/MarketplaceMatchingScreen"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<MarketplaceMatchingScreen\n  searchMessages={messages}\n  matchedLawyer={lawyer}\n  matchDelayMs={5000}\n  onStartConsultation={() => {}}\n/>\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketplaceMatchingScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchMessages: matchingSearchMessages,
    matchedLawyer: demoLawyers[0],
    matchDelayMs: 5000,
    onStartConsultation: () => console.log("Start consultation"),
  },
};
