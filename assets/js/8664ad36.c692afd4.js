"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const a={id:"prepare-env",title:"2. Prepare your dev environment",tutorial:{prev:"tutorial/getting-started/{preferredUI}/index",next:"tutorial/getting-started/{preferredUI}/create-project"}},i=void 0,l={unversionedId:"tutorial/getting-started/prepare-env",id:"version-3.xx.xx/tutorial/getting-started/prepare-env",title:"2. Prepare your dev environment",description:"Get the dev tools you need",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/1-prepare-env.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/prepare-env",permalink:"/docs/3.xx.xx/tutorial/getting-started/prepare-env",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/1-prepare-env.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683809188,formattedLastUpdatedAt:"May 11, 2023",sidebarPosition:1,frontMatter:{id:"prepare-env",title:"2. Prepare your dev environment",tutorial:{prev:"tutorial/getting-started/{preferredUI}/index",next:"tutorial/getting-started/{preferredUI}/create-project"}}},s={},d=[{value:"Get the dev tools you need",id:"get-the-dev-tools-you-need",level:2},{value:"Terminal",id:"terminal",level:3},{value:"Code Editor",id:"code-editor",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=p("Checklist"),u=p("ChecklistItem"),m={toc:d};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-the-dev-tools-you-need"},"Get the dev tools you need"),(0,n.kt)("p",null,"Before you can create a ",(0,n.kt)("strong",{parentName:"p"},"refine")," app, you need to set up a development environment on your local machine. This includes installing a few tools that you will use to create your project and run key commands to build, develop, and test your site."),(0,n.kt)("h3",{id:"terminal"},"Terminal"),(0,n.kt)("p",null,"You will use a terminal (also known as a command line interface) to run these commands and interact with your operating system. You can access the terminal through a local program for your operating system, such as Terminal (MacOS/Linux) or Command Prompt (Windows)."),(0,n.kt)("p",null,"In order to run ",(0,n.kt)("strong",{parentName:"p"},"refine")," applications on your system, you will also need to have ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," installed. Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a web browser. It is required to run ",(0,n.kt)("strong",{parentName:"p"},"refine")," applications because it is a JavaScript-based tool."),(0,n.kt)("p",null,"To check if you already have a compatible version of Node.js (v.16.0.0 or higher) installed:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Launch your terminal and type the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you do not have a compatible version of Node.js installed, follow these instructions to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"install Node.js")," via the terminal."))),(0,n.kt)("h3",{id:"code-editor"},"Code Editor"),(0,n.kt)("p",null,"In addition to a terminal, you will also need a code editor to write and edit your code. A code editor is a software application that allows you to write and edit code for various programming languages."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This tutorial will use ",(0,n.kt)("strong",{parentName:"p"},"VS Code"),", but you can use any code editor that is compatible with your operating system. Some other popular code editors include ",(0,n.kt)("strong",{parentName:"p"},"Sublime Text"),", ",(0,n.kt)("strong",{parentName:"p"},"Atom"),", and ",(0,n.kt)("strong",{parentName:"p"},"Eclipse"),".")),(0,n.kt)("p",null,"To install a code editor:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download and install the code editor of your choice from the Internet."),(0,n.kt)("li",{parentName:"ol"},"Follow the prompts to complete the installation process.")),(0,n.kt)(c,{mdxType:"Checklist"},(0,n.kt)(u,{id:"has-access-to-terminal",mdxType:"ChecklistItem"},"I am able to access the command line via a terminal."),(0,n.kt)(u,{id:"installed-nodejs",mdxType:"ChecklistItem"},"Node.js has been installed on my device."),(0,n.kt)(u,{id:"installed-vscode",mdxType:"ChecklistItem"},"I am using a code editor similar to Visual Studio Code.")))}y.isMDXComponent=!0}}]);