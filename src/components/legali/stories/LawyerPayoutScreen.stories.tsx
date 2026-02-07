import type { Meta, StoryObj } from "@storybook/react";
import { demoPayout } from "../data/marketplace-demo-content";
import { LawyerPayoutScreen } from "../screens/LawyerPayoutScreen";

const meta = {
  title: "Legali/Marketplace/Screens/LawyerPayoutScreen",
  component: LawyerPayoutScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-payout-screen.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerPayoutScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    payout: demoPayout,
    onReturnHome: () => console.log("Return home"),
  },
};
