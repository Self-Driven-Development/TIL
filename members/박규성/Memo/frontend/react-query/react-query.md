# React Query
- React Query를 사용함으로써 서버 <-> 클라이언트 데이터를 분리

## React Query의 장점
1. 캐싱
2. get을 한 데이터에 대해 update를 하면 자동으로 get을 다시 수행한다. (예를 들면 게시판의 글을 가져왔을 때 게시판의 글을 생성하면 게시판 글을 get하는 api를 자동으로 실행 )
3. 데이터가 오래 되었다고 판단되면 다시 get (invalidateQueries)
4. 동일 데이터 여러번 요청하면 한번만 요청한다. (옵션에 따라 중복 호출 허용 시간 조절 가능)
5. 무한 스크롤 (`Infinite Queries`)
6. 비동기 과정을 선언적으로 관리할 수 있다.
7. react hook과 사용하는 구조가 비슷하다.
8. Client 데이터와 Server 데이터를 분리

### useQuery
- 데이터를 get하기 위한 api
```js
const Todos = () => {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
    refetchOnWindowFocus: false, 
    // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: data => {
      // 성공시 호출
      console.log(data);
    },
    onError: e => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
      // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
      console.log(e.message);
    }
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

```
- useQuery(`unique Key`, `비동기 ㅎ마수(promise)`, `옵션`)
  - `unique Key` : 배열의 첫 번째 값은 다른 컴포넌트에서 부를 값, 두 번째 값은 query 함수 내부에 인자로 전달
- 비동기로 작동
  - `enabled`사용하여 동기적으로 사용 가능

- `useQueries`이용하여 비동기로 여러개 실행할 수 있음
- QueryCache : 쿼리에 대해 성공, 실패 전처리할 수 있음
```js
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query);
      if (query.state.data !== undefined) {
        toast.error(`에러가 났어요!!: ${error.message}`);
      },
    },
    onSuccess: data => {
      console.log(data)
    }
  })
});

```

### useMutation
- 데이터를 post, update하기 위한 api
- 사용법은 `useQuery`와 동일
- update후에 get함수 간단히 재실행 가능
```js
const mutation = useMutation(postTodo, {
  onSuccess: () => {
    // postTodo가 성공하면 todos로 맵핑된 useQuery api 함수를 실행합니다.
    queryClient.invalidateQueries("todos");
  }
});
```
- 만약 mutation에서 return된 값을 이용하여 get함수의 파라미터를 변경해야 할 경우 `setQueryData`이용

```js
const queryClient = useQueryClient();

const mutation = useMutation(editTodo, {
  onSuccess: data => {
    // data가 fetchTodoById로 들어간다
    queryClient.setQueryData(["todo", { id: 5 }], data);
  }
});

const { status, data, error } = useQuery(["todo", { id: 5 }], fetchTodoById);

mutation.mutate({
  id: 5,
  name: "nkh"
});
 
```

### react Suspense
- Suspense를 사용하여 `loading`을, Error boundary를 사용하여 `error` 핸들링을 직관적으로 할 수 있음
```js
// src/index.js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

```
- 위 경우는 전역으로 `suspense`를 사용하는 경우
- 위처럼 suspense 세팅을 완료했다면 react에서 제공하는 `Suspense` 사용하면 됨
```js
const { data } = useQurey("test", testApi, { suspense: true });

return (
  // isLoading이 true이면 Suspense의 fallback 내부 컴포넌트가 보여집니다.
  // isError가 true이면 ErrorBoundary의 fallback 내부 컴포넌트가 보여집니다.
  <Suspense fallback={<div>loading</div>}>
    <ErrorBoundary fallback={<div>에러 발생</div>}>
      <div>{data}</div>
    </ErrorBoundary>
  </Supense>
);

```

## 캐싱
- 캐싱 : 특정 데이터의 복사본을 저장하여 이후 동일한 데이터의 재접근 속도를 높이는 것
  - fresh한 데이터 : 최신의 데이터
  - 기존의 데이터 : stale한 데이터
- 데이터 갱신하는 타이밍
  1. 화면을 보고 있을 때
  2. 페이지의 전환이 일어났을 때
  3. 페이지 전환없이 이벤트가 발생해 데이터를 요청할 떄
  - 아래의 옵션 제공
  ```js
  refetchOnWindowFocus, //default: true. 브라우저에 포커스가 들어온 경우
  refetchOnMount, //default: true. 새로운 컴포넌트 마운트가 발생한 경우(
  refetchOnReconnect, //default: true. 네트워크 재연결이 발생한 경우
  staleTime, //default: 0. 데이터가 fresh → stale 상태로 변경되는 데 걸리는 시간
  cacheTime, //default: 5분 (60 * 5 * 1000). 
  // 데이터가 inactive(비활성)한 상태일 때 캐싱된 상태로 남아있는 시간
  ```
