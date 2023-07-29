"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[6269],{68339:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(39953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,f=s["".concat(i,".").concat(d)]||s[d]||c[d]||a;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[s]="string"==typeof e?e:o,l[1]=u;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=t(855),o=(t(39953),t(68339));const a={},l="23.07.25(\uc218)",u={unversionedId:"\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.26",id:"\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.26",title:"23.07.25(\uc218)",description:"1. react-hook-form : useController",source:"@site/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.26.md",sourceDirName:"\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d",slug:"/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.26",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.26",draft:!1,editUrl:"https://github.com/Self-Driven-Development/TIL/tree/main/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.26.md",tags:[],version:"current",frontMatter:{},sidebar:"all",previous:{title:"07.24",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.24"},next:{title:"23.07.27(\ubaa9)",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.27"}},i={},p=[{value:"1. react-hook-form : useController",id:"1-react-hook-form--usecontroller",level:2}],m={toc:p},s="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"230725\uc218"},"23.07.25(\uc218)"),(0,o.kt)("h2",{id:"1-react-hook-form--usecontroller"},"1. ",(0,o.kt)("a",{parentName:"h2",href:"https://github.dev/KimJeongHyun/react-hook-form-test/tree/main/src/pages/SignUp/utils"},"react-hook-form : useController")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\nexport default function InputForm() {\n  const methods = useForm<UserInfoTypes>({\n    defaultValues:{\n      userName:"",\n      userPhone:"",\n      gender:"M"\n    }\n  })\n\n  const {userName, userPhone, gender} = useGetUserForms({control:methods.control})\n\n  return (\n    <UserInputContainer>\n        <InputBlock>\n          \uc774\ub984: <input value={userName.value} \n                  onChange={(e)=>handleOnChange({value:e.target.value,onChange:userName.onChange})}\n                  placeholder="\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."  \n                />\n        </InputBlock>\n        <InputBlock>\n          \uc804\ud654\ubc88\ud638: <input value={userPhone.value} \n                  onChange={(e)=>handleOnChange({value:e.target.value,onChange:userPhone.onChange})}\n                  placeholder="\ud578\ub4dc\ud3f0 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."  \n                />\n        </InputBlock>\n        <GenderBlock>\n          <label>\ub0a8\uc131</label>\n          <input type="radio" value={"M"} \n                  onChange={(e)=>handleOnChange({value:e.target.value,onChange:gender.onChange})} \n                  checked={gender.value==="M"}/>\n        </GenderBlock>\n        <GenderBlock>\n          <label>\uc5ec\uc131</label>\n          <input type="radio" value={"F"} \n                  onChange={(e)=>handleOnChange({value:e.target.value,onChange:gender.onChange})} \n                  checked={gender.value==="F"}/>\n        </GenderBlock>\n        <ConfirmButtonArea>\n          <ConfirmButton \n              onClick={()=>onSubmit({userName:userName.value,userPhone:userPhone.value,gender:gender.value})}\n          >\n            \ub4f1\ub85d\n          </ConfirmButton>\n        </ConfirmButtonArea>\n    </UserInputContainer>\n  );\n}\n\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useForm"),"\uc73c\ub85c\ubd80\ud130 ",(0,o.kt)("inlineCode",{parentName:"p"},"methods"),"\ub97c \ubd88\ub7ec\uc640, \uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"methods"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"control"),"\uc744 \ucee4\uc2a4\ud140\ud558\uc5ec \ub9cc\ub4e0 ",(0,o.kt)("inlineCode",{parentName:"p"},"useGetUserForms"),"\uc744 \ud1b5\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"useController"),"\ub97c \uac00\uc838\uc624\uace0 \uc788\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useGetUsersForms"),"\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'export default function useGetUserForms({control}:{control:Control<UserInfoTypes>}){\n    const {field:userName} = useController({\n        name:"userName",\n        control\n    })\n\n    const {field:userPhone} = useController({\n        name:"userPhone",\n        control\n    })\n\n    const {field:gender} = useController({\n        name:"gender",\n        control\n    })\n\n    return { userName, userPhone, gender };\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useController"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"react-hook-form"),"\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc774\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm"),"\uc73c\ub85c\ubd80\ud130 \ubc1b\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"control"),"\uc744 \ud1b5\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\uc744 \uc9c0\uc815\ud574\uc8fc\uace0, ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),"\ub97c \ubc1b\uc544\uc628\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\uc774\ub807\uac8c ",(0,o.kt)("inlineCode",{parentName:"p"},"useController"),"\ub85c\ubd80\ud130 \ubc1b\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"filed"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"\ub97c \uac01 ",(0,o.kt)("inlineCode",{parentName:"p"},"input"),"\uc758 value\uc5d0 \ubfcc\ub824\uc900\ub2e4. \ub610\ud55c, ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"input"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange"),"\uc5d0 \ubfcc\ub824\uc900\ub2e4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\uc774\ub7f0 \ubc29\uc2dd\uc73c\ub85c input\uc744 \uad00\ub9ac\ud558\ub294 \ub85c\uc9c1\uacfc input\uc744 \ubfcc\ub824\uc8fc\ub294 \ub85c\uc9c1\uc744 \ubd84\ub9ac\ud560 \uc218 \uc788\ub2e4."))))}c.isMDXComponent=!0}}]);