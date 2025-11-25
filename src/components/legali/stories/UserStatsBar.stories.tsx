import type { Meta, StoryObj } from "@storybook/react"
import { UserStatsBar } from "../composite/UserStatsBar"

const meta = {
  title: "Legali/Composite/UserStatsBar",
  component: UserStatsBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    streak: { control: "number" },
    points: { control: "number" },
    hearts: { control: "number" },
    maxHearts: { control: "number" },
  },
} satisfies Meta<typeof UserStatsBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    streak: 5,
    points: 1250,
    hearts: 5,
    maxHearts: 5,
  },
}

export const LowHearts: Story = {
  args: {
    streak: 12,
    points: 3400,
    hearts: 1,
    maxHearts: 5,
  },
}

export const HighStreak: Story = {
  args: {
    streak: 100,
    points: 50000,
    hearts: 5,
    maxHearts: 5,
  },
}
