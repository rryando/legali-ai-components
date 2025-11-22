import type { Meta, StoryObj } from '@storybook/react'
import { Answer } from '../atomic/Answer'

const meta: Meta<typeof Answer> = {
  title: 'Legal Learn/Atomic/Answer',
  component: Answer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Answer>

export const Default: Story = {
  args: {
    text: 'A) Finding the courthouse location',
    selected: false,
    showResult: false,
  },
}

export const Selected: Story = {
  args: {
    text: 'B) The process of exchanging information before trial',
    selected: true,
    showResult: false,
  },
}

export const Correct: Story = {
  args: {
    text: 'B) The process of exchanging information before trial',
    selected: true,
    correct: true,
    showResult: true,
  },
}

export const Incorrect: Story = {
  args: {
    text: 'A) Finding the courthouse location',
    selected: true,
    incorrect: true,
    showResult: true,
  },
}

export const QuizFlow: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <Answer text="A) Finding the courthouse location" />
      <Answer text="B) The process of exchanging information before trial" selected />
      <Answer text="C) Discovering new evidence during trial" />
      <Answer text="D) Looking up legal definitions" />
    </div>
  ),
}

export const WithResults: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <Answer text="A) Finding the courthouse location" incorrect selected showResult />
      <Answer text="B) The process of exchanging information before trial" correct showResult />
      <Answer text="C) Discovering new evidence during trial" showResult />
      <Answer text="D) Looking up legal definitions" showResult />
    </div>
  ),
}
