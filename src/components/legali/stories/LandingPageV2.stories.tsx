import type { Meta, StoryObj } from "@storybook/react";
import { LandingPageV2 } from "../screens/LandingPageV2";

const meta: Meta<typeof LandingPageV2> = {
  title: "Legali/Screens/LandingPageV2",
  component: LandingPageV2,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingPageV2>;

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
