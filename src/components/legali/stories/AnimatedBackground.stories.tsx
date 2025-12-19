import type { Meta, StoryObj } from '@storybook/react'
import { AnimatedBackground } from '../composite/AnimatedBackground'

const meta: Meta<typeof AnimatedBackground> = {
  title: 'Legali/Composite/AnimatedBackground',
  component: AnimatedBackground,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AnimatedBackground>

export const Default: Story = {
  render: () => (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Animated Background
          </h1>
          <p className="text-lg text-slate-600">
            Watch the gradient orbs pulse and animate in the background.
          </p>
        </div>
      </div>
    </div>
  ),
}

export const WithParallax: Story = {
  render: () => (
    <div style={{ height: '200vh', position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground enableParallax parallaxIntensity={0.5} />
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Parallax Background
          </h1>
          <p className="text-lg text-slate-600">
            Scroll to see the parallax effect on the background orbs.
          </p>
        </div>
      </div>
    </div>
  ),
}

export const NoNoise: Story = {
  render: () => (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground showNoise={false} />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Without Noise Overlay
          </h1>
          <p className="text-lg text-slate-600">
            This version has the noise texture overlay disabled.
          </p>
        </div>
      </div>
    </div>
  ),
}
