# type alias vs interface

## 공통점
- 타입에 이름을 부여해주는 것

## 차이점
### type alias
- 모든 타입에 이름을 달아줄 수 있음
- 새로운 프로퍼티에 열려있지 않음
- 아래와 같이 확장은 불가능 하지만 선언적 확장(동일한 이름으로 선언했을 경우 하나로 합쳐지는 것)은 불가능
```js
type ZpositionType = PositionType & { z: number };

// only interfaces can be merged.
interface PositionInterface {
  z: number;
}
확장을 하는 방법
```


### interface
- 오직 객체 타입에만 이름을 달아줄 수 있음
- 새로운 프로퍼티에 열려있음 (확장 가능)
1. 기존에 선언된 타입을 확장해서 다른 속성을 추가로 선언
```js
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const user: Person = {
  name: 'al-bur',
  age: 21,
};
```

2. 라이브러리를 사용하는 상황에서 추가적으로 타입의 속성 선언
```js
// @emotion/react/types
export interface Theme {}

// emotion.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof Colors;
  }
}
```