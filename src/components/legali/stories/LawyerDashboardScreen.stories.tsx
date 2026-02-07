import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseRequests, demoLawyers } from "../data/marketplace-demo-content";
import { LawyerDashboardScreen } from "../screens/LawyerDashboardScreen";

const meta = {
  title: "Legali/Marketplace/Screens/LawyerDashboardScreen",
  component: LawyerDashboardScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-dashboard-screen.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerDashboardScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lawyer: demoLawyers[0],
    caseRequests: demoCaseRequests,
    onSelectCase: (c) => console.log("Selected:", c.clientName),
  },
};
