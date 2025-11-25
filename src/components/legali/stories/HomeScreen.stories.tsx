import type { Meta, StoryObj } from '@storybook/react'
import { HomeScreen } from '../screens/HomeScreen'

const meta: Meta<typeof HomeScreen> = {
  title: 'Legali/Screens/HomeScreen',
  component: HomeScreen,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HomeScreen>

const sampleModules = [
  {
    id: 1,
    icon: '📄',
    title: 'Module 1: Court Documents Basics',
    subtitle: 'Motions, Notices & Pleadings',
    status: 'completed' as const,
    lessons: [
      { id: 1, completed: true },
      { id: 2, completed: true },
      { id: 3, completed: true },
      { id: 4, completed: true },
    ],
  },
  {
    id: 2,
    icon: '🔍',
    title: 'Module 2: Discovery Fundamentals',
    subtitle: 'Getting information before trial',
    status: 'current' as const,
    lessons: [
      { id: 1, completed: true },
      { id: 2, completed: true },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ],
  },
  {
    id: 3,
    icon: '⚖️',
    title: 'Module 3: Pleadings vs. Motions',
    subtitle: 'Understanding document types',
    status: 'locked' as const,
    lessons: [
      { id: 1, completed: false },
      { id: 2, completed: false },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ],
  },
  {
    id: 4,
    icon: '📋',
    title: 'Module 4: Evidence & Declarations',
    subtitle: 'What counts in court',
    status: 'locked' as const,
    lessons: [
      { id: 1, completed: false },
      { id: 2, completed: false },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ],
  },
  {
    id: 5,
    icon: '📮',
    title: 'Module 5: Service of Process',
    subtitle: 'Delivering legal documents',
    status: 'locked' as const,
    lessons: [
      { id: 1, completed: false },
      { id: 2, completed: false },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ],
  },
]

export const Default: Story = {
  args: {
    streak: 7,
    points: 340,
    hearts: 5,
    modules: sampleModules,
  },
}

export const HighProgress: Story = {
  args: {
    streak: 15,
    points: 1250,
    hearts: 3,
    modules: sampleModules.map((m, i) => ({
      ...m,
      status: i < 3 ? ('completed' as const) : i === 3 ? ('current' as const) : ('locked' as const),
    })),
  },
}

export const JustStarted: Story = {
  args: {
    streak: 1,
    points: 50,
    hearts: 5,
    modules: sampleModules.map((m, i) => ({
      ...m,
      status: i === 0 ? ('current' as const) : ('locked' as const),
      lessons: m.lessons.map(l => ({ ...l, completed: false })),
    })),
  },
}
