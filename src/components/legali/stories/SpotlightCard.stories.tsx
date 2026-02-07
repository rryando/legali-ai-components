import type { Meta, StoryObj } from "@storybook/react";
import { SpotlightCard } from "../atomic/SpotlightCard";

const meta: Meta<typeof SpotlightCard> = {
  title: "Legali/Atomic/SpotlightCard",
  component: SpotlightCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-spotlight-card.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SpotlightCard>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-8">
        <h3 className="mb-2 font-bold text-slate-900 text-xl">Spotlight Card</h3>
        <p className="text-slate-600">
          Hover over this card to see the spotlight effect follow your cursor.
        </p>
      </div>
    ),
  },
};

export const CustomColor: Story = {
  args: {
    spotlightColor: "rgba(244, 114, 182, 0.2)",
    children: (
      <div className="p-8">
        <h3 className="mb-2 font-bold text-slate-900 text-xl">Pink Spotlight</h3>
        <p className="text-slate-600">This card has a custom pink spotlight color.</p>
      </div>
    ),
  },
};

export const LargeSpotlight: Story = {
  args: {
    spotlightSize: 800,
    children: (
      <div className="p-8">
        <h3 className="mb-2 font-bold text-slate-900 text-xl">Large Spotlight</h3>
        <p className="text-slate-600">This card has a larger spotlight radius.</p>
      </div>
    ),
  },
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid max-w-2xl grid-cols-2 gap-4">
      {["Analytics", "Reports", "Settings", "Users"].map((title) => (
        <SpotlightCard className="p-6" key={title}>
          <h3 className="mb-2 font-bold text-slate-900">{title}</h3>
          <p className="text-slate-600 text-sm">Manage your {title.toLowerCase()} here.</p>
        </SpotlightCard>
      ))}
    </div>
  ),
};
