import type { Meta, StoryObj } from "@storybook/react";
import { QuizHeader } from "../composite/QuizHeader";

const meta = {
  title: "Legali/Composite/QuizHeader",
  component: QuizHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    currentQuestion: { control: "number" },
    totalQuestions: { control: "number" },
    progress: { control: { type: "range", min: 0, max: 100 } },
  },
} satisfies Meta<typeof QuizHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentQuestion: 1,
    totalQuestions: 5,
    progress: 20,
    onClose: () => console.log("Close clicked"),
  },
};

export const Halfway: Story = {
  args: {
    currentQuestion: 3,
    totalQuestions: 5,
    progress: 60,
    onClose: () => console.log("Close clicked"),
  },
};

export const NearEnd: Story = {
  args: {
    currentQuestion: 5,
    totalQuestions: 5,
    progress: 100,
    onClose: () => console.log("Close clicked"),
  },
};
