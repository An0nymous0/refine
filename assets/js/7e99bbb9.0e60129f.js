"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(k,i(i({ref:n},l),{},{components:t})):r.createElement(k,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={id:"useResource",title:"useResource"},i=void 0,s={unversionedId:"api-reference/core/hooks/resource/useResource",id:"version-3.xx.xx/api-reference/core/hooks/resource/useResource",title:"useResource",description:"useResource is used to get the resources array that you defined in `. It also returns resource object, resourceName and query params id and action`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResource.md",sourceDirName:"api-reference/core/hooks/resource",slug:"/api-reference/core/hooks/resource/useResource",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResource",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResource.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1681205698,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{id:"useResource",title:"useResource"},sidebar:"someSidebar",previous:{title:"useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle"},next:{title:"useResourceWithRoute",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>resources</code>",id:"resources",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>resourceName</code>",id:"resourcename",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],l=(p="PropsTable",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const d={toc:u};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useResource")," is used to get the resources array that you defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),". It also returns ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," object, ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceName")," and query params ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"action"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine-core";\n\nconst { resources, resource, action, id } = useResource();\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"resourcenameorroutename"},(0,o.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,o.kt)("p",null,"It is used to get resource object by name or route name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine-core";\n\nconst { resource } = useResource({\n    resourceNameOrRouteName: "posts",\n});\n')),(0,o.kt)("h2",{id:"return-values"},"Return Values"),(0,o.kt)("h3",{id:"resources"},(0,o.kt)("inlineCode",{parentName:"h3"},"resources")),(0,o.kt)("p",null,"An array of resources that you defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"Resource object."),(0,o.kt)("h3",{id:"resourcename"},(0,o.kt)("inlineCode",{parentName:"h3"},"resourceName")),(0,o.kt)("p",null,"Resource name of resource object."),(0,o.kt)("h3",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h3"},"id")),(0,o.kt)("p",null,"Query param ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,o.kt)("h3",{id:"action"},(0,o.kt)("inlineCode",{parentName:"h3"},"action")),(0,o.kt)("p",null,"Query param ",(0,o.kt)("inlineCode",{parentName:"p"},"action"),"."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(l,{module:"@pankod/refine-core/useResource",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"return-value"},"Return value"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resources"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#interfaces"},(0,o.kt)("inlineCode",{parentName:"a"},"IResourceItem[]")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resource"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#interfaces"},(0,o.kt)("inlineCode",{parentName:"a"},"IResourceItem")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"action"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"clone"'))))),(0,o.kt)("h4",{id:"interfaces"},"Interfaces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type OptionsProps<TExtends = { [key: string]: any }> = TExtends & {\n    label?: string;\n    route?: string;\n    hide?: boolean;\n    auditLog?: {\n        permissions?: AuditLogPermissions[number][] | string[];\n    };\n};\n\ninterface IResourceComponentsProps<\n    TCrudData = any,\n    TOptionsPropsExtends = { [key: string]: any },\n> {\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canDelete?: boolean;\n    canShow?: boolean;\n    name?: string;\n    initialData?: TCrudData;\n    options?: OptionsProps<TOptionsPropsExtends>;\n}\n\ninterface IResourceComponents {\n    list?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    create?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    edit?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    show?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n}\n\ninterface IResourceItem extends IResourceComponents {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n    options?: OptionsProps;\n    parentName?: string;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"canShow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," property in ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")))}m.isMDXComponent=!0}}]);