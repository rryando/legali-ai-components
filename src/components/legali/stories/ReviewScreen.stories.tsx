import type { Meta, StoryObj } from "@storybook/react";
import { ReviewScreen } from "../screens/ReviewScreen";

const meta = {
  title: "Legali/Screens/ReviewScreen",
  component: ReviewScreen,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-review-screen.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ReviewScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleQuestions = [
  {
    id: "q1",
    question: "What is the maximum amount you can sue for in small claims court in California?",
    answers: [
      { id: "a", text: "$5,000", correct: false },
      { id: "b", text: "$10,000", correct: true },
      { id: "c", text: "$12,500", correct: false },
      { id: "d", text: "$25,000", correct: false },
    ],
    explanation: "In California, an individual can sue for up to $10,000 in small claims court.",
  },
  {
    id: "q2",
    question: "Which of the following is NOT a valid reason to sue in small claims court?",
    answers: [
      { id: "a", text: "Unpaid rent", correct: false },
      { id: "b", text: "Property damage", correct: false },
      { id: "c", text: "Divorce", correct: true },
      { id: "d", text: "Breach of contract", correct: false },
    ],
    explanation:
      "Family law matters like divorce are handled in family court, not small claims court.",
  },
];

export const Default: Story = {
  args: {
    questions: sampleQuestions,
    userAnswers: {
      q1: "b", // Correct
      q2: "a", // Incorrect
    },
    onClose: () => console.log("Close clicked"),
  },
};

export const AllCorrect: Story = {
  args: {
    questions: sampleQuestions,
    userAnswers: {
      q1: "b",
      q2: "c",
    },
    onClose: () => console.log("Close clicked"),
  },
};

export const AllIncorrect: Story = {
  args: {
    questions: sampleQuestions,
    userAnswers: {
      q1: "a",
      q2: "a",
    },
    onClose: () => console.log("Close clicked"),
  },
};
