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

export const WithCustomText: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    onWatchDemo: () => console.log("Watch demo clicked"),
    textConfig: {
      hero: {
        badgeText: "Powered by AI",
        headline: "Your Legal Partner",
        subtitle: "Get instant legal guidance with our AI-powered platform.",
        analyzeButtonText: "Get Started",
      },
      header: {
        loginLabel: "Sign In",
        ctaLabel: "Start Free Trial",
      },
      cta: {
        subtitle: "Start your free trial today. No credit card required.",
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    onGetStarted: () => alert("Starting your legal journey with Legali AI!"),
    onWatchDemo: () => alert("Demo video would play here"),
  },
};
