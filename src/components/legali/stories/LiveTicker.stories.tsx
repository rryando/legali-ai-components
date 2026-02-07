import type { Meta, StoryObj } from "@storybook/react";
import { LiveTicker } from "../composite/LiveTicker";

const meta: Meta<typeof LiveTicker> = {
  title: "Legali/Composite/LiveTicker",
  component: LiveTicker,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-live-ticker.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LiveTicker>;

export const Default: Story = {
  render: () => (
    <div style={{ height: "100vh", position: "relative" }}>
      <LiveTicker />
      <div className="mx-auto max-w-2xl p-8">
        <h1 className="mb-4 font-bold text-3xl">Live Ticker Demo</h1>
        <p className="text-slate-600">
          Watch the bottom-left corner for rotating notifications showing recent user activity.
        </p>
      </div>
    </div>
  ),
};

export const CustomNotifications: Story = {
  args: {
    notifications: [
      {
        name: "John D.",
        location: "London",
        action: "signed up for a free trial",
      },
      { name: "Marie L.", location: "Paris", action: "upgraded to premium" },
      { name: "Hans M.", location: "Berlin", action: "invited 3 team members" },
    ],
    interval: 3000,
  },
  render: (args) => (
    <div style={{ height: "100vh", position: "relative" }}>
      <LiveTicker {...args} />
      <div className="mx-auto max-w-2xl p-8">
        <h1 className="mb-4 font-bold text-3xl">Custom Notifications</h1>
        <p className="text-slate-600">
          This ticker shows custom notifications with a faster rotation interval.
        </p>
      </div>
    </div>
  ),
};

export const SlowerRotation: Story = {
  args: {
    interval: 6000,
  },
  render: (args) => (
    <div style={{ height: "100vh", position: "relative" }}>
      <LiveTicker {...args} />
      <div className="mx-auto max-w-2xl p-8">
        <h1 className="mb-4 font-bold text-3xl">Slower Rotation</h1>
        <p className="text-slate-600">
          This ticker rotates more slowly (6 seconds per notification).
        </p>
      </div>
    </div>
  ),
};
