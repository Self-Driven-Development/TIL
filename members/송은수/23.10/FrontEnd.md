---
title: 'FrontEnd'
---

# 새로운 것들의 바다

정보의 바다위에서 휩쓸리고 있다.  
개인적인 공부도, 학교공부도 전부 새로운 파도를 몰고왔다.  
나는 공부를 싫어한다고 생각하는데 꼭 그렇지도 않은 거 같다. 공부하다보면 재밌는 부분도 있으니깐.  
그러다보니 파도에 적응하는데 정신을 못차리고 내 소지품들을 잃어버린다.  
그 속에서 건진 진주도 다음에 오는 거친 파도를 맞고나서 보면 손에서 떠나있다.  
다음 파도를 맞기 전에 몸에 새겨놓으면 떠내려가지 않을테니 잠시 이곳을 빌려 새기려고 한다.

# Eslint, Prettier

pc vscode에 깔려 있어서 별 신경쓰지 않고 사용했는데, 이제 남들과 프로젝트를 하기위해선 알 필요가 있을 거 같아 찾아봤다.  
pc에 깔려있는 건 말 그대로 local환경에서만 설정되는 것이라, 혹여나 남들의 환경에서 실행하려고 하면 error가 발생할 수 있다.  
package에 설정해 사용자화 시킨다면 `npm i`를 통해 어떠한 local환경에서든 동일하게 사용할 수 있다.

## 뭐가뭔데

### Eslint

Eslint는 일관성 있는 코드를 위한 것.  
함수를 작성하는 방법은 표현식, 선언문, 화살표 함수등 여러가지가 있다.  
for문을 위한 함수로 for문, forEach문, map등 여러가지 방법이 있다.  
이러한 것들의 일관성을 위한 것이 Eslint

### Prettier

말그대로 공백, 들여쓰기, 괄호등을 정리하여 이쁘게 쓸 수 있게 해주는 것

# npm, yarn

둘다 패키지 매니저이다. npm은 노드를 설치하면 자동으로 설치되는 것이고, yarn은 페이스북에서 개발한 것이다.  
npm은 파일을 하나씩 순차적으로 다운받는 반면 yarn은 여러패키지를 동시에 가져오고 설치할 수 있어서 속도 측면에서 우수하고 보안측면에서도 우수하다고 하다.  
하지만 요즘은 둘의 큰 차이가 없어서 개발자의 선택에 따라 갈린다.

# Emotion

link('https://velog.io/@joabyjoa/create-react-app-typescript-emotion%EC%9C%BC%EB%A1%9C-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0')
지금까지 이용해봤던 css작성방법은 module, styled-component다.  
페이지 및 컴포넌트 수가 많아지면서 CSS in JS가 좋아보여 styled-component를 시도해봤음에도 다시 module을 사용했던 이유는  
스타일드 컴포넌트와 일반 컴포넌트를 구분할 수 없어서이다.  
이번에는 조금 규모가 있는 프로젝트를 하여 기본색, 크기등을 지정해야 했기에 새로운 css를 찾아보던 중 Emotion을 발견해 이걸 사용해보기로 했다.  
일반적으로는 코드 자동완성이 되지 않지만,
`vscode-styled-component`를 다운받고

```ts
const css_class = css``;
```

형식으로 사용하면 코드자동완성을 사용할 수 있다.

## Theme

컴포넌트의 return 문 내에서 js코드를 쓸 수 있는 것처럼, context API를 통해 변수를 전역적으로 사용할 수 있는 것처럼  
css도 변수를 만들어 저장해놓고 필요할 떄 전역적으로 사용할 수 있다.  
Theme을 활용하는데

## Emotion Babel 설정

cra에서 emotion을 사용하려면 `/** @jsx jsx */` pragma 필요, 이를 해결하기 위해 typescript 컴파일러 옵션에 `"jsxImportSource": "@emotion/react"`를 추가해줘서 해결할 수 있다. 그럼에도 cra 4버전 이상부터는 에러가 떠서 `/** @jsxImportSource @emotion/react */`를 써줘야 한다  
매 코드마다 상단에 이걸 쓰기는 귀찮으니 커스터마이징 해준다

::: note

