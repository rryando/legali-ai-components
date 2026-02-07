import type { Meta, StoryObj } from "@storybook/react";
import { StepIndicator } from "../atomic/StepIndicator";

const meta = {
  title: "Legali/Marketplace/Atomic/StepIndicator",
  component: StepIndicator,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-step-indicator.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { StepIndicator } from "@/components/ui/legali/atomic/StepIndicator"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<StepIndicator steps={STEPS, currentStep: 0} />\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

const STEPS = [
  { label: "Intake" },
  { label: "Matching" },
  { label: "Consultation" },
  { label: "Receipt" },
];

export const Step1: Story = {
  args: { steps: STEPS, currentStep: 0 },
};

export const Step2: Story = {
  args: { steps: STEPS, currentStep: 1 },
};

export const Step3: Story = {
  args: { steps: STEPS, currentStep: 2 },
};

export const AllComplete: Story = {
  args: { steps: STEPS, currentStep: 4 },
};
