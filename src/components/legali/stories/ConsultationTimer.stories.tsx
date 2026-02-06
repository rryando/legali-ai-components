import type { Meta, StoryObj } from "@storybook/react";
import { ConsultationTimer } from "../atomic/ConsultationTimer";

const meta = {
  title: "Legali/Marketplace/Atomic/ConsultationTimer",
  component: ConsultationTimer,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof ConsultationTimer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Running: Story = {
  args: { isRunning: true, startTime: 0 },
};

export const Paused: Story = {
  args: { isRunning: false, startTime: 125 },
};
