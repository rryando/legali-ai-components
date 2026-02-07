import type { Meta, StoryObj } from "@storybook/react";
import { TrustLogos } from "../landing/TrustLogos";

const meta: Meta<typeof TrustLogos> = {
  title: "Legali/Landing/TrustLogos",
  component: TrustLogos,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Install via shadcn registry:\n\n\`\`\`bash\nnpx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-trust-logos.json"\n\`\`\`\n\n**Import:**\n\n\`\`\`tsx\nimport { TrustLogos } from "@/components/ui/legali/landing/TrustLogos"\n\`\`\`\n\n**Usage:**\n\n\`\`\`tsx\n<TrustLogos\n  title="Trusted by leading law firms worldwide"\n/>\n\`\`\``,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TrustLogos>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: "Trusted by leading law firms worldwide",
  },
};

export const NoFadeEdges: Story = {
  args: {
    showFadeEdges: false,
  },
};

export const CustomLogos: Story = {
  args: {
    title: "Featured in",
    logos: [
      { src: "/assets/landing/trust-logo-1.png", alt: "Partner 1" },
      { src: "/assets/landing/trust-logo-2.png", alt: "Partner 2" },
      { src: "/assets/landing/trust-logo-3.png", alt: "Partner 3" },
    ],
  },
};
