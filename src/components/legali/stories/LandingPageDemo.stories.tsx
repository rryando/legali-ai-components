import type { Meta } from "@storybook/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { LandingPage } from "../screens/LandingPage";
import { LawyerMarketplaceFlow } from "../screens/LawyerMarketplaceFlow";
import { MarketplaceFlow } from "../screens/MarketplaceFlow";

const meta: Meta = {
  title: "Legali/Demo/Landing Page",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type ActiveView = "landing" | "user-marketplace" | "lawyer-marketplace";

export const LandingPageDemo = () => {
  const [view, setView] = useState<ActiveView>("landing");

  return (
    <AnimatePresence mode="wait">
      {view === "landing" && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          key="landing"
          transition={{ duration: 0.3 }}
        >
          <LandingPage
            onGetStarted={() => setView("user-marketplace")}
            onWatchDemo={() => setView("lawyer-marketplace")}
            textConfig={{
              header: {
                navigationItems: {
                  solutions: [
                    {
                      label: "For Individuals",
                      href: "#",
                      description: "Find the right lawyer for your case",
                      onClick: () => setView("user-marketplace"),
                    },
                    {
                      label: "For Lawyers",
                      href: "#",
                      description: "Manage cases and grow your practice",
                      onClick: () => setView("lawyer-marketplace"),
                    },
                    {
                      label: "For Enterprises",
                      href: "#",
                      description: "Scale legal operations",
                    },
                  ],
                },
              },
            }}
          />
        </motion.div>
      )}

      {view === "user-marketplace" && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          initial={{ opacity: 0, x: 50 }}
          key="user-marketplace"
          transition={{ duration: 0.4 }}
        >
          <MarketplaceFlow />
        </motion.div>
      )}

      {view === "lawyer-marketplace" && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          initial={{ opacity: 0, x: 50 }}
          key="lawyer-marketplace"
          transition={{ duration: 0.4 }}
        >
          <LawyerMarketplaceFlow />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
