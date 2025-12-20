import fs from "fs/promises";
import path from "path";

const repoRoot = process.cwd();
const outDir = path.join(repoRoot, "registry");

// Public URLs for assets so consumers don't need to handle binary files manually.
const ASSET_BASE = "https://raw.githubusercontent.com/rryando/legali-ai-components/main";

const replacements = [
  // Move legali components under the shadcn-conventional ui path.
  { from: /@\/components\/legali/g, to: "@/components/ui/legali" },
  // Map shared ui dependencies to prefixed versions shipped in this registry.
  { from: /@\/components\/button/g, to: "@/components/ui/legali/button" },
  { from: /@\/components\/switch/g, to: "@/components/ui/legali/switch" },
  { from: /@\/components\/avatar/g, to: "@/components/ui/legali/avatar" },
  { from: /@\/components\/badge/g, to: "@/components/ui/legali/badge" },
  { from: /@\/components\/chart/g, to: "@/components/ui/legali/chart" },
  // Keep logos and animation assets fetchable when added via registry.
  { from: /\/logo\/logo\.png/g, to: `${ASSET_BASE}/public/logo/logo.png` },
  {
    from: /\/animations\/legali\.riv/g,
    to: `${ASSET_BASE}/public/animations/legali.riv`,
  },
];

const files = [
  // Core utilities & styles
  {
    name: "legali-lib-utils",
    type: "registry:lib",
    files: ["lib/utils.ts"],
    dependencies: ["clsx", "tailwind-merge"],
  },
  {
    name: "legali-style-globals",
    type: "registry:style",
    files: ["styles/globals.css"],
  },
  {
    name: "legali-hook-use-mobile",
    type: "registry:hook",
    files: ["hooks/use-mobile.ts"],
  },

  // Shared base UI pieces (prefixed)
  {
    name: "legali-button",
    type: "registry:ui",
    files: ["components/ui/legali/button.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-avatar",
    type: "registry:ui",
    files: ["components/ui/legali/avatar.tsx"],
    dependencies: ["@radix-ui/react-avatar"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-badge",
    type: "registry:ui",
    files: ["components/ui/legali/badge.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-switch",
    type: "registry:ui",
    files: ["components/ui/legali/switch.tsx"],
    dependencies: ["@radix-ui/react-switch"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-chart",
    type: "registry:ui",
    files: ["components/ui/legali/chart.tsx"],
    dependencies: ["recharts"],
    registryDependencies: ["legali-lib-utils"],
  },

  // Atomic
  {
    name: "legali-answer",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/Answer.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-glass-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/GlassCard.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-typing-text",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/TypingText.tsx"],
    dependencies: ["motion", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-lesson-dot",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/LessonDot.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-progress-bar",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ProgressBar.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-stat-item",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/StatItem.tsx"],
    dependencies: ["class-variance-authority", "lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-stat-row",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/StatRow.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-status-bar",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/StatusBar.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-explanation-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ExplanationCard.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils", "legali-glass-card"],
  },
  {
    name: "legali-question-number-badge",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/QuestionNumberBadge.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-setting-item",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/SettingItem.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-switch"],
  },
  {
    name: "legali-profile-stat-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/ProfileStatCard.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils", "legali-glass-card"],
  },

  // Composite
  {
    name: "legali-module-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ModuleCard.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lesson-dot", "legali-glass-card", "legali-lib-utils"],
  },
  {
    name: "legali-mascot-hero-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/MascotHeroCard.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-glass-card",
      "legali-mascot",
      "legali-typing-text",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-navigation-bar",
    type: "registry:ui",
    files: ["components/ui/legali/composite/NavigationBar.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-progress-section",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ProgressSection.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-progress-bar", "legali-glass-card", "legali-lib-utils"],
  },
  {
    name: "legali-quiz-feedback",
    type: "registry:ui",
    files: ["components/ui/legali/composite/QuizFeedback.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-button", "legali-lib-utils"],
  },
  {
    name: "legali-quiz-header",
    type: "registry:ui",
    files: ["components/ui/legali/composite/QuizHeader.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-progress-bar", "legali-lib-utils"],
  },
  {
    name: "legali-quiz-question",
    type: "registry:ui",
    files: ["components/ui/legali/composite/QuizQuestion.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-results-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/ResultsCard.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-button",
      "legali-stat-row",
      "legali-glass-card",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-user-stats-bar",
    type: "registry:ui",
    files: ["components/ui/legali/composite/UserStatsBar.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-stat-item", "legali-lib-utils"],
  },

  // Screens
  {
    name: "legali-home-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/HomeScreen.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-user-stats-bar",
      "legali-module-card",
      "legali-navigation-bar",
      "legali-mascot",
      "legali-mascot-hero-card",
      "legali-progress-screen",
      "legali-profile-screen",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-quiz-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/QuizScreen.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-quiz-header",
      "legali-quiz-question",
      "legali-quiz-feedback",
      "legali-answer",
      "legali-button",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-review-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/ReviewScreen.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-answer",
      "legali-explanation-card",
      "legali-question-number-badge",
      "legali-button",
      "legali-lib-utils",
    ],
  },
  {
    name: "legali-results-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/ResultsScreen.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-results-card", "legali-glass-card", "legali-lib-utils"],
  },
  {
    name: "legali-progress-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/ProgressScreen.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge", "recharts"],
    registryDependencies: ["legali-glass-card", "legali-lib-utils", "legali-chart"],
  },
  {
    name: "legali-profile-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/ProfileScreen.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [
      "legali-glass-card",
      "legali-profile-stat-card",
      "legali-setting-item",
      "legali-avatar",
      "legali-badge",
      "legali-button",
      "legali-lib-utils",
    ],
  },

  // Mascot
  {
    name: "legali-mascot",
    type: "registry:ui",
    files: [
      "components/ui/legali/mascot/LegaliMascot.tsx",
      "components/ui/legali/mascot/index.ts",
      "components/ui/legali/mascot/RiveGuide.mdx",
    ],
    dependencies: ["@rive-app/react-canvas"],
  },

  // Data and barrel
  {
    name: "legali-demo-content",
    type: "registry:lib",
    files: ["components/ui/legali/data/legali-demo-content.ts"],
    registryDependencies: ["legali-quiz-screen"],
  },
  {
    name: "legali-kit",
    type: "registry:lib",
    files: ["components/ui/legali/index.ts"],
    registryDependencies: [
      "legali-answer",
      "legali-typing-text",
      "legali-glass-card",
      "legali-lesson-dot",
      "legali-progress-bar",
      "legali-stat-item",
      "legali-stat-row",
      "legali-status-bar",
      "legali-user-stats-bar",
      "legali-progress-section",
      "legali-module-card",
      "legali-mascot-hero-card",
      "legali-quiz-header",
      "legali-quiz-question",
      "legali-quiz-feedback",
      "legali-results-card",
      "legali-navigation-bar",
      "legali-home-screen",
      "legali-quiz-screen",
      "legali-results-screen",
      "legali-progress-screen",
      "legali-profile-screen",
      "legali-mascot",
    ],
  },
];

