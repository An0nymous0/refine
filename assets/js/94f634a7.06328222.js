"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=s(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"useGo",title:"useGo",sidebar_label:"useGo \ud83c\udd95"},i=void 0,p={unversionedId:"api-reference/core/hooks/navigation/useGo",id:"api-reference/core/hooks/navigation/useGo",title:"useGo",description:"useGo is a hook that leverages the go method of the routerProvider to perform navigation operations.",source:"@site/docs/api-reference/core/hooks/navigation/useGo.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useGo",permalink:"/docs/api-reference/core/hooks/navigation/useGo",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useGo.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1682407117,formattedLastUpdatedAt:"Apr 25, 2023",frontMatter:{id:"useGo",title:"useGo",sidebar_label:"useGo \ud83c\udd95"},sidebar:"someSidebar",previous:{title:"useSubscription",permalink:"/docs/api-reference/core/hooks/live/useSubscription"},next:{title:"useParsed \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useParsed"}},l={},s=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>to</code>",id:"to",level:3},{value:"<code>query</code>",id:"query",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>hash</code>",id:"hash",level:3},{value:"<code>options.keepQuery</code>",id:"optionskeepquery",level:3},{value:"<code>options.keepHash</code>",id:"optionskeephash",level:3},{value:"Return Value",id:"return-value",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useGo")," is a hook that leverages the ",(0,o.kt)("inlineCode",{parentName:"p"},"go")," method of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"routerProvider"))," to perform navigation operations."),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useGo } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const go = useGo();\n\n    return (\n        <Button\n            onClick={() => {\n                go({\n                    to: "/posts",\n                    query: {\n                        filters: [\n                            {\n                                field: "title",\n                                operator: "contains",\n                                value: "Refine",\n                            },\n                        ],\n                    },\n                    type: "push",\n                });\n            }}\n        >\n            Go Posts With Default Filters\n        </Button>\n    );\n};\n')),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"to"},(0,o.kt)("inlineCode",{parentName:"h3"},"to")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," parameter is the path you want to navigate to. If left empty, it will navigate to the current path, which is useful for updating the query parameters."),(0,o.kt)("h3",{id:"query"},(0,o.kt)("inlineCode",{parentName:"h3"},"query")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," parameter is the query parameters you want to add to the path. It is an object which the ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," will convert to the query string."),(0,o.kt)("h3",{id:"type"},(0,o.kt)("inlineCode",{parentName:"h3"},"type")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," parameter is the type of navigation you want to perform. It can be one of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"push"),": It adds a new entry to the history stack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"replace"),": It replaces the current entry on the history stack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": Returns the navigation path for the given config. Doesn't mutate the history stack at all.")),(0,o.kt)("h3",{id:"hash"},(0,o.kt)("inlineCode",{parentName:"h3"},"hash")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"hash")," parameter is the hash you want to add to the path."),(0,o.kt)("h3",{id:"optionskeepquery"},(0,o.kt)("inlineCode",{parentName:"h3"},"options.keepQuery")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"options.keepQuery")," parameter is a boolean that determines whether the current query parameters should be kept or not. If it is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the current query parameters will be merged with the new query parameters. If it is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", the current query parameters will be ignored."),(0,o.kt)("h3",{id:"optionskeephash"},(0,o.kt)("inlineCode",{parentName:"h3"},"options.keepHash")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"options.keepHash")," parameter is a boolean that determines whether the current hash should be kept or not. If it is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the current hash will be kept in the URL. If it is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", the current hash will be ignored."),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useGo")," is not returning any value except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," type which returns the navigation path for the given config without mutating the history stack."))}c.isMDXComponent=!0}}]);