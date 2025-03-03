/*! For license information please see a0d4c24a.3ea01258.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3306],{18212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api/puppeteer.page.exposefunction","title":"Page.exposeFunction() method","description":"The method adds a function called name on the page\'s window object. When called, the function executes puppeteerFunction in node.js and returns a Promise which resolves to the return value of puppeteerFunction.","source":"@site/../docs/api/puppeteer.page.exposefunction.md","sourceDirName":"api","slug":"/api/puppeteer.page.exposefunction","permalink":"/next/api/puppeteer.page.exposefunction","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.exposeFunction"},"sidebar":"api","previous":{"title":"Page.evaluateOnNewDocument","permalink":"/next/api/puppeteer.page.evaluateonnewdocument"},"next":{"title":"Page.focus","permalink":"/next/api/puppeteer.page.focus"}}');var o=t(74848),s=t(28453);const i={sidebar_label:"Page.exposeFunction"},a="Page.exposeFunction() method",c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"pageexposefunction-method",children:"Page.exposeFunction() method"})}),"\n",(0,o.jsxs)(n.p,{children:["The method adds a function called ",(0,o.jsx)(n.code,{children:"name"})," on the page's ",(0,o.jsx)(n.code,{children:"window"})," object. When called, the function executes ",(0,o.jsx)(n.code,{children:"puppeteerFunction"})," in node.js and returns a ",(0,o.jsx)(n.code,{children:"Promise"})," which resolves to the return value of ",(0,o.jsx)(n.code,{children:"puppeteerFunction"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If the puppeteerFunction returns a ",(0,o.jsx)(n.code,{children:"Promise"}),", it will be awaited."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Functions installed via ",(0,o.jsx)(n.code,{children:"page.exposeFunction"})," survive navigations."]})}),"\n",(0,o.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract exposeFunction(\n    name: string,\n    pptrFunction:\n      | Function\n      | {\n          default: Function;\n        },\n  ): Promise<void>;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(n.p,{children:"Parameter"})}),(0,o.jsx)("th",{children:(0,o.jsx)(n.p,{children:"Type"})}),(0,o.jsx)("th",{children:(0,o.jsx)(n.p,{children:"Description"})})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"name"})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"string"})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"Name of the function on the window object"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"pptrFunction"})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"Function | { default: Function; }"})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"Callback function which will be called in Puppeteer's context."})})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(n.p,{children:"Promise<void>"}),"\n",(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsxs)(n.p,{children:["An example of adding an ",(0,o.jsx)(n.code,{children:"md5"})," function into the page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\nimport crypto from 'crypto';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('console', msg => console.log(msg.text()));\n  await page.exposeFunction('md5', text =>\n    crypto.createHash('md5').update(text).digest('hex'),\n  );\n  await page.evaluate(async () => {\n    // use window.md5 to compute hashes\n    const myString = 'PUPPETEER';\n    const myHash = await window.md5(myString);\n    console.log(`md5 of ${myString} is ${myHash}`);\n  });\n  await browser.close();\n})();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsxs)(n.p,{children:["An example of adding a ",(0,o.jsx)(n.code,{children:"window.readfile"})," function into the page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\nimport fs from 'node:fs';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('console', msg => console.log(msg.text()));\n  await page.exposeFunction('readfile', async filePath => {\n    return new Promise((resolve, reject) => {\n      fs.readFile(filePath, 'utf8', (err, text) => {\n        if (err) reject(err);\n        else resolve(text);\n      });\n    });\n  });\n  await page.evaluate(async () => {\n    // use window.readfile to read contents of a file\n    const content = await window.readfile('/etc/hosts');\n    console.log(content);\n  });\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,s={},p=null,l=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:p,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);