import type { Meta, StoryObj } from "@storybook/react";
import { LawyerMarketplaceFlow } from "../screens/LawyerMarketplaceFlow";

const meta = {
  title: "Legali/Marketplace/Screens/LawyerMarketplaceFlow",
  component: LawyerMarketplaceFlow,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-marketplace-flow.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { LawyerMarketplaceFlow } from "@/components/ui/legali/screens/LawyerMarketplaceFlow"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<LawyerMarketplaceFlow />\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerMarketplaceFlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullDemo: Story = {
  args: {},
};