babel이란? 구/신버전의 문법차이로 인한 오류를 해결해줌. 신버전에 작성된 코드를 구버전에서 실행할때 호환가능한 옛 버전으로 돌려줌  
혹은 nodeJS에서 실행되지 않는, cra에서만 사용하는 import문 등을 실행가능하게 바꿔줌

nodeJS란? JS엔진은 브라우저마다 다르다. nodeJS는 V8엔진을 기반으로 작동하는 서버사이드 런타임이다.  
리액트는 라이브러리로써, 여러가지 모듈들을 가져와 사용한다.  
이러한 모듈들은 node_modules에 있고, 버전관리는 config.json에서 이루어진다.  
config.json은 이뿐만 아니라 매크로 설정기능도 있다.  
cra는 리액트에 필요한 모듈,라이브러리,웹팩,바벨들을 모아 한꺼번에 설치할 수 있게 도와준다.

eject? npm run eject를 하면 숨겨져있는 파일들이 전부 나온다.  
cra로 one build dependency를 가지고 있던 파일들을 커스터마이징 할 수 있는 동시에, 사용자가 계속 유지보수를 해줘야하는 상태가 되는 것이다.  
url('https://velog.io/@remon/React-Eject%EB%9E%80-npm-run-eject')

:::

무엇을 커스터마이징 할까? eject는 커스터마이징은 가능하나 다시 되돌아 올 수 없으므로, react-app-rewird, customize-cra를 사용한다  
이를 통해 웹팩, 바벨을 수정해 pragma없이도 emotion이 적용되도록 설정한다.

### Storybook

확장성있는 컴포넌트를 만들다 보니, 모든 경우의 수를 직접 확인하는데는 어려움이 있었다. 예를들어 버튼의 변수로 크기, 색, 아이콘 등이 들어가는데 이러한 것들이 문제가 없는지 전부 띄워보는 것은 쉽지 않은 작업이였다.

이를 해결하기 위한 방법으로 storybook이 있었다. storybook은 독립된 환경에서 해당 컴포넌트를 독립적으로 실행하여 변수들을 체크하기 쉽게 도와주었다.

url('https://velog.io/@mrbartrns/%EC%9E%AC%EC%82%AC%EC%9A%A9-%EA%B0%80%EB%8A%A5%ED%95%9C-%EB%B2%84%ED%8A%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-React')

`.stories/`안에 `./*.tsx`, `./*.stories.tsx`를 만들면 `./*.stories.tsx`가 storybook의 환경에서 실행된다

다만 emotion과 같이 사용하는데 시행착오가 있었다. 변경한 babel및 웹팩이 cra에만 작용하지 storybook의 웹팩에는 적용되지 않았다

이를 해결하기 위해 cra를 수정하기 위해 사용했던 `config-overrides.js`를 `.storybook/main.ts`에 가져와 웹팩수정을 하여 해결해였다.

`index.css`나 html의 헤더 등도 따로 넣어줘야 한다(독립적인 index.css, html헤더등을 사용하기 ?때)

# 앱의 전체적인 색상

앱을 처음 만들 때 학교색을 기준으로해서 만들자고 했기 때문에, figma작업을 할때 기본 바탕색을 연한빨강으로 했다

그러나 주혁이 피드백을 받고, 다른 앱들을 살펴보니 배경은 주로 흰색 혹은 검정색이였다

그런 것들을 보고 내가 만든 피그마를 보니 왠지 모르게 유치한 애들 장난같았다. 그래서 나도 배경을 흰색으로 하기로 결정!

그랬더니 발생한 문제가, 대부분의 앱들은 파란색을 배경으로 한다. 그래서 컴포넌트들의 색깔이 파랑, 오류가 뜨면 빨강이 뜬다

근데 내가 만들 앱의 기본색상도 빨강, 오류색도 빨강이다 보니 실제로 만들게 되면 혼동할 가능성이 있다고 생각되었다

그렇다고 오류색을 빨강이 아닌 다른색으로 하자고 하니 UX적으로 별로인 앱이 만들어 질 듯 했다

그래서 브랜드색이 빨강인 앱들을 보니 검정색을 메인으로 사용하고 있었다

그걸 따라할 수도 있겠지만, 처음에 생각했을 때 앱 내의 전체적인 컬러가 빨강이길 원했으니, 빨강으로 진행시키기로 결정!

