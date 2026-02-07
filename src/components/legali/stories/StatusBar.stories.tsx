import type { Meta, StoryObj } from "@storybook/react";
import { StatusBar } from "../atomic/StatusBar";

const meta = {
  title: "Legali/Atomic/StatusBar",
  component: StatusBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-status-bar.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { StatusBar } from "@/components/ui/legali/atomic/StatusBar"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<StatusBar time="9:41" showIcons />\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    time: { control: "text" },
    showIcons: { control: "boolean" },
  },
} satisfies Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    time: "9:41",
    showIcons: true,
  },
};

export const CustomTime: Story = {
  args: {
    time: "12:00",
    showIcons: true,
  },
};

export const NoIcons: Story = {
  args: {
    time: "10:30",
    showIcons: false,
  },
};
