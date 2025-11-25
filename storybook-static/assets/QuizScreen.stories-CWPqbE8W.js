import{Q as v}from"./QuizScreen-4kx4VAYv.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-yIsmwZOr.js";import"./utils-CDN07tui.js";import"./QuizHeader-0WsXhAih.js";import"./ProgressBar-CblPxWMU.js";import"./index-C2vczdB5.js";import"./x-C2luFfuM.js";import"./createLucideIcon-B1u6bxpC.js";import"./QuizQuestion-mmfR4AEK.js";import"./QuizFeedback-CrZjcDl1.js";import"./button-EZRCHwuf.js";import"./index-BWMUC1Br.js";import"./circle-check-DgGB4gpA.js";import"./Answer-Cm3wYL8a.js";import"./check-C5oz72YT.js";const W={title:"Legali/Screens/QuizScreen",component:v,parameters:{layout:"centered"},tags:["autodocs"]},n=[{id:1,question:"What is 'discovery' in legal terms?",answers:[{id:1,text:"A) Finding the courthouse location",correct:!1},{id:2,text:"B) The process of exchanging information before trial",correct:!0},{id:3,text:"C) Discovering new evidence during trial",correct:!1},{id:4,text:"D) Looking up legal definitions",correct:!1}],explanation:"Discovery is the pre-trial process where both sides exchange information and evidence. This helps ensure fair trials by reducing surprises."},{id:2,question:"Which is a type of discovery tool?",answers:[{id:1,text:"A) Complaint",correct:!1},{id:2,text:"B) Interrogatories",correct:!0},{id:3,text:"C) Verdict",correct:!1},{id:4,text:"D) Judgment",correct:!1}],explanation:"Interrogatories are written questions that must be answered under oath. They're one of several discovery tools used to gather information."},{id:3,question:"How long do you typically have to respond to discovery requests?",answers:[{id:1,text:"A) 24 hours",correct:!1},{id:2,text:"B) 30 days (in most jurisdictions)",correct:!0},{id:3,text:"C) Whenever you feel like it",correct:!1},{id:4,text:"D) 6 months",correct:!1}],explanation:"Most jurisdictions give you 30 days to respond to discovery requests, though this can vary by state and type of discovery."},{id:4,question:"Can you object to discovery requests?",answers:[{id:1,text:"A) Yes, if they're improper or overly broad",correct:!0},{id:2,text:"B) No, never",correct:!1},{id:3,text:"C) Only if you hire a lawyer",correct:!1},{id:4,text:"D) Only in criminal cases",correct:!1}],explanation:"You can object to discovery requests that are overly broad, irrelevant, privileged, or not reasonably calculated to lead to admissible evidence."},{id:5,question:"What happens if you ignore discovery requests?",answers:[{id:1,text:"A) Nothing happens",correct:!1},{id:2,text:"B) The other side gives up",correct:!1},{id:3,text:"C) The judge can sanction you or strike your pleadings",correct:!0},{id:4,text:"D) You automatically win",correct:!1}],explanation:"Ignoring discovery is serious! The court can impose sanctions, which may include monetary penalties, striking your claims or defenses, or even dismissing your case."}],t={args:{questions:n,onClose:()=>console.log("Close clicked"),onQuizComplete:(e,o)=>console.log(`Quiz complete: ${e}/${o}`)}},s={args:{questions:n,onClose:()=>console.log("Close clicked"),onQuizComplete:(e,o)=>console.log(`Quiz complete: ${e}/${o}`)}},r={args:{questions:n,onClose:()=>console.log("Close clicked"),onQuizComplete:(e,o)=>console.log(`Quiz complete: ${e}/${o}`)}},i={args:{questions:n,onClose:()=>alert("Quiz closed"),onQuizComplete:(e,o)=>alert(`Quiz complete! Score: ${e}/${o}`)}};var a,c,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    questions: sampleQuestions,
    onClose: () => console.log('Close clicked'),
    onQuizComplete: (score, total) => console.log(\`Quiz complete: \${score}/\${total}\`)
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,d,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    questions: sampleQuestions,
    onClose: () => console.log('Close clicked'),
    onQuizComplete: (score, total) => console.log(\`Quiz complete: \${score}/\${total}\`)
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    questions: sampleQuestions,
    onClose: () => console.log('Close clicked'),
    onQuizComplete: (score, total) => console.log(\`Quiz complete: \${score}/\${total}\`)
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,f,Q;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    questions: sampleQuestions,
    onClose: () => alert('Quiz closed'),
    onQuizComplete: (score, total) => alert(\`Quiz complete! Score: \${score}/\${total}\`)
  }
}`,...(Q=(f=i.parameters)==null?void 0:f.docs)==null?void 0:Q.source}}};const F=["FirstQuestion","MiddleQuestion","LastQuestion","Interactive"];export{t as FirstQuestion,i as Interactive,r as LastQuestion,s as MiddleQuestion,F as __namedExportsOrder,W as default};
