"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[33116],{68339:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(39953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,g=p["".concat(c,".").concat(d)]||p[d]||i[d]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>i,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var r=n(855),o=(n(39953),n(68339));const a={title:"13 (\uc77c)"},l="Study",s={unversionedId:"\uc1a1\uc740\uc218/23/23.08/13",id:"\uc1a1\uc740\uc218/23/23.08/13",title:"13 (\uc77c)",description:"mongoDB, mongoose",source:"@site/members/\uc1a1\uc740\uc218/23/23.08/13.md",sourceDirName:"\uc1a1\uc740\uc218/23/23.08",slug:"/\uc1a1\uc740\uc218/23/23.08/13",permalink:"/TIL/members/\uc1a1\uc740\uc218/23/23.08/13",draft:!1,editUrl:"https://github.com/Self-Driven-Development/TIL/tree/main/members/\uc1a1\uc740\uc218/23/23.08/13.md",tags:[],version:"current",frontMatter:{title:"13 (\uc77c)"},sidebar:"all",previous:{title:"12 (\ud1a0)",permalink:"/TIL/members/\uc1a1\uc740\uc218/23/23.08/12"},next:{title:"15 (\ud654)",permalink:"/TIL/members/\uc1a1\uc740\uc218/23/23.08/15"}},c={},m=[{value:"mongoDB, mongoose",id:"mongodb-mongoose",level:2},{value:"\uc11c\ub4dc\ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"\uc11c\ub4dc\ud30c\ud2f0-\ub77c\uc774\ube0c\ub7ec\ub9ac",level:3}],u={toc:m},p="wrapper";function i(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"study"},"Study"),(0,o.kt)("h2",{id:"mongodb-mongoose"},"mongoDB, mongoose"),(0,o.kt)("p",null,"db\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc640 \uc9c1\uc811\uc801\uc73c\ub85c \uc5f0\ub3d9\uc2dc\ud0a4\uc9c0 \uc54a\ub294\ub2e4. \ud504\ub860\ud2b8\uc5d4\ub4dc\uc5d0\uc11c db\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4\ub294 \uac83\uc740 \ubaa8\ub450\uac00 \ubcfc \uc218 \uc788\ub2e4\ub294 \uac83\uc774\uace0, \uadf8\ub7ec\uba74 \ubcf4\uc548\uc131\uc5d0 \ubb38\uc81c\uac00 \uc788\ub2e4\ub294 \uac83\uc774\ub2c8\uae50.\nmongoDB\uc640 \ubc31\uc5d4\ub4dc\ub97c \uc5f0\uacb0\ud55c\ub2e4."),(0,o.kt)("h3",{id:"\uc11c\ub4dc\ud30c\ud2f0-\ub77c\uc774\ube0c\ub7ec\ub9ac"},"\uc11c\ub4dc\ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"express"),(0,o.kt)("li",{parentName:"ul"},"body-Parser"),(0,o.kt)("li",{parentName:"ul"},"nodemon"),(0,o.kt)("li",{parentName:"ul"},"mongodb"),(0,o.kt)("li",{parentName:"ul"},"mongoose\nmongodb\ub9cc\uc744 \uc0ac\uc6a9\ud558\uc5ec mongodb atlas\uc5d0 \uc5f0\uacb0\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc connect\uc774\ud6c4 db\uc5d0 \uc5f0\uacb0\ud558\uace0, close\ud574\uc57c\ub418\ub294 \ub4f1 \uadc0\ucc2e\uc740 \uacfc\uc815\uc774 \ub9ce\uc740\ub370 mongoose\ub97c \ud1b5\ud574 \uc774\ub97c \ub2e8\uc21c\ud654\ud560 \uc218 \uc788\ub2e4.  ",(0,o.kt)("br",null))),(0,o.kt)("p",null,"\uae30\ubcf8 \ubc31\uc5d4\ub4dc \uc791\uc131\ud558\ub294 \uac83\ucc98\ub7fc \uc791\uc131\ud558\uace0, \ubbf8\ub4e4\uc6e8\uc5b4 \ud568\uc218\ub97c \uc9e4 \ub54c db\uc640 \uc5f0\uacb0\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","mongoose\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 model\uc744 \ub9cc\ub4e0\ub2e4. \uac1d\uccb4\ub290\ub08c\uc73c\ub85c, \ud568\uc218\uc5d0\uc11c \uc778\uc2a4\ud134\uc2a4\ud654 \uc2dc\ud0ac \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// product.js <- model\nconst mongoose = require('mongoose');\n\nconst productSchema = new mongoose.schema({\n  ...\n});\n\nmodule.exports = mongoose.model('product',productSchema);\n")),(0,o.kt)("p",null,"db\uc640 \ub370\uc774\ud130\ub97c \uc8fc\uace0\ubc1b\ub294 \uacfc\uc815\uc740 \ube44\ub3d9\uae30\ub85c \uc9c4\ud589\ub418\ub2c8 async/await\uc744 \uc0ac\uc6a9\ud55c\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","mongoose\uc640 \uc5f0\uacb0\uc2dc\ud0a4\uace0, save(),find()\ub97c \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//mongoose.js\nconst mongoose = require('mongoose');\nconst product = require('./models/product');\nconst URL = 'mongodb+srv://<\uc544\uc774\ub514>:<\ube44\ubc00\ubc88\ud638>@cluster0-g8eu9.mongodb.net/<\uceec\ub809\uc158\uc774\ub984>?retryWrites=true&w=majority'\nmongoose.connect(URL);\n\nconst createProduct = async (req,res,next)=> {\n  const createProduct = new product({\n    ...\n  });\n  const result = await createProduct.save();\n  res.json(result);\n}\n\nexports.createProduct = createProduct;\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"mongoose\ub97c import \ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \uacf3\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.listen()"),". then()\uc5d0\uc11c \uc815\uc0c1\uc801\uc73c\ub85c \ubd88\ub7ec\uc624\uba74 \uc2e4\ud589\uc2dc\ud0a8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","database access, networkaccess\ub97c \uc124\uc815\ud574 database\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."))}i.isMDXComponent=!0}}]);