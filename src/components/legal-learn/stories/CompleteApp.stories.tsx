import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { HomeScreen } from '../screens/HomeScreen'
import { QuizScreen, type Question } from '../screens/QuizScreen'
import { ResultsScreen } from '../screens/ResultsScreen'
import { FileText, Search, Scale, ClipboardList, Mail } from 'lucide-react'

const meta: Meta = {
  title: 'Legal Learn/Demo/Complete App',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

const sampleModules = [
  {
    id: 1,
    icon: <FileText className="w-full h-full p-3" />,
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
    icon: <Search className="w-full h-full p-3" />,
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
    icon: <Scale className="w-full h-full p-3" />,
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
    icon: <ClipboardList className="w-full h-full p-3" />,
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
    icon: <Mail className="w-full h-full p-3" />,
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

const sampleQuestions: Question[] = [
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

type Screen = 'home' | 'quiz' | 'results'

export const CompleteApp = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')
  const [quizScore, setQuizScore] = useState({ score: 0, total: 0 })

  const handleModuleClick = () => {
    setCurrentScreen('quiz')
  }

  const handleQuizComplete = (score: number, total: number) => {
    setQuizScore({ score, total })
    setCurrentScreen('results')
  }

  const handleQuizClose = () => {
    setCurrentScreen('home')
  }

  const handleContinue = () => {
    setCurrentScreen('home')
  }

  return (
    <div className="bg-slate-100 p-8 rounded-xl border border-slate-200">
      {currentScreen === 'home' && (
        <HomeScreen
          modules={sampleModules}
          onModuleClick={handleModuleClick}
        />
      )}
      {currentScreen === 'quiz' && (
        <QuizScreen
          questions={sampleQuestions}
          onClose={handleQuizClose}
          onQuizComplete={handleQuizComplete}
        />
      )}
      {currentScreen === 'results' && (
        <ResultsScreen
          score={quizScore.score}
          totalQuestions={quizScore.total}
          badgeTitle="Discovery Detective Badge Earned!"
          onContinue={handleContinue}
          onReviewMistakes={handleQuizClose}
        />
      )}
    </div>
  )
}
