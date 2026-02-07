import type { Meta, StoryObj } from "@storybook/react";
import { demoReceipt } from "../data/marketplace-demo-content";
import { ConsultationReceipt } from "../composite/ConsultationReceipt";

const meta = {
  title: "Legali/Marketplace/Composite/ConsultationReceipt",
  component: ConsultationReceipt,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-consultation-receipt.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ConsultationReceipt } from "@/components/ui/legali/composite/ConsultationReceipt"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ConsultationReceipt\n  receipt={receiptData}\n  onDownload={() => {}}\n  onShare={() => {}}\n  onReturnHome={() => {}}\n/>\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ConsultationReceipt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    receipt: demoReceipt,
    onDownload: () => console.log("Download"),
    onShare: () => console.log("Share"),
    onReturnHome: () => console.log("Return home"),
  },
};
