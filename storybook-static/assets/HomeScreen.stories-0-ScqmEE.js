import{H as g}from"./HomeScreen-BV5lV0aC.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-yIsmwZOr.js";import"./utils-CDN07tui.js";import"./UserStatsBar-DRGPyyyv.js";import"./StatItem-mSORs9TI.js";import"./index-C2vczdB5.js";import"./flame-CiVUoMnf.js";import"./createLucideIcon-B1u6bxpC.js";import"./star-DA9E--53.js";import"./ModuleCard-CDyF3UBl.js";import"./LessonDot-CfDGCByo.js";import"./GlassCard-C4HQ4l4H.js";import"./check-C5oz72YT.js";import"./NavigationBar-C53lbc6v.js";import"./trophy-BTasNeA9.js";import"./user-BtdJfTDp.js";import"./ProfileScreen-D4HGTiqu.js";import"./SettingItem-DFkuiOZj.js";import"./index-BWMUC1Br.js";import"./index-M3uX8AIl.js";import"./button-CXZ-4DRD.js";import"./ProfileStatCard-CjilhBhc.js";import"./target-BPS2kpoS.js";import"./book-open-CfkLJLE-.js";import"./ProgressScreen-Bihpq0yF.js";import"./tiny-invariant-CopsF_GD.js";import"./clock-AxtxkINe.js";import"./circle-check-DgGB4gpA.js";import"./LegaliMascot-DI_ht39e.js";import"./MascotHeroCard-xkLGLXko.js";import"./TypingText-a-MuFZ1k.js";const V={title:"Legali/Screens/HomeScreen",component:g,parameters:{layout:"centered"},tags:["autodocs"]},a=[{id:1,icon:"📄",title:"Module 1: Court Documents Basics",subtitle:"Motions, Notices & Pleadings",mascotCopy:"Let’s warm up: I’ll help you spot the key parts of common court documents so you know what you’re looking at.",status:"completed",lessons:[{id:1,completed:!0},{id:2,completed:!0},{id:3,completed:!0},{id:4,completed:!0}]},{id:2,icon:"🔍",title:"Module 2: Discovery Fundamentals",subtitle:"Getting information before trial",mascotCopy:"Discovery is how you get answers before trial. I’ll guide you through the basics and what to ask for.",status:"current",lessons:[{id:1,completed:!0},{id:2,completed:!0},{id:3,completed:!1},{id:4,completed:!1}]},{id:3,icon:"⚖️",title:"Module 3: Pleadings vs. Motions",subtitle:"Understanding document types",mascotCopy:"We’ll make this easy: pleadings start the case, motions ask the court to do something. I’ll show you examples.",status:"locked",lessons:[{id:1,completed:!1},{id:2,completed:!1},{id:3,completed:!1},{id:4,completed:!1}]},{id:4,icon:"📋",title:"Module 4: Evidence & Declarations",subtitle:"What counts in court",mascotCopy:"Evidence wins cases. I’ll help you understand what counts and how declarations support your story.",status:"locked",lessons:[{id:1,completed:!1},{id:2,completed:!1},{id:3,completed:!1},{id:4,completed:!1}]},{id:5,icon:"📮",title:"Module 5: Service of Process",subtitle:"Delivering legal documents",mascotCopy:"Service is all about proper delivery. I’ll keep you on the safe path so you don’t lose time on technicalities.",status:"locked",lessons:[{id:1,completed:!1},{id:2,completed:!1},{id:3,completed:!1},{id:4,completed:!1}]}],s={args:{streak:7,points:340,hearts:5,modules:a}},o={args:{streak:15,points:1250,hearts:3,modules:a.map((e,t)=>({...e,status:t<3?"completed":t===3?"current":"locked"}))}},r={args:{streak:1,points:50,hearts:5,modules:a.map((e,t)=>({...e,status:t===0?"current":"locked",lessons:e.lessons.map(f=>({...f,completed:!1}))}))}};var i,l,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    streak: 7,
    points: 340,
    hearts: 5,
    modules: sampleModules
  }
}`,...(n=(l=s.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    streak: 15,
    points: 1250,
    hearts: 3,
    modules: sampleModules.map((m, i) => ({
      ...m,
      status: i < 3 ? 'completed' as const : i === 3 ? 'current' as const : 'locked' as const
    }))
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const X=["Default","HighProgress","JustStarted"];export{s as Default,o as HighProgress,r as JustStarted,X as __namedExportsOrder,V as default};
