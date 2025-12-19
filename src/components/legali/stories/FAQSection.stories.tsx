import type { Meta, StoryObj } from '@storybook/react'
import { FAQSection } from '../landing/FAQSection'

const meta: Meta<typeof FAQSection> = {
  title: 'Legali/Landing/FAQSection',
  component: FAQSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FAQSection>

export const Default: Story = {}

export const CustomFAQs: Story = {
  args: {
    title: 'Common Questions',
    subtitle: 'Answers to frequently asked questions',
    faqs: [
      {
        question: 'How do I get started?',
        answer: 'Simply create an account and start uploading your documents or describing your legal situation.',
      },
      {
        question: 'Is there a free trial?',
        answer: 'Yes! We offer a 14-day free trial with full access to all features.',
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Absolutely. You can cancel your subscription at any time with no penalties.',
      },
    ],
  },
}
