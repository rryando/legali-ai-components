import type { Meta, StoryObj } from '@storybook/react'
import { TestimonialsSection } from '../landing/TestimonialsSection'

const meta: Meta<typeof TestimonialsSection> = {
  title: 'Legali/Landing/TestimonialsSection',
  component: TestimonialsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TestimonialsSection>

export const Default: Story = {}

export const CustomTestimonials: Story = {
  args: {
    title: 'What our users say',
    testimonials: [
      {
        quote: 'This tool has revolutionized how I handle legal research.',
        author: 'Alex Johnson',
        role: 'Legal Researcher',
        avatar: 'AJ',
        rating: 5,
      },
      {
        quote: 'Saved me hours of work every week. Highly recommend!',
        author: 'Emily Chen',
        role: 'Paralegal',
        avatar: 'EC',
        rating: 5,
      },
      {
        quote: 'The AI analysis is incredibly accurate and helpful.',
        author: 'Michael Brown',
        role: 'Solo Practitioner',
        avatar: 'MB',
        rating: 4,
      },
    ],
  },
}
