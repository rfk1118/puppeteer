/*! For license information please see d9c8b826.5016fd23.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29817],{75977:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.keyboard.type","title":"Keyboard.type() method","description":"Sends a keydown, keypress/input, and keyup event for each character in the text.","source":"@site/versioned_docs/version-24.3.0/api/puppeteer.keyboard.type.md","sourceDirName":"api","slug":"/api/puppeteer.keyboard.type","permalink":"/api/puppeteer.keyboard.type","draft":false,"unlisted":false,"tags":[],"version":"24.3.0","frontMatter":{"sidebar_label":"Keyboard.type"},"sidebar":"api","previous":{"title":"Keyboard.sendCharacter","permalink":"/api/puppeteer.keyboard.sendcharacter"},"next":{"title":"Keyboard.up","permalink":"/api/puppeteer.keyboard.up"}}');var s=t(74848),d=t(28453);const i={sidebar_label:"Keyboard.type"},a="Keyboard.type() method",o={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"keyboardtype-method",children:"Keyboard.type() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Sends a ",(0,s.jsx)(r.code,{children:"keydown"}),", ",(0,s.jsx)(r.code,{children:"keypress"}),"/",(0,s.jsx)(r.code,{children:"input"}),", and ",(0,s.jsx)(r.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract type(\n    text: string,\n    options?: Readonly<KeyboardTypeOptions>,\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"text"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"A text to type into a focused element."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Readonly<",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboardtypeoptions",children:"KeyboardTypeOptions"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts delay which, if specified, is the time to wait between ",(0,s.jsx)(r.code,{children:"keydown"})," and ",(0,s.jsx)(r.code,{children:"keyup"})," in milliseconds. Defaults to 0."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["To press a special key, like ",(0,s.jsx)(r.code,{children:"Control"})," or ",(0,s.jsx)(r.code,{children:"ArrowDown"}),", use ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Modifier keys DO NOT effect ",(0,s.jsx)(r.code,{children:"keyboard.type"}),". Holding down ",(0,s.jsx)(r.code,{children:"Shift"})," will not type the text in upper case."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"await page.keyboard.type('Hello'); // Types instantly\nawait page.keyboard.type('World', {delay: 100}); // Types slower, like a user\n"})})]})}function l(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,d={},p=null,c=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!o.hasOwnProperty(n)&&(d[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===d[n]&&(d[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:c,props:d,_owner:a.current}}r.Fragment=d,r.jsx=p,r.jsxs=p},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},d=n.createContext(s);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);