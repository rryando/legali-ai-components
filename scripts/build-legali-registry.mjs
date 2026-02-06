import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const outDir = path.join(repoRoot, "registry");

// Public URLs for assets so consumers don't need to handle binary files manually.
const ASSET_BASE = "https://raw.githubusercontent.com/rryando/legali-ai-components/main";

const COMPONENT_LEGALI_REGEX = /@\/components\/legali/g;
const COMPONENT_BUTTON_REGEX = /@\/components\/button/g;
const COMPONENT_SWITCH_REGEX = /@\/components\/switch/g;
const COMPONENT_AVATAR_REGEX = /@\/components\/avatar/g;
const COMPONENT_BADGE_REGEX = /@\/components\/badge/g;
const COMPONENT_CHART_REGEX = /@\/components\/chart/g;
const LOGO_PNG_REGEX = /\/logo\/logo\.png/g;
const ANIMATIONS_RIV_REGEX = /\/animations\/legali\.riv/g;

const REPLACEMENT_UI_LEGALI_REGEX = /^components\/ui\/legali\//;

const replacements = [
  // Move legali components under the shadcn-conventional ui path.
  { from: COMPONENT_LEGALI_REGEX, to: "@/components/ui/legali" },
  // Map shared ui dependencies to prefixed versions shipped in this registry.
  { from: COMPONENT_BUTTON_REGEX, to: "@/components/ui/legali/button" },
  { from: COMPONENT_SWITCH_REGEX, to: "@/components/ui/legali/switch" },
  { from: COMPONENT_AVATAR_REGEX, to: "@/components/ui/legali/avatar" },
  { from: COMPONENT_BADGE_REGEX, to: "@/components/ui/legali/badge" },
  { from: COMPONENT_CHART_REGEX, to: "@/components/ui/legali/chart" },
  // Keep logos and animation assets fetchable when added via registry.
  { from: LOGO_PNG_REGEX, to: `${ASSET_BASE}/public/logo/logo.png` },
  {
    from: ANIMATIONS_RIV_REGEX,
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
    files: ["components/ui/legali/atomic/answer.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-glass-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/glass-card.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-typing-text",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/typing-text.tsx"],
    dependencies: ["motion", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-lesson-dot",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/lesson-dot.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-progress-bar",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/progress-bar.tsx"],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-stat-item",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/stat-item.tsx"],
    dependencies: ["class-variance-authority", "lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-stat-row",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/stat-row.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-status-bar",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/status-bar.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-explanation-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/explanation-card.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils", "legali-glass-card"],
  },
  {
    name: "legali-question-number-badge",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/question-number-badge.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-setting-item",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/setting-item.tsx"],
    dependencies: ["lucide-react"],
    registryDependencies: ["legali-switch"],
  },
  {
    name: "legali-profile-stat-card",
    type: "registry:ui",
    files: ["components/ui/legali/atomic/profile-stat-card.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils", "legali-glass-card"],
  },

  // Composite
  {
    name: "legali-module-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/module-card.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lesson-dot", "legali-glass-card", "legali-lib-utils"],
  },
  {
    name: "legali-mascot-hero-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/mascot-hero-card.tsx"],
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
    files: ["components/ui/legali/composite/navigation-bar.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-progress-section",
    type: "registry:ui",
    files: ["components/ui/legali/composite/progress-section.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-progress-bar", "legali-glass-card", "legali-lib-utils"],
  },
  {
    name: "legali-quiz-feedback",
    type: "registry:ui",
    files: ["components/ui/legali/composite/quiz-feedback.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-button", "legali-lib-utils"],
  },
  {
    name: "legali-quiz-header",
    type: "registry:ui",
    files: ["components/ui/legali/composite/quiz-header.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: ["legali-progress-bar", "legali-lib-utils"],
  },
  {
    name: "legali-quiz-question",
    type: "registry:ui",
    files: ["components/ui/legali/composite/quiz-question.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-lib-utils"],
  },
  {
    name: "legali-results-card",
    type: "registry:ui",
    files: ["components/ui/legali/composite/results-card.tsx"],
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
    files: ["components/ui/legali/composite/user-stats-bar.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-stat-item", "legali-lib-utils"],
  },

  // Screens
  {
    name: "legali-home-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/home-screen.tsx"],
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
    files: ["components/ui/legali/screens/quiz-screen.tsx"],
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
    files: ["components/ui/legali/screens/review-screen.tsx"],
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
    files: ["components/ui/legali/screens/results-screen.tsx"],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: ["legali-results-card", "legali-glass-card", "legali-lib-utils"],
  },
  {
    name: "legali-progress-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/progress-screen.tsx"],
    dependencies: ["lucide-react", "clsx", "tailwind-merge", "recharts"],
    registryDependencies: ["legali-glass-card", "legali-lib-utils", "legali-chart"],
  },
  {
    name: "legali-profile-screen",
    type: "registry:ui",
    files: ["components/ui/legali/screens/profile-screen.tsx"],
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
      "components/ui/legali/mascot/legali-mascot.tsx",
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

function rewriteContent(content) {
  return replacements.reduce((acc, rule) => acc.replace(rule.from, rule.to), content);
}

async function copyWithRewrite(srcRel, destRel) {
  const candidatePaths = [
    path.join(repoRoot, "src", srcRel),
    path.join(repoRoot, "src", srcRel.replace(REPLACEMENT_UI_LEGALI_REGEX, "components/legali/")),
    path.join(repoRoot, "src", srcRel.replace(REPLACEMENT_UI_LEGALI_REGEX, "components/")),
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
  const rewritten = rewriteContent(raw);
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
