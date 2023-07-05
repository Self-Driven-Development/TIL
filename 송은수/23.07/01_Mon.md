---
title: "01 (토)"
tags: ["Memo"]
---
# I
### lck
오랜만에 lck 영상들을 찾아봤다. 롤은 보다보면 시간이 훅 간다. 정신차려보니 두세시간이 훅 지나갔다.   
역시 롤은 인생에 도움이 안된다.
# Study
### 메모 기능 구현
메모기능을 구현하기 위해 버튼이 눌렸을 떄 작동하게 만들어야 했다.
```js
const [whichButton,setWhichButton]=useState({
    Memo:false,
    Map:false,
    WishList:false,
    Movie:false,
    Diary:false,
  });
/*
*/
{!isClicked&& <div className="basic_screen">
        <section className="sec_button">
          <Button onClick={onMemo}>메모</Button>
          <Button onClick={onMap}>지도</Button>
          <Button onClick={onWishList}>위시리스트</Button>
          <Button onClick={onMovie}>영화</Button>
          <Button onClick={onDiary}>일기</Button>
        </section>
        <Calendar className="calender" onChange={onChange} value={value} />
      </div>}
      {isClicked && Object.entries(whichButton).map(([key,value]) => {
        if(value){
          switch(key){
            case 'Memo':
              return <Memo></Memo>;
              break;
            case 'Map':
            case 'WishList':
            case 'Movie':
            case 'Diary':
          }
        }
      })}
```
분기처리를 통해 버튼이 클릭되기 전에는 기본화면이 떠있다가, 버튼이 눌리면 무슨 버튼이 눌렸는지 확인 후 눌린 버튼에 해당하는 컴포넌트를 띄워준다.
***
```js
<form className="memo_input" method="GET" onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="제목"
          value={title}
          className="memo_title_size"
          onChange={titleHandler}
        />
        <Input
          type="text"
          placeholder="내용"
          value={content}
          className="memo_content_size"
          onChange={contentHandler}
        />
        <ColorButton>Insert</ColorButton>
      </form>
```
메모를 입력받기 위해 memo_input을 만들었다. 이미 만들어 놓은 컴포넌트들을 재활용 해가며 만들었다.
### 부딪힌 문제들
- ForEach,map의 차이점   
ForEach는 반환을 하지 않는 반면 map은 반환을 한다. 그냥 순회할 때는 ForEach를 사용하고, 반환해야할 것이 있다면 map을 사용한다.
- align-items, text-align 구분하기
- justify-contents: 기준선기준 정렬, align-items: 기준선 수평방향 정렬
- 버튼같은것들은 앵간하면 컴포넌트화 시키기
