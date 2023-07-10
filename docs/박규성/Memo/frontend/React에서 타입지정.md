# React에서 타입지정

### 1. JSX.Element
- JSX.Element는 React에서 사용하는 타입으로, React Component를 반환하는 함수의 반환 타입으로 사용됨
```js
const container: JSX.Element = <div className="container"></div>
```
- 태그까지 지정하고 싶다면 `JSX.IntrinsicElements` 사용
```js
const container: JSX.IntrinsicElements['div'] = <div className="container"></div>
```

# Reference
- [React에서 타입지정](https://velog.io/@nemo/jsx.element)