# Next.js 13에서 바뀐 점
1. app 디렉토리 
   1. 기존 page 디렉토리 라우팅 -> app 디렉토리 라우팅 e.g. `app/board/page.tsx`
2. layout
   1. 여러 페이지에 적용하고 싶은 레이아웃 컴포넌트를 가장 상위 폴더에 넣어주면 됨 e.g. `app/board/layout.tsx`
3. 스트리밍 (로딩)
   1. 해당 컴포넌트의 콘텐츠가 로딩되는 동안 `loading.tsx`컴포넌트를 출력
   2. `layout.tsx`와 `page.tsx`아래 하위 항목을 `<Suspense>`로 감싸주면 적용할 수 있음
4. Data fetching 방법 변경
   1. 기존 `getServerSideProps`, `getStatisProps` -> React Server Component에서 fetch 하면됨
   2. [참고](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
   3. Server Component에서는 `cookies()`, `headers()` 등 강력한 서버 함수 제공
5. 새로운 `next/image`
   1. altr가 필수로 바뀜
   2. 성능 향상
6. 글꼴 시스템 `@next/font`
   1. 구글 글꼴을 쉽게 가져다 쓸 수 있게 됨 (`inter`)
7. React 18.2, Node.js 14부터 지원
8. Next/link를 더이상 a태그랑 같이 안써도 됨