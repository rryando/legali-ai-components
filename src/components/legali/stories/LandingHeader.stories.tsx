import type { Meta, StoryObj } from '@storybook/react'
import { LandingHeader } from '../landing/LandingHeader'

const meta: Meta<typeof LandingHeader> = {
  title: 'Legali/Landing/LandingHeader',
  component: LandingHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LandingHeader>

export const Default: Story = {
  render: () => (
    <div style={{ height: '200vh' }}>
      <LandingHeader onGetStarted={() => console.log('Get started clicked')} />
      <div className="pt-32 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Landing Header Demo</h1>
        <p className="text-lg text-slate-600 mb-8">
          Scroll down to see the header transform into a floating pill shape.
        </p>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="mb-8 p-6 bg-slate-100 rounded-xl">
            <h2 className="text-xl font-bold mb-2">Section {i + 1}</h2>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const CustomNavigation: Story = {
  args: {
    navigationItems: {
      litigation101: [
        { label: 'Basics', href: '#', description: 'Learn the fundamentals' },
        { label: 'Advanced', href: '#', description: 'Deep dive topics' },
      ],
      solutions: [
        { label: 'Enterprise', href: '#', description: 'For large organizations' },
      ],
    },
    navLinks: [
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  render: (args) => (
    <div style={{ height: '100vh' }}>
      <LandingHeader {...args} />
      <div className="pt-32 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Custom Navigation</h1>
      </div>
    </div>
  ),
}
