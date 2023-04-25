"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19461],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=t,f=d["".concat(p,".").concat(m)]||d[m]||h[m]||i;return r?a.createElement(f,o(o({ref:n},l),{},{components:r})):a.createElement(f,o({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23821:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),t=r(67294),i=r(3905);const o={id:"inferencer",title:"Inferencer"},c=void 0,p={unversionedId:"api-reference/chakra-ui/components/inferencer",id:"version-3.xx.xx/api-reference/chakra-ui/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @pankod/refine-inferencer. Inferencer exports ChakraUIListInferencer, ChakraUIShowInferencer, ChakraUIEditInferencer, ChakraUICreateInferencer and ChakraUIInferencer (which combines all in one place) components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/inferencer.md",sourceDirName:"api-reference/chakra-ui/components",slug:"/api-reference/chakra-ui/components/inferencer",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1682407117,formattedLastUpdatedAt:"Apr 25, 2023",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/chakra-auth-page"},next:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/create"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>List</code>",id:"list",level:3},{value:"<code>Show</code>",id:"show",level:3},{value:"<code>Create</code>",id:"create",level:3},{value:"<code>Edit</code>",id:"edit",level:3},{value:"Example",id:"example",level:2}],h=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},d=h("Tabs"),m=h("TabItem"),f=h("CodeSandboxExample"),k={toc:l};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can automatically generate views for your resources using ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer"),". Inferencer exports ",(0,i.kt)("inlineCode",{parentName:"p"},"ChakraUIListInferencer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ChakraUIShowInferencer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ChakraUIEditInferencer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ChakraUICreateInferencer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ChakraUIInferencer")," (which combines all in one place) components."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Chakra UI components can be imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/chakra-ui"),". You can directly use the components in ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,i.kt)("inlineCode",{parentName:"p"},"Refine")," component or you can use them in your custom components by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," prop as the resource name."),(0,i.kt)(d,{defaultValue:"resources",values:[{label:(0,i.kt)(t.Fragment,null,"In",(0,i.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,i.kt)(m,{value:"resources",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                resources={[\n                    {\n                        name: "samples",\n                        // highlight-start\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                        // highlight-end\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n'))),(0,i.kt)(m,{value:"custom",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst SampleList = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="list" />\n    );\n};\n\nconst SampleShow = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="show" id="1" />\n    );\n};\n\nconst SampleCreate = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="create" />\n    );\n};\n\nconst SampleEdit = () => {\n    return (\n        // highlight-next-line\n        <ChakraUIInferencer resource="samples" action="edit" id="1" />\n    );\n};\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To learn more about ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package, please check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"Docs"))),(0,i.kt)("h2",{id:"views"},"Views"),(0,i.kt)("h3",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h3"},"List")),(0,i.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," component from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        // highlight-next-line\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        // highlight-next-line\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                    },\n                    {\n                        name: "tags",\n                        // highlight-next-line\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h3",{id:"show"},(0,i.kt)("inlineCode",{parentName:"h3"},"Show")),(0,i.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        list: ChakraUIInferencer,\n                        // highlight-next-line\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: ChakraUIInferencer,\n                        // highlight-next-line\n                        show: ChakraUIInferencer,\n                    },\n                    {\n                        name: "tags",\n                        list: ChakraUIInferencer,\n                        // highlight-next-line\n                        show: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h3",{id:"create"},(0,i.kt)("inlineCode",{parentName:"h3"},"Create")),(0,i.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," component from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        // highlight-next-line\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                    },\n                    {\n                        name: "tags",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h3",{id:"edit"},(0,i.kt)("inlineCode",{parentName:"h3"},"Edit")),(0,i.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," component from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout, ChakraProvider, refineTheme } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-next-line\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider(API_URL)}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "samples",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        // highlight-next-line\n                        edit: ChakraUIInferencer,\n                        canDelete: true,\n                    },\n                    {\n                        name: "categories",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                    },\n                    {\n                        name: "tags",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,i.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/chakra-ui")," components."),(0,i.kt)(f,{path:"inferencer-chakra-ui",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);