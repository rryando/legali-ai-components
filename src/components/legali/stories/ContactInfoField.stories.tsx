import type { Meta, StoryObj } from "@storybook/react";
import { ContactInfoField } from "../atomic/ContactInfoField";

const meta = {
  title: "Legali/Marketplace/Atomic/ContactInfoField",
  component: ContactInfoField,
  parameters: { layout: "padded" },
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
