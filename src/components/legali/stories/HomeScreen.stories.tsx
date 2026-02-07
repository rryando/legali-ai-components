import type { Meta, StoryObj } from "@storybook/react";
import { HomeScreen } from "../screens/HomeScreen";

const meta: Meta<typeof HomeScreen> = {
  title: "Legali/Screens/HomeScreen",
  component: HomeScreen,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-home-screen.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { HomeScreen } from "@/components/ui/legali/screens/HomeScreen"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<HomeScreen\n  streak={7}\n  points={340}\n  hearts={5}\n  modules={sampleModules}\n/>\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HomeScreen>;

const sampleModules = [
  {
    id: 1,
    icon: "📄",
    title: "Module 1: Court Documents Basics",
    subtitle: "Motions, Notices & Pleadings",
    mascotCopy:
      "Let’s warm up: I’ll help you spot the key parts of common court documents so you know what you’re looking at.",
    status: "completed" as const,
    lessons: [
      { id: 1, completed: true },
      { id: 2, completed: true },
      { id: 3, completed: true },
      { id: 4, completed: true },
    ],
  },
  {
    id: 2,
    icon: "🔍",
    title: "Module 2: Discovery Fundamentals",
    subtitle: "Getting information before trial",
    mascotCopy:
      "Discovery is how you get answers before trial. I’ll guide you through the basics and what to ask for.",
    status: "current" as const,
    lessons: [
      { id: 1, completed: true },
      { id: 2, completed: true },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ],
  },
  {
    id: 3,
    icon: "⚖️",
    title: "Module 3: Pleadings vs. Motions",
    subtitle: "Understanding document types",
    mascotCopy:
      "We’ll make this easy: pleadings start the case, motions ask the court to do something. I’ll show you examples.",
    status: "locked" as const,
    lessons: [
      { id: 1, completed: false },
      { id: 2, completed: false },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ],
  },
  {
    id: 4,
    icon: "📋",
    title: "Module 4: Evidence & Declarations",
    subtitle: "What counts in court",
    mascotCopy:
      "Evidence wins cases. I’ll help you understand what counts and how declarations support your story.",
    status: "locked" as const,
    lessons: [
      { id: 1, completed: false },
      { id: 2, completed: false },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ],
  },
  {
    id: 5,
    icon: "📮",
    title: "Module 5: Service of Process",
    subtitle: "Delivering legal documents",
    mascotCopy:
      "Service is all about proper delivery. I’ll keep you on the safe path so you don’t lose time on technicalities.",
    status: "locked" as const,
    lessons: [
      { id: 1, completed: false },
      { id: 2, completed: false },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ],
  },
];

export const Default: Story = {
  args: {
    streak: 7,
    points: 340,
    hearts: 5,
    modules: sampleModules,
  },
};

export const HighProgress: Story = {
  args: {
    streak: 15,
    points: 1250,
    hearts: 3,
    modules: sampleModules.map((m, i) => ({
      ...m,
      status: i < 3 ? ("completed" as const) : i === 3 ? ("current" as const) : ("locked" as const),
    })),
  },
};

export const JustStarted: Story = {
  args: {
    streak: 1,
    points: 50,
    hearts: 5,
    modules: sampleModules.map((m, i) => ({
      ...m,
      status: i === 0 ? ("current" as const) : ("locked" as const),
      lessons: m.lessons.map((l) => ({ ...l, completed: false })),
    })),
  },
};
