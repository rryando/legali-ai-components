import type { Meta, StoryObj } from "@storybook/react";
import { ContactInfoField } from "../atomic/ContactInfoField";

const meta = {
  title: "Legali/Marketplace/Atomic/ContactInfoField",
  component: ContactInfoField,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-contact-info-field.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { ContactInfoField } from "@/components/ui/legali/atomic/ContactInfoField"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<ContactInfoField\n  label="Email", placeholder: "john@example.com", validation: "idle"\n/>\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    validation: { control: "select", options: ["idle", "valid", "invalid"] },
  },
} satisfies Meta<typeof ContactInfoField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {
  args: { label: "Email", placeholder: "john@example.com", validation: "idle" },
};

export const Valid: Story = {
  args: { label: "Email", value: "john@example.com", validation: "valid" },
};

export const Invalid: Story = {
  args: {
    label: "Email",
    value: "invalid",
    validation: "invalid",
    errorMessage: "Please enter a valid email address.",
  },
};
