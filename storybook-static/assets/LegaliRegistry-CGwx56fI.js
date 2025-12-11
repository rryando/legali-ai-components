import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as r}from"./index-BxvCFfQM.js";import{M as t}from"./index-C8-uU8sN.js";import"./index-yIsmwZOr.js";import"./iframe-CrLFKrbQ.js";import"./index-M3uX8AIl.js";import"./index-DLXLKNMB.js";import"./index-DrFu-skq.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Registry/Legali Components Registry"}),`
`,e.jsx(s.h1,{id:"legali-registry-usage",children:"Legali Registry Usage"}),`
`,e.jsxs(s.p,{children:["This library ships a shadcn-compatible registry so you can pull Legali components straight into other projects with ",e.jsx(s.code,{children:"shadcn@latest"})," and a custom registry URL."]}),`
`,e.jsx(s.h2,{id:"quick-install",children:"Quick install"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npx shadcn@latest add \\
  --registry https://raw.githubusercontent.com/rryando/legali-ai-components/registry/registry/index.json \\
  legali-kit
`})}),`
`,e.jsx(s.p,{children:"The registry:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Uses prefixed names (",e.jsx(s.code,{children:"legali-*"}),") to avoid collisions."]}),`
`,e.jsxs(s.li,{children:["Rewrites imports to the standard shadcn layout (",e.jsx(s.code,{children:"@/components/ui/..."}),", ",e.jsx(s.code,{children:"@/lib/utils"}),", ",e.jsx(s.code,{children:"@/styles/globals.css"}),", ",e.jsx(s.code,{children:"@/hooks/use-mobile"}),")."]}),`
`,e.jsx(s.li,{children:"Includes the supporting base pieces (button, avatar, badge, switch, chart), utilities, styles, hook, demo data, mascot guide, and assets pointed at GitHub raw URLs."}),`
`]}),`
`,e.jsx(s.h2,{id:"common-pulls",children:"Common pulls"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`# All Legali exports (atomic + composite + screens + barrel)
npx shadcn@latest add --registry https://raw.githubusercontent.com/rryando/legali-ai-components/registry/index.json legali-kit

# Individual pieces
npx shadcn@latest add --registry https://raw.githubusercontent.com/rryando/legali-ai-components/registry/index.json legali-home-screen
npx shadcn@latest add --registry https://raw.githubusercontent.com/rryando/legali-ai-components/registry/index.json legali-quiz-screen
npx shadcn@latest add --registry https://raw.githubusercontent.com/rryando/legali-ai-components/registry/index.json legali-mascot
`})}),`
`,e.jsx(s.h2,{id:"prereqs--aliases",children:"Prereqs & aliases"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The registry assumes the default shadcn aliases: ",e.jsx(s.code,{children:"@/components"}),", ",e.jsx(s.code,{children:"@/components/ui"}),", ",e.jsx(s.code,{children:"@/lib"}),", ",e.jsx(s.code,{children:"@/styles"}),", ",e.jsx(s.code,{children:"@/hooks"}),"."]}),`
`,e.jsx(s.li,{children:"Tailwind CSS v3.4+ with the default shadcn tokens is expected."}),`
`,e.jsxs(s.li,{children:["React 18/19 is supported; dependencies are listed per item (e.g., ",e.jsx(s.code,{children:"lucide-react"}),", ",e.jsx(s.code,{children:"@rive-app/react-canvas"}),", ",e.jsx(s.code,{children:"recharts"}),", ",e.jsx(s.code,{children:"clsx"}),", ",e.jsx(s.code,{children:"tailwind-merge"}),", ",e.jsx(s.code,{children:"class-variance-authority"}),", ",e.jsx(s.code,{children:"@radix-ui/react-*"}),")."]}),`
`]}),`
`,e.jsx(s.h2,{id:"assets",children:"Assets"}),`
`,e.jsx(s.p,{children:"Logo and Rive animation paths are rewritten to public GitHub raw URLs:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"https://raw.githubusercontent.com/rryando/legali-ai-components/registry/public/logo/logo.png"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"https://raw.githubusercontent.com/rryando/legali-ai-components/registry/public/animations/legali.riv"})}),`
`]}),`
`,e.jsxs(s.p,{children:["If you want local copies, download those files into your ",e.jsx(s.code,{children:"/public"})," folder and adjust the image/animation props."]}),`
`,e.jsx(s.h2,{id:"rebuild-the-registry-maintainers",children:"Rebuild the registry (maintainers)"}),`
`,e.jsx(s.p,{children:"From this repo:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`pnpm run build:registry
`})}),`
`,e.jsxs(s.p,{children:["This regenerates ",e.jsx(s.code,{children:"registry/index.json"})," and all embedded files with the latest code and import rewrites. Commit the ",e.jsx(s.code,{children:"registry/"})," folder and make sure the branch you reference in the URL is publicly accessible when consumers install."]})]})}function g(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{g as default};
