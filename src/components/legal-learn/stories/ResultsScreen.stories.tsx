import type { Meta, StoryObj } from '@storybook/react'
import { ResultsScreen } from '../screens/ResultsScreen'

const meta: Meta<typeof ResultsScreen> = {
  title: 'Legal Learn/Screens/ResultsScreen',
  component: ResultsScreen,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ResultsScreen>

export const PerfectScore: Story = {
  args: {
    score: 5,
    totalQuestions: 5,
    xpEarned: 100,
    streak: 7,
    badgeTitle: 'Discovery Master Badge Earned!',
    onContinue: () => console.log('Continue clicked'),
    onReviewMistakes: () => console.log('Review mistakes clicked'),
  },
}

export const GoodScore: Story = {
  args: {
    score: 4,
    totalQuestions: 5,
    xpEarned: 50,
    streak: 7,
    badgeTitle: 'Discovery Detective Badge Earned!',
    onContinue: () => console.log('Continue clicked'),
    onReviewMistakes: () => console.log('Review mistakes clicked'),
  },
}

export const PassingScore: Story = {
  args: {
    score: 3,
    totalQuestions: 5,
    xpEarned: 30,
    streak: 7,
    onContinue: () => console.log('Continue clicked'),
    onReviewMistakes: () => console.log('Review mistakes clicked'),
  },
}

export const LowScore: Story = {
  args: {
    score: 1,
    totalQuestions: 5,
    xpEarned: 10,
    streak: 7,
    onContinue: () => console.log('Continue clicked'),
    onReviewMistakes: () => console.log('Review mistakes clicked'),
  },
}

export const WithoutReviewButton: Story = {
  args: {
    score: 5,
    totalQuestions: 5,
    xpEarned: 100,
    streak: 10,
    badgeTitle: 'Perfect Score Champion!',
    onContinue: () => console.log('Continue clicked'),
  },
}

export const LongStreak: Story = {
  args: {
    score: 4,
    totalQuestions: 5,
    xpEarned: 50,
    streak: 50,
    badgeTitle: 'Consistency Master!',
    onContinue: () => console.log('Continue clicked'),
    onReviewMistakes: () => console.log('Review mistakes clicked'),
  },
}
