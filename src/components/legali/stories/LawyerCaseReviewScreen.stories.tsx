import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseRequests } from "../data/marketplace-demo-content";
import { LawyerCaseReviewScreen } from "../screens/LawyerCaseReviewScreen";

const meta = {
  title: "Legali/Marketplace/Screens/LawyerCaseReviewScreen",
  component: LawyerCaseReviewScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-case-review-screen.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { LawyerCaseReviewScreen } from "@/components/ui/legali/screens/LawyerCaseReviewScreen"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<LawyerCaseReviewScreen\n  caseRequest={caseRequest}\n  onAccept={() => {}}\n  onDecline={() => {}}\n  onRefer={() => {}}\n/>\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerCaseReviewScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caseRequest: demoCaseRequests[0],
    onAccept: () => console.log("Accepted"),
    onDecline: () => console.log("Declined"),
    onRefer: () => console.log("Referred"),
  },
};
