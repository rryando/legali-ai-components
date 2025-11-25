import type { Meta, StoryObj } from '@storybook/react'
import { Answer } from '../atomic/Answer'

const meta: Meta<typeof Answer> = {
  title: 'Legali/Atomic/Answer',
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
    children: 'A) Finding the courthouse location',
    selected: false,
  },
}

export const Selected: Story = {
  args: {
    children: 'B) The process of exchanging information before trial',
    selected: true,
  },
}

export const Correct: Story = {
  args: {
    children: 'B) The process of exchanging information before trial',
    selected: true,
    correct: true,
  },
}

export const Incorrect: Story = {
  args: {
    children: 'A) Finding the courthouse location',
    selected: true,
    incorrect: true,
  },
}

export const QuizFlow: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <Answer>A) Finding the courthouse location</Answer>
      <Answer selected>B) The process of exchanging information before trial</Answer>
      <Answer>C) Discovering new evidence during trial</Answer>
      <Answer>D) Looking up legal definitions</Answer>
    </div>
  ),
}

export const WithResults: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <Answer incorrect selected>A) Finding the courthouse location</Answer>
      <Answer correct>B) The process of exchanging information before trial</Answer>
      <Answer>C) Discovering new evidence during trial</Answer>
      <Answer>D) Looking up legal definitions</Answer>
    </div>
  ),
}
