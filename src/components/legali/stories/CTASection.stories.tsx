import type { Meta, StoryObj } from "@storybook/react";
import { CTASection } from "../landing/CTASection";

const meta: Meta<typeof CTASection> = {
  title: "Legali/Landing/CTASection",
  component: CTASection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CTASection>;

export const Default: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    onWatchDemo: () => console.log("Watch demo clicked"),
  },
};

export const CustomContent: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    onWatchDemo: () => console.log("Watch demo clicked"),
    title: (
      <>
        Start your legal journey
        <br />
        <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          today
        </span>
      </>
    ),
    subtitle:
      "Join our community of legal professionals and individuals getting the help they need.",
  },
};
