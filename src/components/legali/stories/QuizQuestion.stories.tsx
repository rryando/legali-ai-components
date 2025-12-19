import type { Meta, StoryObj } from "@storybook/react";
import { QuizQuestion } from "../composite/QuizQuestion";

const meta = {
  title: "Legali/Composite/QuizQuestion",
  component: QuizQuestion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    question: { control: "text" },
    questionNumber: { control: "number" },
  },
} satisfies Meta<typeof QuizQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    question: "What is the maximum amount you can sue for in small claims court in California?",
    questionNumber: 1,
  },
};

export const LongQuestion: Story = {
  args: {
    question:
      "If a tenant moves out and the landlord does not return the security deposit within 21 days, what is the first step the tenant should take before filing a lawsuit?",
    questionNumber: 2,
  },
};

export const NoNumber: Story = {
  args: {
    question: "Which of the following is NOT a valid reason to sue in small claims court?",
  },
};
