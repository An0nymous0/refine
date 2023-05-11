"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98575],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(b,l(l({ref:n},s),{},{components:t})):r.createElement(b,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},47425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={},l=void 0,i={unversionedId:"partials/tutorial/headless-layout",id:"partials/tutorial/headless-layout",title:"headless-layout",description:"",source:"@site/docs/partials/tutorial/headless-layout.md",sourceDirName:"partials/tutorial",slug:"/partials/tutorial/headless-layout",permalink:"/docs/partials/tutorial/headless-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/partials/tutorial/headless-layout.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683809188,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{}},d={},c=[],s={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},'body {\n    margin: 0px;\n}\n\ntable {\n    border-spacing: 0;\n    border: 1px solid black;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable tr:last-child td {\n    border-bottom: 0;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable th:last-child,\ntd:last-child {\n    border-right: 0;\n}\n\n.layout {\n    display: flex;\n    gap: 16px;\n}\n\n@media screen and (max-width: 751px) {\n    .layout {\n        display: block;\n    }\n}\n\n.layout .content {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.breadcrumb {\n    display: flex;\n    gap: 24px;\n    list-style-type: "/  ";\n    padding: 8px 16px;\n    border-bottom: 1px solid lightgray;\n}\n\n.breadcrumb a {\n    color: blue;\n    text-decoration: none;\n}\n\n.menu {\n    flex-shrink: 0;\n    padding: 8px 16px;\n    border-right: 1px solid lightgray;\n}\n\n.menu a {\n    color: black;\n}\n\n.menu .active {\n    font-weight: bold;\n}\n\n@media screen and (max-width: 751px) {\n    .menu {\n        border-right: none;\n        border-bottom: 1px solid lightgray;\n    }\n}\n\n.menu ul {\n    padding-left: 16px;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { PropsWithChildren } from "react";\nimport { useMenu, useBreadcrumb } from "@refinedev/core";\nimport { NavLink, Link } from "react-router-dom";\n\nconst Breadcrumb = () => {\n    const { breadcrumbs } = useBreadcrumb();\n\n    return (\n        <ul className="breadcrumb">\n            {breadcrumbs.map((breadcrumb) => (\n                <li key={`breadcrumb-${breadcrumb.label}`}>\n                    {breadcrumb.href ? (\n                        <Link to={breadcrumb.href}>{breadcrumb.label}</Link>\n                    ) : (\n                        <span>{breadcrumb.label}</span>\n                    )}\n                </li>\n            ))}\n        </ul>\n    );\n};\n\nconst Menu = () => {\n    const { menuItems } = useMenu();\n\n    return (\n        <nav className="menu">\n            <ul>\n                {menuItems.map((item) => (\n                    <li key={item.key}>\n                        <NavLink to={item.route}>{item.label}</NavLink>\n                    </li>\n                ))}\n            </ul>\n        </nav>\n    );\n};\n\nconst Layout: React.FC<PropsWithChildren> = ({ children }) => {\n    return (\n        <div className="layout">\n            <Menu />\n            <div className="content">\n                <Breadcrumb />\n                <div>{children}</div>\n            </div>\n        </div>\n    );\n};\n')))}u.isMDXComponent=!0}}]);