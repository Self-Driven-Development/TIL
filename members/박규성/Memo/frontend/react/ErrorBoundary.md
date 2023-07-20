# ErrorBoundary

- ErrorBoundary : 리액트를 사용하여 구현 시 사용되는 컴포넌트 에러를 핸들링하는 방법
- 에러로 인해 컴포넌트가 깨지는 경우 대체 컴포넌트(fallback component)를 보여주도록 하는 것이 Error Boundary
- 기본적으로 Error Boundary는 클래스형 컴포넌트에서만 사용 가능. 함수형 컴포넌트에서 사용하기 위해서는 `react-error-boundary`패키지 설치하여 사용