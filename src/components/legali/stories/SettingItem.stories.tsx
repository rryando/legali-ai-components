import type { Meta, StoryObj } from "@storybook/react"
import { SettingItem } from "../atomic/SettingItem"
import { Bell, Moon, Shield, User } from "lucide-react"

const meta = {
  title: "Legali/Atomic/SettingItem",
  component: SettingItem,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: {
      control: "select",
      options: ["switch", "arrow"],
    },
    value: { control: "boolean" },
  },
} satisfies Meta<typeof SettingItem>

export default meta
type Story = StoryObj<typeof meta>

export const SwitchType: Story = {
  args: {
    icon: Bell,
    label: "Notifications",
    type: "switch",
    value: true,
  },
}

export const SwitchOff: Story = {
  args: {
    icon: Moon,
    label: "Dark Mode",
    type: "switch",
    value: false,
  },
}

export const ArrowType: Story = {
  args: {
    icon: User,
    label: "Account Settings",
    type: "arrow",
  },
}

export const SecuritySettings: Story = {
  args: {
    icon: Shield,
    label: "Privacy & Security",
    type: "arrow",
  },
}
