# Next.js의 빌드 단계
<img src='https://velog.velcdn.com/images/whwodlf90/post/7de9b930-60cc-427f-8bc1-0ffc0af236ec/image.png' width="400"/>

## 1. Compliling
- Next.js의 코드 -> JS코드로 컴파일링
## 2. Minifing
- 코드의 기능을 변경하지 않으면서 줄바꿈, 공백 같은 불필요한 코드 포맷을 없애줌
## 3. Bundling
- 브라우저에서 최적화된 번들로 파일을 병합
  - 개발 과정에서 나눈 컴포넌트나 함수를 하나의 파일로 합쳐줌
## 4. Code Splitting
- Entry Point에서 필요한 작은 Chunk로 애플리케이션을 분할


## 그 외 용어
- Build : 소스코드를 실행 가능한 상태로 만드는 과정
- Compile : 소스코드를 기계어로 변환하는 과정
  - Syntax, Type Checking을 수행
- Runtime : 프로그램이 실행되고 있는 동안의 동작
  -  0으로 나눠지지 않는 error, memory초과 등의 에러가 발생
- Entry : 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로
  ```js
  // webpack.config.js
  module.exports = {
    entry: './src/index.js'
  }
  ```



# Referecence
- [Next.js와 Next.js의 빌드단계](https://velog.io/@whwodlf90/Next.js%EC%99%80-Next.js%EC%9D%98-%EB%B9%8C%EB%93%9C%EB%8B%A8%EA%B3%84)
- [Runtime vs. Compile Time](https://www.baeldung.com/cs/runtime-vs-compile-time)
- [Entry](https://joshua1988.github.io/webpack-guide/concepts/entry.html#entry)