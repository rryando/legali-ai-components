import type { Meta, StoryObj } from "@storybook/react";
import { ContactInfoForm } from "../composite/ContactInfoForm";

const meta = {
  title: "Legali/Marketplace/Composite/ContactInfoForm",
  component: ContactInfoForm,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactInfoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (info) => console.log("Submitted:", info),
  },
};
