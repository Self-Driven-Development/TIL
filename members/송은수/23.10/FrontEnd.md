---
title: 'FrontEnd'
---

# 새로운 것들의 바다

정보의 바다위에서 휩쓸리고 있다.  
개인적인 공부도, 학교공부도 전부 새로운 파도를 몰고왔다.  
나는 공부를 싫어한다고 생각하는데 꼭 그렇지도 않은 거 같다. 공부하다보면 재밌는 부분도 있으니깐.  
새로운 파도를 타고있다보니깐 파도에 적응하는데 정신을 못차리고 내 소지품들을 잃어버린다.  
파도속에서 건진 진주도 다음에 오는 거친 파도를 맞고나서 보면 손에서 떠나있다.  
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