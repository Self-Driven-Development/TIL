---
title: 'frontend'
---

# Copilot
코파일럿을 도입했다. 코파일럿을 무료로 이용하기 이해 학교에서 영어 재학증명서를 떼 github student pack을 가입했다.

코파일럿을 사용하기로 한 결정적인 이유 몇가지
- 숙련도 어느정도 생김
  이제 나도 초보딱지는 뗀 거 같다. 처음배울때는 ㄱㄴㄷㄹ 하나하나 중요하지만, 문법을 배우는 단계에서는 이런 부분은 생략해도 되잖아?
- 자동완성, 추천
  생각해보면 TS를 도입한 이유와 비슷한거 같다. 에러방지와 자동완성을 위해.   
  어떤 타입을 선언해야되는지 헷갈릴때, 이 코드가 맞는지 헷갈릴 때 copilot의 도움을 받을 수 있다.

# framer-motion
인터넷에 검색해봤을 땐 어려워 보였는데, 주혁이가 하는 걸 보니 쉬워보였다. CSSTransition보다 훨씬 쉬워보이니 다음부턴 이걸 이용해야겠다.

## 기능
`npm i framer-motion`깔아주고

`import {motion} from framer-motion`import하면 사용준비 완료

사용하고 싶은 곳에, 예를들어 div라면 `<motion.div> </motion.div>`처리해주면 끝이다.

### animate
animate 속성을 사용해 애니메이션을 부여한다.
```ts
animate={
  showSearchInput
    ? { opacity: 1, y: 0, display: 'block', width: '100%' }
    : { opacity: 0, y: -50, display: 'none', width: '0%' }
}
```
중괄호를 통해 속성을 부여할 수 있다.

이렇게 변수를 앞에 두면 생기고 없어질 때 효과를 부여할 수 있다.
### variant
중괄호가 길어지면 보기 불편함으로, 변수를 생성하고 `variant={변수}`를 선언해 animate 안에서 사용할 수 있다.

### AnimatePresence
animate 내부에 변수를 통해 exit 애니메이션을 구현할 수도 있지만, 가독성이 좋게 AnimatePresence를 감싸줘 처리할 수도 있다.
```ts
<AnimatePresence>
    <motion.img
      key={image.src}
      src={image.src}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
</AnimatePresence>
```
감싸주고, inital, exit를 사용해 생기고 사라질때의 애니메이션을 부여할 수있다.

### etc
`whileHover`, `drag`, `layout`등 다양하게 사용할 수 있다. 조금 더 고급진 애니메이션을 적용할 때 사용하면 될 것 같다.

# forwardRef
부모요소에서 자식요소에 접근하기 위해서 필요하다. 근데 ts를 쓰는데는 너무 복잡해서 애먹었다.

ref나 querySelector나 둘다 똑같이 DOM에 접근하는 건데, 그냥 후자 쓰는게 편한 거 같다.

# framer-motion 비동기?
버튼을 누르면 input창이 나오게 만들었다. 여기다가 돔 접근을 활용해 포커싱을 부여하고 있었는데, framer-motion을 사용해 애니메이션을 부여했더니 먹히지 않앗다.

settimeoout을 통해 비동기 처리하니 정상적으로 동작했다.

useLayoutEffect, ref, querySelector같은 방법을 써봤지만 전부 먹히지 않았다. 이유는 잘 모르겠다.

