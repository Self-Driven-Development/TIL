# React Query 세팅

## 1. DingDong 프로젝트

```js
// app/layout.tsx
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
        <div id="portal" />
        <div id="toast-portal" />
      </body>
    </html>
  );
};

export default RootLayout;

// app/Provider.tsx
'use client';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRouter } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';

import { ToastMessageProvider } from '~/components/ToastMessage';
import initMocks from '~/mocks';
import { isUnauthorizedError } from '~/utils/auth/error';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enable') {
  initMocks();
}

const Provider = ({ children }: { children: React.ReactNode }) => {
  // TODO: react-query에 필요한 default option 추가하기
  const router = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: error => {
            if (isUnauthorizedError(error)) {
              router.push('/auth/signin');
            }
          },
        }),
      }),
  );

  return (
    <>
      <SessionProvider basePath="/auth">
        <QueryClientProvider client={queryClient}>
          <ToastMessageProvider />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
};

export default Provider;

```
1. `useState`를 이용한 query 선언
   1. 초기 한번만 생성이 되고, 참조 동일성을 유지할 수 있다.
2. `QueryCache`를 이용하여 에러가 났을 경우에 대한 컨트롤
   1. `isUnauthorizedError`(401 / 403 에러)가 발생하면 로그인 페이지로 이동
3. `<SessionProvider>` : Next Auth에서 제공하는 로그인 관련 컴포넌트
4. `ToastMessageProvider` : `Portal`을 이용하여 최상단에 띄움
   1. 해당 `Toast`는 store에서 전역관리