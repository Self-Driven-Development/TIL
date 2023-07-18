# forwardRef

## ref
- DOM객체에 접근하기 위해 사용
- ref와 state간의 가장 중요한 차이점 : reactivity 여부
  - reactivity : 할당된 값의 변경이 react의 렌더링을 트리거하지 않는다.

1. 함수형 컴포넌트에서는 `useRef`를 이용하여 `ref`를 선언하고 초기화한다. 
2. `ref`를 생성하게 되면 내부에 `current`라는 변수를 가지고 있는 하나 객체로 생성이 된다.
3. ref에 할당하는 값은 자동으로 이 `current` 변수에 저장된다.

- `componentDidMount`나 `useEffect`안에서 사용. 즉, DOM객체는 실제로 메모리 상에 생성된 후에 `ref`를 통해 조회 가능
  - 이 DOM객체가 생성되는 시점은 렌더링 및 마운트 이후이기에 `ref`를 안전하게 사용하기 위해 `componentDidMount`나 `useEffect` 안에서 사용

## forwardRef
- 컴포넌트로 `ref`를 전달하기 위해 사용
- 컴포넌트에 `ref`를 바로 할당하는 경우, DOM객체가 바인딩되는 것이 아니라 React 경고 메시지와 함께 `null`이 바인딩 된다. 이럴 떄 `forwardRef`를 사용하여 외부에서 주입하는 `ref`를 컴포넌트 내부의 React Element에 전달할 수 있다.