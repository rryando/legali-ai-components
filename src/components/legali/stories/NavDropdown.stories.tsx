import type { Meta, StoryObj } from '@storybook/react'
import { NavDropdown } from '../composite/NavDropdown'

const meta: Meta<typeof NavDropdown> = {
  title: 'Legali/Composite/NavDropdown',
  component: NavDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NavDropdown>

export const Default: Story = {
  args: {
    label: 'Products',
    items: [
      { label: 'Analytics', href: '#', description: 'Track your performance' },
      { label: 'Reports', href: '#', description: 'Generate detailed reports' },
      { label: 'Integrations', href: '#', description: 'Connect with other tools' },
    ],
  },
}

export const WithoutDescriptions: Story = {
  args: {
    label: 'Resources',
    items: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Examples', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
}

export const LegalMenu: Story = {
  args: {
    label: 'Litigation 101',
    items: [
      { label: 'Getting Started', href: '#', description: 'Begin your legal journey' },
      { label: 'Legal Basics', href: '#', description: 'Understand fundamental concepts' },
      { label: 'Court Procedures', href: '#', description: 'Navigate the court system' },
      { label: 'Filing Documents', href: '#', description: 'Learn how to file properly' },
    ],
  },
}

export const MultipleDropdowns: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <NavDropdown
        label="Products"
        items={[
          { label: 'Case Builder', href: '#', description: 'Build your legal case' },
          { label: 'Document Review', href: '#', description: 'AI-powered analysis' },
        ]}
      />
      <NavDropdown
        label="Resources"
        items={[
          { label: 'Blog', href: '#' },
          { label: 'Help Center', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
      />
      <NavDropdown
        label="Company"
        items={[
          { label: 'About Us', href: '#', description: 'Our mission and team' },
          { label: 'Careers', href: '#', description: 'Join our team' },
        ]}
      />
    </div>
  ),
}
