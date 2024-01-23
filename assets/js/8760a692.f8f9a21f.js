"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[13994],{68339:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var a=n(39953);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=m(n),s=r,b=u["".concat(p,".").concat(s)]||u[s]||d[s]||i;return n?a.createElement(b,l(l({ref:e},c),{},{components:n})):a.createElement(b,l({ref:e},c))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},84255:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(855),r=(n(39953),n(68339));const i={title:"\ub514\uc9c0\ud138\ud68c\ub85c\uac1c\ub860"},l="\ub514\ud68c\uac1c",o={unversionedId:"\uc1a1\uc740\uc218/23/23.10/DigitalLogic",id:"\uc1a1\uc740\uc218/23/23.10/DigitalLogic",title:"\ub514\uc9c0\ud138\ud68c\ub85c\uac1c\ub860",description:"digital system",source:"@site/members/\uc1a1\uc740\uc218/23/23.10/DigitalLogic.md",sourceDirName:"\uc1a1\uc740\uc218/23/23.10",slug:"/\uc1a1\uc740\uc218/23/23.10/DigitalLogic",permalink:"/TIL/members/\uc1a1\uc740\uc218/23/23.10/DigitalLogic",draft:!1,editUrl:"https://github.com/Self-Driven-Development/TIL/tree/main/members/\uc1a1\uc740\uc218/23/23.10/DigitalLogic.md",tags:[],version:"current",frontMatter:{title:"\ub514\uc9c0\ud138\ud68c\ub85c\uac1c\ub860"},sidebar:"all",previous:{title:"Study",permalink:"/TIL/members/\uc1a1\uc740\uc218/23/23.08/23"},next:{title:"FrontEnd",permalink:"/TIL/members/\uc1a1\uc740\uc218/23/23.10/FrontEnd"}},p={},m=[{value:"digital system",id:"digital-system",level:2},{value:"BCD",id:"bcd",level:3},{value:"Hamming Code",id:"hamming-code",level:3},{value:"combinational system",id:"combinational-system",level:2},{value:"Karnaugh Map",id:"karnaugh-map",level:3},{value:"designing combinational system",id:"designing-combinational-system",level:2}],c={toc:m},u="wrapper";function d(t){let{components:e,...i}=t;return(0,r.kt)(u,(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ub514\ud68c\uac1c"},"\ub514\ud68c\uac1c"),(0,r.kt)("h2",{id:"digital-system"},"digital system"),(0,r.kt)("h3",{id:"bcd"},"BCD"),(0,r.kt)("p",null,"BCD\ucf54\ub4dc\ub294 4bit\ub85c \uc774\ub8e8\uc5b4\uc9c4\ub2e4. \uc77c\ubc18\uc801\uc778 8421BCD\uc0ac\uc6a9 \uc2dc, 9\ub97c \ucd08\uacfc\ud558\uba74 6(0110)\uc6b8 \ub354\ud574\uc918 \ub2e4\uc74c \uc790\ub9ac\ub85c \ub118\uae34\ub2e4\nInverter\uc758 cost = 2"),(0,r.kt)("p",null,"conversion(13 to 1101) != coding(13 to 0001|0011)"),(0,r.kt)("h3",{id:"hamming-code"},"Hamming Code"),(0,r.kt)("p",null,"7\ube44\ud2b8 \uae30\uc900, 4\uac1c\uc758 data bit, 3\uac1c\uc758 check bit\ub85c \uc774\ub8e8\uc5b4\uc838 1bit\uc758 \uc624\ub958\uac00 \ubc1c\uc0dd\uc2dc \uac80\ucd9c\ud560 \uc218 \uc788\ub2e4(2 bit\uc774\uc0c1 \ubd88\uac00\ub2a5)"),(0,r.kt)("p",null,"n\uac1c\uc758 check bit\uc5d0 \ub530\ub77c 2^n - n - 1 \ub9cc\ud07c\uc758 data bit\ub97c \uac00\uc9c8 \uc218 \uc788\ub2e4"),(0,r.kt)("p",null,"check bit\uc758 \uc704\uce58\ub294 2\uc758 \uc81c\uacf1\uc2b9(1,2,4)\uccb4\ud06c \ube44\ud2b8\ub294 357, 367, 567\uc774\ub2e4   "),(0,r.kt)("p",null,"\uac80\ucd9c \uc2dc \uc790\uae30 \uc790\uc2e0\uae4c\uc9c0 \ud3ec\ud568\ud574\uc11c e_n \uce21\uc815, 4e_4 + 2e_2 + e_1 \uc790\ub9ac\uc5d0\uc11c \uc624\ub958\uac00 \ub0ac\uc74c\uc744 \ud655\uc778\ud55c\ub2e4"),(0,r.kt)("h2",{id:"combinational-system"},"combinational system"),(0,r.kt)("p",null,"Driver = Inverter + Inverter"),(0,r.kt)("p",null,"NOR, NAND, NXOR\uc5d0 Inverter\ub97c \ubd80\ud168 OR, AND, XOR\uac00 \ub9cc\ub4e4\uc5b4\uc9c4\ub2e4. \uc2dc\uac04cost \uc5ed\uc2dc \uac01\uac01 +2\uac00 \ub41c\ub2e4."),(0,r.kt)("p",null,"Inverter = 2, NAND, NOR = 4, XNOR = 12"),(0,r.kt)("p",null,"0+a = a, 1","*","a = a Identity"),(0,r.kt)("p",null,"1+a = 1, 0","*","a = 0 Null"),(0,r.kt)("p",null,"a+a = a, a","*","a = a Idempotency"),(0,r.kt)("p",null,"a+bc = (a+b)(a+c) distributive"),(0,r.kt)("p",null,"a+ab = a absorption"),(0,r.kt)("p",null,"\ub4dc\ubaa8\ub974\uac04 \uc815\uc758 \ud558\ub294 \ubc29\ubc95\uc740 a + a' = 1, a*a' = 0 \uc784\uc744 \uc99d\uba85"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"a+a'b = a+b simplication"),(0,r.kt)("p",{parentName:"admonition"},"(a+b)(a+b')=a adjacency"),(0,r.kt)("p",{parentName:"admonition"},"ab+a'c = (a+c)(a'+b)")),(0,r.kt)("p",null,"\ucc3e\uc740 \uba87\uac1c\uc758 \ud328\ud134\ub4e4   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud558\ub098\ub9cc \ub2e4\ub974\uba74 complement \uc18c\uac70"),(0,r.kt)("li",{parentName:"ul"},"\ub450\uac1c \ub2e4\ub974\uba74 \ud2b9\ubcc4\ud788 \ud560 \uac70 \uc5c6\uc74c"),(0,r.kt)("li",{parentName:"ul"},"3\uac1c, 2\uac1c \uc788\uc744\ub54c \ud558\ub098\uac00 \uac19\ub2e4\uba74 \uc18c\uac70\uac00\ub2a5(\ub2e4\ub978 \ub188 \uc18c\uac70)"),(0,r.kt)("li",{parentName:"ul"},"4\uac1c \uc9dc\ub9ac \uac10\ub294 \ubc95: \ub458\ub85c \ubb36\ub4e0 \ud558\ub098\ub85c \ubb36\ub4e0, \uadf8 \uc774\ud6c4 ab+a'c = (a+c)(a'+b)\ub97c \uc0ac\uc6a9\ud574 \ud55c\ubc88 \ub354 \ubd84\ub9ac \ud574\uc57c\ud568",(0,r.kt)("br",{parentName:"li"}),"ab(c+d)\uaf34\uc774\ub098 c(a+b)(d+e)\uaf34\uc740 \uc548\ub428(3-input AND\ub294 \ud574\uacb0\ud560 \uc218 \uc5c6\uc74c). \uc911\uc694\ud3ec\uc778\ud2b8: 2\uac1c \ud56d\ub9cc\uc73c\ub85c\ub294 \ud574\uacb0 \ubd88\uac00\ub2a5\n3\ud56d \ubb36\uae30\uc2a4\ud0ac\ub3c4 \uc874\uc7ac")),(0,r.kt)("h3",{id:"karnaugh-map"},"Karnaugh Map"),(0,r.kt)("p",null,"letter\ub294 \uc0c1\uc218\ud639\uc740 \ubcc0\uc218, literal\uc740 \ubcf4\uc218\uae4c\uc9c0 \ud3ec\ud568"),(0,r.kt)("p",null,"Product term\uacfc Sum term\uc740 literal\ub85c \uad6c\uc131\ub418\ub098 letter\uac00 \uc911\ubcf5\ub420 \uc21c \uc5c6\ub2e4"),(0,r.kt)("p",null,"Minterm, Maxterm\uc740 \ubaa8\ub4e0 letter\uac00 \uc0ac\uc6a9\ub418\uc5b4\uc57c\ud55c\ub2e4"),(0,r.kt)("p",null,"\ubaa8\ub4e0 \ud45c\ud604\uc2dd\uc740 Minterm\uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\ub2e4.(by complement)"),(0,r.kt)("p",null,"Minterm\ub4e4\uc744 \ud1b5\ud574 \uce74\ub974\ub178\ub9f5\uc744 \uadf8\ub9b0\ub2e4"),(0,r.kt)("p",null,"\uce74\ub974\ub178\ub9f5\uc5d0\uc11c 1\ub4e4\uc744 \ubaa8\uc544 minimum SOP\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4"),(0,r.kt)("p",null,"minimum SOP \ub294 AND-OR \ud615\uc2dd\uc774\ub2e4. Bubble pushing\uc744 \ud1b5\ud574 NAND-NAND \uac8c\uc774\ud2b8\ub85c \ubcc0\ud658\uac00\ub2a5\ud558\ub2e4"),(0,r.kt)("p",null,"\uce74\ub974\ub178\ub9f5\uc5d0\uc11c 0\ub4e4\uc744 \ubaa8\uc544 SOP \ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4"),(0,r.kt)("p",null,"\uc774\ub54c \uad6c\ud55c SOP\ub294 F'\uc73c\ub85c, \ub4dc\ubaa8\ub974\uac04\uc744 \ucde8\ud574\uc8fc\uba74 F\ub97c \uad6c\ud560 \uc218 \uc788\uace0 \uc774\ub294 minimum POS\uc774\ub2e4"),(0,r.kt)("p",null,"\uc774\ub4e4\uc744 Maxterm\uc774\uace0, OR-AND gate\uc774\ub2e4. Bubble pushing\uc744 \ud1b5\ud574 NOR-NOR\uac8c\uc774\ud2b8\ub85c \ubcc0\ud658\ud55c\ub2e4"),(0,r.kt)("p",null,"Implicant : 2^k\uc758 \ubb36\uc74c"),(0,r.kt)("p",null,"Prime-Implicant : Implicant\uc911 \uac00\uc7a5 \ud070 \ubb36\uc74c"),(0,r.kt)("p",null,"Essential-PI : PI\ub85c \ubb36\uc5c8\uc744\ub54c \uad6c\uc131\ud558\ub294 \uc694\uc18c \uc911 \uc801\uc5b4\ub3c4 \ud558\ub098\ub294 \ub2e4\ub978 PI\uc5d0 \uc18d\ud558\uc9c0 \uc54a\ub294 \uc694\uc18c\ub97c \uac00\uc9c0\uace0 \uc788\ub294 PI"),(0,r.kt)("p",null,"\uce74\ub974\ub178\ub9f5\uc740 EPI+\uc77c\ubd80PI\uc758 \ubaa8\uc74c\uc774\ub2e4"),(0,r.kt)("p",null,"don't care : 0\uc73c\ub85c \ubd10\ub3c4\ub418\uace0 1\ub85c \ubd10\ub3c4\ub418\ub294 \ud56d. \uc788\uc744\ub54c \uce74\ub974\ub178\ub9f5\uc758 solution\uc774 \ub2e4\uc591\ud574\uc9c4\ub2e4"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\uaf2d\uc9c0\uc810, X\uac00 \ud3ec\ud568\ub418\uc5c8\uc744\ub54c \uc704\uc544\ub798 \uc2dc\uc57c \ub113\uac8c \uac00\uc9c0\uae30\n",(0,r.kt)("img",{alt:"Alt text ",src:n(95738).Z,width:"3024",height:"3024"}),"\ndon't care\uc640 \uac19\uc774 \ubb36\uc744 \ub54c solution\ub4e4\uc758 literal\uc758 \ucd1d\ud569\uc740 \uac19\ub2e4"),(0,r.kt)("p",{parentName:"admonition"},"input\uc73c\ub85c \ubcf4\uc218\uac00 \ud5c8\uc6a9\ub41c\ub2e4\uba74, a+b\ub294 (a'b')'\uc778 NAND\uac8c\uc774\ud2b8\uac00 \ub41c\ub2e4"),(0,r.kt)("p",{parentName:"admonition"},"4\ubcc0\uc218\ud568\uc218\ub294 \ud050\ube0c\ubaa8\uc591\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c8 \uc218 \uc788\ub2e4. 2D space\uc758 \ud655\uc7a5\ubc29\ubc95\uc740 \ub450 2D\uacf5\uac04\uc758 \uaf2d\uc9c0\uc810\uc744 \uc787\ub294\uac83, 3D to 4D \uc5ed\uc2dc \ub9c8\ucc2c\uac00\uc9c0\ub2e4")),(0,r.kt)("h2",{id:"designing-combinational-system"},"designing combinational system"),(0,r.kt)("p",null,"full adder"),(0,r.kt)("p",null,"S = A^B",(0,r.kt)("br",{parentName:"p"}),"\n","C_out = C_in(A^B)+A&B"),(0,r.kt)("p",null,"ripple carry adder\uc758 \ub51c\ub808\uc774\ub294 2n+4\uc774\ub2e4 => \uc2dc\uac04\ubcf5\uc7a1\ub3c4 O(n)= linear\ud558\ub2e4"),(0,r.kt)("p",null,"carry look ahead adder(CLA) carry\ub97c \ubbf8\ub9ac \uc608\uce21\ud55c\ub2e4"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\uc5f0\uc0b0\uc2dc C, X, Y, P, G\ub294 \uac19\uc740\ub808\ubca8\uc5d0\uc11c \uc2dc\uc791\uc774\ub2e4",(0,r.kt)("br",{parentName:"p"}),"\n","carry generater(G) = A&B",(0,r.kt)("br",{parentName:"p"}),"\n","carry propogate(P) = A^B",(0,r.kt)("br",{parentName:"p"}),"\n","C_i+1 = C_i&P_i+G_i"),(0,r.kt)("p",{parentName:"admonition"},"4bit\uc529 \ubb36\uc5ec\uc788\uc744\ub54c, P,G\ub97c \uacc4\uc0b0\ud558\ub294\ub370 1delay(\uc774\ud558 gate delay\ub97c \uc758\ubbf8),",(0,r.kt)("br",{parentName:"p"}),"\n","C(i,i+3)\uacc4\uc0b0\ud558\ub294\ub370 2delay,",(0,r.kt)("br",{parentName:"p"}),"\n","S \uacc4\uc0b0\ud558\ub294\ub370 1delay\uac78\ub9b0\ub2e4"),(0,r.kt)("p",{parentName:"admonition"},"S_9\ub97c \uad6c\ud55c\ub2e4\uba74, 1+2+2+2(C9\ub97c \uad6c\ud574\uc57c\ud568)+1 = 8"),(0,r.kt)("p",{parentName:"admonition"},"2-level CLA"),(0,r.kt)("p",{parentName:"admonition"},"1-level\uc774 C0=>C4=>C8=>C12... \uc21c\ucc28\uc801\uc73c\ub85c \uad6c\ud558\ub294\uac70\ub77c\uba74",(0,r.kt)("br",{parentName:"p"}),"\n","2-level\uc740 C0\uc744 \ud1b5\ud574 C4,C8,C12,...\uc744 \uc6d0\ucf64\uc5d0 \uad6c\ud55c\ub2e4"),(0,r.kt)("p",{parentName:"admonition"},"\ub300\uc2e0 G(i,i+3)\ub97c \uacc4\uc0b0\ud574\uc57c C_i\ub97c \uad6c\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c 2delay\uac00 \ucd94\uac00\ud544\uc694\ud558\ub2e4"),(0,r.kt)("p",{parentName:"admonition"},"S_9\ub4e0, S_6\uc774\ub4e0 1+2+2+2(C_i\ub97c \ud1b5\ud574 C(i+1,i+3)\uc744 \uad6c\ud568)+1\uc774 \uac78\ub9b0\ub2e4")),(0,r.kt)("p",null,"subtracter",(0,r.kt)("br",{parentName:"p"}),"\n","\ub530\ub85c subtracter\ub97c \uad6c\ud604 \ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc, \ubcf4\uc218\ubc95\uc744 \uc774\uc6a9\ud558\uc5ec \ud574\uacb0\ud55c\ub2e4",(0,r.kt)("br",{parentName:"p"}),"\n","1\uacfc xor\uc5f0\uc0b0\uc744 \ud558\uba74 1\uc758 \ubcf4\uc218\uac00 \ucc98\ub9ac\ub41c\ub2e4\ub294 \uac83\uacfc \uac70\uae30\uc5d0 1\uc774 \ub354\ud574\uc9c0\uba74 2\uc758 \ubcf4\uc218\uac00 \ub41c\ub2e4\ub294 \uac83\uc744 \uc0dd\uac01\ud558\uc5ec",(0,r.kt)("br",{parentName:"p"}),"\n","C_0\ub97c 1\ub85c \uc124\uc815\ud558\uace0,  X_0\uacfc Y_0\uc744 \uc5f0\uc0b0\ud560 \ub54c \ub123\uc5b4\uc8fc\uace0 C_0\uc744 \ub9c8\uc2a4\ud06c\ub85c xor \uc5f0\uc0b0\uc744 \uc2dc\ud0a4\uba74 adder/subtracter\ub97c \ub3d9\uc2dc\uc5d0 \ud574\uacb0\ud558\ub294 \uac8c\uc774\ud2b8\uac00 \uc644\uc131\ub41c\ub2e4"))}d.isMDXComponent=!0},95738:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/IMG_2760-f7db7b6a563b41ffeb2e167f834dcc2b.jpeg"}}]);