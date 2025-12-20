import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "../atomic/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Legali/Atomic/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "quiz", "module"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 65,
    variant: "default",
  },
};

export const WithLabel: Story = {
  args: {
    value: 30,
    showLabel: true,
    label: "Module Progress",
    variant: "default",
  },
};

export const Quiz: Story = {
  args: {
    value: 40,
    variant: "quiz",
  },
  decorators: [
    (Story) => (
      <div className="rounded bg-purple-600 p-4">
        <Story />
      </div>
    ),
  ],
};

export const Module: Story = {
  args: {
    value: 75,
    variant: "module",
  },
  decorators: [
    (Story) => (
      <div className="rounded bg-purple-600 p-4">
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    value: 50,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    value: 80,
    size: "lg",
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    showLabel: true,
    label: "Complete!",
  },
};

export const JustStarted: Story = {
  args: {
    value: 5,
    showLabel: true,
    label: "Just Getting Started",
  },
};
