# Context API
## Context API란?
- Context API : 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공하기 위함
- context는 전역적으로 데이터를 공유할 수 있는 방법


### Context API를 써야하는 상황
- 리액트 공식문서 : [`context를 사용하면 컴포넌트를 재사용하기 어려워지므로 꼭 필요할 때만 쓸 것`](https://legacy.reactjs.org/docs/context.html#before-you-use-context)을 권장
- context보다 컴포넌트 합성이 더 간단한 해결책이 될 수 있음