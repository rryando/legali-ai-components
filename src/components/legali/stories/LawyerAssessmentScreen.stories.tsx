import type { Meta, StoryObj } from "@storybook/react";
import { assessmentWritingScript } from "../data/marketplace-demo-content";
import { LawyerAssessmentScreen } from "../screens/LawyerAssessmentScreen";

const meta = {
  title: "Legali/Marketplace/Screens/LawyerAssessmentScreen",
  component: LawyerAssessmentScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lawyer-assessment-screen.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LawyerAssessmentScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    script: assessmentWritingScript,
    onAssessmentComplete: (a) => console.log("Assessment complete:", a),
  },
};
