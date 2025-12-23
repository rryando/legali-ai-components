import type { Meta, StoryObj } from "@storybook/react";
import { LandingHero } from "../landing/LandingHero";

const meta: Meta<typeof LandingHero> = {
  title: "Legali/Landing/LandingHero",
  component: LandingHero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingHero>;

export const Default: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
  },
};

export const WithCustomText: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    badgeText: "Custom Badge Text",
    headline: "Custom Headline Here",
    subtitle: "This is a custom subtitle for the hero section.",
    analyzeButtonText: "Get Started",
    defaultInputPlaceholder: "Enter your legal question...",
  },
};

export const WithCustomStats: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    stats: [
      { value: 100, suffix: "K+", label: "Users", color: "#4eaed0" },
      { value: 99, suffix: "%", label: "Satisfaction", color: "#667eea" },
      { value: 24, suffix: "/7", label: "Support", color: "#764ba2" },
      { value: 5, suffix: "★", label: "Rating", color: "#f472b6" },
    ],
  },
};

export const CustomPlaceholders: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
    placeholderPhrases: [
      "How do I form an LLC?",
      "Review my employment contract...",
      "What are my rights as a renter?",
    ],
  },
};
