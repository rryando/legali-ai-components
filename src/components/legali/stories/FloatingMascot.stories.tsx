import type { Meta, StoryObj } from '@storybook/react'
import { FloatingMascot } from '../composite/FloatingMascot'

const meta: Meta<typeof FloatingMascot> = {
  title: 'Legali/Composite/FloatingMascot',
  component: FloatingMascot,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FloatingMascot>

export const Default: Story = {
  render: () => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <FloatingMascot />
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Floating Mascot Demo</h1>
        <p className="text-slate-600 mb-4">
          The mascot floats in the bottom-right corner. Click it 5 times for an easter egg!
        </p>
        <p className="text-slate-600">
          The mascot changes poses based on which section is in view. Scroll through a page
          with sections to see it react to different content.
        </p>
      </div>
    </div>
  ),
}

export const LargerSize: Story = {
  args: {
    size: 120,
  },
  render: (args) => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <FloatingMascot {...args} />
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Larger Mascot</h1>
        <p className="text-slate-600">This mascot is larger than the default size.</p>
      </div>
    </div>
  ),
}

export const CustomSections: Story = {
  args: {
    sections: ['intro', 'features', 'pricing'],
    onSectionChange: (section) => console.log('Section changed to:', section),
  },
  render: (args) => (
    <div style={{ height: '100vh', position: 'relative' }}>
      <FloatingMascot {...args} />
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Custom Sections</h1>
        <p className="text-slate-600">
          This mascot is configured to track custom sections. Check the console for section changes.
        </p>
      </div>
    </div>
  ),
}
