"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[1114],{68339:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(39953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(855),a=(n(39953),n(68339));const l={},o="\uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac Library",i={unversionedId:"\ubc15\uaddc\uc131/Memo/frontend/react/\uc804\uc5ed\uc0c1\ud0dc\uad00\ub9ac",id:"\ubc15\uaddc\uc131/Memo/frontend/react/\uc804\uc5ed\uc0c1\ud0dc\uad00\ub9ac",title:"\uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac Library",description:"Context API\uac00 \uc544\ub2c8\ub77c, \uc11c\ub4dc \ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720",source:"@site/members/\ubc15\uaddc\uc131/Memo/frontend/react/\uc804\uc5ed\uc0c1\ud0dc\uad00\ub9ac.md",sourceDirName:"\ubc15\uaddc\uc131/Memo/frontend/react",slug:"/\ubc15\uaddc\uc131/Memo/frontend/react/\uc804\uc5ed\uc0c1\ud0dc\uad00\ub9ac",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/frontend/react/\uc804\uc5ed\uc0c1\ud0dc\uad00\ub9ac",draft:!1,editUrl:"https://github.com/Self-Driven-Development/TIL/tree/main/members/\ubc15\uaddc\uc131/Memo/frontend/react/\uc804\uc5ed\uc0c1\ud0dc\uad00\ub9ac.md",tags:[],version:"current",frontMatter:{},sidebar:"all",previous:{title:"\uc131\ub2a5 \ucd5c\uc801\ud654",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/frontend/react/\uc131\ub2a5 \ucd5c\uc801\ud654"},next:{title:"\ud569\uc131 \ucef4\ud3ec\ub10c\ud2b8",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/frontend/react/\ud569\uc131 \ucef4\ud3ec\ub10c\ud2b8"}},p={},m=[{value:"Context API\uac00 \uc544\ub2c8\ub77c, \uc11c\ub4dc \ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720",id:"context-api\uac00-\uc544\ub2c8\ub77c-\uc11c\ub4dc-\ud30c\ud2f0-\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720",level:2},{value:"\ud37c\ub110 \ud328\ud134",id:"\ud37c\ub110-\ud328\ud134",level:2},{value:"\ub300\ud45c\uc801\uc778 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud328\ud134",id:"\ub300\ud45c\uc801\uc778-\ud504\ub860\ud2b8\uc5d4\ub4dc-\ud328\ud134",level:3},{value:"\ud37c\ub110 \ud328\ud134\uc5d0\uc11c\uc758 \uc0c1\ud0dc \uad00\ub9ac",id:"\ud37c\ub110-\ud328\ud134\uc5d0\uc11c\uc758-\uc0c1\ud0dc-\uad00\ub9ac",level:3},{value:"useMemo\ub97c \uc0ac\uc6a9\ud558\uc5ec Context API\uc758 \ub9ac\ub80c\ub354\ub9c1 \uc774\uc288 \ud574\uacb0",id:"usememo\ub97c-\uc0ac\uc6a9\ud558\uc5ec-context-api\uc758-\ub9ac\ub80c\ub354\ub9c1-\uc774\uc288-\ud574\uacb0",level:2},{value:"\uc804\uc5ed \uc0c1\ud0dc\ub780?",id:"\uc804\uc5ed-\uc0c1\ud0dc\ub780",level:2}],u={toc:m},c="wrapper";function s(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc804\uc5ed-\uc0c1\ud0dc-\uad00\ub9ac-library"},"\uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac Library"),(0,a.kt)("h2",{id:"context-api\uac00-\uc544\ub2c8\ub77c-\uc11c\ub4dc-\ud30c\ud2f0-\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720"},"Context API\uac00 \uc544\ub2c8\ub77c, \uc11c\ub4dc \ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Context.Provider"),"\ub294 value\ub85c \uc800\uc7a5\ub41c \uac12\uc774 \ubcc0\uacbd\ub418\uba74 ",(0,a.kt)("inlineCode",{parentName:"li"},"useContext(Context)"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub3c4 \uac19\uc774 \ub80c\ub354\ub9c1 \ud568 -> \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1 \ubc1c\uc0dd"),(0,a.kt)("li",{parentName:"ul"},"\ucee8\ud14d\uc2a4\ud2b8\ub97c \ucd94\uac00\ud560 \ub54c\ub9c8\ub2e4 Provider\ub85c \ub9e4\ubc88 \uac10\uc2f8\uc918\uc57c \ud558\uae30\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"li"},"Provider hell"),"\uc57c\uae30\ud560 \uc218 \uc788\uc74c")),(0,a.kt)("h2",{id:"\ud37c\ub110-\ud328\ud134"},"\ud37c\ub110 \ud328\ud134"),(0,a.kt)("h3",{id:"\ub300\ud45c\uc801\uc778-\ud504\ub860\ud2b8\uc5d4\ub4dc-\ud328\ud134"},"\ub300\ud45c\uc801\uc778 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud328\ud134"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc0c1\uc810 (\ubaa9\ub85d \ud398\uc774\uc9c0 > \uc0c1\uc138 \ud398\uc774\uc9c0)"),(0,a.kt)("li",{parentName:"ol"},"\ub2e8\uc77c \ud398\uc774\uc9c0 \uc571"),(0,a.kt)("li",{parentName:"ol"},"\uc124\ubb38 \uc870\uc0ac(\uc5ec\ub7ec \ud398\uc774\uc9c0\ub97c \ud1b5\ud574 \uc0c1\ud0dc \uc218\uc9d1) -> \ud37c\ub110 \ud328\ud134")),(0,a.kt)("h3",{id:"\ud37c\ub110-\ud328\ud134\uc5d0\uc11c\uc758-\uc0c1\ud0dc-\uad00\ub9ac"},"\ud37c\ub110 \ud328\ud134\uc5d0\uc11c\uc758 \uc0c1\ud0dc \uad00\ub9ac"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac : \uac01 \ud398\uc774\uc9c0\ub97c \ub118\uc5b4\uac08 \ub54c, \uc804\uc5ed\uc73c\ub85c \uc0c1\ud0dc\ub97c \uad00\ub9ac",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc544\uc26c\uc6b4 \uc810 1 : \ud398\uc774\uc9c0 \ud750\ub984\uc774 \ud769\uc5b4\uc838 \uc788\ub2e4. "),(0,a.kt)("li",{parentName:"ul"},"\uc544\uc26c\uc6b4 \uc810 2 : \ud55c\uac00\uc9c0 \ubaa9\uc801\uc744 \uc704\ud55c \uc0c1\ud0dc\uac00 \ud769\uc5b4\uc838 \uc788\ub2e4. \uc0c1\ud0dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uacf3\uc740 \ud55c \uacf3\uc778\ub370, \uc218\uc9d1\ud558\ub294 \uacf3\uc740 \uc5ec\ub7ec \ud398\uc774\uc9c0\uc774\ub2e4. "))),(0,a.kt)("li",{parentName:"ol"},"step\uc5d0 \ub530\ub77c \uc870\uac74\ubd80 \ub80c\ub354\ub9c1\n",(0,a.kt)("img",{alt:"Alt text",src:n(6816).Z,width:"882",height:"348"}),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"UI \uc138\ubd80\uc0ac\ud56d\uc740 \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uad00\ub9ac\ud558\ub418, step\uc758 \uc774\ub3d9\uc740 \uc0c1\uc704\uc5d0\uc11c \uad00\ub9ac\ud574 UI\uc758 \ud750\ub984\uc744 \ud55c \uad70\ub370\uc11c \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ub428"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"router"),"\uc758 shallow push API\ub97c \ud65c\uc6a9\ud574 query parameter\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uc5ec \uc2a4\ud15d \uc0ac\uc774\uc5d0 \ub4a4\ub85c\uac00\uae30, \uc55e\uc73c\ub85c\uac00\uae30 \uc9c0\uc6d0"),(0,a.kt)("li",{parentName:"ul"},"slash\uc758 ",(0,a.kt)("inlineCode",{parentName:"li"},"useFunnel"))))),(0,a.kt)("h2",{id:"usememo\ub97c-\uc0ac\uc6a9\ud558\uc5ec-context-api\uc758-\ub9ac\ub80c\ub354\ub9c1-\uc774\uc288-\ud574\uacb0"},"useMemo\ub97c \uc0ac\uc6a9\ud558\uc5ec Context API\uc758 \ub9ac\ub80c\ub354\ub9c1 \uc774\uc288 \ud574\uacb0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Context API\uc758 \ub2e8\uc810 : Context.Provider\uc758 value\uac00 \ubcc0\uacbd\ub418\uba74, \ud574\ub2f9 Context\ub97c \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1 \ub428"),(0,a.kt)("li",{parentName:"ul"},"\ud574\uacb0 \ubc29\ubc95 : ",(0,a.kt)("inlineCode",{parentName:"li"},"useMemo hook"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1 \ubc29\uc9c0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { createContext } from 'react';\n\n// initial state\nconst initialState = {\n  ...\n};\n\n// create context\nexport const GlobalContext = createContext(initialState);\n\n...\n\n// useMemo \uc0ac\uc6a9\nconst value = React.useMemo(() => ({ \n  watchlist: { ... }, // object \ub370\uc774\ud130\n  addMovieToWatchlist, // \ud568\uc218\n}), [watchlist, addMovieToWatchlist]);\n\n// provider components\nexport const GlobalProvider = (props) => {\n  return (\n    <GlobalContext.Provider value={ value }>\n      {props.children}\n    </GlobalContext.Provider>\n  )\n}\n")),(0,a.kt)("h2",{id:"\uc804\uc5ed-\uc0c1\ud0dc\ub780"},"\uc804\uc5ed \uc0c1\ud0dc\ub780?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc804\uc5ed : \ubb38\uc11c\uc758 \uc5b4\ub5a4 \uacf3\uc5d0\uc11c\ub3c4 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uc601\uc5ed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc804\uc5ed\uc73c\ub85c \uc874\uc7ac\ud55c\ub2e4  : \ucef4\ud3ec\ub10c\ud2b8 \ubfd0 \uc544\ub2c8\ub77c \ucef4\ud3ec\ub10c\ud2b8 \uc678\ubd80, \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc \uc5b4\ub514\uc5d0\uc11c\ub4e0\uc9c0 \uc811\uadfc \uac00\ub2a5\ud568"))),(0,a.kt)("li",{parentName:"ul"},"\uc804\uc5ed \uc0c1\ud0dc : \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\uc131\ud558\uace0 \uc788\ub294 \ucf54\ub4dc \uc5b4\ub514\uc138\uc774\uc11c\ub4e0\uc9c0 \uc811\uadfc\uc774 \uac00\ub2a5\ud558\uba70, \ubcc0\ud654\uc5d0 \ub530\ub77c \ub80c\ub354\ub9c1\uc5d0 \uc601\ud5a5\uc744 \uc918\uc57c\ud558\ub294 \uac12"),(0,a.kt)("li",{parentName:"ul"},"\ud504\ub860\ud2b8\uc5d4\ub4dc \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0c1\ud0dc",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\uc678\ubd80\uc5d0\uc11c \uc8fc\uc785\ub418\ub294 \ub3d9\uc801\uc778 \ub370\uc774\ud130 (e.g. Server Response)"),(0,a.kt)("li",{parentName:"ol"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 UI \uc0c1\ud0dc(e.g. isOpen)")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc704 \ub450 \uac00\uc9c0\ub294 \uc804\uc5ed \uc0c1\ud0dc\uc640 \uc5b4\uc6b8\ub9ac\uc9c0 \uc54a\ub294\ub2e4. "))),(0,a.kt)("li",{parentName:"ul"},"\uc804\uc5ed \uc0c1\ud0dc\ub85c \uad00\ub9ac\ud574\uc57c \ud558\ub294 \uac83\ub4e4",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\ud14c\ub9c8",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\ub85c\uadf8\uc778 \uc815\ubcf4\ud14c\ub9c8\uc5d0 \ub530\ub77c \ub2e4\ub978 \uc0c9\uc0c1\uc73c\ub85c \ubcf4\uc5ec\uc918\uc57c \ud55c\ub2e4\uba74 \uadf8 ",(0,a.kt)("inlineCode",{parentName:"li"},"\ud14c\ub9c8"),"\ub77c\ub294 \uac12\uc740 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc601\ud5a5\uc744 \uc918\uc57c\ud558\uace0 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \ud14c\ub9c8\uac00 \ub2ec\ub77c\uc9c8 \uacbd\uc6b0 \ub2e4\uc2dc \ub80c\ub354\ub9c1 \ub418\uc5b4\uc57c \ud560 \uac83\uc774\ub2e4."))),(0,a.kt)("li",{parentName:"ol"},"\ub2e4\uad6d\uc5b4 \ucc98\ub9ac")))),(0,a.kt)("h1",{id:"reference"},"Reference"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://velog.io/@yrnana/Context-API%EA%B0%80-%EC%A1%B4%EC%9E%AC%ED%95%98%EC%A7%80%EB%A7%8C-%EC%97%AC%EC%A0%84%ED%9E%88-%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%B4-redux%EC%99%80-%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EB%A5%BC-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0"},"https://velog.io/@yrnana")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NwLWX2RNVcw&t=113s"},"Toss Slash")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://jbee.io/react/thinking-about-global-state/"},"https://jbee.io/react/thinking-about-global-state/"))))}s.isMDXComponent=!0},6816:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-9b96b28fb296aaf74bade8f55db6f73f.png"}}]);