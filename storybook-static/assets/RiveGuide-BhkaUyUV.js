import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as o}from"./index-BxvCFfQM.js";import{M as t}from"./index-CD8vtO2O.js";import"./index-yIsmwZOr.js";import"./iframe-T9YiIMsS.js";import"./index-M3uX8AIl.js";import"./index-DLXLKNMB.js";import"./index-DrFu-skq.js";function s(i){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Legali/Mascot/Usage Guide"}),`
`,n.jsx(e.h1,{id:"rive-animation-guide",children:"Rive Animation Guide"}),`
`,n.jsxs(e.p,{children:["Learn how to use the ",n.jsx(e.strong,{children:"LegaliMascot"})," component with React and Storybook."]}),`
`,n.jsx(e.h2,{id:"quick-start",children:"Quick Start"}),`
`,n.jsx(e.h3,{id:"1-install-dependencies",children:"1. Install Dependencies"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @rive-app/react-canvas
# or
pnpm add @rive-app/react-canvas
# or
bun add @rive-app/react-canvas
`})}),`
`,n.jsx(e.h3,{id:"2-add-your-animation-file",children:"2. Add Your Animation File"}),`
`,n.jsxs(e.p,{children:["Place your ",n.jsx(e.code,{children:".riv"})," file in the ",n.jsx(e.code,{children:"public/"})," directory:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`public/
  └── mascot.riv
`})}),`
`,n.jsx(e.h3,{id:"3-import-and-use",children:"3. Import and Use"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { LegaliMascot, MascotMotion } from '@/components/legali/mascot'

function MyComponent() {
  return (
    <LegaliMascot
      motion={MascotMotion.THINKING}
      isBlink={true}
      width={300}
      height={300}
    />
  )
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"api-reference",children:"API Reference"}),`
`,n.jsx(e.h3,{id:"legalimascot-props",children:"LegaliMascot Props"}),`
`,n.jsxs(e.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,n.jsx(e.code,{children:"motion"})," | ",n.jsx(e.code,{children:"MascotMotionType"})," | ",n.jsx(e.code,{children:"MascotMotion.IDLE"}),` | The animation state to display |
| `,n.jsx(e.code,{children:"isBlink"})," | ",n.jsx(e.code,{children:"boolean"})," | ",n.jsx(e.code,{children:"true"}),` | Enable/disable blinking |
| `,n.jsx(e.code,{children:"width"})," | ",n.jsx(e.code,{children:"number \\| string"})," | ",n.jsx(e.code,{children:"300"}),` | Container width |
| `,n.jsx(e.code,{children:"height"})," | ",n.jsx(e.code,{children:"number \\| string"})," | ",n.jsx(e.code,{children:"300"}),` | Container height |
| `,n.jsx(e.code,{children:"src"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"'/animations/legali.riv'"}),` | Path to .riv file |
| `,n.jsx(e.code,{children:"stateMachine"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"'SM_MASCOT'"}),` | State machine name |
| `,n.jsx(e.code,{children:"className"})," | ",n.jsx(e.code,{children:"string"})," | ",n.jsx(e.code,{children:"''"}),` | Additional CSS classes |
| `,n.jsx(e.code,{children:"onLoad"})," | ",n.jsx(e.code,{children:"() => void"}),` | - | Callback when loaded |
| `,n.jsx(e.code,{children:"onMotionChange"})," | ",n.jsx(e.code,{children:"(motion) => void"})," | - | Callback on motion change |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"available-motions",children:"Available Motions"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"MascotMotion"})," enum provides all available animation states:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { MascotMotion } from '@/components/legali/mascot'

// Use in component
<LegaliMascot motion={MascotMotion.CELEBRATE} />
`})}),`
`,n.jsxs(e.p,{children:[`| Motion | Value | Use Case |
|--------|-------|----------|
| `,n.jsx(e.code,{children:"EXIT"})," | ",n.jsx(e.code,{children:"'EXIT'"}),` | Leaving/closing animation |
| `,n.jsx(e.code,{children:"NORMAL"})," | ",n.jsx(e.code,{children:"'NORMAL'"})," | ",n.jsx(e.strong,{children:"Reset state"}),` - resets all attributes |
| `,n.jsx(e.code,{children:"LAPTOP"})," | ",n.jsx(e.code,{children:"'LAPTOP'"}),` | Working on computer |
| `,n.jsx(e.code,{children:"WRITING"})," | ",n.jsx(e.code,{children:"'WRITING'"}),` | Taking notes |
| `,n.jsx(e.code,{children:"IDLE"})," | ",n.jsx(e.code,{children:"'IDLE'"}),` | Idle waiting state |
| `,n.jsx(e.code,{children:"THINKING"})," | ",n.jsx(e.code,{children:"'THINKING'"}),` | Processing/pondering |
| `,n.jsx(e.code,{children:"CRYING"})," | ",n.jsx(e.code,{children:"'CRYING'"}),` | Error/sad states |
| `,n.jsx(e.code,{children:"SPEAKING"})," | ",n.jsx(e.code,{children:"'SPEAKING'"}),` | Talking to user |
| `,n.jsx(e.code,{children:"CONFUSED"})," | ",n.jsx(e.code,{children:"'CONFUSED'"}),` | Unclear situations |
| `,n.jsx(e.code,{children:"WAVING"})," | ",n.jsx(e.code,{children:"'WAVING'"}),` | Greeting users |
| `,n.jsx(e.code,{children:"SHRUG"})," | ",n.jsx(e.code,{children:"'SHRUG'"}),` | Uncertainty |
| `,n.jsx(e.code,{children:"CELEBRATE"})," | ",n.jsx(e.code,{children:"'CELEBRATE'"})," | Success/achievement |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"view-model-binding",children:"View Model Binding"}),`
`,n.jsxs(e.p,{children:["The Rive animation uses a ",n.jsx(e.strong,{children:"View Model"})," called ",n.jsx(e.code,{children:"VM_MASCOT"})," with two bound properties:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`VM_MASCOT
├── isBlink: Boolean    → Controls blinking
└── animates: MOTIONS   → Controls current motion (Enum)
`})}),`
`,n.jsxs(e.p,{children:["The component uses ",n.jsx(e.strong,{children:"auto-binding"})," (",n.jsx(e.code,{children:"autoBind: true"}),") to connect to the View Model instance."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"motion-reset-behavior",children:"Motion Reset Behavior"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Important:"})," Before switching to any new motion, the component automatically resets to ",n.jsx(e.code,{children:"NORMAL"})," state first and waits 300ms before applying the target motion."]}),`
`]}),`
`,n.jsx(e.p,{children:"This reset behavior is necessary because:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Some animation attributes may be altered on specific keyframes"}),`
`,n.jsxs(e.li,{children:["The ",n.jsx(e.code,{children:"NORMAL"})," state resets all attributes to their default values"]}),`
`,n.jsx(e.li,{children:"This ensures clean transitions between different animations"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Motion Change Flow:
1. User sets motion to CELEBRATE
2. Component sets to NORMAL (reset all attributes)
3. Wait 300ms
4. Component sets to CELEBRATE
5. onMotionChange callback fires
`})}),`
`,n.jsx(e.p,{children:"This is handled automatically by the component - you don't need to manage it manually."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsx(e.h3,{id:"reactive-state-changes",children:"Reactive State Changes"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useState } from 'react'
import { LegaliMascot, MascotMotion } from '@/components/legali/mascot'

function InteractiveMascot() {
  const [motion, setMotion] = useState(MascotMotion.IDLE)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setMotion(MascotMotion.THINKING)
    setIsLoading(true)

    await someAsyncOperation()

    setMotion(MascotMotion.CELEBRATE)
    setIsLoading(false)
  }

  return (
    <div>
      <LegaliMascot motion={motion} />
      <button onClick={handleClick} disabled={isLoading}>
        Process
      </button>
    </div>
  )
}
`})}),`
`,n.jsx(e.h3,{id:"conditional-animations",children:"Conditional Animations"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function StatusMascot({ status }: { status: 'success' | 'error' | 'loading' }) {
  const getMotion = () => {
    switch (status) {
      case 'success': return MascotMotion.CELEBRATE
      case 'error': return MascotMotion.CRYING
      case 'loading': return MascotMotion.THINKING
      default: return MascotMotion.IDLE
    }
  }

  return <LegaliMascot motion={getMotion()} />
}
`})}),`
`,n.jsx(e.h3,{id:"custom-styling",children:"Custom Styling"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<LegaliMascot
  motion={MascotMotion.WAVING}
  className="rounded-full shadow-lg"
  width={200}
  height={200}
/>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Preload Animations"})," - Load the .riv file early to avoid delays"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use Semantic Motions"})," - Match animations to UX context (e.g., CELEBRATE for success)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Handle Loading"})," - Use ",n.jsx(e.code,{children:"onLoad"})," callback to show loading states"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Optimize Size"})," - Use appropriate dimensions for your layout"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility"})," - Consider reducing motion for users who prefer it"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,n.jsx(e.h3,{id:"animation-not-loading",children:"Animation Not Loading"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Verify the ",n.jsx(e.code,{children:".riv"})," file exists at the specified ",n.jsx(e.code,{children:"src"})," path"]}),`
`,n.jsx(e.li,{children:"Check browser console for CORS or 404 errors"}),`
`,n.jsx(e.li,{children:"Ensure the state machine name matches exactly"}),`
`]}),`
`,n.jsx(e.h3,{id:"motions-not-changing",children:"Motions Not Changing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Confirm the state machine input names match (",n.jsx(e.code,{children:"isBlink"}),", ",n.jsx(e.code,{children:"animates"}),")"]}),`
`,n.jsx(e.li,{children:"Check that the View Model is properly configured in Rive"}),`
`]}),`
`,n.jsx(e.h3,{id:"performance-issues",children:"Performance Issues"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use smaller canvas dimensions when possible"}),`
`,n.jsx(e.li,{children:"Consider lazy loading for off-screen mascots"}),`
`,n.jsx(e.li,{children:"Limit simultaneous Rive instances on a page"}),`
`]})]})}function m(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{m as default};
