"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"persistQuery",title:"Persist Query","example-title":"Persist Query","example-tags":["headless"]},s=void 0,i={unversionedId:"examples/persistQuery",id:"examples/persistQuery",title:"Persist Query",description:"You can use the persitQueryClient feature of react-query with refine. Different persisters can be used to store your client and cache to many different storage layers.",source:"@site/docs/examples/persist-query.md",sourceDirName:"examples",slug:"/examples/persistQuery",permalink:"/docs/examples/persistQuery",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/persist-query.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1684234178,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{id:"persistQuery",title:"Persist Query","example-title":"Persist Query","example-tags":["headless"]},sidebar:"someSidebar",previous:{title:"React Toastify",permalink:"/docs/examples/notification-provider/react-toastify"},next:{title:"Ant Design",permalink:"/docs/examples/remix/remix-antd"}},p={},c=[],l=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/plugins/persistQueryClient"},"persitQueryClient")," feature of ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs"},"react-query")," with ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Different persisters can be used to store your client and cache to many different storage layers."),(0,a.kt)(l,{path:"with-persist-query",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);