async function rewriteContent(content) {
  return replacements.reduce((acc, rule) => acc.replace(rule.from, rule.to), content);
}

async function copyWithRewrite(srcRel, destRel) {
  const candidatePaths = [
    path.join(repoRoot, "src", srcRel),
    path.join(repoRoot, "src", srcRel.replace(/^components\/ui\/legali\//, "components/legali/")),
    path.join(repoRoot, "src", srcRel.replace(/^components\/ui\/legali\//, "components/")),
  ];

  const srcPath = await (async () => {
    for (const candidate of candidatePaths) {
      try {
        await fs.access(candidate);
        return candidate;
      } catch {
        // keep trying
      }
    }
    throw new Error(`Source not found for ${srcRel}`);
  })();

  const destPath = path.join(outDir, destRel);
  const raw = await fs.readFile(srcPath, "utf8");
  const rewritten = await rewriteContent(raw);
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  await fs.writeFile(destPath, rewritten, "utf8");
}

async function build() {
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  // Flatten all unique file paths we need to copy.
  const allPaths = new Set(files.flatMap((item) => item.files));
  for (const destRel of allPaths) {
    await copyWithRewrite(destRel, destRel);
  }

  // Generate registry index with embedded content.
  const items = [];
  for (const item of files) {
    const fileEntries = [];
    for (const file of item.files) {
      const absPath = path.join(outDir, file);
      const content = await fs.readFile(absPath, "utf8");
      fileEntries.push({
        path: file,
        content,
        type: item.type,
      });
    }
    items.push({
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      ...item,
      files: fileEntries,
    });
  }

  const index = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "@legali",
    homepage: "https://github.com/rryando/legali-ai-components",
    items,
  };

  await fs.writeFile(path.join(outDir, "index.json"), JSON.stringify(index, null, 2));
  await fs.writeFile(path.join(outDir, "registry.json"), JSON.stringify(index, null, 2));

  // Emit per-item files so CLI can consume a direct URL without a registry mapping.
  // Convert registryDependencies from names to full URLs for external resolution.
  const registryBaseUrl =
    "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry";
  for (const item of items) {
    // Convert local registryDependencies (legali-*) to full URLs
    const resolvedDeps = (item.registryDependencies || []).map((dep) => {
      if (dep.startsWith("legali-")) {
        return `${registryBaseUrl}/${dep}.json`;
      }
      return dep; // Keep shadcn core deps as-is (e.g., "button", "card")
    });

    const itemWithResolvedDeps = {
      ...item,
      registryDependencies: resolvedDeps.length > 0 ? resolvedDeps : undefined,
    };
    await fs.writeFile(
      path.join(outDir, `${item.name}.json`),
      JSON.stringify(itemWithResolvedDeps, null, 2)
    );
  }

  console.log(`✅ Registry built with ${items.length} items at ${outDir}`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
