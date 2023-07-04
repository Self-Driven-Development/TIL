---
title: "03 (월)"
tags: ["화정","Navigate","contextAPI"]
---
# I
### 화정
여자친구 만나러 화정역을 갔다.   
오가면서 지하철에서 공부했는데, 집에서 하는 것보단 잘되었다.
### 웹툰 : 돌&아이
연예계 관련 웹툰을 보고싶었던 때가 있는데, 이 웹툰은 그걸 만족시켜줬다.   
한 엔터의 사장이 교도소에 들어갔다가 원석을 발견하고 데뷔시켜 성공을 그린 웹툰.   
아이돌로 데뷔하기 위한 과정, 과정 속에서 겪는 고난과 고민들, 데뷔하고도 겪어야 하는 일들이 생각보다 현실적으로(어쩌면 내가 보고싶은 것으로)그려져 있어 정주행하기 적당했다.
### 별놈들 : 문돼의 온도, 허위딜러
요즘 유행하는 아는형님이요~ 알고리즘을 타고 들어가다가 별놈들 채널의 시리즈물들을 보게 되었다.   
허세부리는 것을 좋아하지 않는다. 하지만 문돼의 운도에서 문돼를 재밌게 묘사해서 그런 걸 수도 있겠지만, 성공한 사람이 부리는 허세는 꽤나 괜찮아 보였다.   
나도 얼릉 내 가치를 올려야지.
# Study
### Navigate
Link버튼을 통해 a를 구현하는 방법은 무언가 실행되고 나서 작동한다. 하지만 유효성 검사가 실행되고, 즉 로직이 실행되고 참이면 원하는 페이지로 이동하고 싶어서 찾아본 방법은 Navigate.
```js
import { useNavigate } from "react-router-dom";

const navigate=useNavigate();

if (item.id === id && item.pw === pw) {
  navigate("/Home");
}
```
조건이 만족하면, 정의한 변수에 경로를 할당하면 원하는 경로로 이동한다.
### contextAPI
라우터를 사용해 페이지를 분리하였고, 각 페이지에서 통신이 이루어지지 않게 하고 싶다. 기존에 통신하던 방법에서 props를 없애기 위해 찾은 방법은 contextAPI. 쉽게말해서 전역변수이다. 전역적으로 state를 설정해 모든 컴포넌트에서 호출할 수 있게 만드는 것이다.   
다만 주의할 점은, contextAPI가 호출되면 모든 값들이 리렌더링이 되니, 갱신이 자주 일어나지 않는 값들을 여기에 선언해주는 것이 좋다.
```js
//context.js
import React from 'react'

const context = React.createContext();

export default context
```
먼저 context를 만들고,
```js
//ContextProvider
import React, {useState} from 'react'
import context from './context'

export default function ContextProvider({children}) {
  const [loginId, setLoginId] = useState(false);

  return (
    <context.Provider value={{loginId,setLoginId}}>
      {children}
    </context.Provider>
  )
}
```
Provider를 만든다. 전역변수가 호출될 수 있는 구간을 설정하고, 사용할 변수들을 선언, value로 디스트럭쳐할당해준다.
```js
 <ContextProvider>
      <div className="App">
        <Router>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<Login></Login>}
              ></Route>
              <Route
                path="/Home"
                element={<Togethevery></Togethevery>}
              ></Route>
              <Route path="/Memo" element={<Memo></Memo>}></Route>
            </Routes>
          </Layout>
        </Router>
      </div>
    </ContextProvider>
```
그리고 전역변수처럼 사용할 예정이니, App에서 ContextProvider를 Wrapper컴포넌트로 설정해준다.
