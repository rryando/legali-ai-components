import type { Meta, StoryObj } from "@storybook/react";
import { LessonDot } from "../atomic/LessonDot";

const meta: Meta<typeof LessonDot> = {
  title: "Legali/Atomic/LessonDot",
  component: LessonDot,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lesson-dot.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LessonDot>;

export const Pending: Story = {
  args: {
    completed: false,
    current: false,
    locked: false,
  },
};

export const Current: Story = {
  args: {
    completed: false,
    current: true,
    locked: false,
  },
};

export const Completed: Story = {
  args: {
    completed: true,
    current: false,
    locked: false,
  },
};

export const Locked: Story = {
  args: {
    completed: false,
    current: false,
    locked: true,
  },
};

export const ProgressSequence: Story = {
  render: () => (
    <div className="flex gap-2">
      <LessonDot completed />
      <LessonDot completed />
      <LessonDot current />
      <LessonDot />
      <LessonDot />
    </div>
  ),
};

export const LockedSequence: Story = {
  render: () => (
    <div className="flex gap-2">
      <LessonDot locked />
      <LessonDot locked />
      <LessonDot locked />
      <LessonDot locked />
    </div>
  ),
};

export const CompletedSequence: Story = {
  render: () => (
    <div className="flex gap-2">
      <LessonDot completed />
      <LessonDot completed />
      <LessonDot completed />
      <LessonDot completed />
    </div>
  ),
};
