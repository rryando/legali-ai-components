import type { Meta, StoryObj } from '@storybook/react'
import { LandingFooter } from '../landing/LandingFooter'

const meta: Meta<typeof LandingFooter> = {
  title: 'Legali/Landing/LandingFooter',
  component: LandingFooter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LandingFooter>

export const Default: Story = {}

export const CustomLinks: Story = {
  args: {
    linkGroups: [
      {
        title: 'Products',
        links: [
          { label: 'Case Builder', href: '#' },
          { label: 'Document AI', href: '#' },
          { label: 'Lawyer Match', href: '#' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center', href: '#' },
          { label: 'Contact Us', href: '#' },
          { label: 'Status', href: '#' },
        ],
      },
    ],
    copyright: '© 2024 MyCompany. All rights reserved.',
    disclaimer: 'This service is for informational purposes only.',
  },
}

export const MinimalFooter: Story = {
  args: {
    linkGroups: [],
    socialLinks: [],
  },
}
