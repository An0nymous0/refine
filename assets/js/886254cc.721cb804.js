"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(n),f=i,m=l["".concat(u,".").concat(f)]||l[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},23858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/useGetIdentity/index.ts"},a=void 0,s={unversionedId:"api-reference/core/hooks/authentication/useGetIdentity",id:"api-reference/core/hooks/authentication/useGetIdentity",title:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/docs/api-reference/core/hooks/authentication/useGetIdentity.md",sourceDirName:"api-reference/core/hooks/authentication",slug:"/api-reference/core/hooks/authentication/useGetIdentity",permalink:"/docs/api-reference/core/hooks/authentication/useGetIdentity",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/authentication/useGetIdentity.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683809188,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{id:"useGetIdentity",title:"useGetIdentity",siderbar_label:"useGetIdentity",description:"useGetIdentity data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/useGetIdentity/index.ts"},sidebar:"someSidebar",previous:{title:"useOnError",permalink:"/docs/api-reference/core/hooks/authentication/useOnError"},next:{title:"useLogin",permalink:"/docs/api-reference/core/hooks/authentication/useLogin"}},u={},c=[{value:"Usage",id:"usage",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"getIdentity")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,i.kt)("p",null,"It returns the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,i.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isError"),". Data that is resolved from the ",(0,i.kt)("inlineCode",{parentName:"p"},"getIdentity")," will be returned as the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useGetIdentity")," can be useful when you want to get user information anywhere in your code."),(0,i.kt)("p",null,"Let's say that you want to show the user's name."),(0,i.kt)("p",null,"We have a logic in ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"getIdentity")," method like below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    // highlight-start\n    getIdentity: async () => {\n        return {\n            id: 1,\n            fullName: "Jane Doe",\n        };\n    },\n    // highlight-end\n    // ---\n};\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"You can access identity data like below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { useGetIdentity } from "@refinedev/core";\n\nexport const User: React.FC = () => {\n    // highlight-next-line\n    const { data: identity } = useGetIdentity<{\n        id: number;\n        fullName: string;\n    }>();\n\n    return <span>{identity?.fullName}</span>;\n};\n')))}p.isMDXComponent=!0}}]);