import type { Meta, StoryObj } from "@storybook/react";
import { Calendar, DollarSign, MapPin } from "lucide-react";
import { StatRow } from "../atomic/StatRow";

const meta = {
  title: "Legali/Atomic/StatRow",
  component: StatRow,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
  },
} satisfies Meta<typeof StatRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Total Claims",
    value: "1,234",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Date Filed",
    value: "Oct 24, 2023",
    icon: <Calendar className="h-4 w-4 text-blue-500" />,
  },
};

export const Currency: Story = {
  args: {
    label: "Amount Claimed",
    value: "$5,000.00",
    icon: <DollarSign className="h-4 w-4 text-green-500" />,
  },
};

export const Location: Story = {
  args: {
    label: "Jurisdiction",
    value: "San Francisco, CA",
    icon: <MapPin className="h-4 w-4 text-red-500" />,
  },
};
