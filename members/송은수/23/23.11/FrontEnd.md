---
title: 'FrontEnd'
---

# 잡담

프로젝트 발표날까지 일주일 남았는데 아직도 구도 잡고, 스토리북 공부하고, 세팅하고 그러고 있다..

라우터는 그래도 막 쓰는 것 보단 알고 제대로 쓰는 편이 나을 거 같아서 공부했고, 일주일동안은 정말 최대한 웹을 구현해봐야겠다.

# 라우터

라우터 사용법을 아직 잘 모르는 것 같아 공부를 했다.
`npm i react-router-dom`을 설치해주고

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

# Form 컴포넌트

로그인 컴포넌트에서는 로그인 관련 정보만, Input관련 동작들은 전부 input안에서 해결하려다 보다보니 컴포넌트가 굉장히 어려워졌다.

props는 아래로 전해지는 방향으로 짜지는게 좋은데, 끌어올리기를 사용하다보니 함수가 복잡해졌다.

이는 Form이라는 컴포넌트를 만들어 해결할 수 있다. login컴포넌트, input컴포넌트 사이에 제3의 컴포넌트를 만들 수 있을거란 생각을 하지 못햇다.

# 팀프로젝트 git, notion 파기

# github 여러 remote 연결
`git remote add ${}`

# CSS in JS 네이밍컨벤션..

## 마주한 문제
지금 나는 state가 부모, 자식을 넘나들며 사용하고 있다. 이는 좋은 사용법이 아닌듯 해 다음번부터는 이렇게 사용하지 않을 것이다.

이번 프로그램은 이렇게 해서 마무리 지으려고 했는데, 난관에 봉착했다. input의 value는 독립적인 자식 컴포넌트들이 관리하고 있다.   
부모의 특정 버튼이 눌렸을 때, 자식 input의 value를 바꾸고 싶은데 그러기 위해선 자식 input의 함수를 호출해야 하는데, 이걸 수행할 방법이 존재하지 않는다.

그래서 어쩔 수 없이 제 3의 컴포넌트를 만들어 해결해보고자 한다.

## React hook form
요즘은 다들 라이브러리 쓴다길래 나도 써봐야지.. 하면서 알아본 라이브러리
쓰기 전에 제어/비제어 컴포넌트에 대해 이해할 필요가 있었다.

### 제어/비제어 컴포넌트
즉각적으로 변화가 반영되는 것이 제어 컴포넌트다. input의 value와 onChange를 state로 관리한다면 이는 제어 컴포넌트이다.

ref를 사용해 input을 찾고, 제출버튼이 눌렸을 떄 ref를 통해 현재 값이 무엇인지 찾는다면 이는 비제어 컴포넌트이다.

제어는 항상 최신값을 유지, 비제어는 값을 트리거해야 찾을 수 있다. React hook Form은 비제어 컴포넌트이다.

### React hook form의 장점
제 3의 form 컴포넌트를 만들어 실행시켰다.
- 기존 부모-자식을 넘나들며 값을 옮길 필요가 없어졌다.
다시는 이렇게 하지 않겠다고 생각한 부분이긴한데, 너무 쓸데 없는 곳에 힘을 썼다.
```js
//parent.tsx
const [formState, setFormState] = useState<LoginForm>({
    email: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
    text: {
      value: undefined,
      isValid: undefined,
    },
    isFormValid: false,
  })

const changeHandler = () => {
  ...
}

<LoginInput
          errorMessage="올바른 이메일을 입력해주세요."
          placeholder="이메일을 입력하세요"
          isIconVisible={false}
          type="email"
          validator={[VALIDATOR_EMAIL()]}
          onInputChange={changeHandler}
        />
```

```js
//child.tsx
const [inputState, setInputState] = useState<InputInfo>({
    value: '',
    isValid: false,
    touched: false,
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      value: e.target.value,
      isValid: validate(e.target.value, validator), //valid만 있으면 된다 얘만 관리한다
    })
  }
  useEffect(() => {
    onInputChange(type, inputState)
  }, [inputState, onInputChange, type])

  <input
     css={inputStyle}
     type={pwdType}
     value={inputState.value}
     placeholder={placeholder}
     onChange={changeHandler}
     id={placeholder}
    {...props}
  />
```
제 3의 컴포넌트가 필요했던 이유..

- formstate를 따로 만들지 않고 register를 통해 등록시켜 사용했다.

- 그에따라 value로 값을 추적할 필요도, set을 통해 갱신할 필요도 없었다.
말로만 쓰니 별거 없어보이는데,
```js
const changeHandler = useCallback(
    (type: 'email' | 'password' | 'text', val: InputInfo) => {
      setFormState((prev) => {
        const updateField = {
          ...prev[type],
          value: val.value,
          isValid: val.isValid,
        }
        let updateIsFormValid = false
        switch (type) {
          case 'email':
            updateIsFormValid =
              updateField.isValid &&
              prev.password.isValid &&
              (!isSignUpMode || (prev.text!.isValid ?? false))
            break
          case 'password':
            updateIsFormValid =
              prev.email.isValid &&
              updateField.isValid &&
              (!isSignUpMode || (prev.text!.isValid ?? false))
            break
          case 'text':
            updateIsFormValid =
              prev.email.isValid &&
              prev.password.isValid &&
              (!isSignUpMode || updateField.isValid)
            break
        }
        return { ...prev, [type]: updateField, isFormValid: updateIsFormValid }
      })
    },
    [isSignUpMode],
  )
```
이런식으로 useState를 통한 갱신이 자동화되었다.

- validator가 내장되어있어 util함수를 만들 필요가 없어졌다.

- isTouched 고려할 필요 없음

