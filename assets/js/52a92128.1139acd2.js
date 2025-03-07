/*! For license information please see 52a92128.1139acd2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12385],{13565:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"api/puppeteer.pageevent","title":"PageEvent enum","description":"All the events that a page instance may emit.","source":"@site/versioned_docs/version-24.4.0/api/puppeteer.pageevent.md","sourceDirName":"api","slug":"/api/puppeteer.pageevent","permalink":"/api/puppeteer.pageevent","draft":false,"unlisted":false,"tags":[],"version":"24.4.0","frontMatter":{"sidebar_label":"PageEvent"},"sidebar":"api","previous":{"title":"Offset","permalink":"/api/puppeteer.offset"},"next":{"title":"PageEvents","permalink":"/api/puppeteer.pageevents"}}');var d=s(74848),t=s(28453);const i={sidebar_label:"PageEvent"},c="PageEvent enum",l={},h=[{value:"Signature",id:"signature",level:3},{value:"Enumeration Members",id:"enumeration-members",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.header,{children:(0,d.jsx)(r.h1,{id:"pageevent-enum",children:"PageEvent enum"})}),"\n",(0,d.jsx)(r.p,{children:"All the events that a page instance may emit."}),"\n",(0,d.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-typescript",children:"export declare const enum PageEvent\n"})}),"\n",(0,d.jsx)(r.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:(0,d.jsx)(r.p,{children:"Member"})}),(0,d.jsx)("th",{children:(0,d.jsx)(r.p,{children:"Value"})}),(0,d.jsx)("th",{children:(0,d.jsx)(r.p,{children:"Description"})})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Close"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"close"'})})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Emitted when the page closes."})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Console"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"console"'})})}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(r.p,{children:["Emitted when JavaScript within the page calls one of console API methods, e.g. ",(0,d.jsx)(r.code,{children:"console.log"})," or ",(0,d.jsx)(r.code,{children:"console.dir"}),". Also emitted if the page throws an error or a warning."]}),(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Remarks:"})}),(0,d.jsxs)(r.p,{children:["A ",(0,d.jsx)(r.code,{children:"console"})," event provides a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.consolemessage",children:"ConsoleMessage"})," representing the console message that was logged."]})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Dialog"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"dialog"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when a JavaScript dialog appears, such as ",(0,d.jsx)(r.code,{children:"alert"}),", ",(0,d.jsx)(r.code,{children:"prompt"}),", ",(0,d.jsx)(r.code,{children:"confirm"})," or ",(0,d.jsx)(r.code,{children:"beforeunload"}),". Puppeteer can respond to the dialog via ",(0,d.jsx)(r.a,{href:"/api/puppeteer.dialog.accept",children:"Dialog.accept()"})," or ",(0,d.jsx)(r.a,{href:"/api/puppeteer.dialog.dismiss",children:"Dialog.dismiss()"}),"."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"DOMContentLoaded"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"domcontentloaded"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when the JavaScript ",(0,d.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded",children:"DOMContentLoaded"})," event is dispatched."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Error"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"error"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when the page crashes. Will contain an ",(0,d.jsx)(r.code,{children:"Error"}),"."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"FrameAttached"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"frameattached"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when a frame is attached. Will contain a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"}),"."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"FrameDetached"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"framedetached"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when a frame is detached. Will contain a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"}),"."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"FrameNavigated"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"framenavigated"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when a frame is navigated to a new URL. Will contain a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.frame",children:"Frame"}),"."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Load"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"load"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when the JavaScript ",(0,d.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Events/load",children:"load"})," event is dispatched."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Metrics"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"metrics"'})})}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(r.p,{children:["Emitted when the JavaScript code makes a call to ",(0,d.jsx)(r.code,{children:"console.timeStamp"}),". For the list of metrics see ",(0,d.jsx)(r.a,{href:"/api/puppeteer.page.metrics",children:"page.metrics"}),"."]}),(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Remarks:"})}),(0,d.jsx)(r.p,{children:"Contains an object with two properties:"}),(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"title"}),": the title passed to ",(0,d.jsx)(r.code,{children:"console.timeStamp"})," - ",(0,d.jsx)(r.code,{children:"metrics"}),": object containing metrics as key/value pairs. The values will be ",(0,d.jsx)(r.code,{children:"number"}),"s."]}),"\n"]})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"PageError"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"pageerror"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when an uncaught exception happens within the page. Contains an ",(0,d.jsx)(r.code,{children:"Error"}),"."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Popup"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"popup"'})})}),(0,d.jsxs)("td",{children:[(0,d.jsx)(r.p,{children:"Emitted when the page opens a new tab or window."}),(0,d.jsxs)(r.p,{children:["Contains a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.page",children:"Page"})," corresponding to the popup window."]})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Request"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"request"'})})}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(r.p,{children:["Emitted when a page issues a request and contains a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"."]}),(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Remarks:"})}),(0,d.jsxs)(r.p,{children:["The object is readonly. See ",(0,d.jsx)(r.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"})," for intercepting and mutating requests."]})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"RequestFailed"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"requestfailed"'})})}),(0,d.jsxs)("td",{children:[(0,d.jsx)(r.p,{children:"Emitted when a request fails, for example by timing out."}),(0,d.jsxs)(r.p,{children:["Contains a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"."]}),(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Remarks:"})}),(0,d.jsxs)(r.p,{children:["HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,d.jsx)(r.code,{children:"requestfinished"})," event and not with ",(0,d.jsx)(r.code,{children:"requestfailed"}),"."]})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"RequestFinished"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"requestfinished"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when a request finishes successfully. Contains a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"RequestServedFromCache"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"requestservedfromcache"'})})}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(r.p,{children:["Emitted when a request ended up loading from cache. Contains a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"."]}),(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Remarks:"})}),(0,d.jsxs)(r.p,{children:["For certain requests, might contain undefined. ",(0,d.jsx)(r.a,{href:"https://crbug.com/750469",children:"https://crbug.com/750469"})]})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"Response"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"response"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when a response is received. Contains a ",(0,d.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"}),"."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"WorkerCreated"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"workercreated"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when a dedicated ",(0,d.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",children:"WebWorker"})," is spawned by the page."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:"WorkerDestroyed"})}),(0,d.jsx)("td",{children:(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'"workerdestroyed"'})})}),(0,d.jsx)("td",{children:(0,d.jsxs)(r.p,{children:["Emitted when a dedicated ",(0,d.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",children:"WebWorker"})," is destroyed by the page."]})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},21020:(e,r,s)=>{var n=s(96540),d=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,s){var n,t={},h=null,a=null;for(n in void 0!==s&&(h=""+s),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:d,type:e,key:h,ref:a,props:t,_owner:c.current}}r.Fragment=t,r.jsx=h,r.jsxs=h},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var n=s(96540);const d={},t=n.createContext(d);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);