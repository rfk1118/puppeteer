/*! For license information please see 10bc0d47.e38fbbb2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90446],{25763:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"api/puppeteer.pdfoptions","title":"PDFOptions interface","description":"Valid options to configure PDF generation via Page.pdf().","source":"@site/versioned_docs/version-24.3.0/api/puppeteer.pdfoptions.md","sourceDirName":"api","slug":"/api/puppeteer.pdfoptions","permalink":"/api/puppeteer.pdfoptions","draft":false,"unlisted":false,"tags":[],"version":"24.3.0","frontMatter":{"sidebar_label":"PDFOptions"},"sidebar":"api","previous":{"title":"PDFMargin","permalink":"/api/puppeteer.pdfmargin"},"next":{"title":"Permission","permalink":"/api/puppeteer.permission"}}');var d=r(74848),s=r(28453);const t={sidebar_label:"PDFOptions"},l="PDFOptions interface",c={},h=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"pdfoptions-interface",children:"PDFOptions interface"})}),"\n",(0,d.jsxs)(n.p,{children:["Valid options to configure PDF generation via ",(0,d.jsx)(n.a,{href:"/api/puppeteer.page.pdf",children:"Page.pdf()"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",children:"export interface PDFOptions\n"})}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:(0,d.jsx)(n.p,{children:"Property"})}),(0,d.jsx)("th",{children:(0,d.jsx)(n.p,{children:"Modifiers"})}),(0,d.jsx)("th",{children:(0,d.jsx)(n.p,{children:"Type"})}),(0,d.jsx)("th",{children:(0,d.jsx)(n.p,{children:"Description"})}),(0,d.jsx)("th",{children:(0,d.jsx)(n.p,{children:"Default"})})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"displayheaderfooter",children:"displayHeaderFooter"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"boolean"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"Whether to show the header and footer."})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"false"})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"footertemplate",children:"footerTemplate"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"string"})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:["HTML template for the print footer. Has the same constraints and support for special classes as ",(0,d.jsx)(n.a,{href:"/api/puppeteer.pdfoptions#headertemplate",children:"PDFOptions.headerTemplate"}),"."]})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"format",children:"format"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/api/puppeteer.paperformat",children:"PaperFormat"})})}),(0,d.jsxs)("td",{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Remarks:"})}),(0,d.jsxs)(n.p,{children:["If set, this takes priority over the ",(0,d.jsx)(n.code,{children:"width"})," and ",(0,d.jsx)(n.code,{children:"height"})," options."]})]}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"letter"}),"."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"headertemplate",children:"headerTemplate"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"string"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)(n.p,{children:"HTML template for the print header. Should be valid HTML with the following classes used to inject values into them:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"date"})," formatted print date"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"title"})," document title"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"url"})," document location"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"pageNumber"})," current page number"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"totalPages"})," total pages in the document"]}),"\n"]}),"\n"]})]}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"height",children:"height"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"string | number"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"Sets the height of paper. You can pass in a number or a string with a unit."})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"landscape",children:"landscape"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"boolean"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"Whether to print in landscape orientation."})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"false"})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"margin",children:"margin"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/api/puppeteer.pdfmargin",children:"PDFMargin"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"Set the PDF margins."})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"undefined"})," no margins are set."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"omitbackground",children:"omitBackground"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"boolean"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"Hides default white background and allows generating pdfs with transparency."})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"false"})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"outline",children:"outline"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"boolean"})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.em,{children:"(Experimental)"})})," Generate document outline."]})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"false"})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"pageranges",children:"pageRanges"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"string"})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:["Paper ranges to print, e.g. ",(0,d.jsx)(n.code,{children:"1-5, 8, 11-13"}),"."]})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"The empty string, which means all pages are printed."})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"path",children:"path"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"string"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)(n.p,{children:"The path to save the file to."}),(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Remarks:"})}),(0,d.jsx)(n.p,{children:"If the path is relative, it's resolved relative to the current working directory."})]}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"undefined"}),", which means the PDF will not be written to disk."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"prefercsspagesize",children:"preferCSSPageSize"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"boolean"})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:["Give any CSS ",(0,d.jsx)(n.code,{children:"@page"})," size declared in the page priority over what is declared in the ",(0,d.jsx)(n.code,{children:"width"})," or ",(0,d.jsx)(n.code,{children:"height"})," or ",(0,d.jsx)(n.code,{children:"format"})," option."]})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"false"}),", which will scale the content to fit the paper size."]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"printbackground",children:"printBackground"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"boolean"})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:["Set to ",(0,d.jsx)(n.code,{children:"true"})," to print background graphics."]})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"false"})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"scale",children:"scale"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"number"})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:["Scales the rendering of the web page. Amount must be between ",(0,d.jsx)(n.code,{children:"0.1"})," and ",(0,d.jsx)(n.code,{children:"2"}),"."]})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"1"})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"tagged",children:"tagged"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"boolean"})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.em,{children:"(Experimental)"})})," Generate tagged (accessible) PDF."]})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"true"})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"timeout",children:"timeout"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"number"})}),(0,d.jsxs)("td",{children:[(0,d.jsxs)(n.p,{children:["Timeout in milliseconds. Pass ",(0,d.jsx)(n.code,{children:"0"})," to disable timeout."]}),(0,d.jsxs)(n.p,{children:["The default value can be changed by using ",(0,d.jsx)(n.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})]})]}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"30_000"})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"waitforfonts",children:"waitForFonts"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"boolean"})}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:["If true, waits for ",(0,d.jsx)(n.code,{children:"document.fonts.ready"})," to resolve. This might require activating the page using ",(0,d.jsx)(n.a,{href:"/api/puppeteer.page.bringtofront",children:"Page.bringToFront()"})," if the page is in the background."]})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"true"})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("span",{id:"width",children:"width"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"optional"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"string | number"})}),(0,d.jsx)("td",{children:(0,d.jsx)(n.p,{children:"Sets the width of paper. You can pass in a number or a string with a unit."})}),(0,d.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},21020:(e,n,r)=>{var i=r(96540),d=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,r){var i,s={},h=null,o=null;for(i in void 0!==r&&(h=""+r),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,i)&&!c.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:d,type:e,key:h,ref:o,props:s,_owner:l.current}}n.Fragment=s,n.jsx=h,n.jsxs=h},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var i=r(96540);const d={},s=i.createContext(d);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);