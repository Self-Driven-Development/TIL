# Record Type vs Index Signature

## Index Signature
- 대괄호로 객체를 접근하는 방법
```js
type humanInfo = { 
  [name: string]: number 
};

let human:humanInfo = {
  '홍길동': 20,
  '둘리': 30,
  '마이콜': 40
};
```
## Record Signature
- Reocrd`<Key, Type>`형식으로 키가 Key이고 값이 Type인 객체 타입
- 위의 방식을 `Record Type`으로 작성한 경우
```js
type humanInfo = Record<string, number>

let human:humanInfo = {
  '홍길동': 20,
  '둘리': 30,
  '마이콜': 40
};
```
- Key로 문자열 리터럴을 허용
```js
type names = '홍길동' | '둘리' | '마이콜';

type humanInfo = Record<names, number>

let human:humanInfo = {
  '홍길동': 20,
  '둘리': 30,
  '마이콜': 40
};```
