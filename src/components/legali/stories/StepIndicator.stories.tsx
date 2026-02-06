import type { Meta, StoryObj } from "@storybook/react";
import { StepIndicator } from "../atomic/StepIndicator";

const meta = {
  title: "Legali/Marketplace/Atomic/StepIndicator",
  component: StepIndicator,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

const STEPS = [
  { label: "Aufnahme" },
  { label: "Matching" },
  { label: "Beratung" },
  { label: "Beleg" },
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
