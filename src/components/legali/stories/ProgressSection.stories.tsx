import type { Meta, StoryObj } from "@storybook/react";
import { ProgressSection } from "../composite/ProgressSection";

const meta = {
  title: "Legali/Composite/ProgressSection",
  component: ProgressSection,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-progress-section.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ProgressSection } from "@/components/ui/legali/composite/ProgressSection"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ProgressSection\n  title="Module Progress"\n  progress={45}\n  variant="header"\n  showPercentage\n/>\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    progress: { control: { type: "range", min: 0, max: 100 } },
    variant: {
      control: "select",
      options: ["header", "card"],
    },
    showPercentage: { control: "boolean" },
  },
} satisfies Meta<typeof ProgressSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderVariant: Story = {
  args: {
    title: "Module Progress",
    progress: 45,
    variant: "header",
    showPercentage: true,
  },
};

export const CardVariant: Story = {
  args: {
    title: "Daily Goal",
    progress: 80,
    variant: "card",
    showPercentage: true,
  },
};

export const NoPercentage: Story = {
  args: {
    title: "Loading...",
    progress: 20,
    variant: "card",
    showPercentage: false,
  },
};
