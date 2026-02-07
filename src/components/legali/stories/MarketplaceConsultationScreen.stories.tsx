import type { Meta, StoryObj } from "@storybook/react";
import {
  consultationScript,
  demoCaseAssessment,
  demoLawyers,
} from "../data/marketplace-demo-content";
import { MarketplaceConsultationScreen } from "../screens/MarketplaceConsultationScreen";

const meta = {
  title: "Legali/Marketplace/Screens/MarketplaceConsultationScreen",
  component: MarketplaceConsultationScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-marketplace-consultation-screen.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { MarketplaceConsultationScreen } from "@/components/ui/legali/screens/MarketplaceConsultationScreen"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<MarketplaceConsultationScreen\n  lawyer={lawyer}\n  script={script}\n  assessment={assessment}\n  onViewReceipt={() => {}}\n/>\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MarketplaceConsultationScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lawyer: demoLawyers[0],
    script: consultationScript,
    assessment: demoCaseAssessment,
    onViewReceipt: () => console.log("View receipt"),
  },
};
