import type { Meta, StoryObj } from "@storybook/react"
import { ProgressScreen } from "../screens/ProgressScreen"

const meta = {
  title: "Legali/Screens/ProgressScreen",
  component: ProgressScreen,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    weeklyActivity: [
      { day: "Mon", xp: 120 },
      { day: "Tue", xp: 200 },
      { day: "Wed", xp: 150 },
      { day: "Thu", xp: 300 },
      { day: "Fri", xp: 250 },
      { day: "Sat", xp: 180 },
      { day: "Sun", xp: 100 },
    ],
    skills: [
      { name: "Civil Procedure", progress: 75, color: "bg-blue-500" },
      { name: "Torts", progress: 45, color: "bg-rose-500" },
      { name: "Contracts", progress: 30, color: "bg-amber-500" },
      { name: "Criminal Law", progress: 60, color: "bg-emerald-500" },
      { name: "Constitutional Law", progress: 15, color: "bg-purple-500" },
    ],
    recentActivity: [
      { title: "Intro to Torts", date: "Today, 10:30 AM", score: 100 },
      { title: "Contract Formation", date: "Yesterday", score: 85 },
      { title: "Civil Procedure Basics", date: "2 days ago", score: 90 },
    ],
  },
}

export const EmptyState: Story = {
  args: {
    weeklyActivity: [
      { day: "Mon", xp: 0 },
      { day: "Tue", xp: 0 },
      { day: "Wed", xp: 0 },
      { day: "Thu", xp: 0 },
      { day: "Fri", xp: 0 },
      { day: "Sat", xp: 0 },
      { day: "Sun", xp: 0 },
    ],
    skills: [],
    recentActivity: [],
  },
}
