# CSS
### 1. 반응형 직사각형
```css
.box::after {
  display: block;
  content: "";
  padding-bottom: 100%;
}
```
- tailwind로 구현한다면?
```js
 <div className="before:block before:pb-[100%]">
 ```


 ## 2. scroll-snap-stop
- scroll을 움직였을 때 처음 부분에 맞춰서 스크롤을 멈출 지, 중간에서 멈출 지, 끝에서 멈출 지 설정할 수 있다.
```css
.snaps {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
}
.snap-target {
  scroll-snap-align: center;
}

.snap-force-stop {
  scroll-snap-stop: always;
}
```
### Grid pile 
- 포갤 수 있음