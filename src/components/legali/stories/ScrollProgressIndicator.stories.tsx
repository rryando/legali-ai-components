import type { Meta, StoryObj } from '@storybook/react'
import { ScrollProgressIndicator } from '../composite/ScrollProgressIndicator'

const meta: Meta<typeof ScrollProgressIndicator> = {
  title: 'Legali/Composite/ScrollProgressIndicator',
  component: ScrollProgressIndicator,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollProgressIndicator>

export const Default: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '20px' }}>
      <ScrollProgressIndicator />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Scroll to see the progress indicator</h1>
        <p className="text-slate-600 mb-8">
          The progress indicator is on the left side of the screen. Scroll down to see it fill up.
        </p>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="mb-8 p-6 bg-slate-100 rounded-xl">
            <h2 className="text-xl font-bold mb-2">Section {i + 1}</h2>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const RightPosition: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '20px' }}>
      <ScrollProgressIndicator position="right" />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Right-side Progress Indicator</h1>
        <p className="text-slate-600">
          This version is positioned on the right side of the screen.
        </p>
      </div>
    </div>
  ),
}

export const NoPercentage: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '20px' }}>
      <ScrollProgressIndicator showPercentage={false} />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Without Percentage</h1>
        <p className="text-slate-600">
          This version hides the percentage display.
        </p>
      </div>
    </div>
  ),
}
