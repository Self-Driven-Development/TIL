---
title: "02 (일)"
tags: ["라우터","보드게임"]
---
# I
### 롤 영상 다시 끊기
오늘도 롤 영상을 계속 보고있는 나 자신을 발견했다. 롤 영상 멈춰! 약속.
### 보드게임
로보 77은 역시 생각보다 어렵다.   
르네상스의 거장들이라는 게임을 했는데 스플렌더의 응용버전 느낌이였다.   
무엇보다 오랜만에 공기가 보여서 공기를 해봤는데.. 손이 많이 늙었다ㅠㅠ
# Study
주혁이를 만나서 피드백을 받았다.
### 라우터 사용하기   
나는 지금 컴포넌트를 바꿔 끼어넣는 방식으로 구현하고 있었다. 그래서, 여러가지 버튼이 있으면 그 버튼 중 무엇이 눌렸는지 배열state를 만들어 눌린 버튼만 true로 바꾸고, map함수를 통해 true를 찾고 해당하는 컴포넌트를 실행하는 방식을 구현했다. 하지만 라우터라는 기능이 있었다..   
html의 'a ref'처럼 링킹기능이 있는 거였다. 이렇게 쉬운 방법이 있었는데..
```js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/memo" element={<Memo></Memo>}></Route>
            <Route path="/movie" element={<Movie></Movie>}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
```
주로 App.js에서 페이지를 만들어 관리한다. BrowserRouter로 라우터를 쓸 거라고 알려주고, Routes안에 Route들을 관리한다. Route의 속성들로는 경로를 알려주는 path, path일때 실행될 컴포넌트를 알려주는 element가 있다.
### Layout
다른 페이지지만 같은 레이아웃을 사용하고 싶을 수 있다. 가령 같은 nav바를 사용한다던지. 그럴 때 layout을 사용한다.
```js
import { useLocation } from "react-router-dom";

const location = useLocation();
  if (location.pathname === "/") {
    return <>{props.children}</>;
  }

  return (
    <>
      <Top />
      {props.children}
      <Bottom />
    </>
  );
```
useLocation을 사용하여 현재 path, 현재 경로가 어딘지 알려준다.($\approx$ pwd) pathname으로 이름을 가져와 비교연산을 하여 특정 페이지일때는 제외하고 나머지 경우 동일한 컴포넌트를 같이 실행시킬 수 있다. 자식 Route같은 경우 `props.children`을 사용해 볼러온다.
<br></br>

이러한 이유로 기존 내가하던 작업을 전부 뜯어고쳐야 한다. 하나의 컴포넌트로 구성했기 떄문에 컴포넌트 간에 통신을 하도록 구현했지만, 이 컴포넌트들을 페이지(기능)별로 구분해야하고 페이지 각각은 통신이 이루어지지 않는게 좋다고 한다. 내가 gosu였다면 한 시간 컷이였겠지만.. 저는..ㅠㅠ
### 스케쥴러 문제 발생   
계속해서 스케쥴러 관련한 문제가 발생한다. login창에서도, memo창에서도.   
login창같은 경우, state로 값을 집어넣어서 비교하는게 아니라 value값 자체를 비교한다. 뭔소리냐면, 
```js
 const idChangeHandler = (event) => {
    setId(event.target.value);
  };
```
onChange로 Handler함수가 호출되면 그 함수에서 state값을 변경하고, 이 state값을 조건문에 넣어 검사하려고 하니 계속 이전 값을 사용해서 useEffect를 사용해 이 문제를 해결했다.   
하지만 원초적인 해결책은, Handler함수가 호출되면 event.target.value값자체로 조건문을 돌려 검사하는 것이다.
### 폴더관리
폴더를 어떻게 관리하는게 편할까?
- assets
- components
- hooks
- layout
- pages
components 안에서도 각 기능별로 폴더를 만들어주면 좀더 관리하기가 용이하다.
