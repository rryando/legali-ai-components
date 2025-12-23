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

## Speech Bubble Feature

The mascot can display an animated speech bubble with typing text effect. When \`speechText\` or \`speechTexts\` is provided:
- The mascot automatically switches to the **SPEAKING** motion
- An animated speech bubble appears with the \`TypingText\` component
- Supports configurable position, speed, looping, and styling

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`speechText\` | string | - | Single text to display |
| \`speechTexts\` | string[] | - | Array of texts to cycle through |
| \`speechSpeed\` | number | 40 | Typing speed in ms per character |
| \`speechLoop\` | boolean | false | Whether to loop through texts |
| \`speechPauseDuration\` | number | 2000 | Pause between text cycles |
| \`speechBubblePosition\` | SpeechBubblePosition | "top-right" | Bubble position |
| \`speechBubbleClassName\` | string | - | Custom CSS classes for styling |
| \`showCursor\` | boolean | true | Show typing cursor |
| \`onSpeechComplete\` | () => void | - | Callback when typing finishes |
| \`speechBubbleMaxWidth\` | number | 200 | Max width of the bubble |
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

// ─────────────────────────────────────────────────────────────────────────────
// Speech Bubble Stories
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Speech bubble with single text.
 * When speechText is provided, the mascot automatically switches to SPEAKING motion
 * and displays an animated speech bubble with typing effect.
 */
export const SpeechBubble: Story = {
  args: {
    speechText: "Hello! I'm your legal assistant. How can I help you today?",
    speechBubblePosition: "top-right",
    speechSpeed: 35,
    showCursor: true,
    width: 300,
    height: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The mascot with an animated speech bubble. The mascot automatically transitions to the SPEAKING animation when speech text is provided.",
      },
    },
  },
};

/**
 * Speech bubble with multiple texts that cycle.
 * Uses the speechTexts array with looping enabled.
 */
export const SpeechBubbleMultipleTexts: Story = {
  args: {
    speechTexts: [
      "Did you know? You have the right to represent yourself in court.",
      "I can help you understand legal documents and procedures.",
      "Ask me anything about your legal questions!",
    ],
    speechLoop: true,
    speechPauseDuration: 3000,
    speechBubblePosition: "top-right",
    speechSpeed: 30,
    showCursor: true,
    width: 300,
    height: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Speech bubble that cycles through multiple texts. Great for onboarding tips or feature highlights.",
      },
    },
  },
};

/**
 * Speech bubble position: Top
 * Demonstrates the speech bubble positioned at the top center.
 */
export const SpeechBubbleTop: Story = {
  args: {
    speechText: "I'm positioned at the top!",
    speechBubblePosition: "top",
    speechSpeed: 40,
    width: 300,
    height: 300,
  },
};

/**
 * Speech bubble position: Top Left
 * Demonstrates the speech bubble positioned at top-left.
 */
export const SpeechBubbleTopLeft: Story = {
  args: {
    speechText: "Looking to the left side!",
    speechBubblePosition: "top-left",
    speechSpeed: 40,
    width: 300,
    height: 300,
  },
};

/**
 * Speech bubble position: Left
 * Demonstrates the speech bubble positioned on the left side.
 */
export const SpeechBubbleLeft: Story = {
  args: {
    speechText: "Speech bubble on the left!",
    speechBubblePosition: "left",
    speechSpeed: 40,
    width: 300,
    height: 300,
  },
};

/**
 * Speech bubble position: Right
 * Demonstrates the speech bubble positioned on the right side.
 */
export const SpeechBubbleRight: Story = {
  args: {
    speechText: "Speech bubble on the right!",
    speechBubblePosition: "right",
    speechSpeed: 40,
    width: 300,
    height: 300,
  },
};

/**
 * Speech bubble with custom styling.
 * Demonstrates custom className for the speech bubble.
 */
export const SpeechBubbleCustomStyle: Story = {
  args: {
    speechText: "I have a custom gradient background!",
    speechBubblePosition: "top-right",
    speechBubbleClassName: "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200",
    speechBubbleMaxWidth: 250,
    speechSpeed: 35,
    showCursor: true,
    width: 300,
    height: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Speech bubble with custom CSS classes for styling. You can customize the appearance using Tailwind classes.",
      },
    },
  },
};

/**
 * Speech bubble with wider max width.
 * Useful for longer messages.
 */
export const SpeechBubbleWide: Story = {
  args: {
    speechText:
      "This is a longer message that demonstrates the wider speech bubble. It's great for providing detailed explanations or instructions to users!",
    speechBubblePosition: "top",
    speechBubbleMaxWidth: 350,
    speechSpeed: 25,
    showCursor: true,
    width: 300,
    height: 300,
  },
};

/**
 * Speech bubble without cursor.
 * A cleaner look without the typing cursor.
 */
export const SpeechBubbleNoCursor: Story = {
  args: {
    speechText: "No cursor for a cleaner look!",
    speechBubblePosition: "top-right",
    speechSpeed: 40,
    showCursor: false,
    width: 300,
    height: 300,
  },
};

/**
 * Fast typing speed.
 * Demonstrates a faster typing animation.
 */
export const SpeechBubbleFastTyping: Story = {
  args: {
    speechText: "Super fast typing speed for quick messages!",
    speechBubblePosition: "top-right",
    speechSpeed: 15,
    showCursor: true,
    width: 300,
    height: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Speech bubble with fast typing speed (15ms per character). Good for short, snappy messages.",
      },
    },
  },
};

/**
 * Slow typing speed.
 * Demonstrates a slower, more dramatic typing animation.
 */
export const SpeechBubbleSlowTyping: Story = {
  args: {
    speechText: "Slow and dramatic typing...",
    speechBubblePosition: "top-right",
    speechSpeed: 80,
    showCursor: true,
    width: 300,
    height: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Speech bubble with slow typing speed (80ms per character). Creates a more dramatic, suspenseful effect.",
      },
    },
  },
};
