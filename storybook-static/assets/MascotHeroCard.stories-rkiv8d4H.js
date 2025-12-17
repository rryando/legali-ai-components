import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-yIsmwZOr.js";import{M as m}from"./MascotHeroCard-xkLGLXko.js";import{a as t}from"./LegaliMascot-DI_ht39e.js";import"./utils-CDN07tui.js";import"./GlassCard-C4HQ4l4H.js";import"./TypingText-a-MuFZ1k.js";const D={title:"Legali/Composite/MascotHeroCard",component:m,parameters:{layout:"padded"},tags:["autodocs"]},l=[{motion:t.WAVING,durationMs:2e3,lines:["Hey!","Ready to learn?","Pick a module to continue"]},{motion:t.SPEAKING,durationMs:5e3,lines:["I’ll guide you through this.","Watch for key terms.","You’ve got this."]},{motion:t.IDLE,durationMs:null,lines:["Tap any module when you’re ready"]}],e={args:{heroTitle:"Discovery Fundamentals",script:l,stream:{fitToStepDuration:!0,loop:!0,showCursor:!0,linePauseMs:3e3}}},r={render:p=>{const[d,g]=h.useState(0);return o.jsxs("div",{className:"space-y-4",children:[o.jsx(m,{...p,triggerKey:d}),o.jsx("button",{className:"px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold",onClick:()=>g(M=>M+1),children:"Interrupt"})]})},args:{heroTitle:"Interruptible Script",script:l,interruptScript:[{motion:t.THINKING,durationMs:450,lines:["Hmm…","One moment"]},{motion:t.SPEAKING,durationMs:2500,lines:["Okay — switching focus."]},{motion:t.IDLE,durationMs:null,lines:["Ready."]}],stream:{fitToStepDuration:!0,loop:!0,showCursor:!0,linePauseMs:3e3}}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    heroTitle: "Discovery Fundamentals",
    script: baseScript,
    stream: {
      fitToStepDuration: true,
      loop: true,
      showCursor: true,
      linePauseMs: 3000
    }
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,u,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [trigger, setTrigger] = React.useState(0);
    return <div className="space-y-4">
        <MascotHeroCard {...args} triggerKey={trigger} />
        <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold" onClick={() => setTrigger(v => v + 1)}>
          Interrupt
        </button>
      </div>;
  },
  args: {
    heroTitle: "Interruptible Script",
    script: baseScript,
    interruptScript: [{
      motion: MascotMotion.THINKING,
      durationMs: 450,
      lines: ["Hmm…", "One moment"]
    }, {
      motion: MascotMotion.SPEAKING,
      durationMs: 2500,
      lines: ["Okay — switching focus."]
    }, {
      motion: MascotMotion.IDLE,
      durationMs: null,
      lines: ["Ready."]
    }],
    stream: {
      fitToStepDuration: true,
      loop: true,
      showCursor: true,
      linePauseMs: 3000
    }
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const N=["Default","InterruptDemo"];export{e as Default,r as InterruptDemo,N as __namedExportsOrder,D as default};
