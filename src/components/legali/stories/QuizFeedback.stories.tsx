import type { Meta, StoryObj } from "@storybook/react";
import { QuizFeedback } from "../composite/QuizFeedback";

const meta = {
  title: "Legali/Composite/QuizFeedback",
  component: QuizFeedback,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    show: { control: "boolean" },
    correct: { control: "boolean" },
    explanation: { control: "text" },
  },
} satisfies Meta<typeof QuizFeedback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Correct: Story = {
  args: {
    show: true,
    correct: true,
    explanation:
      "Great job! You correctly identified the key requirement for small claims court eligibility.",
    onContinue: () => console.log("Continue clicked"),
  },
  decorators: [
    (Story) => (
      <div className="relative h-64 bg-slate-100">
        <Story />
      </div>
    ),
  ],
};

export const Incorrect: Story = {
  args: {
    show: true,
    correct: false,
    explanation:
      "Not quite. Remember that small claims court has a monetary limit on the amount you can sue for.",
    onContinue: () => console.log("Continue clicked"),
  },
  decorators: [
    (Story) => (
      <div className="relative h-64 bg-slate-100">
        <Story />
      </div>
    ),
  ],
};
