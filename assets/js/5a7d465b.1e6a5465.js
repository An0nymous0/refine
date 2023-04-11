"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"authenticated",title:"<Authenticated>"},o=void 0,l={unversionedId:"api-reference/core/components/auth/authenticated",id:"version-3.xx.xx/api-reference/core/components/auth/authenticated",title:"<Authenticated>",description:"` is the component form of useAuthenticated`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/auth/authenticated.md",sourceDirName:"api-reference/core/components/auth",slug:"/api-reference/core/components/auth/authenticated",permalink:"/docs/3.xx.xx/api-reference/core/components/auth/authenticated",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/auth/authenticated.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1681205698,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{id:"authenticated",title:"<Authenticated>"},sidebar:"someSidebar",previous:{title:"Inferencer",permalink:"/docs/3.xx.xx/api-reference/core/components/inferencer"},next:{title:"<CanAccess>",permalink:"/docs/3.xx.xx/api-reference/core/components/accessControl/can-access"}},p={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"<code>loading</code>",id:"loading",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(s="PropsTable",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var s;const u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Authenticated>")," is the component form of ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated"},(0,a.kt)("inlineCode",{parentName:"a"},"useAuthenticated")),"."),(0,a.kt)("p",null,"It internally uses ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated"},(0,a.kt)("inlineCode",{parentName:"a"},"useAuthenticated")),"'s return values (",(0,a.kt)("inlineCode",{parentName:"p"},"isSuccess"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"isLoading"),", and, ",(0,a.kt)("inlineCode",{parentName:"p"},"isError"),") to provide its functionality."),(0,a.kt)("p",null,"When:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isSuccess")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", it renders to children."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isLoading")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", it renders ",(0,a.kt)("a",{parentName:"li",href:"#loading"},(0,a.kt)("inlineCode",{parentName:"a"},"loading"))," prop."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isError")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", it renders ",(0,a.kt)("a",{parentName:"li",href:"#fallback"},(0,a.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it redirects to ",(0,a.kt)("inlineCode",{parentName:"li"},"/login")," page.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Authenticated } from "@pankod/refine-core";\n\nconst MyPage = () => (\n    <Authenticated>\n        <YourComponent />\n    </Authenticated>\n);\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/examples/customPages"},"Custom Pages Example")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages#authenticated-custom-pages"},"it's explanation")," to learn how to use it with custom pages. ","\u2192")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"fallback"},(0,a.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,a.kt)("p",null,"Component to render if the user is not logged in. If ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),", the page will be redirected to ",(0,a.kt)("inlineCode",{parentName:"p"},"/login"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated fallback={<div>You cannot access this section</div>}>\n    <YourComponent />\n</Authenticated>\n")),(0,a.kt)("h3",{id:"loading"},(0,a.kt)("inlineCode",{parentName:"h3"},"loading")),(0,a.kt)("p",null,"Component to render while checking whether the user is logged in."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated loading={<div>loading...</div>}>\n    <YourComponent />\n</Authenticated>\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(d,{module:"@pankod/refine-core/Authenticated",mdxType:"PropsTable"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fallback"),(0,a.kt)("td",{parentName:"tr",align:null},"Component to render if the user is not logged in. If ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined"),", the page will be redirected to ",(0,a.kt)("inlineCode",{parentName:"td"},"/login")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"loading"),(0,a.kt)("td",{parentName:"tr",align:null},"Component to render while checking whether user is logged in"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);