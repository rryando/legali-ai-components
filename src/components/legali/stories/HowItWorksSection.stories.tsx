import type { Meta, StoryObj } from "@storybook/react";
import { HowItWorksSection } from "../landing/HowItWorksSection";

const meta: Meta<typeof HowItWorksSection> = {
  title: "Legali/Landing/HowItWorksSection",
  component: HowItWorksSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-how-it-works-section.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { HowItWorksSection } from "@/components/ui/legali/landing/HowItWorksSection"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<HowItWorksSection />\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HowItWorksSection>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: (
      <>
        Get started in
        <br />
        <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          minutes
        </span>
      </>
    ),
  },
};
