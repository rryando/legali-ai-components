import type { Meta, StoryObj } from "@storybook/react";
import { TiltCard } from "../atomic/TiltCard";

const meta: Meta<typeof TiltCard> = {
  title: "Legali/Atomic/TiltCard",
  component: TiltCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gradient",
      values: [
        {
          name: "gradient",
          value: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        },
      ],
    },
  },
  argTypes: {
    maxTilt: {
      control: { type: "range", min: 0, max: 30, step: 1 },
    },
    perspective: {
      control: { type: "range", min: 500, max: 2000, step: 100 },
    },
    enableGlare: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TiltCard>;

export const Default: Story = {
  args: {
    maxTilt: 10,
    perspective: 1000,
    enableGlare: true,
    children: (
      <div className="flex h-48 w-64 items-center justify-center rounded-2xl bg-white/80 p-6 backdrop-blur-sm">
        <p className="font-semibold text-slate-700">Hover over me!</p>
      </div>
    ),
  },
};

export const WithContent: Story = {
  args: {
    maxTilt: 15,
    enableGlare: true,
    children: (
      <div className="w-80 rounded-2xl bg-gradient-to-br from-[#4eaed0] to-[#667eea] p-6 text-white">
        <h3 className="mb-2 font-bold text-xl">Premium Card</h3>
        <p className="text-white/80">
          This card has a 3D tilt effect that follows your cursor.
        </p>
      </div>
    ),
  },
};

export const NoGlare: Story = {
  args: {
    maxTilt: 12,
    enableGlare: false,
    children: (
      <div className="flex h-40 w-56 items-center justify-center rounded-xl bg-slate-100 p-4">
        <p className="text-slate-600">No glare effect</p>
      </div>
    ),
  },
};