- input에서 enter클릭 시 다음화면으로 자동 넘어감

- 컴포넌트 갈아끼우기 할 때 문제없음

결론 : 버튼은 최소한의 기능만 수행하면 된다.

# 동기/비동기 그리고 blocking/non-blocking
오랫동안 쌓여왔던 궁금증인데, 뭔지 잘 이해가 안돼서 항상 다음에 하지 머 하면서 넘기던 주제

디회개에서도, 컴실에서도 비슷한 문제에 직면했다.
### 디회개
결은 조금 다른데 blocking과 관련된 이슈였다. A,B FF가 있고 각각에 현재상태가 주어져 있다.

n번째 클럭에지가 동작하면 stablize하게 넘어오고 있던 n-1번째 다음상태가 현재상태가 된다.

이때 output은 clk의 영향을 받지 않으면서 동작하지만, 출력은 clk의 에지에서 이루어진다.

ouput은 이번에 새롭게 생성한 n번째 클럭에지에서 생성한 다음상태가 아니라,   
n-1의 다음상태이면서 n의 현재상태로 output을 생산한다.

이후 만들어진 n번째의 다음상태는 logic gate level에서 stable하게 값이 들어가고 있으며, clk delay가 흘러 n+1 클럭에지에 현재상태가 된다.


### 컴실
연속할당문 내에서 `<=`를 통해 값을 할당하면서 원하는 동작이 일어나지 않았다.

이유는 non-blocking이라 값이 동시에 할당되었기 때문인데, 그러면서 의문이 생겼다.

이건 비동기야? 동기야?

이번기회에 정확하게 이해해본다.

### 동기/비동기
- 동기 : 동시에 일어나는
- 비동기 : 동시에 일어나지 않는

이 개념만 놓고보면 프로그래밍에서 보는 비동기와의 개념과 반대다.   
js에서 비동기로 수행된다는거는 요청을 다른 곳으로 보내고, 나는 내 할일을 하고있는 건데, 이게 동기 아니야?
java에서 동기처리를 하면 다른 쓰레드의 접근을 막는다는 건데, 그럼 동시에 일어나지 않게하는거니깐 이게 비동기 아니야?

나는 여기에 주어를 붙이기로 했다. `요청과 결과가`

동기는 요청과 결과가 동시에 이루어져야한다. 그렇기 떄문에 요청을 보내면 결과가 주어져야 하기때문에 block이 된다.

비동기는 요청과 결과가 동시에 일어나지 않는다. 요청을 보내도 결과가 바로 주어질 필요가 없기때문에 non-blocking하게 해야할 일을 할 수 있다.

### blocking/nonblocking
그럼 동기==blocking, 비동기==nonblocking이라고 할 수 있을까?

그렇지 않다. 일반적인 case들이 그럴 뿐, 항상 그렇지는 않다.

비동기는 출력순서와 관련된 개념이고, non-blocking은 병렬실행과 관련된 개념이다.

동기-nonblocking한 예제를 생각해보자.
```java
public class Main {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyTask());

        thread.start();

        System.out.println("Main thread is running...");

        while (thread.isAlive()) {
            System.out.println("Waiting for the thread to finish...");
        }
        System.out.println("Thread finished!");
        
        System.out.println("Run the next tasks");
    }
}
```

자바에서 쓰레드를 실행한다. 쓰레드는 병렬적으로 실행됨으로 non-blocking이다.

하지만 그 다음 while문을 통해 쓰레드가 실행되고 있는지를 무한히 확인한다.

while문이 끝나지 않는 한 다음문장으로 넘어갈 수 없으므로, 이는 동기처리이다.

### js

자바스크립트는 메서드 특성상 비동기+nonblocking 형태를 사용한다.

하지만 반환값끼리의 값을 비교 후 출력해야할 때 등, 동기적으로 처리하고 싶을 때가 있다.

그럴때 `async/await`를 사용할 수 있다.

비동기 문임에도 `await`를 걸어 반환값을 기다리게 해 동기+non-blocking처럼 사용할 수 있다.

하지만 개발자가 보기에만 그럴 뿐, 여전히 비동기 처리임은 기억해야 한다.

자바스크립트는 콜스택을 사용한다. 모든 스크립트가 콜스택을 거치고, 비동기문을 만나면 요청을 하고 이 요청은 큐에 저장된다.

콜스택이 비워진 후 큐에 저장된 반환값들이 처리된다. 큐에 쌓이는건 반환값이 콜백함수에 인자로 들어간 함수이다.

일반적인 then을 활용하게 되면 모든 스크립트가 진행되고 큐에 있는 콜백함수가 적용된다.

`async/await`를 활용하면 await 아래에 있는 모든 스크립트가 콜백함수처럼 처리되어, 콜스택이 비게되어 요청에 대한 응답이 들어온 원래 콜백함수가 실행되고 await 아래에 있는 나머지 스크립트들이 실행되어 마치 동기적으로 작동하는 것처럼 보인다.

# 호카손좌
팝업이 열렸을때 포커스를 위해선 ref를 쓸 수도, querySelector를 쓸 수도 있다.

둘다 useEffect를 사용해야 한다.

뭘 쓰든 상관없지만.. 나는 Selector쓸래.

# navigate 순서
`navigate(-1)`이 가끔은 엉뚱한 데로 갈 수 있다. required를 통해 대체 가능하다.

# 함수 호출
```ts
const friendFindHandler1 = () => {
    console.log('name')
  }
const friendFindHandler2 = (name: string) => {
    console.log(name)
  }
onClick={friendFindHandler1}
onClick={() => friendFindHandler2('name')}
```
말로 설명하기는 힘든데, 잘 구분해서 사용해야 한다.

