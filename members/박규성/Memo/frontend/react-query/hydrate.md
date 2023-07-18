# Hydration

- CSR의 `초기 로딩 속도 저하, SEO 한계, 느린 인터넷 속도에서 유저가 빈 화면만 보게 되는 유저 경험`이라는 단점을 극복하기 위해 SSR with Hydration 등장
- Hydration : 첫 페이지는 SSR방식으로 하고, 페이지 이동시엔 CSR로 이루어진다.

## React Query에서 SSR 구현하는 방법
### 1. initialData
: SSR 메서드로 불러온 응답을 React Query 기본값으로 넣어주는 방법
```js
export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts } }
}

function Posts(props) {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    initialData: props.posts,
  })

  // ...
}

```
- 여러 컴포넌트에서 React Query 사용 시 해당 컴포넌트까지 `props drilling`해야 하기에 비효율적


### 2. Hydration
: SSR 내에서 prefetch를 통해 쿼리를 불러온 뒤, queryClient에서 dehydrate한 상태값으로 페이지에 전달
- prefetch를 통해 데이터 요청 > 해당 cache를 `dehydrate`해서 클라이언트에 그것을 `rehydrate`
- 이 방법은 SSR 방식의 개발시 원하는 쿼리를 `prefetch`하고 해당 쿼리를 사용하는 컴포넌트에서는 동일한 키로 `useQuery`만 호출하면 됨

- Hydrate : 정적인 메마른 HTML에 수분을 보충(동적인 상태로 변화)하는 과정


# Reference
[https://velog.io/@pjh1011409/React-Query-HydrationSSR](https://velog.io/@pjh1011409/React-Query-HydrationSSR)