# {} vs ${}

학교에서 C도 쓰고 자바도 배우면서 리액트도 같이하니 문법이 너무 헷갈린다(변명)

대표적인 자바스크립트의 독특한 점은, 배열을 []로 쓴다는 것(다른 거는 {}씀), 함수를 쓸 떄 자료형 선언을 안한다는 것(ts쓰면 해야하긴 함)

서론은 여기까지 하고 emotion을 도입하면서 {}랑 ${}를 쓸 일이 많아졌다. 근데 이게 언제 뭘 써야 하는지 헷갈리기 시작했다

## {}

리액트에서 `{}`는 JSX에서 자바스크립트 문법을 사용하기 위해 쓰인다  
return문 내에서 JSX 사이에 js문법을 사용하고 싶다면 {}를 사용해 삽입한다.  
function내 return문 밖에서 js문법을 사용하고 싶다면 그냥 js문법을 사용하면되고, 이때 블럭처리를 할때 {}가 사용된다.

## ${}

템플릿 리터럴 내에서 변수를 사용할때 사용된다

템플릿 리터럴이란 ES6에서 자바스크립트에 도입된 신문법이다

`'the length of str : ' + a`같은 방식으로 표현되야 할게 템플릿 리터럴(백틱)을 사용하면  
`the length of str : ${a}`형식으로 사용할 수 있다

`${}`는 백틱 내에서 변수를 사용하기 위해 사용된다

# svg 컨트롤

svg를 wrapper로 해서 안에 g, path등이 사용된다. 복잡한 svg라면 여러가지 g와 path가 사용된다.

각각 path들을 컨트롤 할 수 있고, svg를 통해 컨트롤 할 수 있다

fill을 통해 색상 컨트롤을 하고, 다른 태그와 마찬가지로 style, css를 통해 꾸밀 수 있다.

# onFocus, onBlur, onClick

input에 비밀번호 보였다 안보였다 아이콘을 추가해 작업을 하는데 Focus된 상태에서, 아이콘(즉 같은 컴포넌트 구성요소)를 클릭했더니 포커스가 풀리는 현상이 발생했다

찾아보니 onClick이 실행되기 이전 onBlur가 먼저 실행되기 때문이였다

이를 해결하기위해 onMouseDown으로 preventDefault를 걸었다

근데 이렇게 하니 label을 클릭했을때 input이 포커싱되지 않는 문제가 발생했다

적절한 해결책을 찾지 못해 그냥 onMouseDown을 아이콘으로 옮겨 해결했다

# 스토리북의 장점

url(`https://fe-developers.kakaoent.com/2022/220609-storybookwise-component-refactoring/`)

# svg, webpack

매번 svg를 가져오면 component의 가독성이 좋지 않을거 같아 컴포넌트처럼 사용하는 방법을 찾고자 했다

그렇다고 img의 src로 쓰고 싶진 않았다. 그러면 img를 사용하는 것과 크게 다를 바 없기에

```ts
import { ReactComponent as Search } from './path/search.svg';

<Search />;
```

사용하기 위해서 `*.svg`파일이 컴포넌트로 쓰일 수 있다는 것을 알려줘야 했기에

```ts
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
```

를 사용했다.

이런 방식으로 svg를 가져올 수 있엇다. 그러나 `{ReactComponent as *}`방식이 맘에들지 않아 다른 방법이 없나? 하고 찾아보았다.

방법은 존재했다. `webpack.config.js` webpack을 조작하면 됐으나, 내가 만든 프로젝트는 cra를 사용했기에 `customize-cra`를 사용해야 했다.

그러나.. 웹팩을 조작하는 여러가지 방법을 찾아봤으나 내 프로젝트에서는 적용이 안돼서 그냥 불편해도 저렇게 쓰기로 결정!..ㅎㅎ

# eslint 오류

몇 번 eslint오류를 경험했다. 그럼에도 나는 이게 eslint오류인지 모르고 삽질을 했다.

eslint오류는 오류에 마우스를 가져다 대보면 eslint오류라고 나오고, 친절히 fix하는 방법까지 알려준다

다음부터는 무슨오류인지 먼저 잘 읽어보고 직접 오류를 해결하기 위해 노력해보자.
