import type { Meta, StoryObj } from '@storybook/react'
import { LandingHero } from '../landing/LandingHero'
import { FileSearch, Gavel, Scale } from 'lucide-react'

const meta: Meta<typeof LandingHero> = {
  title: 'Legali/Landing/LandingHero',
  component: LandingHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LandingHero>

export const Default: Story = {
  args: {
    onGetStarted: () => console.log('Get started clicked'),
  },
}

export const CustomQuickActions: Story = {
  args: {
    onGetStarted: () => console.log('Get started clicked'),
    quickActions: [
      { icon: <FileSearch className="w-4 h-4" />, label: 'Contract Review' },
      { icon: <Gavel className="w-4 h-4" />, label: 'Court Filing' },
      { icon: <Scale className="w-4 h-4" />, label: 'Dispute Resolution' },
    ],
  },
}

export const CustomStats: Story = {
  args: {
    onGetStarted: () => console.log('Get started clicked'),
    stats: [
      { target: 100, suffix: 'K+', label: 'Documents Processed' },
      { target: 99, suffix: '%', label: 'Uptime' },
      { target: 24, suffix: '/7', label: 'Support' },
      { target: 50, suffix: '+', label: 'Integrations' },
    ],
  },
}

export const CustomPlaceholders: Story = {
  args: {
    onGetStarted: () => console.log('Get started clicked'),
    placeholderPhrases: [
      'How do I form an LLC?',
      'Review my employment contract...',
      'What are my rights as a renter?',
    ],
  },
}
