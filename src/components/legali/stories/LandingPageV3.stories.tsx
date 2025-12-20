import type { Meta, StoryObj } from "@storybook/react";
import { LandingPageV3 } from "../screens/LandingPageV3";

const meta: Meta<typeof LandingPageV3> = {
  title: "Legali/Screens/LandingPageV3",
  component: LandingPageV3,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingPageV3>;

export const Default: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    onWatchDemo: () => console.log("Watch demo clicked"),
  },
};

export const Interactive: Story = {
  args: {
    onGetStarted: () => alert("Starting your legal journey with Legali AI!"),
    onWatchDemo: () => alert("Demo video would play here"),
  },
};
