import type { Meta, StoryObj } from "@storybook/react";
import { FeaturesSection } from "../landing/FeaturesSection";

const meta: Meta<typeof FeaturesSection> = {
  title: "Legali/Landing/FeaturesSection",
  component: FeaturesSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-features-section.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: (
      <>
        Powerful tools for
        <br />
        <span className="bg-gradient-to-r from-[#4eaed0] to-[#667eea] bg-clip-text text-transparent">
          legal professionals
        </span>
      </>
    ),
  },
};
