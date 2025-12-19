import type { Meta, StoryObj } from '@storybook/react'
import { SpotlightCard } from '../atomic/SpotlightCard'

const meta: Meta<typeof SpotlightCard> = {
  title: 'Legali/Atomic/SpotlightCard',
  component: SpotlightCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpotlightCard>

export const Default: Story = {
  args: {
    children: (
      <div className="p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Spotlight Card</h3>
        <p className="text-slate-600">
          Hover over this card to see the spotlight effect follow your cursor.
        </p>
      </div>
    ),
  },
}

export const CustomColor: Story = {
  args: {
    spotlightColor: 'rgba(244, 114, 182, 0.2)',
    children: (
      <div className="p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Pink Spotlight</h3>
        <p className="text-slate-600">
          This card has a custom pink spotlight color.
        </p>
      </div>
    ),
  },
}

export const LargeSpotlight: Story = {
  args: {
    spotlightSize: 800,
    children: (
      <div className="p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Large Spotlight</h3>
        <p className="text-slate-600">
          This card has a larger spotlight radius.
        </p>
      </div>
    ),
  },
}

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      {['Analytics', 'Reports', 'Settings', 'Users'].map((title) => (
        <SpotlightCard key={title} className="p-6">
          <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-sm text-slate-600">
            Manage your {title.toLowerCase()} here.
          </p>
        </SpotlightCard>
      ))}
    </div>
  ),
}
