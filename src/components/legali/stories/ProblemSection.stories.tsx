import type { Meta, StoryObj } from '@storybook/react'
import { ProblemSection } from '../landing/ProblemSection'

const meta: Meta<typeof ProblemSection> = {
  title: 'Legali/Landing/ProblemSection',
  component: ProblemSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProblemSection>

export const Default: Story = {}

export const CustomMascotMessage: Story = {
  args: {
    mascotMessage: (
      <>
        "We believe everyone deserves{' '}
        <span className="text-[#4eaed0] font-bold">access to justice</span>,
        regardless of their background or financial situation."
      </>
    ),
  },
}
