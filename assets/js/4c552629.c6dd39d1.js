"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[20300],{68339:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>s});var n=l(39953);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(l),d=a,s=k["".concat(c,".").concat(d)]||k[d]||m[d]||r;return l?n.createElement(s,i(i({ref:t},p),{},{components:l})):n.createElement(s,i({ref:t},p))}));function s(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[k]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=l[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},68002:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=l(855),a=(l(39953),l(68339));const r={},i="\uc6b4\uc601\uccb4\uc81c File System",o={unversionedId:"\uc774\ud559\ub9bc/23.05/05.26 \uc77c\uc9c0",id:"\uc774\ud559\ub9bc/23.05/05.26 \uc77c\uc9c0",title:"\uc6b4\uc601\uccb4\uc81c File System",description:"\uc6a9\uc5b4\uc815\ub9ac",source:"@site/members/\uc774\ud559\ub9bc/23.05/05.26 \uc77c\uc9c0.md",sourceDirName:"\uc774\ud559\ub9bc/23.05",slug:"/\uc774\ud559\ub9bc/23.05/05.26 \uc77c\uc9c0",permalink:"/TIL/members/\uc774\ud559\ub9bc/23.05/05.26 \uc77c\uc9c0",draft:!1,editUrl:"https://github.com/Self-Driven-Development/TIL/tree/main/members/\uc774\ud559\ub9bc/23.05/05.26 \uc77c\uc9c0.md",tags:[],version:"current",frontMatter:{},sidebar:"all",previous:{title:"05.25 \uc77c\uc9c0",permalink:"/TIL/members/\uc774\ud559\ub9bc/23.05/05.25 \uc77c\uc9c0"},next:{title:"\uc6b4\uc601\uccb4\uc81c File System",permalink:"/TIL/members/\uc774\ud559\ub9bc/23.05/05.28 \uc77c\uc9c0"}},c={},u=[{value:"\uc6a9\uc5b4\uc815\ub9ac",id:"\uc6a9\uc5b4\uc815\ub9ac",level:3},{value:"File System \ucd94\uc0c1\ud654",id:"file-system-\ucd94\uc0c1\ud654",level:2},{value:"File allocation \uba54\uc18c\ub4dc",id:"file-allocation-\uba54\uc18c\ub4dc",level:2},{value:"Contiguous allocation",id:"contiguous-allocation",level:3},{value:"Chained allocation",id:"chained-allocation",level:3},{value:"FAT(File Allocation Table)",id:"fatfile-allocation-table",level:3},{value:"Indexed allocation",id:"indexed-allocation",level:3},{value:"i-node(UNIX)",id:"i-nodeunix",level:3}],p={toc:u},k="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(k,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc6b4\uc601\uccb4\uc81c-file-system"},"\uc6b4\uc601\uccb4\uc81c File System"),(0,a.kt)("h3",{id:"\uc6a9\uc5b4\uc815\ub9ac"},"\uc6a9\uc5b4\uc815\ub9ac"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sector"),": FileSystem\uc5d0\uc11c R/W \uae30\ubcf8\ub2e8\uc704"),(0,a.kt)("p",null,"in HDD, \ub514\uc2a4\ud06c \uc6d0\ud310\uc740 \ud2b8\ub799\ub4e4\ub85c \uad6c\uc131"),(0,a.kt)("p",null,"\ud2b8\ub799\uc740 \uc139\ud130\ub4e4\ub85c \uad6c\uc131"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"block"),": \u2211\uc139\ud130, \uc800\uc7a5\uacf5\uac04 allocation\uc758 \uae30\ubcf8\ub2e8\uc704"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"partition"),": \ub514\uc2a4\ud06c\ub97c \ub17c\ub9ac\uc801\uc73c\ub85c \uad6c\ubd84\ud55c \uac83. parition\ub9c8\ub2e4 \ub2e4\ub978 FS\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h2",{id:"file-system-\ucd94\uc0c1\ud654"},"File System \ucd94\uc0c1\ud654"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub514\uc2a4\ud06c\ub97c block sequence\ub85c \uc0dd\uac01"),(0,a.kt)("li",{parentName:"ul"},"R/W(\uc811\uadfc)\uc740 sector \ub2e8\uc704\ub85c")),(0,a.kt)("h2",{id:"file-allocation-\uba54\uc18c\ub4dc"},"File allocation \uba54\uc18c\ub4dc"),(0,a.kt)("p",null,"== ","[ File \u2192 blocks ]","\uc758 allocation"),(0,a.kt)("p",null,": \uc0c8 \ud30c\uc77c\uc774 \uc0dd\uc131 \u2192 allocation \uc0c1\ud669"),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"contiguous-allocation"},"Contiguous allocation"),(0,a.kt)("p",null,": \uc21c\ucc28\uc801 \ud560\ub2f9"),(0,a.kt)("p",null,"\uc7a5\uc810 - R/W\uc2dc \ub514\uc2a4\ud06c\uc5d0\uc11c \uc21c\ucc28\uc801\uc73c\ub85c \uc811\uadfc \u21d2 \ube60\ub984"),(0,a.kt)("p",null,"\ub2e8\uc810"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"file \uae38\uc774\ub294 \uac00\ubcc0\uc801\uc774\ub2e4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"file \uae38\uc774\uac00 \ub298\uc5b4\ub0a0 \ub54c, \uc5ec\uc733\uacf5\uac04\uc774 \uc5c6\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"file \uae38\uc774\uac00 \uc904\uc5b4\ub4e4 \ub54c, \ud560\ub2f9\ud55c block\uc744 \uc548\uc4f0\uac8c \ub418\uba74 \uacf5\uac04\ub0ad\ube44"))),(0,a.kt)("li",{parentName:"ul"},"External Fragmentation(\uacf5\uac04\ub0ad\ube44)")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"chained-allocation"},"Chained allocation"),(0,a.kt)("p",null,": linked list \ubc29\ubc95 \uc0ac\uc6a9(block\uc774 \ub2e4\uc74c block \ud3ec\uc778\ud130 \uc18c\uc720)"),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uc7a5\uc810: \uacf5\uac04\ud6a8\uc728(External Fragmentation X, \uac00\ubcc0\uc801\uc778 \uc0c1\ud669 \ub300\ucc98\uac00\ub2a5)"),(0,a.kt)("p",null,"\ub2e8\uc810"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"R/W\uc2dc \uc21c\ucc28\uc801 \ud560\ub2f9\uc774 \uc544\ub2c8\ub2e4\ubcf4\ub2c8 \uc0c1\ub300\uc801\uc73c\ub85c \ub290\ub9bc",(0,a.kt)("br",{parentName:"p"}),"\n","\u21d2 \ub514\uc2a4\ud06c\uac00 \ubb3c\ub9ac\uc801 \uc811\uadfc\uc744 \ud558\ub2e4\ubcf4\ub2c8 \uc21c\ucc28\uc801 \ud560\ub2f9\uc774 \uc544\ub2c8\uba74 \ud2b8\ub799\uc744 \uc62e\uae30\uac70\ub098 \ud574\uc57c\ud560 \uc218 \uc788\uc74c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Random access\uc2dc \uc911\uac04\uc5d0 \uc704\uce58\ud55c block\uc5d0\ub9cc \uc811\uadfc\ud558\uace0 \uc2f6\uc5b4\ub3c4 head\ubd80\ud130 FAT chain\uc744 \ub530\ub77c\uac00\uc11c \uc811\uadfc\ud574\uc57c \ud568 \u2192 \ud30c\uc77c \ud06c\uae30\uac00 \ud074 \ub54c, \ubd88\ud544\uc694\ud55c \uc624\ubc84\ud5e4\ub4dc\uac00 \ucee4\uc9d0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Meta Data(block \ud3ec\uc778\ud130)\uc640 File Data\uac00 \ud55c \uacf3\uc5d0 \uc800\uc7a5 \u21d2 \ubd88\uc548\uc815",(0,a.kt)("br",{parentName:"p"}),"\n","\u21d2 \ud55c block error \ubc1c\uc0dd\uc2dc \uc774\ud6c4 \ub2e4\ub978 block\ub3c4 \uc811\uadfc\ud558\uc9c0 \ubabb\ud568"))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"fatfile-allocation-table"},"FAT(File Allocation Table)"),(0,a.kt)("p",null,": (#block,#next) \uc815\ubcf4\ub97c \uc800\uc7a5\ud55c \ud14c\uc774\ube14 in \uba54\ubaa8\ub9ac \u21d2 File Data\uc640 Meta Data \ubd84\ub9ac"),(0,a.kt)("p",null,": FAT \u2208 linked list allocation"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FAT \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0\uc11c File \uc704\uce58 \ucc3e\ub294\ubc95")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Directory Entry"),(0,a.kt)("li",{parentName:"ol"},"(File Name: First Address) \uc815\ubcf4 \u2192 block \uc811\uadfc"),(0,a.kt)("li",{parentName:"ol"},"FAT block \uc774\ub3d9"),(0,a.kt)("li",{parentName:"ol"},"(#block,#next) \uc815\ubcf4 \u2192 next block \uc811\uadfc")),(0,a.kt)("p",null,"\u2026"),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uc7a5\uc810 - Meta Data\uc640 File Data \ubd84\ub9ac\ub85c \uc548\uc815\uc131 \ud655\ubcf4"),(0,a.kt)("p",null,"\ub2e8\uc810 - \uba54\ubaa8\ub9ac\uc5d0 \uc801\uc7ac\ud558\ub2e4 \ubcf4\ub2c8 \ub514\uc2a4\ud06c\uc758 \uc6a9\ub7c9\uc774 \uc544\uc8fc \ud06c\uba74 \uba54\ubaa8\ub9ac \ubd80\ud558\u2191"),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"indexed-allocation"},"Indexed allocation"),(0,a.kt)("p",null,": \uc778\ub371\uc2a4 block\uc744 \uc0ac\uc6a9 \u21d2 \uba54\ubaa8\ub9ac \uc801\uc7ac\uac00 \uc544\ub2cc \ub514\uc2a4\ud06c \uc801\uc7ac\uc774\ubbc0\ub85c \uba54\ubaa8\ub9ac \uc81c\uc57d\u2193"),(0,a.kt)("br",null),(0,a.kt)("p",null,"\uc7a5\uc810 - \uba54\ubaa8\ub9ac \uc81c\uc57d\u2193, Random access \uc6a9\uc774"),(0,a.kt)("p",null,"\ub2e8\uc810 - \ud30c\uc77c\uc774 \ucee4\uc11c \uc778\ub371\uc2a4 block \uc548\uc5d0 \ubaa8\ub4e0 index\ub97c \ubabb \ub2f4\uc744 \ub54c..",(0,a.kt)("br",{parentName:"p"}),"\n","\u21d2 indirect block\uc774\uc6a9 == \uc8fc\uc18c\ub9cc\uc744 \uc800\uc7a5\ud55c block \uc8fc\uc18c\ub97c \uc6b0\ud68c\ud574\uc11c \uc811\uadfc\ud558\uba74 \ub41c\ub2e4"),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"i-nodeunix"},"i-node(UNIX)"),(0,a.kt)("p",null,": Meta Data"),(0,a.kt)("p",null,": inode \u2248 Indexed allocation"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"inode \uad6c\uc131")),(0,a.kt)("p",null,"[ File Attributes, block0 \uc8fc\uc18c, block1 \uc8fc\uc18c, \u2026 , \ud3ec\uc778\ud130\ub4e4\uc744 \ub2f4\uc740 block \uc8fc\uc18c ]"),(0,a.kt)("p",null,"\ud3ec\uc778\ud130\ub4e4\uc744 \ub2f4\uc740 block = indirect indexing"),(0,a.kt)("p",null,"[ block10 \uc8fc\uc18c, block11 \uc8fc\uc18c, \u2026 ]"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UNIX \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0\uc11c File \uc704\uce58 \ucc3e\ub294\ubc95")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Directory Entry"),(0,a.kt)("li",{parentName:"ol"},"(FileName : inode)\uc815\ubcf4 \u2192 inode Table(in HDD/SSD) \uc811\uadfc"),(0,a.kt)("li",{parentName:"ol"},"(inode \u2192 Data Blocks index)\uc815\ubcf4 \u2192 block \uc811\uadfc")),(0,a.kt)("p",null,"*"," filename\uc740 \uc624\uc9c1 \ub514\ub809\ud1a0\ub9ac \uc5d4\ud2b8\ub9ac \uc548\uc5d0\uc11c\ub9cc \uc4f0\uc778\ub2e4\ub294 \uc810.."),(0,a.kt)("p",null,"\uc7a5\uc810 - \ud070 \ud30c\uc77c\ub3c4 \ucee4\ubc84 \uac00\ub2a5\ud558\ub2e4(by indirect block indexing \u2192 Extend Tree\ud654)"))}m.isMDXComponent=!0}}]);