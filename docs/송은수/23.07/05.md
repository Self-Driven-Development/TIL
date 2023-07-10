---
title: "05 (수)"
tags: ["졸전", "Edit"]
---

# I

### 졸업전시회

여자친구 졸전을 갔다왔다. 멋진 작품들을 보면서 나도 빨리 한 분야의 전문가가 되고싶다 생각했다.

### 광장시장

광장시장에서 육회랑 마약김밥, 떡볶이를 먹었다.  
저번에 진주육회를 먹어서 이번엔 창신육회를 먹었는데 둘 다 맛있었다.  
떡볶이는 밀떡, 그리고 튀김을 같이 파는 집을 찾고 싶었는데 전부 쌀떡에, 튀김은 팔지 않아서 슬펐다.  
그리고 최근 오픈한 아베베도 가보고 싶었는데 5시 경에 갔더니 매진ㅠㅡㅠ

# Study

### Edit 기능

edit 기능을 추가했다.

```js
const contentChangeHandler = (editContent, content) => {
  const idx = contents.findIndex((ctt) => ctt.content === content);
  const newContent = {
    title: contents[idx].title,
    content: editContent,
    id: contents[idx].id,
  };
  setContents((prev) => prev.splice(idx, 1, newContent));
};
```

처음에 시도했던 방법은 splice를 사용한 것이었다. 하지만 원하는 대로 실행되지 않았다.
<br />

문제점은 불변성 성질이였다.  
state에서 prev는 불변성을 띄려고 한다. 하지만 splice는 새로운 객체를 반환하는 것이 아니라, 기존 배열에 변경을 한다. 반환값 같은 경우는 삭제된 배열이고. 그래서 불변성을 유지하려는 prev에 오류가 발생한 것이다.

```js
setContents((prev) =>
  prev.map((item, i) => {
    if (i === idx) {
      return newContent;
    }
    return item;
  })
);
```
