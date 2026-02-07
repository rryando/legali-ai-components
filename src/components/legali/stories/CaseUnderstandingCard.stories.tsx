import type { Meta, StoryObj } from "@storybook/react";
import { demoCaseDetails } from "../data/marketplace-demo-content";
import { CaseUnderstandingCard } from "../composite/CaseUnderstandingCard";

const meta = {
  title: "Legali/Marketplace/Composite/CaseUnderstandingCard",
  component: CaseUnderstandingCard,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-case-understanding-card.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { CaseUnderstandingCard } from "@/components/ui/legali/composite/CaseUnderstandingCard"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<CaseUnderstandingCard\n  caseDetails={caseDetails}\n  onConfirm={() => {}}\n  onEdit={() => {}}\n/>\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CaseUnderstandingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caseDetails: demoCaseDetails,
    onConfirm: () => console.log("Confirmed"),
    onEdit: () => console.log("Edit"),
  },
};
