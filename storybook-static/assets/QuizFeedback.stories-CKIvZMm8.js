import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{Q as m}from"./QuizFeedback-CrZjcDl1.js";import"./index-yIsmwZOr.js";import"./utils-CDN07tui.js";import"./button-EZRCHwuf.js";import"./index-BWMUC1Br.js";import"./index-C2vczdB5.js";import"./circle-check-DgGB4gpA.js";import"./createLucideIcon-B1u6bxpC.js";const C={title:"Legali/Composite/QuizFeedback",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{show:{control:"boolean"},correct:{control:"boolean"},explanation:{control:"text"}}},e={args:{show:!0,correct:!0,explanation:"Great job! You correctly identified the key requirement for small claims court eligibility.",onContinue:()=>console.log("Continue clicked")},decorators:[r=>t.jsx("div",{className:"h-64 relative bg-slate-100",children:t.jsx(r,{})})]},o={args:{show:!0,correct:!1,explanation:"Not quite. Remember that small claims court has a monetary limit on the amount you can sue for.",onContinue:()=>console.log("Continue clicked")},decorators:[r=>t.jsx("div",{className:"h-64 relative bg-slate-100",children:t.jsx(r,{})})]};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    show: true,
    correct: true,
    explanation: "Great job! You correctly identified the key requirement for small claims court eligibility.",
    onContinue: () => console.log("Continue clicked")
  },
  decorators: [Story => <div className="h-64 relative bg-slate-100">
        <Story />
      </div>]
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,i,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    show: true,
    correct: false,
    explanation: "Not quite. Remember that small claims court has a monetary limit on the amount you can sue for.",
    onContinue: () => console.log("Continue clicked")
  },
  decorators: [Story => <div className="h-64 relative bg-slate-100">
        <Story />
      </div>]
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const v=["Correct","Incorrect"];export{e as Correct,o as Incorrect,v as __namedExportsOrder,C as default};
