/*! For license information please see 6c681541.b33daecb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31067],{35743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.page.setgeolocation","title":"Page.setGeolocation() method","description":"Sets the page\'s geolocation.","source":"@site/versioned_docs/version-24.3.0/api/puppeteer.page.setgeolocation.md","sourceDirName":"api","slug":"/api/puppeteer.page.setgeolocation","permalink":"/api/puppeteer.page.setgeolocation","draft":false,"unlisted":false,"tags":[],"version":"24.3.0","frontMatter":{"sidebar_label":"Page.setGeolocation"},"sidebar":"api","previous":{"title":"Page.setExtraHTTPHeaders","permalink":"/api/puppeteer.page.setextrahttpheaders"},"next":{"title":"Page.setJavaScriptEnabled","permalink":"/api/puppeteer.page.setjavascriptenabled"}}');var s=r(74848),o=r(28453);const a={sidebar_label:"Page.setGeolocation"},i="Page.setGeolocation() method",l={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"pagesetgeolocation-method",children:"Page.setGeolocation() method"})}),"\n",(0,s.jsx)(t.p,{children:"Sets the page's geolocation."}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setGeolocation(options: GeolocationOptions): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.geolocationoptions",children:"GeolocationOptions"})})}),(0,s.jsx)("td",{})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["Consider using ",(0,s.jsx)(t.a,{href:"/api/puppeteer.browsercontext.overridepermissions",children:"BrowserContext.overridePermissions()"})," to grant permissions for the page to read its geolocation."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"await page.setGeolocation({latitude: 59.95, longitude: 30.31667});\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,o={},p=null,c=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:p,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=p,t.jsxs=p},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);