---
title: 'FrontEnd'
---

# 잡담

프로젝트 발표날까지 일주일 남았는데 아직도 구도 잡고, 스토리북 공부하고, 세팅하고 그러고 있다..

라우터는 그래도 막 쓰는 것 보단 알고 제대로 쓰는 편이 나을 거 같아서 공부했고, 일주일동안은 정말 최대한 웹을 구현해봐야겠다.

# 라우터

라우터 사용법을 아직 잘 모르는 것 같아 공부를 했다.
`npx i react-router-dom`을 설치해주고

```js
//index.js

import { BrowserRouter } from 'react-router-dom';
//...
<BrowserRouter>
  <App />
</BrowserRouter>;
//...
```

App을 BrowserRouter로 감싸준다. 라우터를 사용할 준비가 되었다.

```js
//App.js
<Routes>
  <Route path="/" element={<Menubar />}>
    <Route index element={<Home />} />
    <Route path="/movies" element={<Movies />}>
      <Route path=":movieId" element={<Movie />} />
    </Route>
    <Route path="*" element={<div>There's nothing here!</div>} />
  </Route>
  <Route path="/eunsu" element={<Eunsu />} />
</Routes>
```

`<Routes>`를 사용해 감싼다. 그 안에서 다양한 라우터를 부를 수 있다

`<Route>`역시 nest 형식으로 중첩라우트를 사용할 수 있다. 껍질의 URL 이후에 URL을 이어간다

`<Menubar>`같은 경우는 해당 컴포넌트를 중첩된 라우트 내에서 띄우고 싶을 떄 사용된다.  
컴포넌트 내부에서 `<Outlet/>`를 쓰면 중첩된 라우트가 실행된다.

`outlet`을 사용하면 기본 주소(위 예시에서는 루트)는 호출시 아무것도 뜨지 않는다.  
중첨된 라우트에 `index`를 정의해 기본 주소를 꾸밀 수 있다.

## react-router-dom

위에서 나온 BrowserRouter, Routes, Route, Outlet 말고도 자주쓰는 컴포넌트(함수)들이 잇다.

### Link

클릭시 링크로 이동

### NavLink

링크로 이동후 css 적용

### useNavigate

특정 조건 확인후 링크 이동

### useParams

URL에 있는 변수 사용

### useSearchLocation

쿼리스트링에 있는 변수사용

# useState

스케쥴러 한번 정리 했었는데 또 헷갈려서.

스케쥴러는 말그대로 예약되었다가 한번에 호출된다.

'예약'되기 때문에, 버튼을 누른 시점에서 함수를 적용하면 눌리기 이전 state의 값을 가져가고, 연산이 끝난 후 리렌더링과정에서 버튼에 따른 state값이 업데이트된다.

set함수에 값을 그대로 전달하면, 이전과정을 배제하고 새로운 연산을 진행한다

여러번의 연산이 한번의 스케쥴러에서 이루어지기 위해선 순수함수로 이루어진 업데이트함수를 사용해야 한다.

업데이트함수를 쓰다가도 값이 그대로 전달된다면 다시 초기값을 사용해 연산을 하니 주의해야한다.
