import type { Meta, StoryObj } from "@storybook/react";
import { ProblemSection } from "../landing/ProblemSection";

const meta: Meta<typeof ProblemSection> = {
  title: "Legali/Landing/ProblemSection",
  component: ProblemSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-problem-section.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProblemSection>;

export const Default: Story = {};

export const CustomMascotMessage: Story = {
  args: {
    mascotMessage: (
      <>
        "We believe everyone deserves{" "}
        <span className="font-bold text-[#4eaed0]">access to justice</span>, regardless of their
        background or financial situation."
      </>
    ),
  },
};
