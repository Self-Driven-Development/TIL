# Typescript

## 1. 리터럴 타입
- `let`이나 `var`로 선언할 경우, 이 변수의 값이 변경될 가능성이 있기에 `string`이나 `number`와 같은 타입으로 선언한다.
- `const`로 선언할 경우, 이 변수의 갑싱 변경될 가능성이 없기에 해당 값으로 타입을 지정함
  - e.g. `const a = 1;` : `a`의 타입은 `1`이다.
- e.g. 
  ```js
  type Easing = "ease-in" | "ease-out" | "ease-in-out";
  const Easing1: Easing = "ease-in";
  ```
  - 허용된 3개의 문재열이 아닌 다른 문자열을 사용하게 되면 오류 발생

## 2. 제네릭 타입
```js
function identity<T>(arg: T): T {
    return arg;
}
```
- 유저가 준 인수의 타입을 캡처하고, 이 정보를 나중에 다시 또 사용
- `.length`멤버가 있는 타입(string,number[] 등)을 인자로 사용하고 싶다면, 제약조건을 명시하는 인터페이스를 만들면 됨
  ```js
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
      console.log(arg.length);  // 이제 .length 프로퍼티가 있는 것을 알기 때문에 더 이상 오류가 발생하지 않습니다.
      return arg;
  }
  ```


## 3. as
- [Typescript Assertion(타입 단언)](https://velog.io/@csw98213/TypeScript-as) : 내가 TS보다 어떤 값의 타입을 보다 명확하게 알고 있는 경우 사용
  - 컴파일러에 의해 제거되며 코드의 런타임 동작에는 영향 X

## 4. ComponentProps
- `div`, `span`과 같은 태그에 대한 타입
```js
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;
```
- 해당 태그에 대한 props 타입 선언도 가능
```js
import { ComponentProps } from "react";
type MyDivProps = ComponentProps<"div"> & {
  myProp: string;
};
const MyDiv = ({ myProp, ...props }: MyDivProps) => {
  console.log(myProp!);
  return <div {...props} />;
};
```
- 이미 존재하는 컴포넌트의 타입으로 선언도 가능
```js
const SubmitButton = (props: { onClick: () => void }) => {
  return <button onClick={props.onClick}>Submit</button>;
};
type SubmitButtonProps = ComponentProps<
  typeof SubmitButton
>;
```


## Refernce
- [const](https://velog.io/@jkzombie/Typescript-%EC%9D%B5%ED%9E%88%EA%B8%B0)
- [ComponentProps](https://www.totaltypescript.com/react-component-props-type-helper)