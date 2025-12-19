import type { Meta, StoryObj } from "@storybook/react";
import { LandingPage } from "../screens/LandingPage";

const meta: Meta<typeof LandingPage> = {
  title: "Legali/Screens/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    onWatchDemo: () => console.log("Watch demo clicked"),
  },
};

export const Interactive: Story = {
  args: {
    onGetStarted: () => alert("Starting your legal journey!"),
    onWatchDemo: () => alert("Demo video would play here"),
  },
};
