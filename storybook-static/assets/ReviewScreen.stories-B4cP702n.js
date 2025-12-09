import{R as p}from"./ReviewScreen-DUsMnJjK.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-yIsmwZOr.js";import"./utils-CDN07tui.js";import"./Answer-Cm3wYL8a.js";import"./check-C5oz72YT.js";import"./createLucideIcon-B1u6bxpC.js";import"./x-C2luFfuM.js";import"./ExplanationCard-BKDMsJkz.js";import"./GlassCard-C4HQ4l4H.js";import"./QuestionNumberBadge-BEwiAK8f.js";import"./button-CXZ-4DRD.js";import"./index-BWMUC1Br.js";import"./index-C2vczdB5.js";const I={title:"Legali/Screens/ReviewScreen",component:p,parameters:{layout:"fullscreen"},tags:["autodocs"]},r=[{id:"q1",question:"What is the maximum amount you can sue for in small claims court in California?",answers:[{id:"a",text:"$5,000",correct:!1},{id:"b",text:"$10,000",correct:!0},{id:"c",text:"$12,500",correct:!1},{id:"d",text:"$25,000",correct:!1}],explanation:"In California, an individual can sue for up to $10,000 in small claims court."},{id:"q2",question:"Which of the following is NOT a valid reason to sue in small claims court?",answers:[{id:"a",text:"Unpaid rent",correct:!1},{id:"b",text:"Property damage",correct:!1},{id:"c",text:"Divorce",correct:!0},{id:"d",text:"Breach of contract",correct:!1}],explanation:"Family law matters like divorce are handled in family court, not small claims court."}],e={args:{questions:r,userAnswers:{q1:"b",q2:"a"},onClose:()=>console.log("Close clicked")}},o={args:{questions:r,userAnswers:{q1:"b",q2:"c"},onClose:()=>console.log("Close clicked")}},s={args:{questions:r,userAnswers:{q1:"a",q2:"a"},onClose:()=>console.log("Close clicked")}};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    questions: sampleQuestions,
    userAnswers: {
      q1: "b",
      // Correct
      q2: "a" // Incorrect
    },
    onClose: () => console.log("Close clicked")
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,l,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    questions: sampleQuestions,
    userAnswers: {
      q1: "b",
      q2: "c"
    },
    onClose: () => console.log("Close clicked")
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,u,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    questions: sampleQuestions,
    userAnswers: {
      q1: "a",
      q2: "a"
    },
    onClose: () => console.log("Close clicked")
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Q=["Default","AllCorrect","AllIncorrect"];export{o as AllCorrect,s as AllIncorrect,e as Default,Q as __namedExportsOrder,I as default};
