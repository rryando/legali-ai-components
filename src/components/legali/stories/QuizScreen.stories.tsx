import type { Meta, StoryObj } from '@storybook/react'
import { QuizScreen } from '../screens/QuizScreen'

const meta: Meta<typeof QuizScreen> = {
  title: 'Legali/Screens/QuizScreen',
  component: QuizScreen,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof QuizScreen>

const sampleQuestions = [
  {
    id: 1,
    question: "What is 'discovery' in legal terms?",
    answers: [
      { id: 1, text: 'A) Finding the courthouse location', correct: false },
      { id: 2, text: 'B) The process of exchanging information before trial', correct: true },
      { id: 3, text: 'C) Discovering new evidence during trial', correct: false },
      { id: 4, text: 'D) Looking up legal definitions', correct: false },
    ],
    explanation: 'Discovery is the pre-trial process where both sides exchange information and evidence. This helps ensure fair trials by reducing surprises.',
  },
  {
    id: 2,
    question: 'Which is a type of discovery tool?',
    answers: [
      { id: 1, text: 'A) Complaint', correct: false },
      { id: 2, text: 'B) Interrogatories', correct: true },
      { id: 3, text: 'C) Verdict', correct: false },
      { id: 4, text: 'D) Judgment', correct: false },
    ],
    explanation: "Interrogatories are written questions that must be answered under oath. They're one of several discovery tools used to gather information.",
  },
  {
    id: 3,
    question: 'How long do you typically have to respond to discovery requests?',
    answers: [
      { id: 1, text: 'A) 24 hours', correct: false },
      { id: 2, text: 'B) 30 days (in most jurisdictions)', correct: true },
      { id: 3, text: 'C) Whenever you feel like it', correct: false },
      { id: 4, text: 'D) 6 months', correct: false },
    ],
    explanation: 'Most jurisdictions give you 30 days to respond to discovery requests, though this can vary by state and type of discovery.',
  },
  {
    id: 4,
    question: 'Can you object to discovery requests?',
    answers: [
      { id: 1, text: "A) Yes, if they're improper or overly broad", correct: true },
      { id: 2, text: 'B) No, never', correct: false },
      { id: 3, text: 'C) Only if you hire a lawyer', correct: false },
      { id: 4, text: 'D) Only in criminal cases', correct: false },
    ],
    explanation: 'You can object to discovery requests that are overly broad, irrelevant, privileged, or not reasonably calculated to lead to admissible evidence.',
  },
  {
    id: 5,
    question: 'What happens if you ignore discovery requests?',
    answers: [
      { id: 1, text: 'A) Nothing happens', correct: false },
      { id: 2, text: 'B) The other side gives up', correct: false },
      { id: 3, text: 'C) The judge can sanction you or strike your pleadings', correct: true },
      { id: 4, text: 'D) You automatically win', correct: false },
    ],
    explanation: 'Ignoring discovery is serious! The court can impose sanctions, which may include monetary penalties, striking your claims or defenses, or even dismissing your case.',
  },
]

export const FirstQuestion: Story = {
  args: {
    questions: sampleQuestions,
    onClose: () => console.log('Close clicked'),
    onQuizComplete: (score, total) => console.log(`Quiz complete: ${score}/${total}`),
  },
}

export const MiddleQuestion: Story = {
  args: {
    questions: sampleQuestions,
    onClose: () => console.log('Close clicked'),
    onQuizComplete: (score, total) => console.log(`Quiz complete: ${score}/${total}`),
  },
}

export const LastQuestion: Story = {
  args: {
    questions: sampleQuestions,
    onClose: () => console.log('Close clicked'),
    onQuizComplete: (score, total) => console.log(`Quiz complete: ${score}/${total}`),
  },
}

export const Interactive: Story = {
  args: {
    questions: sampleQuestions,
    onClose: () => alert('Quiz closed'),
    onQuizComplete: (score, total) => alert(`Quiz complete! Score: ${score}/${total}`),
  },
}
