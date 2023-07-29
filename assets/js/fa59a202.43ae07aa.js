"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[7413],{68339:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(39953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(855),o=(t(39953),t(68339));const r={},i="07.22",l={unversionedId:"\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.22",id:"\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.22",title:"07.22",description:"1. useCallback (useTextArea)",source:"@site/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.22.md",sourceDirName:"\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d",slug:"/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.22",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.22",draft:!1,editUrl:"https://github.com/Self-Driven-Development/TIL/tree/main/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.22.md",tags:[],version:"current",frontMatter:{},sidebar:"all",previous:{title:"7.21",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.21"},next:{title:"23.07.23()",permalink:"/TIL/members/\ubc15\uaddc\uc131/Memo/\ucf54\ub4dc \ubd84\uc11d/07.23"}},p={},s=[{value:"1. <code>useCallback</code> (useTextArea)",id:"1-usecallback-usetextarea",level:2},{value:"2. <code>useCallback</code> (KeywordContentImage)",id:"2-usecallback-keywordcontentimage",level:2},{value:"3. Compound Component(\ud569\uc131 \ucef4\ud3ec\ub10c\ud2b8)",id:"3-compound-component\ud569\uc131-\ucef4\ud3ec\ub10c\ud2b8",level:2},{value:"\uc0ac\uc6a9 \ubc29\ubc95",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:3},{value:"4. Compound Component(\ud569\uc131 \ucef4\ud3ec\ub10c\ud2b8) 2 (\uc8fc\ud601\ub2d8 \ucf54\ub4dc)",id:"4-compound-component\ud569\uc131-\ucef4\ud3ec\ub10c\ud2b8-2-\uc8fc\ud601\ub2d8-\ucf54\ub4dc",level:2},{value:"\uc0ac\uc6a9 \ubc29\ubc95",id:"\uc0ac\uc6a9-\ubc29\ubc95-1",level:3}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0722"},"07.22"),(0,o.kt)("h2",{id:"1-usecallback-usetextarea"},"1. ",(0,o.kt)("inlineCode",{parentName:"h2"},"useCallback")," ",(0,o.kt)("a",{parentName:"h2",href:"https://github.dev/depromeet/Ding-dong-fe"},"(useTextArea)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use client';\nimport { ChangeEvent, ChangeEventHandler, useCallback, useState } from 'react';\n\nexport type UseTextAreaProps = {\n  initValue?: string;\n  onChange: ChangeEventHandler;\n  maxLength?: number;\n};\n\nexport const useTextArea = ({ initValue = '', onChange, maxLength }: UseTextAreaProps) => {\n  const [value, setValue] = useState(initValue);\n\n  const onChangeHandler = useCallback(\n    (e: ChangeEvent<HTMLTextAreaElement>) => {\n      e.target.value = e.target.value.slice(0, maxLength);\n      onChange(e);\n      setValue(e.target.value);\n    },\n    [maxLength, onChange],\n  );\n\n  return { value, onChangeHandler };\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ubc95")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { onChangeHandler, value: contents } = useTextArea({\n  onChange: register('contents').onChange,\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<TextArea.Content\n  {...register('contents')}\n  onChange={onChangeHandler}\n  value={contents}\n/>\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"onChangeHandler"),"\ud568\uc218\ub97c \uc120\uc5b8\ud55c\ub2e4. \uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \uc601\uc5ed\uc758 \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c \ud638\ucd9c\ub418\ub294 \ud568\uc218\uc774\ub2e4. \uc774 \ud568\uc218\ub294 \ud14d\uc2a4\ud2b8 \uc601\uc5ed\uc758 \uc785\ub825\uac12\uc744 ",(0,o.kt)("inlineCode",{parentName:"li"},"maxLength"),"\uc5d0 \uc9c0\uc815\ub41c \uae38\uc774\ub85c \uc81c\ud55c\ud558\uace0, ",(0,o.kt)("inlineCode",{parentName:"li"},"onChange")," \ud568\uc218\ub97c \ud638\ucd9c\ud55c \ud6c4, \ud14d\uc2a4\ud2b8 \uc601\uc5ed\uc758 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud55c\ub2e4.. \uc774 \ud568\uc218\ub294 useCallback hook\uc744 \uc0ac\uc6a9\ud558\uc5ec \uba54\ubaa8\uc774\uc81c\uc774\uc158\ub418\uc5b4, maxLength\ub098 onChange \uac12\uc774 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \ud55c \uac19\uc740 \ucc38\uc870\ub97c \uc720\uc9c0\ud55c\ub2e4.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\uc774 \ub584, ",(0,o.kt)("inlineCode",{parentName:"li"},"useCallback"),"\uc744 \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \uc774 ",(0,o.kt)("inlineCode",{parentName:"li"},"onChangeHandler"),"\ub97c props\ub85c \uc804\ub2ec\ud588\uc744 \ub54c, \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\ub2e4.")))),(0,o.kt)("h2",{id:"2-usecallback-keywordcontentimage"},"2. ",(0,o.kt)("inlineCode",{parentName:"h2"},"useCallback")," ",(0,o.kt)("a",{parentName:"h2",href:"https://github.dev/depromeet/Ding-dong-fe"},"(KeywordContentImage)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use client';\n\nimport { useCallback } from 'react';\nimport { useFormContext } from 'react-hook-form';\n\nimport { CancelCircleIcon } from '~/components/Icon';\nimport { IdCardCreationFormModel } from '~/types/idCard';\ntype KeywordContentImageProps = {\n  index: number;\n};\n\nexport const KeywordContentImage = ({ index }: KeywordContentImageProps) => {\n  const { watch, setValue } = useFormContext<IdCardCreationFormModel>();\n  const { keywords } = watch();\n  const imageUrl = keywords[index].imageUrl;\n\n  const onCancelClick = useCallback(() => {\n    setValue(`keywords.${index}.imageUrl`, '');\n  }, [index, setValue]);\n\n  return imageUrl ? (\n    <div className=\"relative mx-auto my-0 w-fit\">\n      {/* eslint-disable-next-line @next/next/no-img-element */}\n      <img\n        src={imageUrl}\n        className=\"max-h-[192px] max-w-[308px] object-contain\"\n        alt=\"image preview\"\n      />\n      <div className=\"absolute right-[12px] top-[12px] flex h-[16px] w-[16px]  items-center justify-center rounded-full bg-grey-800\">\n        <CancelCircleIcon className=\"fill-grey-800\" onClick={onCancelClick} />\n      </div>\n    </div>\n  ) : null;\n};\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"onClick\ud568\uc218\ub85c \ub118\uaca8\uc9c0\ub294 ",(0,o.kt)("inlineCode",{parentName:"li"},"onCancelClick"),"\ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud588\ub2e4. \uc774 \ud568\uc218\ub294 \ud074\ub9ad\ud588\uc744 \ub54c ",(0,o.kt)("inlineCode",{parentName:"li"},"setValue"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uc778\ub371\uc2a4\uc758 ",(0,o.kt)("inlineCode",{parentName:"li"},"imageUrl"),"\ud544\ub4dc\ub97c \ube48 \ubb38\uc790\uc5f4\ub85c \uc124\uc815\ud55c\ub2e4. ")),(0,o.kt)("h2",{id:"3-compound-component\ud569\uc131-\ucef4\ud3ec\ub10c\ud2b8"},"3. ",(0,o.kt)("a",{parentName:"h2",href:"https://github.dev/depromeet/Ding-dong-fe"},"Compound Component(\ud569\uc131 \ucef4\ud3ec\ub10c\ud2b8)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/components/TopNavigation/index.tsx\nimport { TopNavigationBackButton } from './TopNavigationBackButton';\nimport { TopNavigationLeft } from './TopNavigationLeft';\nimport { TopNavigationProgressBar } from './TopNavigationProgressBar';\nimport { TopNavigationRight } from './TopNavigationRight';\nimport { TopNavigationTitle } from './TopNavigationTitle';\nimport { TopNavigationWrapper } from './TopNavigationWrapper';\n\nexport const TopNavigation = Object.assign(TopNavigationWrapper, {\n  Left: TopNavigationLeft,\n  Title: TopNavigationTitle,\n  Right: TopNavigationRight,\n  BackButton: TopNavigationBackButton,\n  ProgressBar: TopNavigationProgressBar,\n});\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TopNavigation\uc758 \uc67c\ucabd \ubc84\ud2bc, \uc624\ub978\ucabd \ubc84\ud2bc, \uc81c\ubaa9 \ub4f1\uc744 \uac01\uac01 import\ud558\uc5ec TopNavigation\uc73c\ub85c \ubb36\uc5b4\uc11c export\ud55c\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c \ud558\uba74, TopNavigation\uc744 import\ud560 \ub54c, TopNavigation.Left, TopNavigation.Right \ub4f1\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/components/TopNavigation/TopNavigationLeft.tsx\nimport { PropsWithChildren } from 'react';\n\nimport { tw } from '~/utils/tailwind.util';\n\ntype TopNavigationLeftProps = {\n  className?: string;\n};\n\nexport const TopNavigationLeft = ({\n  children,\n  className,\n}: PropsWithChildren<TopNavigationLeftProps>) => {\n  return (\n    <div className={tw('flex min-w-[33%] max-w-full justify-start', className)}>{children}</div>\n  );\n};\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TopNavigationLeft \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubc1b\uc544\uc11c, \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc67c\ucabd\uc5d0 \uc815\ub82c\ud558\uc5ec \ubcf4\uc5ec\uc900\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/components/TopNavigation/TopNavigationBackButton.tsx\n'use client';\nimport { useRouter } from 'next/navigation';\nimport { twMerge } from 'tailwind-merge';\n\nimport { ArrowLeftIcon, CancelBoldIcon, ChevronLeftIcon } from '~/components/Icon';\n\nconst BackButton = {\n  chevron: ChevronLeftIcon,\n  cancel: CancelBoldIcon,\n  arrow: ArrowLeftIcon,\n};\n\ntype BackButtonType = keyof typeof BackButton;\n\ntype TopNavigationBackButtonProps = {\n  /**\n   * \uc88c\uce21 \uc544\uc774\ucf58 \ud0c0\uc785\n   * @default 'chevron'\n   */\n  backButtonType?: BackButtonType;\n  /**\n   * \uc88c\uce21 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud560 \ub54c \ub3d9\uc791\ud558\ub294 \ud568\uc218, \uac12\uc744 \ub123\uc9c0 \uc54a\uc73c\uba74 \uae30\ubcf8\uc801\uc73c\ub85c router.back\uc774 \uc2e4\ud589\ub429\ub2c8\ub2e4.\n   */\n  onClickBackButton?: VoidFunction;\n  backLink?: string;\n  direction?: 'left' | 'right';\n};\n\nexport const TopNavigationBackButton = ({\n  backButtonType = 'chevron',\n  backLink,\n  onClickBackButton,\n  direction = 'left',\n}: TopNavigationBackButtonProps) => {\n  const router = useRouter();\n\n  const handleClickBackButton = () => {\n    if (onClickBackButton) {\n      onClickBackButton();\n      return;\n    }\n    if (backLink) {\n      router.push(backLink);\n      return;\n    }\n    router.back();\n  };\n\n  const BackButtonComponent = BackButton[backButtonType];\n  return (\n    <button\n      className={twMerge(direction === 'left' ? 'justify-start' : 'justify-end')}\n      onClick={handleClickBackButton}\n    >\n      <BackButtonComponent />\n    </button>\n  );\n};\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TopNavigationBackButton \ucef4\ud3ec\ub10c\ud2b8\ub294 backButtonType\uc5d0 \ub530\ub77c\uc11c \ub2e4\ub978 \uc544\uc774\ucf58\uc744 \ubcf4\uc5ec\uc900\ub2e4. \ub610\ud55c, backLink\uac00 \uc8fc\uc5b4\uc9c0\uba74 \ud574\ub2f9 \ub9c1\ud06c\ub85c \uc774\ub3d9\ud558\uace0, onClickBackButton\uc774 \uc8fc\uc5b4\uc9c0\uba74 \ud574\ub2f9 \ud568\uc218\ub97c \uc2e4\ud589\ud55c\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/components/TopNavigation/TopNavigationWrapper.tsx\nimport { PropsWithChildren } from 'react';\n\ntype TopNavigationWrapperProps = {\n  /**\n   * border-bottom \uceec\ub7ec \uac12\uc774 \uc8fc\uc5b4\uc9c0\uba74 \ud45c\uc2dc\ud569\ub2c8\ub2e4. ex) color-primary\n   */\n  bottomBorderColor?: string;\n  bgColor?: string;\n};\nexport const TopNavigationWrapper = ({\n  bottomBorderColor,\n  bgColor = 'bg-white',\n  children,\n}: PropsWithChildren<TopNavigationWrapperProps>) => {\n  const borderBottomStyle = bottomBorderColor ? `border-b-${bottomBorderColor} border-b-[1px]` : '';\n  return (\n    <nav\n      className={`fixed left-0 right-0 top-0 z-top2 mx-auto flex h-t-nav w-full max-w-content items-center justify-between px-layout-sm ${borderBottomStyle} ${bgColor}`}\n    >\n      {children}\n    </nav>\n  );\n};\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TopNavigationWrapper \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubc1b\uc544\uc11c, \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub97c \uac00\uc6b4\ub370 \uc815\ub82c\ud558\uc5ec \ubcf4\uc5ec\uc900\ub2e4.")),(0,o.kt)("h3",{id:"\uc0ac\uc6a9-\ubc29\ubc95"},"\uc0ac\uc6a9 \ubc29\ubc95"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<TopNavigation>\n  <TopNavigation.Left>\n    <div className="py-2">\n      <h1 className="text-h1">\uc54c\ub9bc</h1>\n    </div>\n  </TopNavigation.Left>\n</TopNavigation>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TopNavigation"),"\uc73c\ub85c \uac00\uc7a5 \ud06c\uac8c \uac10\uc2fc\ub2e4. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TopNavigation.Left"),"\ub85c \uc67c\ucabd\uc5d0 \ubcf4\uc5ec\uc904 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uac10\uc2fc\ub2e4.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc774\ub7f0 \uc2dd\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"li"},"index.tsx"),"\uc5d0\uc11c \ubaa8\uc544\uc11c export\ud558\ub294 \ubc29\uc2dd\uc774 \uc788\uace0, \ub610\ud55c \ud55c \ud30c\uc77c\uc5d0\uc11c \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uc5b4 export\ud558\ub294 \ubc29\uc2dd\uc774 \uc788\ub2e4. ")),(0,o.kt)("h2",{id:"4-compound-component\ud569\uc131-\ucef4\ud3ec\ub10c\ud2b8-2-\uc8fc\ud601\ub2d8-\ucf54\ub4dc"},"4. ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/gloddy-dev/gloddy-client"},"Compound Component(\ud569\uc131 \ucef4\ud3ec\ub10c\ud2b8) 2 (\uc8fc\ud601\ub2d8 \ucf54\ub4dc)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use client';\nimport clsx from 'clsx';\nimport { type PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';\n\nimport type { StrictPropsWithChildren } from '@/types';\n\nconst TabsContext = createContext<{\n  activeTab: string | number;\n  setActiveTab: (value: string | number) => void;\n} | null>(null);\n\ninterface TabsProps {\n  defaultActiveTab: string | number;\n}\n\nexport default function Tabs({ defaultActiveTab, children }: StrictPropsWithChildren<TabsProps>) {\n  const [activeTab, setActiveTab] = useState(defaultActiveTab);\n\n  return (\n    <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>\n  );\n}\n\nfunction List({ children }: StrictPropsWithChildren) {\n  return <div className=\"flex h-50 border-b border-white3\">{children}</div>;\n}\n\ninterface TabProps {\n  value: string;\n  text: string;\n  queryString?: string;\n}\n\nfunction Tab({ value, text, queryString }: TabProps) {\n  const { activeTab, setActiveTab } = useContext(TabsContext)!;\n\n  const isActive = activeTab === value;\n\n  useEffect(() => {\n    if (isActive) {\n      const url = new URL(window.location.href);\n      url.searchParams.set('tab', queryString ?? value);\n      window.history.replaceState(null, '', url.toString());\n    }\n  }, [isActive, queryString, value]);\n\n  return (\n    <div\n      className={clsx(\n        'flex flex-1 cursor-pointer items-center justify-center',\n        isActive && 'border-b-4 border-blue3'\n      )}\n      onClick={() => setActiveTab(value)}\n    >\n      {text}\n    </div>\n  );\n}\n\nfunction Panel({ value, children }: PropsWithChildren<Pick<TabProps, 'value'>>) {\n  const { activeTab } = useContext(TabsContext)!;\n\n  return <div className={activeTab === value ? 'block' : 'hidden'}>{children}</div>;\n}\n\nTabs.List = List;\nTabs.Tab = Tab;\nTabs.Panel = Panel;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud06c\uac8c ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"List"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Panel"),"\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs")," \ucef4\ud3ec\ub10c\ud2b8\uac00 \ubcf8\uccb4\uc774\uace0, ",(0,o.kt)("inlineCode",{parentName:"li"},"List"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Panel"),"\uc740 ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs"),"\uc758 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc774\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs"),"\ucef4\ud3ec\ub10c\ud2b8\ub294 \ud604\uc7ac \ud65c\uc131\ud654 \uc911\uc778 \ud0ed\uc758 \uc0c1\ud0dc\uac12 Context\uc778 ",(0,o.kt)("inlineCode",{parentName:"li"},"TabsContext.Provider"),"\ub85c \uac10\uc2f8\uace0 \uc788\ub2e4. \uadf8\ub9ac\uace0 ",(0,o.kt)("inlineCode",{parentName:"li"},"List"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab"),"\uc744 \ub458\ub7ec\uc2f8\ub294 \ubc15\uc2a4\uc774\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab"),"\uc740 \ud0ed\uc758 \uc774\ub984\uacfc \ud65c\uc131\ud654 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 ",(0,o.kt)("inlineCode",{parentName:"li"},"isActive"),"\uac12\uc744 \uac16\uace0 \uc788\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"li"},"Panel"),"\uc740 ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\uac12\uacfc ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"li"},"activeTab"),"\uac12\uc774 \uac19\uc73c\uba74 \ubcf4\uc5ec\uc9c0\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc774\ub2e4.")),(0,o.kt)("h3",{id:"\uc0ac\uc6a9-\ubc29\ubc95-1"},"\uc0ac\uc6a9 \ubc29\ubc95"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Tabs defaultActiveTab={currentTab}>\n  <Tabs.List>\n    <Tabs.Tab value="detail" text="\uc0c1\uc138\uc815\ubcf4" />\n    <Tabs.Tab value="board" text="\uac8c\uc2dc\ud310" />\n  </Tabs.List>\n  <Tabs.Panel value="detail">\n    <div className="p-20">{detailNode}</div>\n    {!isLeader && (\n      <BottomFixedButton\n        text="\uc9c0\uc6d0\ud558\uae30"\n        onClick={() => router.push(`/grouping/${groupingId}/apply`)}\n      />\n    )}\n  </Tabs.Panel>\n  <Tabs.Panel value="board">\n    <div className="p-20">{boardNode}</div>\n    <BottomFixedButton\n      text="\uae00\uc4f0\uae30"\n      onClick={() => router.push(`/grouping/${groupingId}/write`)}\n    />\n  </Tabs.Panel>\n</Tabs>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tabs"),"\ub85c \ub113\uac8c \ub458\ub7ec\uc2fc\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"li"},"Context.Proivder"),"\uac00 \ud604\uc7ac \ud65c\uc131\ud654 \uc911\uc778 ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab"),"\uc758 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud55c\ub2e4. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tabs.List"),"\ub85c ",(0,o.kt)("inlineCode",{parentName:"li"},"Tab"),"\uc744 \ub458\ub7ec\uc2fc\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs.Tab"),"\uc740 ",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\uac12\uacfc ",(0,o.kt)("inlineCode",{parentName:"li"},"text"),"\uac12\uc744 \ubc1b\ub294\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\uac12\uc740 ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs.Panel"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\uac12\uacfc \ube44\uad50\ud558\uc5ec \uac19\uc73c\uba74 \ud65c\uc131\ud654\ub41c\ub2e4. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tabs.Panel"),"\uc740 ",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\uac12\uacfc ",(0,o.kt)("inlineCode",{parentName:"li"},"Tabs"),"\uc758 ",(0,o.kt)("inlineCode",{parentName:"li"},"activeTab"),"\uac12\uc774 \uac19\uc73c\uba74 \ubcf4\uc5ec\uc9c0\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc774\ub2e4.")))}m.isMDXComponent=!0}}]);