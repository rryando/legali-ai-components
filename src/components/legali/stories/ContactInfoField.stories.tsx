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
  args: { label: "E-Mail", placeholder: "max@beispiel.de", validation: "idle" },
};

export const Valid: Story = {
  args: { label: "E-Mail", value: "max@beispiel.de", validation: "valid" },
};

export const Invalid: Story = {
  args: {
    label: "E-Mail",
    value: "invalid",
    validation: "invalid",
    errorMessage: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  },
};
