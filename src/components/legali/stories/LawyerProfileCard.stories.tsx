import type { Meta, StoryObj } from "@storybook/react";
import { demoLawyers } from "../data/marketplace-demo-content";
import { LawyerProfileCard } from "../composite/LawyerProfileCard";

const meta = {
  title: "Legali/Marketplace/Composite/LawyerProfileCard",
  component: LawyerProfileCard,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-profile-card.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { LawyerProfileCard } from "@/components/ui/legali/composite/LawyerProfileCard"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<LawyerProfileCard\n  lawyer={lawyer}\n  onStartConsultation={() => {}}\n/>\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FamilyLawyer: Story = {
  args: {
    lawyer: demoLawyers[0],
    onStartConsultation: () => console.log("Start consultation"),
  },
};

export const EmploymentLawyer: Story = {
  args: {
    lawyer: demoLawyers[1],
    onStartConsultation: () => console.log("Start consultation"),
  },
};
