import type { Meta, StoryObj } from "@storybook/react";
import { intakeChatScript } from "../data/marketplace-demo-content";
import { IntakeChatPanel } from "../composite/IntakeChatPanel";

const meta = {
  title: "Legali/Marketplace/Composite/IntakeChatPanel",
  component: IntakeChatPanel,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-intake-chat-panel.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { IntakeChatPanel } from "@/components/ui/legali/composite/IntakeChatPanel"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<IntakeChatPanel script={script} onComplete={() => {}} />\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IntakeChatPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    script: intakeChatScript,
    onComplete: (messages, contactInfo) => console.log("Complete:", { messages, contactInfo }),
  },
};
