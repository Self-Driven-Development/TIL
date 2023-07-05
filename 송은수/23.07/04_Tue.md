---
title: "04 (화)"
tags: ["Link","Delete","Modal"]
---
# I
### 느린 것을 걱정하지 말고, 멈춰서는 것을 걱정하라
### 택1?
감성 vs 계산적, 선의의 거짓말 vs 진솔.   
연예인은 연기자. 연애는?
# Study
### Link
링크를 사용하는 방법. 기존에 나열된 버튼을 감싸거나, 버튼안에 넣거나 하는 방법으로 구현하려고 했다. 하지만 직계부모?의 `display:flex`성질이 Link에 적용이 되며 문제가 발생했다. 이를 해결하기 위해 찾은 방법들은
```js
<Link className="button_link" to="/Memo"><Button>메모</Button></Link>
```
1. Button에 적용된 css를 Link로 옮기기   
스타일링 문제가 발생했는데, Button에 적용된 스타일을 Link로 가져오는 과정에서 width등 특정 속성들은 변환이 필요했다.
```js
const navigate=useNavigate();
  const memoHandler=()=>{
    navigate('/Memo');
  }

<Button onClick={memoHandler}>메모</Button>
```
2. navigate 사용하기   
click이 발생하면 navigate이 발생하게 한다.
<br><br/>

상황에 따라 무엇을 사용할지 판단하면 될 거 같다.
### overflow
overflow만 적용하니 제대로 적용되지 않았고 max-height를 지정하고 하니 정상적으로 되었다.
### Delete 버튼
```js
//Memo.js 
<MemoList title={item.title} content={item.content} onDelete={deleteHandler}></MemoList>
```
```js
//MemoList
<PortalMemoModal onClose={offModalHandler} isOpen={isModalOpen} onDelete={onDelete} title={title}/>
```
```js
//MemoModal.js
<button onClick={deleteHandler} className="memoModal_button_delete">
  삭제
</button>
```
Memo.js에 정의되어 있는 deleteHandler를 modal의 delete버튼까지 전달했다. 지금 같은경우 벡엔드 혹은 로컬저장소를 사용하지 않고 있기 때문에 Memo.js에 저장되어있는 객체배열과 통신해야해서 drilling을 사용했는데 사용하게 되면 modal창에서 바로 통신하면 될 것이다.
### Modal
delete버튼을 눌렀을 떄 바로 삭제되면 UX적으로 좋지 않으므로 모달창을 띄우고, 그 안에서 버튼을 눌러 삭제시켰다.   
modal창도 button을 재활용하는 것처럼 재활용할 수 있을 거라 생각했는데 그렇지 않았다. component에 만드는게 아니라 page에 가져와서 관리했다.
```js
export default function MemoModal({ onClose, isOpen, onDelete,title }) {
  if (!isOpen) return null;

  const deleteHandler=()=>{
    onClose();
    onDelete(title);
  };
  return (
    <div className="memoModal_background" >
      <div className="memoModal">
        <h1 className="memoModal_title">메모 삭제</h1>
        <p className="memoModal_content">
          정말 삭제하시겠습니까?
          <br />
          삭제한 메모는 되돌릴 수 없습니다.
        </p>
        <div className="memoModal_button">
          <button onClick={onClose} className="memoModal_button_close">
            닫기
          </button>
          <button onClick={deleteHandler} className="memoModal_button_delete">
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
```
background를 누르면 닫아지는기능도 구현해볼 생각이다.
<br><br/>

modal을 구현하는 과정에서 modal_background에는 `opacity:0.9`를 적용, modal에는 `opacity:1`을 적용하고 싶었다. 부모의 0.9가 자식에게 영향을 미쳐 최댓값이 0.9로 설정되었다. 해결책은 rgba(a,a,a,opacity) 였다.
