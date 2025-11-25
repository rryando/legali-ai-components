import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{N as f,H as v}from"./NavigationBar-C53lbc6v.js";import{T as C}from"./trophy-BTasNeA9.js";import{U as I}from"./user-BtdJfTDp.js";import"./index-yIsmwZOr.js";import"./utils-CDN07tui.js";import"./createLucideIcon-B1u6bxpC.js";const A={title:"Legali/Composite/NavigationBar",component:f,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{activeItem:{control:"text"}}},t=[{id:"learn",icon:a.jsx(v,{className:"w-6 h-6"}),label:"Learn"},{id:"progress",icon:a.jsx(C,{className:"w-6 h-6"}),label:"Progress"},{id:"profile",icon:a.jsx(I,{className:"w-6 h-6"}),label:"Profile"}],o={args:{items:t,activeItem:"learn",onItemClick:e=>console.log(`Clicked: ${e}`)}},s={args:{items:t,activeItem:"progress",onItemClick:e=>console.log(`Clicked: ${e}`)}},r={args:{items:t,activeItem:"profile",onItemClick:e=>console.log(`Clicked: ${e}`)}};var i,c,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: items,
    activeItem: "learn",
    onItemClick: id => console.log(\`Clicked: \${id}\`)
  }
}`,...(n=(c=o.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: items,
    activeItem: "progress",
    onItemClick: id => console.log(\`Clicked: \${id}\`)
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: items,
    activeItem: "profile",
    onItemClick: id => console.log(\`Clicked: \${id}\`)
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const b=["Default","ProgressActive","ProfileActive"];export{o as Default,r as ProfileActive,s as ProgressActive,b as __namedExportsOrder,A as default};
