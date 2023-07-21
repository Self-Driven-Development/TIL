"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[5604],{68339:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(39953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(n),d=o,v=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var m=2;m<l;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(855),o=(n(39953),n(68339));const l={},a="React Server Component",i={unversionedId:"\ubc15\uaddc\uc131/Memo/frontend/react/React Server Component",id:"\ubc15\uaddc\uc131/Memo/frontend/react/React Server Component",title:"React Server Component",description:"- Next.js 13\ubc84\uc804\ubd80\ud130\ub294 \uae30\ubcf8\uc801\uc73c\ub85c app directory\ub294 Server component\ub97c \uc0ac\uc6a9 -> \uc11c\ubc84\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc27d\uac8c \ub80c\ub354\ub9c1\ud558\uace0 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \uc804\uc1a1\ub418\ub294 JS\uc591\uc744 \uc904\uc77c \uc218 \uc788\uc74c",source:"@site/members/\ubc15\uaddc\uc131/Memo/frontend/react/React Server Component.md",sourceDirName:"\ubc15\uaddc\uc131/Memo/frontend/react",slug:"/\ubc15\uaddc\uc131/Memo/frontend/react/React Server Component",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/frontend/react/React Server Component",draft:!1,editUrl:"https://github.com/Self-Driven-Development/TIL/tree/main/\ubc15\uaddc\uc131/Memo/frontend/react/React Server Component.md",tags:[],version:"current",frontMatter:{},sidebar:"all",previous:{title:"Portal",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/frontend/react/Portal"},next:{title:"React\uc5d0\uc11c \ud0c0\uc785\uc9c0\uc815",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/frontend/react/React\uc5d0\uc11c \ud0c0\uc785\uc9c0\uc815"}},p={},m=[{value:"\uc131\ub2a5\uc744 \ud5a5\uc0c1 \uc2dc\ud0a4\uace0 \uc2f6\ub2e4\uba74?",id:"\uc131\ub2a5\uc744-\ud5a5\uc0c1-\uc2dc\ud0a4\uace0-\uc2f6\ub2e4\uba74",level:3},{value:"Why Server Component?",id:"why-server-component",level:3},{value:"Client Component",id:"client-component",level:3},{value:"Server Component vs Client Component \uc0ac\uc6a9 \uc2dc\uae30",id:"server-component-vs-client-component-\uc0ac\uc6a9-\uc2dc\uae30",level:3},{value:"1. Client Component\uc758 child\ub098 props\ub85c Server Component\ub97c \uc804\ub2ec",id:"1-client-component\uc758-child\ub098-props\ub85c-server-component\ub97c-\uc804\ub2ec",level:3},{value:"2. Server Component \uc548\uc5d0\uc11c Client Component\ub97c import\ud574\uc11c \uc0ac\uc6a9(Serialization, \uc9c1\ub82c\ud654)",id:"2-server-component-\uc548\uc5d0\uc11c-client-component\ub97c-import\ud574\uc11c-\uc0ac\uc6a9serialization-\uc9c1\ub82c\ud654",level:3},{value:"Third-party packages",id:"third-party-packages",level:3}],c={toc:m},s="wrapper";function u(e){let{components:t,...l}=e;return(0,o.kt)(s,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-server-component"},"React Server Component"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Next.js 13\ubc84\uc804\ubd80\ud130\ub294 \uae30\ubcf8\uc801\uc73c\ub85c app directory\ub294 Server component\ub97c \uc0ac\uc6a9 -> \uc11c\ubc84\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc27d\uac8c \ub80c\ub354\ub9c1\ud558\uace0 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c \uc804\uc1a1\ub418\ub294 JS\uc591\uc744 \uc904\uc77c \uc218 \uc788\uc74c"),(0,o.kt)("li",{parentName:"ul"},"Server Component\uc640 Client Component\ub97c interleave\ud558\ub294 \ubc29\ubc95",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Server Component \uc548\uc5d0\uc11c Client Component\ub97c import\ud574\uc11c \uc0ac\uc6a9"),(0,o.kt)("li",{parentName:"ol"},"Client Component\uc758 child\ub098 props\ub85c Server Component\ub97c \uc804\ub2ec\n",(0,o.kt)("img",{alt:"Alt text",src:n(71115).Z,width:"1600",height:"624"}))))),(0,o.kt)("h3",{id:"\uc131\ub2a5\uc744-\ud5a5\uc0c1-\uc2dc\ud0a4\uace0-\uc2f6\ub2e4\uba74"},"\uc131\ub2a5\uc744 \ud5a5\uc0c1 \uc2dc\ud0a4\uace0 \uc2f6\ub2e4\uba74?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client Component\ub97c Component Tree\uc758 \ub9e8 \uc544\ub798\ucabd\uc5d0 \uc624\ub3c4\ub85d \uc774\ub3d9\uc2dc\ud0a4\ub294 \uac83\uc774 \uc88b\ub2e4.")),(0,o.kt)("h3",{id:"why-server-component"},"Why Server Component?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RSC(React Server Component)\ub97c \uc0ac\uc6a9\ud558\uba74 \uac1c\ubc1c\uc790\uac00 \uc11c\ubc84 \uc778\ud504\ub77c\ub97c \ub354 \uc798 \ud65c\uc6a9\ud560 \uc218 \uc788\uac8c \ub428",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc758 JS\ubc88\ub4e4 \ud06c\uae30\uc5d0 \uc601\ud5a5\uc744 \ubbf8\ucce4\ub358 large dependenices\uac00 \uc11c\ubc84\uc5d0 \ub300\uc2e0 \ub0a8\uc544 \uc131\ub2a5\uc744 \ud5a5\uc0c1"),(0,o.kt)("li",{parentName:"ul"},"initial page load\uac00 \ube68\ub77c\uc9d0"),(0,o.kt)("li",{parentName:"ul"},"Base client-side runtime\uc740 \uce90\uc2dc\uac00 \uac00\ub2a5\ud558\uace0, \ud06c\uae30\uac00 \uc608\uce21 \uac00\ub2a5\ud558\uba70, \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ucee4\uc838\ub3c4 \uc99d\uac00 X")))),(0,o.kt)("h3",{id:"client-component"},"Client Component"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 client-side interactivity\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc74c"),(0,o.kt)("li",{parentName:"ul"},"Next.js\uc758 \uacbd\uc6b0 \uc11c\ubc84\uc5d0\uc11c prerendering\ub418\uace0 client\uc5d0\uc11c hydrate"),(0,o.kt)("li",{parentName:"ul"},"\uc774 \ubc29\uc2dd\uc740 Next.js 12\ubc0f \uc774\uc804 \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud55c \ubc29\uc2dd"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'use client'"),"\ub97c \ucd5c\uc0c1\ub2e8\uc5d0 \uc791\uc131")),(0,o.kt)("h3",{id:"server-component-vs-client-component-\uc0ac\uc6a9-\uc2dc\uae30"},"Server Component vs Client Component \uc0ac\uc6a9 \uc2dc\uae30"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt text",src:n(37586).Z,width:"1044",height:"900"})),(0,o.kt)("h3",{id:"1-client-component\uc758-child\ub098-props\ub85c-server-component\ub97c-\uc804\ub2ec"},"1. Client Component\uc758 child\ub098 props\ub85c Server Component\ub97c \uc804\ub2ec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client Component\uc5d0\uc11c Server Component\ub97c import\ud574\uc11c \uc0ac\uc6a9\uc740 \ubd88\uac00")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u2705 This pattern works. You can pass a Server Component\n// as a child or prop of a Client Component.\nimport ClientComponent from "./ClientComponent";\nimport ServerComponent from "./ServerComponent";\n\n// Pages are Server Components by default\nexport default function Page() {\n  return (\n    <ClientComponent>\n      <ServerComponent />\n    </ClientComponent>\n  );\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React\ub294 \uacb0\uacfc\ub97c Client\uc5d0 \ubcf4\ub0b4\uae30 \uc804\uc5d0\uc11c \uc11c\ubc84\uc5d0\uc11c Client Component\ub97c \uc6b0\uc120 \ub80c\ub354\ub9c1")),(0,o.kt)("h3",{id:"2-server-component-\uc548\uc5d0\uc11c-client-component\ub97c-import\ud574\uc11c-\uc0ac\uc6a9serialization-\uc9c1\ub82c\ud654"},"2. Server Component \uc548\uc5d0\uc11c Client Component\ub97c import\ud574\uc11c \uc0ac\uc6a9(Serialization, \uc9c1\ub82c\ud654)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Serialization : Object \ub610\ub294 data structure\uac00 \ub124\ud2b8\uc6cc\ud06c \ub610\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ud1b5\ud55c \uc804\uc1a1\uc5d0 \uc801\ud569\ud55c \ubc29\uc2dd\uc73c\ub85c \ubcc0\ud658\ub418\ub294 \ud504\ub85c\uc138\uc2a4")),(0,o.kt)("h3",{id:"third-party-packages"},"Third-party packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"npm packages\uc5d0 \uc788\ub294 client \uc804\uc6a9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub294 \ub9ce\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \uc544\uc9c1\uae4c\uc9c0 ",(0,o.kt)("inlineCode",{parentName:"li"},"use client"),"\uc9c0\uc2dc\ubb38\uc774 \uc5c6\uc74c. \uc774\uac83\ub4e4\uc744 Server component\ub85c \ub3d9\uc791\ud558\ub294 \uacf3\uc5d0\ub2e4\uac00 import\ud574\uc11c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uace0 \uc624\ub958\ub97c \uc77c\uc73c\ud0b4. \uc774\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 ",(0,o.kt)("inlineCode",{parentName:"li"},"client component"),"\ub97c \ub530\ub85c \ub9cc\ub4e4\uc5b4\uc11c import\ud55c \ub2e4\uc74c \uadf8\uac78 \ub2e4\uc2dc export \uc2dc\ucf1c\uc8fc\ub294 \uac83")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use client';\n\nimport { AcmeCarousel } from 'acme-carousel';\n\nexport default AcmeCarousel;\n")))}u.isMDXComponent=!0},71115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-1-74b9fb17dc9be8c30b23960457d31d1b.png"},37586:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-2-f8c090e370f044486d0ce3b745092309.png"}}]);