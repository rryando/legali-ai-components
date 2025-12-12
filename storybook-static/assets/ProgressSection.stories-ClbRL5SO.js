import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./index-yIsmwZOr.js";import{c as b}from"./utils-CDN07tui.js";import{P as N}from"./ProgressBar-CblPxWMU.js";import{G as j}from"./GlassCard-C4HQ4l4H.js";import"./index-C2vczdB5.js";const o=y.forwardRef(({className:f,title:P,progress:n,variant:t="header",showPercentage:x=!0,...v},w)=>e.jsxs(j,{ref:w,intensity:t==="header"?"high":"low",className:b("rounded-xl p-4",t==="header"&&"border-white/40",t==="card"&&"border-slate-200/50",f),...v,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3 text-sm",children:[e.jsx("span",{className:"font-semibold text-slate-700",children:P}),x&&e.jsxs("span",{className:"font-bold text-slate-900",children:[n,"%"]})]}),e.jsx(N,{value:n,variant:"default",className:"bg-slate-100/50"})]}));o.displayName="ProgressSection";o.__docgenInfo={description:"",methods:[],displayName:"ProgressSection",props:{title:{required:!0,tsType:{name:"string"},description:""},progress:{required:!0,tsType:{name:"number"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"header" | "card"',elements:[{name:"literal",value:'"header"'},{name:"literal",value:'"card"'}]},description:"",defaultValue:{value:'"header"',computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const _={title:"Legali/Composite/ProgressSection",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text"},progress:{control:{type:"range",min:0,max:100}},variant:{control:"select",options:["header","card"]},showPercentage:{control:"boolean"}}},r={args:{title:"Module Progress",progress:45,variant:"header",showPercentage:!0}},a={args:{title:"Daily Goal",progress:80,variant:"card",showPercentage:!0}},s={args:{title:"Loading...",progress:20,variant:"card",showPercentage:!1}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: "Module Progress",
    progress: 45,
    variant: "header",
    showPercentage: true
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Daily Goal",
    progress: 80,
    variant: "card",
    showPercentage: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Loading...",
    progress: 20,
    variant: "card",
    showPercentage: false
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const E=["HeaderVariant","CardVariant","NoPercentage"];export{a as CardVariant,r as HeaderVariant,s as NoPercentage,E as __namedExportsOrder,_ as default};
