"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64885],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={},a=void 0,s={unversionedId:"api-reference/antd/hooks/list/filtering-live-preview",id:"version-3.xx.xx/api-reference/antd/hooks/list/filtering-live-preview",title:"filtering-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/list/filtering-live-preview.md",sourceDirName:"api-reference/antd/hooks/list",slug:"/api-reference/antd/hooks/list/filtering-live-preview",permalink:"/docs/3.xx.xx/api-reference/antd/hooks/list/filtering-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/hooks/list/filtering-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683809188,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{}},c={},l=[],p={toc:l};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=420px",live:!0,url:"http://localhost:3000/products",previewHeight:"420px"},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport {\n    Typography,\n    AntdList,\n    useSimpleList,\n    Input,\n} from "@pankod/refine-antd";\n\nconst { Text } = Typography;\n\ninterface IProduct {\n    id: number;\n    name: string;\n    description: string;\n    price: string;\n}\n\nconst ProductList: React.FC = () => {\n    const { listProps, setFilters } = useSimpleList<IProduct>({\n        initialFilter: [\n            {\n                field: "name",\n                operator: "contains",\n                value: "Awesome",\n            },\n        ],\n    });\n\n    return (\n        <div>\n            <Input.Search\n                placeholder="Search by name"\n                onChange={(e) => {\n                    setFilters([\n                        {\n                            field: "name",\n                            operator: "contains",\n                            value: e.target.value,\n                        },\n                    ]);\n                }}\n            />\n            <AntdList {...listProps} renderItem={renderItem} />\n        </div>\n    );\n};\n\nconst renderItem = (item: IProduct) => {\n    const { id, name, description, price } = item;\n\n    return (\n        <AntdList.Item actions={[<Text key={id}>{price}</Text>]}>\n            <AntdList.Item.Meta title={name} description={description} />\n        </AntdList.Item>\n    );\n};\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineAntdDemo />);\n')))}d.isMDXComponent=!0}}]);