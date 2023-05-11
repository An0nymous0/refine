"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},65130:(e,t,r)=>{r.d(t,{b:()=>i,k:()=>l});var n=r(67294),o=r(902);const a=n.createContext(null);function i(e){let{children:t,content:r}=e;const o=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return n.createElement(a.Provider,{value:o},t)}function l(){const e=(0,n.useContext)(a);if(null===e)throw new o.i6("DocProvider");return e}},71782:(e,t,r)=>{r.d(t,{I:()=>m});var n=r(67294),o=r(71142),a=r(82368);const i="card_bwaa",l="cardSelected_tQc4",s="cards_w51s",c="cardsSmall_pehM";var u=r(86010);const d=e=>{let{name:t,title:r,selected:o,onClick:a}=e;return n.createElement("button",{type:"button",onClick:a,className:(0,u.Z)(i,o&&l)},n.createElement("img",{className:"max-w-[90px]",src:`${o?"https://refine.ams3.digitaloceanspaces.com/website/static/icons/colored/ui-framework-":"https://refine.ams3.digitaloceanspaces.com/website/static/icons/grayscale/ui-framework-"}${t}.svg`,alt:r,width:"100%",height:"100%"}),r&&n.createElement("span",null,r))},p={headless:"Headless",antd:"Ant Design",mui:"Material UI",mantine:"Mantine","chakra-ui":"Chakra UI"},m=e=>{let{small:t}=e;const{preferred:r,setPreferred:i}=(0,a.n)();return n.createElement("div",null,n.createElement("div",{className:(0,u.Z)(s,t&&c)},o.V1.map((e=>n.createElement(d,{key:e,title:t?void 0:p[e],name:e,selected:r===e,onClick:()=>i(e)})))))}},71142:(e,t,r)=>{r.d(t,{KZ:()=>s,V1:()=>a,lu:()=>c});var n=r(67294),o=r(65130);const a=["headless","antd","chakra-ui","mantine","mui"],i=e=>{if(a.includes(e))return e},l="tutorial-preferred-ui-package",s=n.createContext({preferred:"headless",current:void 0,setPreferred:()=>{}}),c=e=>{let{children:t}=e;const{metadata:r}=(0,o.k)(),a=(e=>{const t=e.match(/\/(headless|antd|chakra-ui|mantine|mui)\//);if(t&&i(t[1]))return t[1]})(r.id),[c,u]=n.useState("headless");n.useEffect((()=>{if("undefined"!=typeof window){const e=localStorage.getItem(l),t=i(e);t&&u(t)}}),[]);const d=e=>{i(e)&&("undefined"!=typeof window&&localStorage.setItem(l,e),u(e))};return n.useEffect((()=>{a&&a!==c&&d(a)}),[a,c]),n.createElement(s.Provider,{value:{preferred:c,setPreferred:d,current:a||c}},t)}},82368:(e,t,r)=>{r.d(t,{n:()=>a});var n=r(67294),o=r(71142);const a=()=>n.useContext(o.KZ)},31944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(71782);const i={id:"select-framework",title:"3. Selection of UI Framework",tutorial:{order:2,prev:"tutorial/introduction/prequisite",next:"tutorial/getting-started/index"}},l=void 0,s={unversionedId:"tutorial/introduction/select-framework",id:"version-3.xx.xx/tutorial/introduction/select-framework",title:"3. Selection of UI Framework",description:"refine is a headless framework by default. It means you can build your app without any UI frameworks. However, refine has built-in support for the most popular UI frameworks like Material UI, Ant Design, Mantine, and Chakra UI. You can speed up your app UI development with these powerful frameworks.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/0-introduction/2-select-framework.md",sourceDirName:"tutorial/0-introduction",slug:"/tutorial/introduction/select-framework",permalink:"/docs/3.xx.xx/tutorial/introduction/select-framework",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/0-introduction/2-select-framework.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683809188,formattedLastUpdatedAt:"May 11, 2023",sidebarPosition:2,frontMatter:{id:"select-framework",title:"3. Selection of UI Framework",tutorial:{order:2,prev:"tutorial/introduction/prequisite",next:"tutorial/getting-started/index"}}},c={},u=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=d("UIConditional"),m=d("Checklist"),f=d("ChecklistItem"),k={toc:u};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," is a headless framework by default. It means you can build your app without any UI frameworks. However, ",(0,o.kt)("strong",{parentName:"p"},"refine")," has built-in support for the most popular UI frameworks like ",(0,o.kt)("strong",{parentName:"p"},"Material UI"),", ",(0,o.kt)("strong",{parentName:"p"},"Ant Design"),", ",(0,o.kt)("strong",{parentName:"p"},"Mantine"),", and ",(0,o.kt)("strong",{parentName:"p"},"Chakra UI"),". You can speed up your app UI development with these powerful frameworks."),(0,o.kt)("p",null,"Before you start, you can read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/"},"API references")," of the UI frameworks to get more information about them."),(0,o.kt)("h3",null,"Select a UI Framework"),(0,o.kt)("p",null,"After this step, the tutorial will proceed according to your UI framework choice. You can choose one of the following UI frameworks or just go with the headless UI option:"),(0,o.kt)(a.I,{mdxType:"SelectTutorialFramework"}),(0,o.kt)("br",null),(0,o.kt)(p,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("p",null,"The tutorial content will continue as if it were the ",(0,o.kt)("strong",{parentName:"p"},"Ant Design")," selection.")),(0,o.kt)(p,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("p",null,"The tutorial content will continue as if it were the ",(0,o.kt)("strong",{parentName:"p"},"Chakra UI")," selection.")),(0,o.kt)(p,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("p",null,"The tutorial content will continue as if it were the ",(0,o.kt)("strong",{parentName:"p"},"headless")," selection.")),(0,o.kt)(p,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("p",null,"The tutorial content will continue as if it were the ",(0,o.kt)("strong",{parentName:"p"},"Mantine")," selection.")),(0,o.kt)(p,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("p",null,"The tutorial content will continue as if it were the ",(0,o.kt)("strong",{parentName:"p"},"Material UI*")," selection.")),(0,o.kt)("br",null),(0,o.kt)(m,{mdxType:"Checklist"},(0,o.kt)(f,{id:"select-framework",mdxType:"ChecklistItem"},"I understood that refine is a headless framework."),(0,o.kt)(f,{id:"select-framework-2",mdxType:"ChecklistItem"},"I understood that refine has built-in support for the most popular UI frameworks."),(0,o.kt)(f,{id:"select-framework-3",mdxType:"ChecklistItem"},"I have selected a UI framework.")))}h.isMDXComponent=!0}}]);