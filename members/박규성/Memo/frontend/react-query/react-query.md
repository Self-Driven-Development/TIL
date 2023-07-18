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

- [참고](https://kyounghwan01.github.io/blog/React/react-query/basic/#react-suspense%E1%84%8B%E1%85%AA-react-query-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)