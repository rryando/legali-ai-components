import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  MascotHeroCard,
  type MascotHeroScriptStep,
} from "../composite/MascotHeroCard";
import { MascotMotion } from "../mascot";

const meta = {
  title: "Legali/Composite/MascotHeroCard",
  component: MascotHeroCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MascotHeroCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseScript: MascotHeroScriptStep[] = [
  {
    motion: MascotMotion.WAVING,
    durationMs: 2000,
    lines: ["Hey!", "Ready to learn?", "Pick a module to continue"],
  },
  {
    motion: MascotMotion.SPEAKING,
    durationMs: 5000,
    lines: [
      "I’ll guide you through this.",
      "Watch for key terms.",
      "You’ve got this.",
    ],
  },
  {
    motion: MascotMotion.IDLE,
    durationMs: null,
    lines: ["Tap any module when you’re ready"],
  },
];

export const Default: Story = {
  args: {
    heroTitle: "Discovery Fundamentals",
    script: baseScript,
    stream: {
      fitToStepDuration: true,
      loop: true,
      showCursor: true,
      linePauseMs: 3000,
    },
  },
};

export const InterruptDemo: Story = {
  render: (args) => {
    const [trigger, setTrigger] = React.useState(0);

    return (
      <div className="space-y-4">
        <MascotHeroCard {...args} triggerKey={trigger} />
        <button
          className="rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white"
          onClick={() => setTrigger((v) => v + 1)}
        >
          Interrupt
        </button>
      </div>
    );
  },
  args: {
    heroTitle: "Interruptible Script",
    script: baseScript,
    interruptScript: [
      {
        motion: MascotMotion.THINKING,
        durationMs: 450,
        lines: ["Hmm…", "One moment"],
      },
      {
        motion: MascotMotion.SPEAKING,
        durationMs: 2500,
        lines: ["Okay — switching focus."],
      },
      { motion: MascotMotion.IDLE, durationMs: null, lines: ["Ready."] },
    ],
    stream: {
      fitToStepDuration: true,
      loop: true,
      showCursor: true,
      linePauseMs: 3000,
    },
  },
};
