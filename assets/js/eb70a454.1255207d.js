"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={},a=void 0,s={unversionedId:"api-reference/core/hooks/data/useList/sorting-live-preview",id:"api-reference/core/hooks/data/useList/sorting-live-preview",title:"sorting-live-preview",description:"",source:"@site/docs/api-reference/core/hooks/data/useList/sorting-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useList",slug:"/api-reference/core/hooks/data/useList/sorting-live-preview",permalink:"/docs/api-reference/core/hooks/data/useList/sorting-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useList/sorting-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1681910843,formattedLastUpdatedAt:"Apr 19, 2023",frontMatter:{}},c={},p=[],d={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useState } from "react";\nimport { useList, HttpError } from "@refinedev/core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    //highlight-next-line\n    const [order, setOrder] = useState<"asc" | "desc">("asc");\n\n    const { data, isLoading, isError } = useList<IProduct, HttpError>({\n        resource: "products",\n        //highlight-start\n        sorters: [\n            {\n                field: "name",\n                order,\n            },\n        ],\n        //highlight-end\n    });\n\n    const products = data?.data ?? [];\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            {/* highlight-start */}\n            <button\n                onClick={() =>\n                    setOrder((prev) => (prev === "asc" ? "desc" : "asc"))\n                }\n            >\n                toggle sort\n            </button>\n            {/* highlight-end */}\n\n            <ul>\n                {products.map((product) => (\n                    <li key={product.id}>\n                        <h4>\n                            {product.name} - ({product.material})\n                        </h4>\n                    </li>\n                ))}\n            </ul>\n        </div>\n    );\n};\n\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}l.isMDXComponent=!0}}]);