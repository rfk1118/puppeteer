/*! For license information please see a2476901.25d87495.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28595],{27878:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.httprequest.continue","title":"HTTPRequest.continue() method","description":"Continues request with optional request overrides.","source":"@site/versioned_docs/version-24.4.0/api/puppeteer.httprequest.continue.md","sourceDirName":"api","slug":"/api/puppeteer.httprequest.continue","permalink":"/api/puppeteer.httprequest.continue","draft":false,"unlisted":false,"tags":[],"version":"24.4.0","frontMatter":{"sidebar_label":"HTTPRequest.continue"},"sidebar":"api","previous":{"title":"HTTPRequest.abortErrorReason","permalink":"/api/puppeteer.httprequest.aborterrorreason"},"next":{"title":"HTTPRequest.continueRequestOverrides","permalink":"/api/puppeteer.httprequest.continuerequestoverrides"}}');var s=t(74848),i=t(28453);const o={sidebar_label:"HTTPRequest.continue"},a="HTTPRequest.continue() method",d={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"httprequestcontinue-method",children:"HTTPRequest.continue() method"})}),"\n",(0,s.jsx)(r.p,{children:"Continues request with optional request overrides."}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class HTTPRequest {\n  continue(\n    overrides?: ContinueRequestOverrides,\n    priority?: number,\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"overrides"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.continuerequestoverrides",children:"ContinueRequestOverrides"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," optional overrides to apply to the request."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"priority"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["To use this, request interception should be enabled with ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Exception is immediately thrown if the request interception is not enabled."}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"await page.setRequestInterception(true);\npage.on('request', request => {\n  // Override headers\n  const headers = Object.assign({}, request.headers(), {\n    foo: 'bar', // set \"foo\" header\n    origin: undefined, // remove \"origin\" header\n  });\n  request.continue({headers});\n});\n"})})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,i={},p=null,c=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)o.call(r,n)&&!d.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:c,props:i,_owner:a.current}}r.Fragment=i,r.jsx=p,r.jsxs=p},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);