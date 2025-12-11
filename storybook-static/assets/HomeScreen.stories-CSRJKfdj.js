import{H as k}from"./HomeScreen-Dj3ASNQx.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-yIsmwZOr.js";import"./utils-CDN07tui.js";import"./UserStatsBar-DRGPyyyv.js";import"./StatItem-mSORs9TI.js";import"./index-C2vczdB5.js";import"./flame-CiVUoMnf.js";import"./createLucideIcon-B1u6bxpC.js";import"./star-DA9E--53.js";import"./ProgressSection-DHk3FNpn.js";import"./ProgressBar-CblPxWMU.js";import"./GlassCard-C4HQ4l4H.js";import"./ModuleCard-CDyF3UBl.js";import"./LessonDot-CfDGCByo.js";import"./check-C5oz72YT.js";import"./NavigationBar-C53lbc6v.js";import"./trophy-BTasNeA9.js";import"./user-BtdJfTDp.js";import"./ProfileScreen-D4HGTiqu.js";import"./SettingItem-DFkuiOZj.js";import"./index-BWMUC1Br.js";import"./index-M3uX8AIl.js";import"./button-CXZ-4DRD.js";import"./ProfileStatCard-CjilhBhc.js";import"./target-BPS2kpoS.js";import"./book-open-CfkLJLE-.js";import"./ProgressScreen-Bihpq0yF.js";import"./tiny-invariant-CopsF_GD.js";import"./clock-AxtxkINe.js";import"./circle-check-DgGB4gpA.js";const T={title:"Legali/Screens/HomeScreen",component:k,parameters:{layout:"centered"},tags:["autodocs"]},a=[{id:1,icon:"📄",title:"Module 1: Court Documents Basics",subtitle:"Motions, Notices & Pleadings",status:"completed",lessons:[{id:1,completed:!0},{id:2,completed:!0},{id:3,completed:!0},{id:4,completed:!0}]},{id:2,icon:"🔍",title:"Module 2: Discovery Fundamentals",subtitle:"Getting information before trial",status:"current",lessons:[{id:1,completed:!0},{id:2,completed:!0},{id:3,completed:!1},{id:4,completed:!1}]},{id:3,icon:"⚖️",title:"Module 3: Pleadings vs. Motions",subtitle:"Understanding document types",status:"locked",lessons:[{id:1,completed:!1},{id:2,completed:!1},{id:3,completed:!1},{id:4,completed:!1}]},{id:4,icon:"📋",title:"Module 4: Evidence & Declarations",subtitle:"What counts in court",status:"locked",lessons:[{id:1,completed:!1},{id:2,completed:!1},{id:3,completed:!1},{id:4,completed:!1}]},{id:5,icon:"📮",title:"Module 5: Service of Process",subtitle:"Delivering legal documents",status:"locked",lessons:[{id:1,completed:!1},{id:2,completed:!1},{id:3,completed:!1},{id:4,completed:!1}]}],s={args:{streak:7,points:340,hearts:5,modules:a}},o={args:{streak:15,points:1250,hearts:3,modules:a.map((e,t)=>({...e,status:t<3?"completed":t===3?"current":"locked"}))}},r={args:{streak:1,points:50,hearts:5,modules:a.map((e,t)=>({...e,status:t===0?"current":"locked",lessons:e.lessons.map(g=>({...g,completed:!1}))}))}};var i,l,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    streak: 7,
    points: 340,
    hearts: 5,
    modules: sampleModules
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var n,d,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    streak: 15,
    points: 1250,
    hearts: 3,
    modules: sampleModules.map((m, i) => ({
      ...m,
      status: i < 3 ? 'completed' as const : i === 3 ? 'current' as const : 'locked' as const
    }))
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    streak: 1,
    points: 50,
    hearts: 5,
    modules: sampleModules.map((m, i) => ({
      ...m,
      status: i === 0 ? 'current' as const : 'locked' as const,
      lessons: m.lessons.map(l => ({
        ...l,
        completed: false
      }))
    }))
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const V=["Default","HighProgress","JustStarted"];export{s as Default,o as HighProgress,r as JustStarted,V as __namedExportsOrder,T as default};
