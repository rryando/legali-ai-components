import type { Meta, StoryObj } from "@storybook/react";
import { LegaliMascot, MascotMotion, MascotMotionLabels } from "../mascot";

const meta: Meta<typeof LegaliMascot> = {
  title: "Legali/Mascot/LegaliMascot",
  component: LegaliMascot,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **LegaliMascot** component displays an animated mascot character using Rive animations.
It supports multiple motion states and blinking control through View Model data binding.

## View Model: VM_MASCOT

| Property | Type | Description |
|----------|------|-------------|
| \`isBlink\` | Boolean | Controls blinking animation |
| \`animates\` | MOTIONS (Enum) | Controls which motion animation to play |

## Available Motions

EXIT, NORMAL, LAPTOP, WRITING, IDLE, THINKING, CRYING, SPEAKING, CONFUSED, WAVING, SHRUG, CELEBRATE
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    motion: {
      control: "select",
      options: Object.values(MascotMotion),
      mapping: MascotMotion,
      labels: MascotMotionLabels,
      description: "The current motion/animation state to display",
    },
    isBlink: {
      control: "boolean",
      description: "Whether the mascot should blink",
    },
    width: {
      control: { type: "range", min: 100, max: 500, step: 50 },
      description: "Width of the canvas container",
    },
    height: {
      control: { type: "range", min: 100, max: 500, step: 50 },
      description: "Height of the canvas container",
    },
    src: {
      control: "text",
      description: "Path to the .riv animation file",
    },
    stateMachine: {
      control: "text",
      description: "Name of the state machine to use",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LegaliMascot>;

/**
 * Default idle state animation.
 * The mascot displays its idle animation with blinking enabled.
 */
export const Default: Story = {
  args: {
    motion: MascotMotion.IDLE,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * Thinking animation.
 * Use this when the mascot is "pondering" or waiting for something.
 */
export const Thinking: Story = {
  args: {
    motion: MascotMotion.THINKING,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * Speaking animation.
 * Perfect for when the mascot is "talking" to the user.
 */
export const Speaking: Story = {
  args: {
    motion: MascotMotion.SPEAKING,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * Celebration animation.
 * Great for success states and achievements!
 */
export const Celebrate: Story = {
  args: {
    motion: MascotMotion.CELEBRATE,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * Waving animation.
 * A friendly wave for greetings.
 */
export const Waving: Story = {
  args: {
    motion: MascotMotion.WAVING,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * Working on laptop animation.
 * Shows the mascot busy at work.
 */
export const Laptop: Story = {
  args: {
    motion: MascotMotion.LAPTOP,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * Writing animation.
 * Shows the mascot writing or taking notes.
 */
export const Writing: Story = {
  args: {
    motion: MascotMotion.WRITING,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * Confused animation.
 * Use when something is unclear or needs explanation.
 */
export const Confused: Story = {
  args: {
    motion: MascotMotion.CONFUSED,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * Crying animation.
 * For error states or sad moments.
 */
export const Crying: Story = {
  args: {
    motion: MascotMotion.CRYING,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * Shrug animation.
 * For uncertain situations.
 */
export const Shrug: Story = {
  args: {
    motion: MascotMotion.SHRUG,
    isBlink: true,
    width: 300,
    height: 300,
  },
};

/**
 * No blinking demonstration.
 * Shows the mascot with blinking disabled.
 */
export const NoBlink: Story = {
  args: {
    motion: MascotMotion.NORMAL,
    isBlink: false,
    width: 300,
    height: 300,
  },
};

/**
 * Small size variant.
 * Demonstrates the mascot at a smaller size.
 */
export const Small: Story = {
  args: {
    motion: MascotMotion.IDLE,
    isBlink: true,
    width: 150,
    height: 150,
  },
};

/**
 * Large size variant.
 * Demonstrates the mascot at a larger size.
 */
export const Large: Story = {
  args: {
    motion: MascotMotion.IDLE,
    isBlink: true,
    width: 400,
    height: 400,
  },
};
