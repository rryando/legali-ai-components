import type { Meta, StoryObj } from "@storybook/react";
import { AlertTriangle, Shield, Sparkles, Star } from "lucide-react";
import { SectionBadge } from "../atomic/SectionBadge";

const meta: Meta<typeof SectionBadge> = {
  title: "Legali/Atomic/SectionBadge",
  component: SectionBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SectionBadge>;

export const Info: Story = {
  args: {
    icon: <Sparkles className="h-4 w-4" />,
    label: "AI-Powered Intelligence",
    variant: "info",
  },
};

export const Warning: Story = {
  args: {
    icon: <AlertTriangle className="h-4 w-4" />,
    label: "The Justice Gap",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    icon: <AlertTriangle className="h-4 w-4" />,
    label: "Critical Issue",
    variant: "danger",
  },
};

export const Success: Story = {
  args: {
    icon: <Shield className="h-4 w-4" />,
    label: "Verified & Secure",
    variant: "success",
  },
};

export const Neutral: Story = {
  args: {
    icon: <Star className="h-4 w-4" />,
    label: "Customer Stories",
    variant: "neutral",
  },
};

export const NoIcon: Story = {
  args: {
    label: "Simple Badge",
    variant: "info",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <SectionBadge
        icon={<Sparkles className="h-4 w-4" />}
        label="Info"
        variant="info"
      />
      <SectionBadge
        icon={<AlertTriangle className="h-4 w-4" />}
        label="Warning"
        variant="warning"
      />
      <SectionBadge
        icon={<AlertTriangle className="h-4 w-4" />}
        label="Danger"
        variant="danger"
      />
      <SectionBadge
        icon={<Shield className="h-4 w-4" />}
        label="Success"
        variant="success"
      />
      <SectionBadge
        icon={<Star className="h-4 w-4" />}
        label="Neutral"
        variant="neutral"
      />
    </div>
  ),
};
