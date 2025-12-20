import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedCounter } from "../atomic/AnimatedCounter";

const meta: Meta<typeof AnimatedCounter> = {
  title: "Legali/Atomic/AnimatedCounter",
  component: AnimatedCounter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AnimatedCounter>;

export const Default: Story = {
  args: {
    target: 1500,
    label: "Users",
  },
};

export const WithSuffix: Story = {
  args: {
    target: 98,
    suffix: "%",
    label: "Accuracy Rate",
  },
};

export const WithPrefix: Story = {
  args: {
    target: 500,
    prefix: "$",
    suffix: "K",
    label: "Revenue",
  },
};

export const NoCard: Story = {
  args: {
    target: 100,
    suffix: "+",
    label: "Partners",
    useCard: false,
  },
};

export const CounterGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <AnimatedCounter label="Cases Analyzed" suffix="K+" target={50} />
      <AnimatedCounter label="Accuracy Rate" suffix="%" target={98} />
      <AnimatedCounter label="Partner Attorneys" suffix="+" target={500} />
      <AnimatedCounter label="User Rating" target={49} />
    </div>
  ),
};
