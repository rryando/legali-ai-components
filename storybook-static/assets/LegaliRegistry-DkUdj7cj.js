import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-BxvCFfQM.js";import{M as t}from"./index-CD8vtO2O.js";import"./index-yIsmwZOr.js";import"./iframe-T9YiIMsS.js";import"./index-M3uX8AIl.js";import"./index-DLXLKNMB.js";import"./index-DrFu-skq.js";function i(s){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Registry/Legali Components Registry"}),`
`,n.jsx(e.h1,{id:"legali-registry-usage",children:"Legali Registry Usage"}),`
`,n.jsx(e.p,{children:"This library ships a shadcn-compatible registry so you can pull Legali components straight into other projects using the shadcn CLI."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"quick-install-recommended",children:"Quick Install (Recommended)"}),`
`,n.jsx(e.h3,{id:"option-1-direct-url-install",children:"Option 1: Direct URL Install"}),`
`,n.jsx(e.p,{children:"The simplest way to install Legali components:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Install the complete kit with all components
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-kit.json" --yes

# Or with bun
bunx --bun shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-kit.json" --yes
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Important:"})," Always include the ",n.jsx(e.code,{children:"--yes"})," flag to skip interactive prompts and install directly from the URL."]}),`
`]}),`
`,n.jsx(e.h3,{id:"option-2-configure-as-named-registry",children:"Option 2: Configure as Named Registry"}),`
`,n.jsxs(e.p,{children:["Add the Legali registry to your project's ",n.jsx(e.code,{children:"components.json"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "@legali": "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/{name}.json"
  }
}
`})}),`
`,n.jsx(e.p,{children:"Then install using the namespace:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx shadcn@latest add @legali/legali-kit
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"available-components",children:"Available Components"}),`
`,n.jsx(e.h3,{id:"full-kit",children:"Full Kit"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Everything: atomic + composite + screens + mascot + utilities
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-kit.json" --yes
`})}),`
`,n.jsx(e.h3,{id:"individual-components",children:"Individual Components"}),`
`,n.jsx(e.h4,{id:"screens",children:"Screens"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-home-screen.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-quiz-screen.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-results-screen.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-review-screen.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-progress-screen.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-profile-screen.json" --yes
`})}),`
`,n.jsx(e.h4,{id:"composite-components",children:"Composite Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-module-card.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-navigation-bar.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-quiz-header.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-quiz-feedback.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-results-card.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-user-stats-bar.json" --yes
`})}),`
`,n.jsx(e.h4,{id:"atomic-components",children:"Atomic Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-glass-card.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-answer.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-progress-bar.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-stat-item.json" --yes
npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-lesson-dot.json" --yes
`})}),`
`,n.jsx(e.h4,{id:"mascot-rive-animation",children:"Mascot (Rive Animation)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-mascot.json" --yes
`})}),`
`,n.jsx(e.h4,{id:"demo-content",children:"Demo Content"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx shadcn@latest add "https://raw.githubusercontent.com/rryando/legali-ai-components/main/registry/legali-demo-content.json" --yes
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"registry-features",children:"Registry Features"}),`
`,n.jsx(e.p,{children:"The registry:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Uses prefixed names (",n.jsx(e.code,{children:"legali-*"}),") to avoid collisions with shadcn core components"]}),`
`,n.jsxs(e.li,{children:["Rewrites imports to standard shadcn layout (",n.jsx(e.code,{children:"@/components/ui/..."}),", ",n.jsx(e.code,{children:"@/lib/utils"}),")"]}),`
`,n.jsx(e.li,{children:"Includes supporting base pieces (button, avatar, badge, switch, chart)"}),`
`,n.jsx(e.li,{children:"Resolves all dependencies automatically via full URLs"}),`
`,n.jsx(e.li,{children:"Points assets to GitHub raw URLs for immediate use"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,n.jsx(e.p,{children:"Before installing, ensure your project has:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"shadcn/ui initialized"})," - Run ",n.jsx(e.code,{children:"npx shadcn@latest init"})," if not already done"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TypeScript configured"})," - ",n.jsx(e.code,{children:"tsconfig.json"})," with path aliases:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tailwind CSS v3.4+"})," with shadcn CSS variables"]}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"React 18 or 19"})}),`
`]}),`
`,n.jsx(e.h3,{id:"required-aliases",children:"Required Aliases"}),`
`,n.jsx(e.p,{children:"The registry expects these standard shadcn aliases:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@/components"})," → Components directory"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@/components/ui"})," → UI components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@/lib"})," → Utilities (including ",n.jsx(e.code,{children:"utils.ts"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@/hooks"})," → Custom hooks"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"assets",children:"Assets"}),`
`,n.jsx(e.p,{children:"Logo and Rive animation are served from GitHub:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Logo:"})," ",n.jsx(e.code,{children:"https://raw.githubusercontent.com/rryando/legali-ai-components/main/public/logo/logo.png"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Mascot Animation:"})," ",n.jsx(e.code,{children:"https://raw.githubusercontent.com/rryando/legali-ai-components/main/public/animations/legali.riv"})]}),`
`]}),`
`,n.jsx(e.p,{children:"To use local copies:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Download the files to your ",n.jsx(e.code,{children:"/public"})," folder"]}),`
`,n.jsx(e.li,{children:"Update the paths in your components"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"dependencies",children:"Dependencies"}),`
`,n.jsx(e.p,{children:"Components will automatically install their required dependencies:"}),`
`,n.jsxs(e.p,{children:[`| Category | Packages |
|----------|----------|
| Styling | `,n.jsx(e.code,{children:"clsx"}),", ",n.jsx(e.code,{children:"tailwind-merge"}),", ",n.jsx(e.code,{children:"class-variance-authority"}),` |
| Icons | `,n.jsx(e.code,{children:"lucide-react"}),` |
| Primitives | `,n.jsx(e.code,{children:"@radix-ui/react-avatar"}),", ",n.jsx(e.code,{children:"@radix-ui/react-switch"}),", ",n.jsx(e.code,{children:"@radix-ui/react-slot"}),` |
| Charts | `,n.jsx(e.code,{children:"recharts"}),` |
| Animation | `,n.jsx(e.code,{children:"@rive-app/react-canvas"})," |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,n.jsx(e.h3,{id:"which-components-would-you-like-to-add-prompt-appears",children:'"Which components would you like to add?" prompt appears'}),`
`,n.jsx(e.p,{children:"This means the CLI couldn't fetch the URL. Solutions:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Ensure the URL is quoted: ",n.jsx(e.code,{children:'"https://..."'})]}),`
`,n.jsxs(e.li,{children:["Add ",n.jsx(e.code,{children:"--yes"})," flag to skip interactive mode"]}),`
`,n.jsx(e.li,{children:"Check your internet connection"}),`
`,n.jsxs(e.li,{children:["Verify ",n.jsx(e.code,{children:"tsconfig.json"})," and ",n.jsx(e.code,{children:"components.json"})," exist in your project"]}),`
`]}),`
`,n.jsx(e.h3,{id:"components-not-found-after-install",children:"Components not found after install"}),`
`,n.jsxs(e.p,{children:["Check that files were created in ",n.jsx(e.code,{children:"src/components/ui/legali/"}),". If missing:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Verify the install worked
ls -la src/components/ui/legali/
`})}),`
`,n.jsx(e.h3,{id:"import-errors",children:"Import errors"}),`
`,n.jsxs(e.p,{children:["Ensure your ",n.jsx(e.code,{children:"tsconfig.json"})," has the ",n.jsx(e.code,{children:"@/*"})," path alias configured correctly."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"for-maintainers",children:"For Maintainers"}),`
`,n.jsx(e.h3,{id:"rebuild-the-registry",children:"Rebuild the Registry"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# From the legali-ai-components repo
pnpm run build:registry
# or
npm run build:registry
`})}),`
`,n.jsx(e.p,{children:"This regenerates:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"registry/index.json"})," - Full registry manifest"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"registry/registry.json"})," - Alias for index"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"registry/{name}.json"})," - Individual component files with embedded content and resolved dependency URLs"]}),`
`]}),`
`,n.jsx(e.h3,{id:"commit-and-push",children:"Commit and Push"}),`
`,n.jsx(e.p,{children:"After rebuilding:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git add registry/
git commit -m "chore: rebuild registry"
git push
`})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"main"})," branch must be publicly accessible for consumers to install."]})]})}function m(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{m as default};
