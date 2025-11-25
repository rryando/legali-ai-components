import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as I}from"./index-yIsmwZOr.js";import{c as b}from"./utils-CDN07tui.js";const a=I.forwardRef(({className:f,time:g="9:41",showIcons:h=!0,...x},w)=>t.jsxs("div",{ref:w,className:b("h-11 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md flex items-center justify-between px-5 text-sm font-medium",f),...x,children:[t.jsx("span",{children:g}),h&&t.jsx("span",{className:"flex gap-1","aria-label":"Status icons",children:"📶 📡 🔋"})]}));a.displayName="StatusBar";a.__docgenInfo={description:"",methods:[],displayName:"StatusBar",props:{time:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"9:41"',computed:!1}},showIcons:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const N={title:"Legali/Atomic/StatusBar",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{time:{control:"text"},showIcons:{control:"boolean"}}},e={args:{time:"9:41",showIcons:!0}},s={args:{time:"12:00",showIcons:!0}},r={args:{time:"10:30",showIcons:!1}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    time: "9:41",
    showIcons: true
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,i,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    time: "12:00",
    showIcons: true
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    time: "10:30",
    showIcons: false
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const T=["Default","CustomTime","NoIcons"];export{s as CustomTime,e as Default,r as NoIcons,T as __namedExportsOrder,N as default};
