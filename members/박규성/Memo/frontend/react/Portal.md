# Portal
## Portal이란?
- ReactDOM의 Portal : 부모 컴포넌트의 DOM계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 기능을 제공
  - 외부에 존재하는 DOM 노드가 React App DOM계층 안에 존재하는 것처럼 연결하는 포탈 기능을 제공

## Portal를 사용하는 이유
1. CSS상속의 영향으로 벗어나기 위해

## 사용법
1. root 태그 옆에 `<div id="modal-root"></div>`를 추가한다.
2. `createPortal`로 포털 사용 
   ```js
   import ReactDom from 'react-dom';  // 2
    const Modal = () => {
      return (
        <>
          {ReactDom.createPortal(<Modal />, document.getElementById('modal-root'))}  // 4
        </>
      );
    };
   ```

## 프로젝트 참고 : [Ding Dong](https://vscode.dev/github/depromeet/Ding-dong-fe/tree/main/src/api)
### Portal.tsx
```js
'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import useIsMounted from '~/hooks/useIsMounted.hooks';

export type PortalProps = {
  documentId?: string;
};

const findWrapperElement = (documentId: string): Element | null => {
  const wrapper = document.getElementById(documentId);
  if (wrapper) {
    return wrapper;
  } else {
    console.warn(`Element with ID '${documentId}'가 root layout에 없어요....추가해주세요.`);
    return null;
  }
};

export const Portal = ({ documentId, children }: PropsWithChildren<PortalProps>) => {
  const ref = useRef<Element | null>(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (documentId) {
      const wrapper = findWrapperElement(documentId);
      ref.current = wrapper;
    } else {
      ref.current = findWrapperElement('portal');
    }
  }, [isMounted, documentId]);

  if (!(isMounted && ref.current)) return null;

  return createPortal(children, ref.current);
};

```
1. DOM이 생성이 되면 `useEffect`가 실행된다.
2.  `findWrapperElement(documentId)`로 `documentId`에 해당하는 DOM을 찾는다.
    1. `findWrapperElement` : `document.getElementById()`를 커스텀한 함수
 3. 해당하는 DOM에 `children`으로 받은 노드와 위치(`ref.current`)를 넘겨준다.

### AnimatedPortal.tsx
```js
'use client';

import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { PropsWithChildren } from 'react';

import { Portal } from '~/components/Portal';

type AnimatedPortalProps = {
  motionProps: MotionProps;
} & PropsWithChildren;

export const AnimatedPortal = ({ children, motionProps }: AnimatedPortalProps) => {
  return (
    <Portal>
      <AnimatePresence>
        <motion.div {...motionProps}>{children}</motion.div>
      </AnimatePresence>
    </Portal>
  );
};

```
- Portal에 `AnimatePresence`와 `motion.div`(framer-motion)를 사용하여 애니메이션을 추가한 컴포넌트

## ToastMessageProvider.tsx
```js
'use client';
import { AnimatePresence, motion } from 'framer-motion';

import { Portal } from '~/components/Portal';
import { ToastMessage } from '~/components/ToastMessage/ToastMessage';
import { useToastMessageStore } from '~/stores/toastMessage.store';

export const ToastMessageProvider = () => {
  const { toastMessageList } = useToastMessageStore();
  return (
    <Portal documentId="toast-portal">
      <div className="fixed left-0 right-0 top-0 z-toast w-full px-layout-sm">
        <AnimatePresence initial={false}>
          {toastMessageList.map(({ toastId, message, type }) => {
            return (
              <motion.div
                key={toastId}
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                exit={{ y: -200 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-60pxr w-[calc(100vw-40px)]"
              >
                <ToastMessage type={type} message={message} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </Portal>
  );
};

```
1. `useToastMessageaStore`에서 toast message를 가져온다.
2. `Portal`에 `documentId`를 넘겨준다.
3. `fixed`와 `left-0`, `left-0` 등을 통해 가운데로 위치시킨다.
4.  `AnimatePresence`와 `motion.div`를 통해 애니메이션을 추가한다.
5.  `useToastMessageaStore`에서 가져온 toast message를 map함수를 통해 하나씩 `ToastMessage`컴포넌트에 넘긴다.

### ToastMessage
```tsx
import { ToastMessageModel, ToastMessageType } from '~/stores/toastMessage.store';
import { tw } from '~/utils/tailwind.util';

type ToastMessageProps = Omit<ToastMessageModel, 'toastId'>;

const colors: Record<ToastMessageType, string> = {
  error: 'bg-grey-500 text-white',
  success: 'bg-grey-500 text-white',
  info: 'bg-grey-500 text-white',
};

export const ToastMessage = ({ message, type }: ToastMessageProps) => {
  return <div className={tw('rounded-[12px]  p-16pxr text-b2', colors[type])}>{message}</div>;
};

```