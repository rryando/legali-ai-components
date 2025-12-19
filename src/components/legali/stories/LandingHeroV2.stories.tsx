import type { Meta, StoryObj } from "@storybook/react";
import { LandingHeroV2 } from "../landing/LandingHeroV2";

const meta: Meta<typeof LandingHeroV2> = {
  title: "Legali/Landing/LandingHeroV2",
  component: LandingHeroV2,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LandingHeroV2>;

export const Default: Story = {
  args: {
    onGetStarted: () => console.log("Get started clicked"),
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
