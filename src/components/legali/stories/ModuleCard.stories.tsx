import type { Meta, StoryObj } from "@storybook/react";
import { ModuleCard } from "../composite/ModuleCard";

const meta: Meta<typeof ModuleCard> = {
  title: "Legali/Composite/ModuleCard",
  component: ModuleCard,
  parameters: {
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-module-card.json"\n\`\`\``,
      },
    },
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ModuleCard>;

const sampleLessons = [
  { id: 1, completed: true },
  { id: 2, completed: true },
  { id: 3, completed: false },
  { id: 4, completed: false },
];

export const Completed: Story = {
  args: {
    icon: "📄",
    title: "Module 1: Court Documents Basics",
    subtitle: "Motions, Notices & Pleadings",
    status: "completed",
    lessons: [
      { id: 1, completed: true },
      { id: 2, completed: true },
      { id: 3, completed: true },
      { id: 4, completed: true },
    ],
  },
};

export const Current: Story = {
  args: {
    icon: "🔍",
    title: "Module 2: Discovery Fundamentals",
    subtitle: "Getting information before trial",
    status: "current",
    lessons: sampleLessons,
  },
};

export const Locked: Story = {
  args: {
    icon: "⚖️",
    title: "Module 3: Pleadings vs. Motions",
    subtitle: "Understanding document types",
    status: "locked",
    lessons: [
      { id: 1, completed: false },
      { id: 2, completed: false },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ],
  },
};

export const AllModules: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <ModuleCard
        icon="📄"
        lessons={[
          { id: 1, completed: true },
          { id: 2, completed: true },
          { id: 3, completed: true },
          { id: 4, completed: true },
        ]}
        status="completed"
        subtitle="Motions, Notices & Pleadings"
        title="Module 1: Court Documents Basics"
      />
      <ModuleCard
        icon="🔍"
        lessons={sampleLessons}
        status="current"
        subtitle="Getting information before trial"
        title="Module 2: Discovery Fundamentals"
      />
      <ModuleCard
        icon="⚖️"
        lessons={[
          { id: 1, completed: false },
          { id: 2, completed: false },
          { id: 3, completed: false },
          { id: 4, completed: false },
        ]}
        status="locked"
        subtitle="Understanding document types"
        title="Module 3: Pleadings vs. Motions"
      />
    </div>
  ),
};
