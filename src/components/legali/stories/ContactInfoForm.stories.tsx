import type { Meta, StoryObj } from "@storybook/react";
import { ContactInfoForm } from "../composite/ContactInfoForm";

const meta = {
  title: "Legali/Marketplace/Composite/ContactInfoForm",
  component: ContactInfoForm,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-contact-info-form.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ContactInfoForm } from "@/components/ui/legali/composite/ContactInfoForm"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ContactInfoForm onSubmit={() => {}} />\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactInfoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (info) => console.log("Submitted:", info),
  },
};
