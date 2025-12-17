import{M as Et,a as t,L as Tt}from"./LegaliMascot-DI_ht39e.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-yIsmwZOr.js";const bt={title:"Legali/Mascot/LegaliMascot",component:Tt,parameters:{layout:"centered",docs:{description:{component:`
The **LegaliMascot** component displays an animated mascot character using Rive animations.
It supports multiple motion states and blinking control through View Model data binding.

## View Model: VM_MASCOT

| Property | Type | Description |
|----------|------|-------------|
| \`isBlink\` | Boolean | Controls blinking animation |
| \`animates\` | MOTIONS (Enum) | Controls which motion animation to play |

## Available Motions

EXIT, NORMAL, LAPTOP, WRITING, IDLE, THINKING, CRYING, SPEAKING, CONFUSED, WAVING, SHRUG, CELEBRATE
        `}}},tags:["autodocs"],argTypes:{motion:{control:"select",options:Object.values(t),mapping:t,labels:Et,description:"The current motion/animation state to display"},isBlink:{control:"boolean",description:"Whether the mascot should blink"},width:{control:{type:"range",min:100,max:500,step:50},description:"Width of the canvas container"},height:{control:{type:"range",min:100,max:500,step:50},description:"Height of the canvas container"},src:{control:"text",description:"Path to the .riv animation file"},stateMachine:{control:"text",description:"Name of the state machine to use"}}},e={args:{motion:t.IDLE,isBlink:!0,width:300,height:300}},o={args:{motion:t.THINKING,isBlink:!0,width:300,height:300}},i={args:{motion:t.SPEAKING,isBlink:!0,width:300,height:300}},n={args:{motion:t.CELEBRATE,isBlink:!0,width:300,height:300}},s={args:{motion:t.WAVING,isBlink:!0,width:300,height:300}},r={args:{motion:t.LAPTOP,isBlink:!0,width:300,height:300}},a={args:{motion:t.WRITING,isBlink:!0,width:300,height:300}},c={args:{motion:t.CONFUSED,isBlink:!0,width:300,height:300}},m={args:{motion:t.CRYING,isBlink:!0,width:300,height:300}},d={args:{motion:t.SHRUG,isBlink:!0,width:300,height:300}},p={args:{motion:t.NORMAL,isBlink:!1,width:300,height:300}},h={args:{motion:t.IDLE,isBlink:!0,width:150,height:150}},g={args:{motion:t.IDLE,isBlink:!0,width:400,height:400}};var l,u,k,M,w;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.IDLE,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(k=(u=e.parameters)==null?void 0:u.docs)==null?void 0:k.source},description:{story:`Default idle state animation.
The mascot displays its idle animation with blinking enabled.`,...(w=(M=e.parameters)==null?void 0:M.docs)==null?void 0:w.description}}};var S,B,I,N,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.THINKING,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(I=(B=o.parameters)==null?void 0:B.docs)==null?void 0:I.source},description:{story:`Thinking animation.
Use this when the mascot is "pondering" or waiting for something.`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.description}}};var L,E,T,C,f;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.SPEAKING,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source},description:{story:`Speaking animation.
Perfect for when the mascot is "talking" to the user.`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.description}}};var G,b,A,D,R;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.CELEBRATE,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(A=(b=n.parameters)==null?void 0:b.docs)==null?void 0:A.source},description:{story:`Celebration animation.
Great for success states and achievements!`,...(R=(D=n.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};var W,O,v,P,U;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.WAVING,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(v=(O=s.parameters)==null?void 0:O.docs)==null?void 0:v.source},description:{story:`Waving animation.
A friendly wave for greetings.`,...(U=(P=s.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var x,H,K,V,F;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.LAPTOP,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(K=(H=r.parameters)==null?void 0:H.docs)==null?void 0:K.source},description:{story:`Working on laptop animation.
Shows the mascot busy at work.`,...(F=(V=r.parameters)==null?void 0:V.docs)==null?void 0:F.description}}};var z,Y,_,j,X;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.WRITING,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(_=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:_.source},description:{story:`Writing animation.
Shows the mascot writing or taking notes.`,...(X=(j=a.parameters)==null?void 0:j.docs)==null?void 0:X.description}}};var q,J,Q,Z,$;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.CONFUSED,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:`Confused animation.
Use when something is unclear or needs explanation.`,...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var tt,et,ot,it,nt;m.parameters={...m.parameters,docs:{...(tt=m.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.CRYING,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(ot=(et=m.parameters)==null?void 0:et.docs)==null?void 0:ot.source},description:{story:`Crying animation.
For error states or sad moments.`,...(nt=(it=m.parameters)==null?void 0:it.docs)==null?void 0:nt.description}}};var st,rt,at,ct,mt;d.parameters={...d.parameters,docs:{...(st=d.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.SHRUG,
    isBlink: true,
    width: 300,
    height: 300
  }
}`,...(at=(rt=d.parameters)==null?void 0:rt.docs)==null?void 0:at.source},description:{story:`Shrug animation.
For uncertain situations.`,...(mt=(ct=d.parameters)==null?void 0:ct.docs)==null?void 0:mt.description}}};var dt,pt,ht,gt,lt;p.parameters={...p.parameters,docs:{...(dt=p.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.NORMAL,
    isBlink: false,
    width: 300,
    height: 300
  }
}`,...(ht=(pt=p.parameters)==null?void 0:pt.docs)==null?void 0:ht.source},description:{story:`No blinking demonstration.
Shows the mascot with blinking disabled.`,...(lt=(gt=p.parameters)==null?void 0:gt.docs)==null?void 0:lt.description}}};var ut,kt,Mt,wt,St;h.parameters={...h.parameters,docs:{...(ut=h.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.IDLE,
    isBlink: true,
    width: 150,
    height: 150
  }
}`,...(Mt=(kt=h.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source},description:{story:`Small size variant.
Demonstrates the mascot at a smaller size.`,...(St=(wt=h.parameters)==null?void 0:wt.docs)==null?void 0:St.description}}};var Bt,It,Nt,yt,Lt;g.parameters={...g.parameters,docs:{...(Bt=g.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  args: {
    motion: MascotMotion.IDLE,
    isBlink: true,
    width: 400,
    height: 400
  }
}`,...(Nt=(It=g.parameters)==null?void 0:It.docs)==null?void 0:Nt.source},description:{story:`Large size variant.
Demonstrates the mascot at a larger size.`,...(Lt=(yt=g.parameters)==null?void 0:yt.docs)==null?void 0:Lt.description}}};const At=["Default","Thinking","Speaking","Celebrate","Waving","Laptop","Writing","Confused","Crying","Shrug","NoBlink","Small","Large"];export{n as Celebrate,c as Confused,m as Crying,e as Default,r as Laptop,g as Large,p as NoBlink,d as Shrug,h as Small,i as Speaking,o as Thinking,s as Waving,a as Writing,At as __namedExportsOrder,bt as default};
