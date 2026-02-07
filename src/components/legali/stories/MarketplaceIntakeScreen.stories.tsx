import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseDetails, intakeChatScript } from "../data/marketplace-demo-content";
import { MarketplaceIntakeScreen } from "../screens/MarketplaceIntakeScreen";

const meta = {
  title: "Legali/Marketplace/Screens/MarketplaceIntakeScreen",
  component: MarketplaceIntakeScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-intake-screen.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { MarketplaceIntakeScreen } from "@/components/ui/legali/screens/MarketplaceIntakeScreen"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<MarketplaceIntakeScreen\n  script={script}\n  caseDetails={caseDetails}\n  onConfirmCase={() => {}}\n/>\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketplaceIntakeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    script: intakeChatScript,
    caseDetails: demoCaseDetails,
    onConfirmCase: (caseDetails) => console.log("Confirmed:", caseDetails),
  },
};
