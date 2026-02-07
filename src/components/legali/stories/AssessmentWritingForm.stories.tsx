import type { Meta, StoryObj } from "@storybook/react";
import { AssessmentWritingForm } from "../composite/AssessmentWritingForm";

const meta = {
  title: "Legali/Marketplace/Composite/AssessmentWritingForm",
  component: AssessmentWritingForm,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-assessment-writing-form.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { AssessmentWritingForm } from "@/components/ui/legali/composite/AssessmentWritingForm"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<AssessmentWritingForm activeFieldKey="summary" />\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[520px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AssessmentWritingForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    fields: [
      { key: "summary", label: "Summary", value: "", isComplete: false },
      { key: "strengths", label: "Strengths", value: "", isComplete: false },
    ],
    activeFieldKey: "summary",
  },
};

export const PartiallyFilled: Story = {
  args: {
    fields: [
      {
        key: "summary",
        label: "Summary",
        value: "The case has good prospects for an amicable resolution.",
        isComplete: true,
      },
      {
        key: "strengths",
        label: "Strengths",
        value: "Mutual agreement between both parties\nClear financial situation",
        isComplete: true,
      },
      { key: "concerns", label: "Concerns", value: "", isComplete: false },
    ],
    activeFieldKey: "concerns",
  },
};

export const Complete: Story = {
  args: {
    fields: [
      {
        key: "summary",
        label: "Summary",
        value: "The case has good prospects for an amicable resolution.",
        isComplete: true,
      },
      {
        key: "strengths",
        label: "Strengths",
        value:
          "Mutual agreement between both parties\nClear financial situation\nBoth parents cooperative",
        isComplete: true,
      },
      {
        key: "concerns",
        label: "Concerns",
        value: "Property valuation may become complex\nTax implications need attention",
        isComplete: true,
      },
      {
        key: "timeline",
        label: "Timeline",
        value: "3-6 months",
        isComplete: true,
      },
      {
        key: "costRange",
        label: "Cost Range",
        value: "$2,500 - $4,500",
        isComplete: true,
      },
      {
        key: "decision",
        label: "Decision",
        value: "accepted",
        isComplete: true,
      },
    ],
  },
};
