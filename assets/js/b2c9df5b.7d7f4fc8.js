"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,g=m["".concat(c,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","access-control"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/blog/nextauth-google-github-authentication-nextjs",source:"@site/blog/2022-08-18-auth-with-nextauth.md",title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",date:"2022-08-18T00:00:00.000Z",formattedDate:"August 18, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"access-control",permalink:"/blog/tags/access-control"}],readingTime:13.775,hasTruncateMarker:!0,authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],frontMatter:{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",slug:"nextauth-google-github-authentication-nextjs",authors:"ekekenta_clinton",tags:["nextjs","access-control"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",social_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-18-auth-with-nextauth/social.png",hide_table_of_contents:!1},prevItem:{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api"},nextItem:{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image"},relatedPosts:[{title:"Implementing Role Based Access Control",permalink:"/blog/refine-pixels-6",formattedDate:"February 19, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.21,date:"2023-02-19T00:00:00.000Z"},{title:"Next.js environment variables",permalink:"/blog/next-js-environment-variables",formattedDate:"September 7, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.6,date:"2022-09-07T00:00:00.000Z"},{title:"How to Fetch Data in React with useSWR",permalink:"/blog/data-fetching-next-js-useswr",formattedDate:"January 3, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:13.635,date:"2023-01-03T00:00:00.000Z"}],authorPosts:[{title:"How to create a CRUD app with SvelteKit",permalink:"/blog/sveltekit-crud-app-with-svelte-mui",formattedDate:"September 2, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:10.315,date:"2022-09-02T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We know how exhausting and time-consuming it can be to set up authentication, which includes handling databases, cookies, JWT, sessions, etc., on your own.\nThe goal of this article is for you to learn about an alternative and simple tool (NextAuth), which we will use to easily add Google and GitHub authentication to our application."))}p.isMDXComponent=!0}}]);