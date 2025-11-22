import type { Meta, StoryObj } from '@storybook/react'
import { StatItem } from '../atomic/StatItem'

const meta: Meta<typeof StatItem> = {
  title: 'Legal Learn/Atomic/StatItem',
  component: StatItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'streak', 'points', 'hearts'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof StatItem>

export const Streak: Story = {
  args: {
    icon: '🔥',
    value: 7,
    label: 'day streak',
    variant: 'streak',
  },
}

export const Points: Story = {
  args: {
    icon: '⭐',
    value: 340,
    label: 'XP',
    variant: 'points',
  },
}

export const Hearts: Story = {
  args: {
    icon: '❤️',
    value: '5/5',
    variant: 'hearts',
  },
}

export const Default: Story = {
  args: {
    icon: '📊',
    value: 42,
    label: 'items',
    variant: 'default',
  },
}

export const Small: Story = {
  args: {
    icon: '🔥',
    value: 10,
    label: 'days',
    variant: 'streak',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    icon: '⭐',
    value: 1000,
    label: 'XP',
    variant: 'points',
    size: 'lg',
  },
}
