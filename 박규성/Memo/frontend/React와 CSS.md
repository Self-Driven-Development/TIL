# React와 CSS
## React에서 CSS적용하는 방법
1. App컴포넌트에서 import
```js
// App.js
import "styles.css";

const App = () => {
  return(
    <div className="App">
    	...
    </div>
   );
}
```
- class이름이 중복되면 중복 적용된다는 단점

2. Encapsulation
- 컴포넌트와 해당 컴포넌트에서 사용하는 css 파일을 묶어서 export
```js
// Component/Header/Header.js
import "./Header.css";

const Header = () =>{
  ...
}
export default Header;

```

3. CSS Module

CRA(Create-React-App)을 이용해서 만든 React프로젝트에서는 CSS Module기능을 제공
```js
// App.js
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <div className="App">
        <h1 className={styles.Title}>CSS 적용</h1>
      </div>
    </>
  );
};

export default App;
```
```js
/* App.module.css */

.Title{
	color:red;
}
```
- className 죽복을 막을 수 있음. class Name을 임의의 문자들로 부여


4. Styled-comopennts
- 3번의 CSS Module을 사용하여 class 이름의 중복은 막았다. 하지만 CSS파일과 JS파일이 분리되어 있다는 단점이 있다. styled-compoenents라이브러리를 통해서 컴포넌트 파일 내에서 스타일을 지정할 수 있다.
```js
// Header.js

import styled from "styled-components";

const StyledHeader = styled.header`
  color: white;
  background-color: black;
  font-size: 20px;
  width: 300px;
  text-align: center;
`;

const Header = () => {
  return <StyledHeader>This is Header.</StyledHeader>;
};

export default Header;
```

## CSS-In-JS 라이브러리
### CSS-In-JS가 대세인 이유
1. 중복되지 않는 class명을 고려할 필요가 없다.
2. 컴포넌트와 스타일을 한 파일에서 관리할 수 있다.
3. JS코드와 CSS상태값을 공유할 수 있다.
4. 자동으로 [vendor-prefix](http://www.tcpschool.com/css/css3_module_vendorPrefix)를 붙혀준다.
  - chrome : -webkit-, safari : -moz- 등등
  - 웹 브라우저 공급자가 새로운 실험적인 기능을 제공할 떄 이전 버전의 웹 브라우저에 그 사실을 알려주기 위해 사용하는 접두사


### CSS-In-JS의 동작 방식
1. Runtime
   1. e.g. Styled-component, Emotion
   2. JS Runtime에서 필요한 CSS를 동적으로 만들어 적용
   3. css파일을 생성하지 않기에 webpack에서 css-loader 불필요
   4. 런타임 오버헤드 발생할 수 있음
      1. 런타임에서 동적으로 스타일을 생성하기에 스타일이 수시로 변경된다면 발생 e.g. 스크롤, 드래그 앤 드랍 관련 복잡한 애님에이션
2. Zero-Runtime
   1. e.g. linaria, vanilla-extract, tailwind-css
   2. 런타임에 css를 생성하지 않으면서 페이지를 더 빠르게 로드
   3. JS 번들에서 styles코드를 모두 실행되어야 페이지가 로드
   4. 빌드 타임에 css를 생성해야 하기에 webpack 설정 필요


### 프론트엔드의 흐름, build-time?
1. 최신 CSS-in-JS 라이브러리들이 build-time(zero-runtime)으로 개발되고 있다.
2. TypeScript를 통해서 build-time 및 run-time 이전에 type 체크, code IntelliSense를 제공해준다.
3. webpack, babel를 통해서 다양한 브라우저에서 동작하는 앱을 만든다.
4. Next.js가 각광을 받으면서 CSR에서 SSR로 웹이 개발되어 가고 있다.
5. React, Vue를 넘어서 현재 Svelte가 많은 사람들의 주목을 받고 있다.