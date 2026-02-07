import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseRequests } from "../data/marketplace-demo-content";
import { CaseReviewPanel } from "../composite/CaseReviewPanel";

const meta = {
  title: "Legali/Marketplace/Composite/CaseReviewPanel",
  component: CaseReviewPanel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-case-review-panel.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[520px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CaseReviewPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caseRequest: demoCaseRequests[0],
    onAccept: () => console.log("Accept"),
    onDecline: () => console.log("Decline"),
    onRefer: () => console.log("Refer"),
  },
};

export const UrgentCase: Story = {
  args: {
    caseRequest: demoCaseRequests[1],
    onAccept: () => console.log("Accept"),
    onDecline: () => console.log("Decline"),
    onRefer: () => console.log("Refer"),
  },
};
