# Slash23

- [slash-23](https://toss.im/slash-23)

## 토스 개발 문화에 대한 오해와 진실

- [LIVE Q&A : 토스 개발 문화에 대한 오해와 진실](https://www.youtube.com/watch?v=Tx9sW-Hvjv8)

### 내용

- 토스만의 피드백 문화
  - 다른 사람으로부터 받는 피드백 : 개발을 하다보면 자신이 구현하는 것에만 집중하다보면 시야가 좁아진다 느껴질 때가 있음. 실제래도 집중해서 한 업무의 임펙트가 실제로 작을 때도 있음. 다른 시야에서 준 피드백을 받으며 더 시야가 넓어짐
- 토스만의 코드 비류 문화나 방식
  - 자주 반복되는 리뷰 : 스타일, lint는 가능하면 자동화
  - 프로덕트의 전체적인 구조나 설계. 비즈니스 로직에 대한 리뷰를 더 많이 할 수 있도록
  - "코드와 나를 동일시하지 않기!"
  - 답을 제안하지 말고 질문만 하기. 정중하게 질문만 하면 상대방이 알아서 답을 찾아서 좋은 방안을 줌

~13:32

---

# Server-driven UI로 토스의 마지막 어드민 만들기

- [Server-driven UI로 토스의 마지막 어드민 만들기](https://www.youtube.com/watch?v=3wxG1WLDONI)

## 내용

### 기존 어드민 페이지의 문제점

1. 너무 많은 어드민

   - 어떤 기능을 어디에서 관리할 수 있는지 찾기 어려움
   - 최소 비용으로만 개발된 불편한 사용성
   - 일관성 없이 파편화된 UI/UX

2. 엄격한 보안 규정
3. 문화와의 호환성

### Admin Platform as a Service

- Server-driven UI : DSL(Domain Specific Language) + DSL을 렌더링하는 프론트엔드 엔진

<img src='https://github.com/guesung/guesung/assets/62178788/8846993a-5c2b-49f4-b20c-62dd38445318' width=600>

### Server-driven UI의 구현

```js
type ServerDirvenUI = (
  dsl: DSL
) => (props: { data: unknown }) => React.ReactNode;
```

- UI DSL을 입력받고, 새로운 함수를 반환
- 이 새로운 함수는 실제 데이터를 입력받고, UI를 반환

### 장점

1. DSL을 실제 화면으로 렌더링하는 코드만 구현하면 무한히 많은 화면을 추가적인 프론트엔드 개발 없이도 찍어낼 수 있음
2. 모든 어드민에 UI/UX를 통일성 있게 개선

### 단점

1. 초기 개발 비용이 매우 비쌈
2. 난이도가 높음

---

# 쏟아지는 페이지 한 방에 관리하기

- [쏟아지는 페이지 한 방에 관리하기](https://www.youtube.com/watch?v=NwLWX2RNVcw)

---

# 달리는 토스 앱에 React Native 엔진 더하기

- [달리는 토스 앱에 React Native 엔진 더하기](https://www.youtube.com/watch?v=6H9WQDRFZYg)
