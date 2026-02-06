import type { Meta, StoryObj } from "@storybook/react";
import { LawyerAvatar } from "../atomic/LawyerAvatar";

const meta = {
  title: "Legali/Marketplace/Atomic/LawyerAvatar",
  component: LawyerAvatar,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    status: { control: "select", options: ["online", "offline", "busy"] },
  },
} satisfies Meta<typeof LawyerAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4",
    alt: "Dr. Sarah Fischer",
    size: "md",
    status: "online",
    isVerified: true,
  },
};

export const Large: Story = {
  args: {
    src: "https://api.dicebear.com/9.x/avataaars/svg?seed=Thomas&backgroundColor=c0aede",
    alt: "Thomas Müller",
    size: "xl",
    status: "offline",
    isVerified: true,
  },
};

export const AllSizes: Story = {
  args: {
    src: "https://api.dicebear.com/9.x/avataaars/svg?seed=A",
    alt: "All sizes",
    size: "md",
    status: "online",
    isVerified: true,
  },
  render: () => (
    <div className="flex items-end gap-4">
      <LawyerAvatar alt="SM" isVerified size="sm" src="https://api.dicebear.com/9.x/avataaars/svg?seed=A" status="online" />
      <LawyerAvatar alt="MD" isVerified size="md" src="https://api.dicebear.com/9.x/avataaars/svg?seed=B" status="busy" />
      <LawyerAvatar alt="LG" isVerified size="lg" src="https://api.dicebear.com/9.x/avataaars/svg?seed=C" status="offline" />
      <LawyerAvatar alt="XL" isVerified size="xl" src="https://api.dicebear.com/9.x/avataaars/svg?seed=D" status="online" />
    </div>
  ),
};
