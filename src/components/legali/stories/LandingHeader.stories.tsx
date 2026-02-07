import type { Meta, StoryObj } from "@storybook/react";
import { LandingHeader } from "../landing/LandingHeader";

const meta: Meta<typeof LandingHeader> = {
  title: "Legali/Landing/LandingHeader",
  component: LandingHeader,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-landing-header.json"\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingHeader>;

export const Default: Story = {
  render: () => (
    <div style={{ height: "200vh" }}>
      <LandingHeader onGetStarted={() => console.log("Get started clicked")} />
      <div className="mx-auto max-w-4xl px-8 pt-32">
        <h1 className="mb-4 font-bold text-4xl">Landing Header Demo</h1>
        <p className="mb-8 text-lg text-slate-600">
          Scroll down to see the header transform into a floating pill shape.
        </p>
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="mb-8 rounded-xl bg-slate-100 p-6" key={i}>
            <h2 className="mb-2 font-bold text-xl">Section {i + 1}</h2>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const CustomNavigation: Story = {
  args: {
    navigationItems: {
      litigation101: [
        { label: "Basics", href: "#", description: "Learn the fundamentals" },
        { label: "Advanced", href: "#", description: "Deep dive topics" },
      ],
      solutions: [
        {
          label: "Enterprise",
          href: "#",
          description: "For large organizations",
        },
      ],
    },
    navLinks: [
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  render: (args) => (
    <div style={{ height: "100vh" }}>
      <LandingHeader {...args} />
      <div className="mx-auto max-w-4xl px-8 pt-32">
        <h1 className="font-bold text-4xl">Custom Navigation</h1>
      </div>
    </div>
  ),
};
