"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18835],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={id:"overview",title:"Overview",slug:"/"},o=void 0,p={unversionedId:"getting-started/overview",id:"getting-started/overview",title:"Overview",description:"What is refine?",source:"@site/docs/getting-started/overview.md",sourceDirName:"getting-started",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/getting-started/overview.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681819550,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"someSidebar",next:{title:"Quick Start Guide",permalink:"/docs/getting-started/quickstart"}},s={},l=[{value:"What is refine?",id:"what-is-refine",level:2},{value:"What do you mean by &quot;headless&quot; ?",id:"what-do-you-mean-by-headless-",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Community",id:"community",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"Next Steps",id:"next-steps",level:2}],m={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-refine"},"What is refine?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," is a React-based framework that enables rapid development of web applications. It eliminates the repetitive tasks demanded by ",(0,n.kt)("strong",{parentName:"p"},"CRUD")," operations and provides industry standard solutions for critical parts of a project like ",(0,n.kt)("strong",{parentName:"p"},"authentication"),", ",(0,n.kt)("strong",{parentName:"p"},"access control"),", ",(0,n.kt)("strong",{parentName:"p"},"routing"),", ",(0,n.kt)("strong",{parentName:"p"},"networking"),", ",(0,n.kt)("strong",{parentName:"p"},"state management")," and ",(0,n.kt)("strong",{parentName:"p"},"i18n"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," is ",(0,n.kt)("em",{parentName:"p"},"headless by design"),", offering unlimited styling and customization options."),(0,n.kt)("h2",{id:"what-do-you-mean-by-headless-"},'What do you mean by "headless" ?'),(0,n.kt)("p",null,"Instead of being a limited set of pre-styled components, ",(0,n.kt)("strong",{parentName:"p"},"refine")," is a collection of helper\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"hooks"),",\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"components"),"\xa0and\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"providers"),". They are all decoupled from your ",(0,n.kt)("em",{parentName:"p"},"UI")," ",(0,n.kt)("em",{parentName:"p"},"components")," and ",(0,n.kt)("em",{parentName:"p"},"business logic"),", so they never keep you from customizing your ",(0,n.kt)("em",{parentName:"p"},"UI")," or coding your own flow."),(0,n.kt)("p",null,"refine also ships with ready-made integrations for ",(0,n.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design System"),", ",(0,n.kt)("a",{parentName:"p",href:"https://mui.com/"},"Material UI"),", ",(0,n.kt)("a",{parentName:"p",href:"https://mantine.dev/"},"Mantine"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI")," for convenience."),(0,n.kt)("p",null,"All in all, ",(0,n.kt)("strong",{parentName:"p"},"refine")," just works ",(0,n.kt)("em",{parentName:"p"},"seamlessly")," with any ",(0,n.kt)("em",{parentName:"p"},"custom designs")," or ",(0,n.kt)("em",{parentName:"p"},"UI frameworks"),"."),(0,n.kt)("h2",{id:"use-cases"},"Use cases"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," shines when it comes to ",(0,n.kt)("em",{parentName:"p"},"data-intensive")," applications like ",(0,n.kt)("em",{parentName:"p"},"admin panels"),", ",(0,n.kt)("em",{parentName:"p"},"dashboards")," and ",(0,n.kt)("em",{parentName:"p"},"internal tools"),". Thanks to the built-in ",(0,n.kt)("strong",{parentName:"p"},"SSR support"),", ",(0,n.kt)("strong",{parentName:"p"},"refine")," can also power ",(0,n.kt)("em",{parentName:"p"},"customer-facing")," applications like ",(0,n.kt)("em",{parentName:"p"},"storefronts"),"."),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/diagram.png",alt:"Refine diagram"}),(0,n.kt)("h2",{id:"key-features"},"Key Features"),(0,n.kt)("p",null,"\u2699\ufe0f Zero-config, ",(0,n.kt)("strong",{parentName:"p"},"one-minute setup")," with a ",(0,n.kt)("strong",{parentName:"p"},"single CLI command")),(0,n.kt)("p",null,"\ud83d\udd0c Connectors for ",(0,n.kt)("strong",{parentName:"p"},"15+ backend services")," including ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/simple-rest"},"REST API"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/graphql"},"GraphQL"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/nestjsx-crud"},"NestJs CRUD"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/airtable"},"Airtable"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/strapi"},"Strapi"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-v4"},"Strapi v4"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql"},"Strapi GraphQL"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/supabase"},"Supabase"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/hasura"},"Hasura"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/appwrite"},"Appwrite"),", ",(0,n.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://directus.io/"},"Directus"),"."),(0,n.kt)("p",null,"\ud83c\udf10 ",(0,n.kt)("strong",{parentName:"p"},"SSR support")," with ",(0,n.kt)("strong",{parentName:"p"},"Next.js")," or ",(0,n.kt)("strong",{parentName:"p"},"Remix")),(0,n.kt)("p",null,"\ud83d\udd0d Auto-generation of ",(0,n.kt)("strong",{parentName:"p"},"CRUD")," UIs based on ",(0,n.kt)("strong",{parentName:"p"},"your API data structure")),(0,n.kt)("p",null,"\u269b Perfect ",(0,n.kt)("strong",{parentName:"p"},"state management")," & ",(0,n.kt)("strong",{parentName:"p"},"mutations")," with ",(0,n.kt)("strong",{parentName:"p"},"React Query")),(0,n.kt)("p",null,"\ud83d\udd00 ",(0,n.kt)("strong",{parentName:"p"},"Advanced routing")," with any router library of your choice"),(0,n.kt)("p",null,"\ud83d\udd10 Providers for seamless ",(0,n.kt)("strong",{parentName:"p"},"authentication")," and ",(0,n.kt)("strong",{parentName:"p"},"access control")," flows"),(0,n.kt)("p",null,"\u26a1 Out-of-the-box support for ",(0,n.kt)("strong",{parentName:"p"},"live / real-time applications")),(0,n.kt)("p",null,"\ud83d\udcc4 Easy ",(0,n.kt)("strong",{parentName:"p"},"audit logs")," & ",(0,n.kt)("strong",{parentName:"p"},"document versioning")),(0,n.kt)("p",null,"\ud83d\udcac Support for any ",(0,n.kt)("strong",{parentName:"p"},"i18n")," framework"),(0,n.kt)("p",null,"\ud83d\udcaa Future-proof, ",(0,n.kt)("strong",{parentName:"p"},"robust architecture")),(0,n.kt)("p",null,"\u231b\ufe0f Built-in ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/cli/"},"CLI")," with time-saving features"),(0,n.kt)("p",null,"\u2705 Full ",(0,n.kt)("strong",{parentName:"p"},"test coverage")),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," has a very friendly community and we are always happy to help you get started:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/refine"},"Join the Discord community!")," It is the easiest way to get help and ask questions to the developers and other users. It is also the fastest as all questions are usually answered in around 30 minutes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/discussions"},"Join the GitHub Discussions")," to ask anything about the refine project or give feedback; we would love to hear your thoughts!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/contributing/"},"Learn how to contribute to the refine!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-writer-program/"},"Join our Guest Technical Writer Program")," and become a blog writer for ",(0,n.kt)("strong",{parentName:"li"},"refine"),".")),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"You can find Refine's Public Roadmap ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/projects/1"},"here!")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"\ud83d\udc49 Continue with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/quickstart/"},"Quickstart guide")," to setup and run your first ",(0,n.kt)("strong",{parentName:"p"},"refine")," project."),(0,n.kt)("p",null,"\ud83d\udc49 Jump directly to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/introduction/index/"},"Tutorial")," to learn refine by building a full-blown CRUD application."))}u.isMDXComponent=!0}}]);