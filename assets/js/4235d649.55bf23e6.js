/*! For license information please see 4235d649.55bf23e6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65514],{47447:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"api/puppeteer.accessibility.snapshot","title":"Accessibility.snapshot() method","description":"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page.","source":"@site/../docs/api/puppeteer.accessibility.snapshot.md","sourceDirName":"api","slug":"/api/puppeteer.accessibility.snapshot","permalink":"/next/api/puppeteer.accessibility.snapshot","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Accessibility.snapshot"},"sidebar":"api","previous":{"title":"Accessibility","permalink":"/next/api/puppeteer.accessibility"},"next":{"title":"Keyboard","permalink":"/next/api/puppeteer.keyboard"}}');var r=n(74848),i=n(28453);const o={sidebar_label:"Accessibility.snapshot"},a="Accessibility.snapshot() method",c={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"accessibilitysnapshot-method",children:"Accessibility.snapshot() method"})}),"\n",(0,r.jsx)(s.p,{children:"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."}),"\n",(0,r.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"class Accessibility {\n  snapshot(options?: SnapshotOptions): Promise<SerializedAXNode | null>;\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.snapshotoptions",children:"SnapshotOptions"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"(Optional)"})})})]})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(s.p,{children:["Promise<",(0,r.jsx)(s.a,{href:"/next/api/puppeteer.serializedaxnode",children:"SerializedAXNode"})," | null>"]}),"\n",(0,r.jsx)(s.p,{children:"An AXNode object representing the snapshot."}),"\n",(0,r.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE"})," The Chrome accessibility tree contains nodes that go unused on most platforms and by most screen readers. Puppeteer will discard them as well for an easier to process tree, unless ",(0,r.jsx)(s.code,{children:"interestingOnly"})," is set to ",(0,r.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(s.p,{children:"An example of dumping the entire accessibility tree:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n"})}),"\n",(0,r.jsx)(s.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(s.p,{children:"An example of logging the focused node's name:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused) return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n"})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,s,n)=>{var t=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var t,i={},l=null,d=null;for(t in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(d=s.ref),s)o.call(s,t)&&!c.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:r,type:e,key:l,ref:d,props:i,_owner:a.current}}s.Fragment=i,s.jsx=l,s.jsxs=l},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(96540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);