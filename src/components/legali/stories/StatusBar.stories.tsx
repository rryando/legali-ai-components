import type { Meta, StoryObj } from "@storybook/react";
import { StatusBar } from "../atomic/StatusBar";

const meta = {
  title: "Legali/Atomic/StatusBar",
  component: StatusBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    time: { control: "text" },
    showIcons: { control: "boolean" },
  },
} satisfies Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    time: "9:41",
    showIcons: true,
  },
};

export const CustomTime: Story = {
  args: {
    time: "12:00",
    showIcons: true,
  },
};

export const NoIcons: Story = {
  args: {
    time: "10:30",
    showIcons: false,
  },
};
