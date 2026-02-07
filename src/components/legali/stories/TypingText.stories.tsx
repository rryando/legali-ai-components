import type { Meta, StoryObj } from "@storybook/react";
import { TypingText } from "../atomic/TypingText";

const meta = {
  title: "Legali/Atomic/TypingText",
  component: TypingText,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-typing-text.json"\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    speed: { control: { type: "number", min: 10, max: 200, step: 5 } },
    delay: { control: { type: "number", min: 0, max: 2000, step: 50 } },
    showCursor: { control: "boolean" },
    cursor: { control: "text" },
    loop: { control: "boolean" },
    pauseDuration: {
      control: { type: "number", min: 0, max: 6000, step: 250 },
    },
    startOnView: { control: "boolean" },
    once: { control: "boolean" },
  },
} satisfies Meta<typeof TypingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleText: Story = {
  args: {
    text: "Hello — I’m Legali, your learning companion.",
    speed: 40,
    showCursor: true,
    cursor: "▍",
    loop: false,
    startOnView: false,
    once: false,
    className: "text-slate-800 font-semibold",
  },
};

export const MultipleTextsLoop: Story = {
  args: {
    texts: [
      "Let’s break it down step-by-step.",
      "Watch for key terms and exceptions.",
      "You’ve got this.",
    ],
    speed: 35,
    showCursor: true,
    cursor: "▍",
    loop: true,
    pauseDuration: 3000,
    startOnView: false,
    once: false,
    className: "text-slate-800 font-semibold",
  },
};
