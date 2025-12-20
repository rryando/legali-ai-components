import type { Meta, StoryObj } from "@storybook/react";
import { HowItWorksSection } from "../landing/HowItWorksSection";

const meta: Meta<typeof HowItWorksSection> = {
  title: "Legali/Landing/HowItWorksSection",
  component: HowItWorksSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HowItWorksSection>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: (
      <>
        Get started in
        <br />
        <span className="bg-gradient-to-r from-[#4eaed0] via-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          minutes
        </span>
      </>
    ),
  },
};
