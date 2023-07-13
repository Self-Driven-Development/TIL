"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[8195],{68339:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>d});var l=t(39953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),m=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},o=function(e){var n=m(e.components);return l.createElement(i.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=m(t),c=r,d=s["".concat(i,".").concat(c)]||s[c]||k[c]||a;return t?l.createElement(d,p(p({ref:n},o),{},{components:t})):l.createElement(d,p({ref:n},o))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=c;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[s]="string"==typeof e?e:r,p[1]=u;for(var m=2;m<a;m++)p[m]=t[m];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var l=t(855),r=(t(39953),t(68339));const a={},p="\uc624\ub298 \ud55c \uc77c",u={unversionedId:"\uc774\ud559\ub9bc/23.06/06.28-\uc218",id:"\uc774\ud559\ub9bc/23.06/06.28-\uc218",title:"\uc624\ub298 \ud55c \uc77c",description:"- Rust \uc18c\uc720\uad8c, impl, String \uacf5\ubd80",source:"@site/members/\uc774\ud559\ub9bc/23.06/06.28-\uc218.md",sourceDirName:"\uc774\ud559\ub9bc/23.06",slug:"/\uc774\ud559\ub9bc/23.06/06.28-\uc218",permalink:"/TIL/members/\uc774\ud559\ub9bc/23.06/06.28-\uc218",draft:!1,editUrl:"https://github.com/Self-Driven-Development/TIL/tree/main/\uc774\ud559\ub9bc/23.06/06.28-\uc218.md",tags:[],version:"current",frontMatter:{},sidebar:"all",previous:{title:"\uc624\ub298 \ud55c \uc77c",permalink:"/TIL/members/\uc774\ud559\ub9bc/23.06/06.27 \uc77c\uc9c0"},next:{title:"\uc624\ub298 \ud55c \uc77c",permalink:"/TIL/members/\uc774\ud559\ub9bc/23.06/06.29-\ubaa9"}},i={},m=[{value:"Rust",id:"rust",level:2},{value:"Memory",id:"memory",level:3},{value:"Ownership",id:"ownership",level:2},{value:"\uc18c\uc720\uad8c \uc0dd\uc131",id:"\uc18c\uc720\uad8c-\uc0dd\uc131",level:3},{value:"\uc18c\uc720\uad8c \uc774\uc804",id:"\uc18c\uc720\uad8c-\uc774\uc804",level:3},{value:"\uc18c\uc720\uad8c \ucc38\uc870/\ub300\uc5ec",id:"\uc18c\uc720\uad8c-\ucc38\uc870\ub300\uc5ec",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:3},{value:"impl",id:"impl",level:2},{value:"Vector(\ubca1\ud130)",id:"vector\ubca1\ud130",level:3},{value:"\ud83c\udf89 \uae5c\uc9dd\ud034\uc988",id:"-\uae5c\uc9dd\ud034\uc988",level:3},{value:"match\uac00 \ub3d9\uc791\ud558\ub294 \ubc95",id:"match\uac00-\ub3d9\uc791\ud558\ub294-\ubc95",level:3},{value:"String",id:"string",level:3},{value:"WebView \ud1b5\uc2e0 \ud574\uacb0\ucc45?",id:"webview-\ud1b5\uc2e0-\ud574\uacb0\ucc45",level:2}],o={toc:m},s="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,l.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc624\ub298-\ud55c-\uc77c"},"\uc624\ub298 \ud55c \uc77c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rust \uc18c\uc720\uad8c, impl, String \uacf5\ubd80"),(0,r.kt)("li",{parentName:"ul"},"WebView \ud574\uacb0\ucc45 \uc81c\uc2dc")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"rust"},"Rust"),(0,r.kt)("h3",{id:"memory"},"Memory"),(0,r.kt)("p",null,": address, offset"),(0,r.kt)("p",null,"memory\uc5d0\ub294 bit \ud615\ud0dc\ub85c \ub370\uc774\ud130 \uc800\uc7a5, HW\uc5d0\uc11c \ub2e4\ub8f0 \uc815\ubcf4\ub294 byte \ub2e8\uc704\ub85c \ucc98\ub9ac"),(0,r.kt)("p",null,"address --- ",(0,r.kt)("inlineCode",{parentName:"p"},"word")," \ub2e8\uc704 data (\ub17c\ub9ac\uc801\uc73c\ub85c 4byte\uc5ec\uc57c\ub9cc \ud558\ub294 \uac74 \uc544\ub2d8)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"\ub97c \ub2e4\ub8e8\uae30 \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"variables"),"\ub97c \uc0ac\uc6a9",(0,r.kt)("br",{parentName:"p"}),"\n","\u21d2 variable \u2192 address \u2192 \uc800\uc7a5"),(0,r.kt)("p",null,"offset --- ",(0,r.kt)("inlineCode",{parentName:"p"},"byte")," \ub2e8\uc704 data",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"offset"),"\uc744 \ub2e4\ub8e8\uae30 \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),"\ub97c \uc0ac\uc6a9"),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"data[2]\n")),(0,r.kt)("p",null,"\u2192 data: address, ","[2]",": offset"),(0,r.kt)("h2",{id:"ownership"},"Ownership"),(0,r.kt)("p",null,": Rust\ub294 ownership \uac1c\ub150\uc744 \ud65c\uc6a9\ud574\uc11c \uba54\ubaa8\ub9ac \ud2b8\ub798\ud0b9, \uba54\ubaa8\ub9ac \ub204\uc218\ubc29\uc9c0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\uc18c\uc720\uc790(Function)\uac00 \uba54\ubaa8\ub9ac\ub97c \uc815\ub9ac\ud560 \ucc45\uc784\uc744 \uac00\uc9c4\ub2e4")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"\ud568\uc218\uac00 \ub05d\ub098\uba74(={} \uc774\ud6c4) \ubcc0\uc218\ub97c \ubc18\ub0a9\ud55c\ub2e4")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\uc18c\uc720\uad8c-\uc0dd\uc131"},"\uc18c\uc720\uad8c \uc0dd\uc131"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn main(){\n    let dull = Ligth::Dull;\n}\n")),(0,r.kt)("p",null,"\u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ubcc0\uc218\ub97c \uc815\uc758\ud55c \ud568\uc218(=owner)"),"\uac00 \ud574\ub2f9 \ubcc0\uc218\uc758 \uc18c\uc720\uad8c\uc744 \uac00\uc9c4\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\uc18c\uc720\uad8c-\uc774\uc804"},"\uc18c\uc720\uad8c \uc774\uc804"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn main(){\n    let dull = Ligth::Dull;\n\n    display_light(dull);\n}\n")),(0,r.kt)("p",null,"\u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"\uadf8 \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \ub2e4\ub978 \ud568\uc218(=owner)"),"\uac00 \ud574\ub2f9 \ubcc0\uc218\uc758 \uc18c\uc720\uad8c\uc744 \uac00\uc9c4\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub530\ub77c\uc11c \ub2e4\ub978 \ud568\uc218\uac00 \uc885\ub8cc\ud558\uba74 \ud574\ub2f9 \ubcc0\uc218\ub97c \ubc18\ub0a9\ud558\uac8c \ub41c\ub2e4 (\uc18c\uc720\uad8c\uc744 \uac00\uc9c4 \ud568\uc218\uc758 \uc758\ubb34)"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc798\ubabb\ub41c \ucf54\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn main(){\n  let a = 10;\n  func1(a); //1\ubc88\uc9f8 \ud638\ucd9c\n  func1(a); //2\ubc88\uc9f8 \ud638\ucd9c\n}\n")),(0,r.kt)("p",null,"\u21d2 1\ubc88\uc9f8 \ud638\ucd9c \ub54c func1\uc774 \uc2e4\ud589\ub418\uace0, a\uc758 \uc18c\uc720\uad8c\uc740 func1\ub85c \ub118\uc5b4\uac04\ub2e4",(0,r.kt)("br",{parentName:"p"}),"\n","\ub530\ub77c\uc11c func1(a)\uac00 \ub05d\ub0a0 \ub54c, a\ub97c \ubc18\ub0a9\ud558\ubbc0\ub85c 2\ubc88\uc9f8 \ud638\ucd9c\uc5d0\uc11c a\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud55c\ub2e4"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\uc18c\uc720\uad8c-\ucc38\uc870\ub300\uc5ec"},"\uc18c\uc720\uad8c \ucc38\uc870/\ub300\uc5ec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn main(){\n    let dull = Ligth::Dull;\n\n    display_light(&dull);\n}\n")),(0,r.kt)("p",null,"\u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"&"),"\ub97c \uc0ac\uc6a9, \uc18c\uc720\uad8c \uc774\uc804\uc774 \uc5c6\uc73c\ubbc0\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"\ubcc0\uc218\ub97c \uc815\uc758\ud55c \ud568\uc218(=owner)"),"\uac00 \ud574\ub2f9 \ubcc0\uc218\uc758 \uc18c\uc720\uad8c\uc744 \uac00\uc9c4\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("p",null,"\u21d2 \uae30\ubcf8\uc801\uc73c\ub85c Rust\ub294 call by reference \ubc29\uc2dd\uc744 \ub530\ub974\uace0, reference\ub97c \ud1b5\ud574 \uba54\ubaa8\ub9ac \ubc18\ub0a9\uc744 \uad00\ub9ac\ud55c\ub2e4."),(0,r.kt)("p",null,"\uc774 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"&var")," \ub294 call by reference \ubc29\uc2dd\uc740 \uc720\uc9c0\ud558\ub418 \uba54\ubaa8\ub9ac \uc18c\uc720\uad8c\uc744 \uc774\uc804\ud558\ub294 \uac83\uc774 \uc544\ub2cc \ub300\uc5ec \ubc29\uc2dd\uc73c\ub85c \uad00\ub9ac\ud558\uaca0\ub2e4\uace0 \uba85\uc2dc\ud558\ub294 \uac83\uc774\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"call by value")," \u2192 \uc0c8\ub85c\uc6b4 \uacf5\uac04\uc5d0 \ubcc0\uc218 \uac12 \ud560\ub2f9"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"call by reference")," \u2192 \uc0ac\uc6a9\uc911\uc778 \uba54\ubaa8\ub9ac \uacf5\uac04\uc758 \uc8fc\uc18c\ub97c \ub118\uaca8\uc90c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"call by name")," \u2192 \ud568\uc218\ub97c \uc778\uc790\ub85c \ub2e4\ub8f0 \ub54c, f()\ub294 \ud568\uc218\uc758 \uacb0\uacfc\uac12\uc744 f\ub294 \ud568\uc218 \uc790\uccb4\ub97c \uc778\uc790\ub85c \ub118\uaca8\uc8fc\ub294 \uac83.",(0,r.kt)("br",{parentName:"p"}),"\n","\ub530\ub77c\uc11c f\ub294 \uc11c\ube0c\ub8e8\ud2f4\uc5d0\uc11c \uc2e4\ud589\ub420 \ub54c \uacb0\uacfc\uac12\uc774 \uacb0\uc815\ub418\ubbc0\ub85c \ubd88\ud544\uc694\ud55c \uc2e4\ud589 \uc624\ubc84\ud5e4\ub4dc\ub97c \ubc29\uc9c0\ud55c\ub2e4."),(0,r.kt)("p",null,"call by value\ub294 \ub370\uc774\ud130 \uac12\uc744 \ub118\uaca8\uc900\ub2e4\uace0,",(0,r.kt)("br",{parentName:"p"}),"\n","call by reference\ub294 \uba54\ubaa8\ub9ac \uc8fc\uc18c \uac12\uc744 \ub118\uaca8\uc900\ub2e4\uace0,",(0,r.kt)("br",{parentName:"p"}),"\n","call by name\uc740 \ud568\uc218\uc758 \uc774\ub984(\uba54\ubaa8\ub9ac \uc8fc\uc18c)\uc744 \ub118\uaca8\uc900\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"impl"},"impl"),(0,r.kt)("p",null,": enum, struct\ub97c \ub354 \uc27d\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud55c\ub2e4."),(0,r.kt)("p",null,"\ud568\uc218\uc5d0\uc11c \ud574\ub2f9 enum, struct\ub97c \uc778\uc790\ub85c \ubc1b\uc544\uc62c \ub54c, \uadf8 \ud568\uc218\ub294 \ud574\ub2f9 enum, struct\uc640 \ubc00\uc811\ud558\uac8c \uc5f0\uad00\ub418\uc5b4 \uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uadf8 struct\uac00 \uc815\uc758\ub418\uc9c0 \uc54a\uc73c\uba74 \ud568\uc218\ub294 \uc758\ubbf8\ub97c \uac00\uc9c0\uc9c0 \ubabb\ud558\uae30 \ub54c\ubb38 \u2192 \ud574\ub2f9 \ub370\uc774\ud130\uad6c\uc870\uc640 \uc5f0\uacc4\ud55c \uc815\uc758"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    let hot = Temperature {  };\n    Temperature::show_temp(hot);\n}\n\nstruct Temperature{ }\n\nimpl Temperature{\n    fn show_temp(&self){\n        ... //using self\n    }\n}\n")),(0,r.kt)("p",null,"+"," impl\uc758 \ucc38 \uc758\ubbf8 \uc801\uc6a9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    let hot = Temperature {  };\n    hot.show_temp();\n}\n\nstruct Temperature{ }\n\nimpl Temperature{\n    fn show_temp(&self){\n        ... //using self\n    }\n}\n")),(0,r.kt)("p",null,"\u21d2 \uad6c\uc870\uccb4\ub97c \ub9c8\uce58 class\ucc98\ub7fc \uc0ac\uc6a9 \uac00\ub2a5\ud558\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","field\ub294 struct \uc548\uc5d0\uc11c \uc815\uc758, struct\ub97c \uc0ac\uc6a9\ud558\ub294 \ud568\uc218\ub294 impl \uc548\uc5d0\uc11c \uc815\uc758"),(0,r.kt)("p",null,"but, \uac1d\uccb4\uc9c0\ud5a5 class \uc5d0\uc11c method\ub294 \uac1d\uccb4\uac00 \uc8fc\uccb4\uc801\uc73c\ub85c \ud558\ub294 \u2018\ud589\uc704(\uae30\ub2a5)\u2019\ub97c \ud45c\ud604\ud560 \ub54c \uc801\uc6a9\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","impl\uc740 \uac1d\uccb4(STRUCT)\uac00 \uc218\ub3d9\uc801\uc73c\ub85c \ud65c\uc6a9\ub418\ub294 \uc0c1\ud669\uc5d0\uc11c \ud568\uc218\ub97c \uc815\uc758\ud560 \ub54c \uc801\uc6a9\ud55c\ub2e4\ub294 \ucc28\uc774\uac00 \uc788\ub2e4."),(0,r.kt)("p",null,"+"," \uc0dd\uc131\uc790\ucc98\ub7fc \uc0ac\uc6a9\uac00\ub2a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl Temperature{\n    fn freezing() -> Self{\n        Self { };\n    }\n\n}\n")),(0,r.kt)("h3",{id:"vector\ubca1\ud130"},"Vector(\ubca1\ud130)"),(0,r.kt)("p",null,": \uc815\ubcf4\uc758 \uc5f4\uac70 matrix\uc758 \uad00\uc810\uc5d0\uc11c \ubcfc \ub54c, array\ub791 \ub2e4\ub97c \uac8c \uc5c6\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let numbers = vec![1,2,3];\n\nlet mut my_numbers = Vec::new();\nvector.push();\nvector.pop(); //last added STACK\ucc98\ub7fc\nvector.len();\nvector[index];\n")),(0,r.kt)("p",null,"vector \uc694\uc18c \uc811\uadfc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"for num in my_numbers{\n    ... num\n}\n")),(0,r.kt)("h3",{id:"-\uae5c\uc9dd\ud034\uc988"},"\ud83c\udf89 \uae5c\uc9dd\ud034\uc988"),(0,r.kt)("p",null,"\uc798\ubabb\ub41c \ucf54\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let nums = vec![10,20,30,40];\n\n    for num in nums{\n        if num == 30{\n            println!("thirty");\n        } else{\n            println!("{:?}", num);\n        }\n    }\n\n    println!("{:?}", nums[1]);\n}\n')),(0,r.kt)("p",null,"\u2192 ",(0,r.kt)("strong",{parentName:"p"},"Ownership \uac1c\ub150\uc744 \uc78a\uc9c0\ub9d0\uc790")),(0,r.kt)("p",null,"\ucda9\uaca9\uc2e4\ud654 - for\ubb38\uc5d0\uc11c nums\ub77c\ub294 \ubca1\ud130\ub97c \uc0ac\uc6a9, scope \uc548\uc5d0\uc11c nums\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\ub294\ub370, \uc774\ub54c nums\uc758 \uc18c\uc720\uad8c\uc740 for\ubb38\uc73c\ub85c \uc62e\uaca8\uac04\ub2e4."),(0,r.kt)("p",null,"\ub530\ub77c\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"nums"),"\uac00 \uc544\ub2cc ",(0,r.kt)("inlineCode",{parentName:"p"},"&nums")," \ub97c \ub118\uaca8\uc918\uc57c \ud558\ubbc0\ub85c,"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc798\ubabb\ub41c \ucf54\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let nums = vec![10,20,30,40];\n\n    for num in &nums{ //&nums\n        if num == 30{\n            println!("thirty");\n        } else{\n            println!("{:?}", num);\n        }\n    }\n\n    println!("{:?}", nums.len());\n}\n')),(0,r.kt)("p",null,"\u21d2 ",(0,r.kt)("inlineCode",{parentName:"p"},"&nums")," \ub85c \uc9c0\uc815\ud588\uc9c0\ub9cc \uc5ec\uc804\ud788 \ubb38\uc81c\uac00 \uc788\ub2e4."),(0,r.kt)("p",null,"error: no implementation for ",(0,r.kt)("inlineCode",{parentName:"p"},"&{integer} == {integer}")),(0,r.kt)("p",null,"num == 30 \ube44\uad50 \uacfc\uc815\uc5d0\uc11c num\uc740 &nums\uc758 \uc694\uc18c\ub85c &{integer} \ud0c0\uc785, 30\uc740 integer \ud0c0\uc785\uc774\ubbc0\ub85c \ube44\uad50\uac00 \ubd88\uac00\ub2a5\ud558\ub2e4\uace0 \ud55c\ub2e4."),(0,r.kt)("p",null,"\u21d2 ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," \uc5d0 \ub300\ud55c \uc774\ud574\uac00 \ub354 \ud544\uc694\ud574\ubcf4\uc778\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc62c\ubc14\ub978 \ucf54\ub4dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'//\ubc29\ubc951\nfn main() {\n        ...\n    for num in &nums{ //&nums\n        if num == &30{ //&30\uc73c\ub85c \ud0c0\uc785 \ub9de\ucdb0\uc8fc\uae30\n            println!("thirty");\n        }\n        }\n        ...\n}\n\n//\ubc29\ubc952\nfn main() {\n    ...\n    for num in nums{ //&nums\n        match num{ //match \uc0ac\uc6a9, \ub2e8\uc21c \uc218\uc2dd \ube44\uad50\ub97c \ud53c\ud568\n                    30 => println!("thirty"),\n                    _ => println!("{:?}", num)\n                }\n    }\n    ...\n}\n')),(0,r.kt)("p",null,"\uc65c match\uc5d0\uc120 ",(0,r.kt)("inlineCode",{parentName:"p"},"&{integer}")," \ud0c0\uc785\uc73c\ub85c \ube44\uad50\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub294\uac78\uae4c?"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"match\uac00-\ub3d9\uc791\ud558\ub294-\ubc95"},"match\uac00 \ub3d9\uc791\ud558\ub294 \ubc95"),(0,r.kt)("p",null,": \ud328\ud134 \ub9e4\uce6d\uc758 \uae30\ub2a5\uc744 \ud558\uba70, \ucc38\uc870\uac12\uc774 \uc544\ub2cc value\uac12 \ube44\uad50\ub9cc\uc744 \uc9c0\uc6d0\ud55c\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 &integer \uac12 \ub610\ud55c \ub611\uac19\uc774 value \uac12\uc778 integer\ub85c \ube44\uad50\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,": Rust\uc5d0\uc120 \ub2e4\uc591\ud55c \ud0c0\uc785\uc744 \uc9c0\uc6d0\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String")," : owned = struct\uc5d0 \uac12\uc744 \uc800\uc7a5\ud558\uace0 \uc2f6\uc744 \ub54c\n",(0,r.kt)("inlineCode",{parentName:"p"},"&str")," : borrowed = \ud568\uc218\uc758 \uc778\uc790\ub85c \ub118\uaca8\uc8fc\uace0 \uc2f6\uc744 \ub54c (\uc77c\ubc18\uc801\uc778 \uc0c1\ud669)"),(0,r.kt)("br",null),(0,r.kt)("p",null,"&str \uc0dd\uc131"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'"\uc548\ub155\ud558\uc138\uc694" // literal\uc740 \uc790\ub3d9\uc73c\ub85c borrowed \ud3fc\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4\ub2e4.\n&{String Type}\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"String \uc0dd\uc131"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'String::from("\uc548\ub155\ud558\uc138\uc694"); // String\uc758 \ud568\uc218 \uc0ac\uc6a9\n"\uc548\ub155\ud558\uc138\uc694".to_owned(); //&str\uc758 \ud568\uc218 \uc0ac\uc6a9\n')),(0,r.kt)("p",null,"+","_","::\ub294 \uad00\ub828\ub41c \ud568\uc218\ub97c, .\ub294 \uad00\ub828\ub41c \ud568\uc218\uc5d0 \uc790\uae30\uc790\uc2e0\uc744 \ud3ec\ud568\ud558\ub294(\ud568\uc218\uba74 \uc778\uc790\ub85c \uc804\ub2ec\ud558\ub294) \uac83\uc744 \uc758\ubbf8"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"webview-\ud1b5\uc2e0-\ud574\uacb0\ucc45"},"WebView \ud1b5\uc2e0 \ud574\uacb0\ucc45?"),(0,r.kt)("p",null,": \ubcf4\uc544\ud558\ub2c8 alert \ucc3d\uc5d0\uc11c method\ub97c \uc815\uc758\ud560 \uc218 \uc5c6\ub2e4\uace0 \ub728\ub294 \uc5d0\ub7ec\uac00 \uc9c0\uc18d\uc801\uc73c\ub85c \ub728\uace0\uc788\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\uc544\ub9c8 JS\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uba54\uc18c\ub4dc\ub294 postMessage\ub77c\ub294 Flutter \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \uc815\uc758\ub41c \ud568\uc218\ub77c \ud3ec\ub9f7\uc744 \ub9de\ucdb0\uc57c\ud558\ub294\ub370 \uc800\ubc88\uc5d0 \ud1b5\uc2e0\uc5d0 \ubcf4\ub0bc \uc778\uc790\uac00 \uc5c6\ub2e4\ub294 \uc774\uc720\ub85c \uc544\ubb34 \uc778\uc790\uac12\uc774 \uc5c6\uc774 \ud1b5\uc2e0\uc744 \ubcf4\ub0b4\ub294 \uac83\uc774 \ubb38\uc81c\ub77c\uace0 \uc0dd\uac01\ud574\uc11c,"),(0,r.kt)("p",null,"\ud1b5\uc2e0\uc73c\ub85c null\uc744 \uc778\uc790\ub85c postMessage\ub97c \ubcf4\ub0b4\uc9c0\ub9d0\uace0 \ube48 JSON \uad6c\uc870\ub77c\ub3c4 \ub123\uc5b4\uc11c \ubcf4\ub0b4\ub77c\uace0 \uc694\uccad\ud574\ub454 \uc0c1\ud0dc\ub2e4."),(0,r.kt)("p",null,"=> \uac10\uaca9 \u2605\u2605\u2605 \ub4dc\ub514\uc5b4 \ud574\uacb0 \u2605\u2605\u2605"))}k.isMDXComponent=!0}}]);