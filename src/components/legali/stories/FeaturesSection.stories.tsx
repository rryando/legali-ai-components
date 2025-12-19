import type { Meta, StoryObj } from '@storybook/react'
import { FeaturesSection } from '../landing/FeaturesSection'

const meta: Meta<typeof FeaturesSection> = {
  title: 'Legali/Landing/FeaturesSection',
  component: FeaturesSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FeaturesSection>

export const Default: Story = {}

export const CustomTitle: Story = {
  args: {
    title: (
      <>
        Powerful tools for
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4eaed0] to-[#667eea]">
          legal professionals
        </span>
      </>
    ),
  },
}
