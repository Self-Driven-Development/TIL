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

# 친구창의 구성..?

LOGIN_Friends라는 것은 실제로 존재하지 않고, 등록된 USERS중에서, 로그인 한 USER와의 친추관계를 알 수 있어야돼.

친구배열을 만들어서.. CRUD 관리를 해야겠는데? 다만, 이 과정은 벡앤드에서 해줘야 하는 것이라고 생각되기 때문에 더 무언가를 하진 않았다.

backend로부터 받아야 하는 데이터들은 전부 jotai를 통한 전역변수화 시켰다.

# onKeyDown / onKeyPress

영어, 문자로 끝날 때는 별 문제가 생기지 않았지만 한글로 문자열이 끝날 때 채팅방에서 전송버튼을 누르면, 마지막 글자가 반복되는 현상이 생겼다.

찾아보니 composing 문제였다.

## composing

클라이언트에 한글을 입력해보면 마지막 글자에는 언더바가 생기는 데 이를 `composing`상태라 칭한다. 글자가 합성될 수 있는 상태라는 뜻 이다.

이 상태에서 enter가 눌리면, 문자열이 전송되고 composing이 걸려있는 마지막 문자 역시 한번 더 전송되어 이런 오류가 발생한다.

그렇다면 composing상태인 문자는 전송되지 않게 설정하면 되지 않을까?

```ts
const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.nativeEvent.isComposing) return;
  if (e.key === 'Enter') {
    onClick?.();
  }
};
```

composing 상태라면 얼리리턴을 일으켜 다음상태로 가지 못하게 만든다.

# Scroll

스크롤 관련되서 커스텀이 가능하다는 것을 몰랐는데, 여러방법으로 커스텀할 수 있었다.

## Scroll 자동다운

채팅방에서 채팅을 치면 마지막 채팅이 보이길 고대한다.

하지만 보통의 경우라면 스크린뷰는 최상단을 유지하고, overflow가 발생한 곳은 스크롤이 생겨 스크롤 바를 통해 내려갈 수 있다.

```ts
useEffect(() => {
  if (chatRoomRef.current) {
    chatRoomRef.current.scrollTop = chatRoomRef.current.scrollHeight;
  }
});
```

ref를 사용해 변화가 감지될 때마다 스크롤을 가장 아래로 내린다.

## Scroll 없애기

그동안 스크롤이 새로 생성되는게 불편했는데, 안뜨게 설정할 수가 있었다.

```css
::-webkit-scrollbar {
  display: none;
}
```

이렇게 하면 스크롤바가 생성되지 않는다.
-thumb, track등을 통해 커스텀할 수 있다.

# image 업로드

회원가입을 위해선 img 업로드 역시 필요하다.

```html
<label htmlFor="imgUpload">
  <Edit css="{editStyle}" />
</label>
<input type="file" accept="image/*" onChange="{onUploadImage}" hidden />
```

input의 type에 file을 적용하면 img를 받는다. label을 통해 원하는 jpg, svg에 input을 건다.

```ts
const [img, setImg] = useState<string>('');
const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files) {
    return;
  }
  const file = e.target.files[0];
  setImg(URL.createObjectURL(file));
};
```

받은 이미지가 존재하지 않으면 아무것도 실행하지 않고, file이 존재하다면 임시URL을 만들어 설정한다.

# 지역변수 let vs useRef

let은 리렌더링 시 변수가 초기화되지만, useRef는 유지된다.

리액트 스럽게 사용하기 위해선 useRef를 사용하는게 맞지만, 나는 뭔가 let을 사용하고 싶다.

# 채팅방

`chatroom`을 설정해 각각의 채팅방을 만들고, id를 통해 구분했다.

```ts
interface Chatting {
  content: string;
  date: string;
  time: string;
  id: string;
  from: string;
}

interface ChatRoom {
  chatting: Chatting[];
  opponent: string;
  id: string;
}
```

`opponent`를 확인하여 존재하는 채팅방인지 확인, 채팅방이 존재하지 않는다면 다음 채팅방을 만들었다.

각 채팅에선 `from`key를 통해 상대방이 쓴 채팅인지 내가 쓴 채팅인지 구분했다.
