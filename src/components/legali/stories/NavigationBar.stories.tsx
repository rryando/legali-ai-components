import type { Meta, StoryObj } from "@storybook/react";
import { Home, Trophy, User } from "lucide-react";
import { NavigationBar } from "../composite/NavigationBar";

const meta = {
  title: "Legali/Composite/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    activeItem: { control: "text" },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { id: "learn", icon: <Home className="h-6 w-6" />, label: "Learn" },
  { id: "progress", icon: <Trophy className="h-6 w-6" />, label: "Progress" },
  { id: "profile", icon: <User className="h-6 w-6" />, label: "Profile" },
];

export const Default: Story = {
  args: {
    items,
    activeItem: "learn",
    onItemClick: (id) => console.log(`Clicked: ${id}`),
  },
};

export const ProgressActive: Story = {
  args: {
    items,
    activeItem: "progress",
    onItemClick: (id) => console.log(`Clicked: ${id}`),
  },
};

export const ProfileActive: Story = {
  args: {
    items,
    activeItem: "profile",
    onItemClick: (id) => console.log(`Clicked: ${id}`),
  },
};