### staleTime (stle = 썩은)
- 데이터가 fresh → stale 상태로 변경되는 데 걸리는 시간
  - fresh 상태일 때 refetch 트리거(위 3가지)가 발생해도 refetch가 일어나지 않음
  - 기본값이 0이므로 따로 설정해주지 않으면 refetch가 일어났을 때 무조건 refetch 발생

### cacheTime 
- 데이터가 inactive한 상태일 때 캐싱된 상태로 남아있는 시간
  - 특정 컴포넌트가 unmount(페이지 전환 등으로 화면에서 사라질 떄)되면 사용된 데이터는 inactive상태로 변환 > 데이터는 cacheTime만큼 유지
  - cacheTime 이후 데이터는 가비지 컬렉터로 수집되어 메모리에서 해제됨
  - 만약 cacheTime이 지나지 않았는데 해당 데이터를 사용하는 컴포넌트가 다시 mount되면, 새로운 데이터는 fetch해오는 동안 캐싱된 데이터를 보여줌
  - 즉, 캐싱된 데이터는 계속 보여주는 게 아니라 fetch하는 동안 임시로 보여줌

### React Query가 SWR보다 좋은 점
1. Devtools : 데이터 흐름을 파악할 수 있음. SWR은 서드 파티 라이브러리를 이용해야 함
2. 무한 스크롤 구현
   1. `getPreviousPageParam`, `fetchPreviousPage`, `hasPreviousPage`와 같은 다양한 페이지 관련 기능 존재
3. `select`를 사용해 raw data로부터 원하는 데이터 추출하여 반환할 수 있음
4. data optimization
5. garbage Collection : 캐싱된 데이터가 메모리에서 해제되는 시점을 정할 수 있음

### React Query v4에서의 변경점
1. 라이브러리명이 기존 `react-query`에서 `@tanstack/react-query`로 변경
2. Query key에 입력값이 하나여도 무조건 배열로 넣어야 함
3. useQueries에 여러 쿼리를 넘길 떄 queries를 key값으로 설정
4. query가 잘못된 경우 `undefined`를 반환하지 않고 error처리

## Query Key
- query cache는 Key가 직렬화되어 있고, Key는 해쉬되어 관리된다.

```js
useQuery(['todos', { status, page }], ...)
useQuery(['todos', { page, status }], ...)
useQuery(['todos', { page, status, other: undefined }], ...)
```
- 위 쿼리는 Key가 모두 같으므로 같은 쿼리로 취급한다.
- Key는 쿼리에 대해 unique해야 한다.
- React Query는 cache에 Key를 이용해서 접근한다.

### 객체로 Key 관리
```js
const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
  details: () => [...todoKeys.all, 'detail'] as const,
  detail: (id: number) => [...todoKeys.details(), id] as const,
}
// 🕺 모든 todos 삭제
queryClient.removeQueries(todoKeys.all)

// 🚀 모든 리스트 invalidate
queryClient.invalidateQueries(todoKeys.lists())

// 🙌 prefetch 하나의 todo
queryClient.prefetchQueries(todoKeys.detail(id), () => fetchTodo(id))
```
- 권장하는 방식
- 유지보수에 용이



### `invalidateQueries`
- 캐시된 데이터를 무효화하는 함수
  - 해당 데이터가 즉각 stale 상태가 되어 refetching한다.
  ```js
  const queryClient = useQueryClient();
  const {mutateAsync} = useMutation(postLogout,{
    onSuccess: () => queryClient.invalidateQueries(["todos"]);
  })
  
  ```
### `setQueryData`
- 쿼리 데이터를 수동으로 설정
  ```js
  const queryClient = useQueryClient();
  queryClient.setQueryData(['todos', 'list', { filters }], (previous) =>
    previous.map((todo) => (todo.id === newTodo.id ? newtodo : todo))
  )
  ```

### `cancelQueries`
- 쿼리를 취소하는 함수
  ```js
  const queryClient = useQueryClient();
  const {mutateAsync} = useMutation(postLogout,{
    onSuccess: () => queryClient.cancelQueries(["todos"]);
  })
  ```

### Mutate vs MutateAsync
- `mutate` : 아무것도 반환 X
- `mutateAsync` : 돌연변이 결과를 포함한 Promise 반환
  - 이를 사용할 경우 `Promise`를 직접 제어할 수 있어서 오류를 직접 처리해야 함
  - 비추



- [참고](https://kyounghwan01.github.io/blog/React/react-query/basic/#react-suspense%E1%84%8B%E1%85%AA-react-query-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)