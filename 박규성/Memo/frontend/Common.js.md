# CommonJS
- CommonJS : JS를 브라우저에서뿐 아니라 서버사이드 애플리케이션이나 데스크톱 애플리케이션에서도 사용하려고 조직한 자발적 워킹 그룹
- Common : JS를 브라우저에서만 사용하는 언어가 아닌 일반적인 범용 언어로 사용할 수 있겠다는 의지
  - Module 명세 1.0, 1.1, 1.1.1 등 존재
  - Node.js모듈도 Module 명세 1.0 따름

### 역사
1. 2005년 AJAX가 부상하며 JS의 중요성이 그전보다 부각
2. AJAX 활성화와 함께 JS연산이 증가했고, 더 빠른 JS 엔진이 필요
3. 2008년 Google이 공개한 V8 JS 엔진은 기존 JS엔진보다 월등히 빨랐고, 브라우저 밖에서도 충분히 쓸만한 성능 자랑
4. V8엔진의 등장으로 서버사이드 Javascript 진영에도 활기를 불어넣음
5. 2009년 JS에 대한 공동 표준을 정하고 지켜나가기 위해 CommonJS그룹은 CommonJS API 0.1 발표 

## 의문점
### 1. 그렇다면 node.js는 commonJS의 일부인가?
- 브라우저 JS환경에서, JS모듈은 `import`, `export에` 따라 ECMA Script Modules(ES Modules)를 가져오기, 내보내기
- 그러나 Node.js는 기본적으로 CommonJS 모듈을 지원
  - CommonJS 모듈은 `requre()`, `module.exports`를 사용해서 가져오고 내보냄
  - ES Module 형태는 JS module system이 표준화되면서 Node.js v8.5.0에 도입

### 2. CommonJS모듈과 ES모듈의 문법 비교
- CommonJS
  - `require()` : 모듈 가져오기
  - `module.exports` : 모듈 내보내기
  - .js 확장자가 아닌 .mjs확장자를 사용하면 Node.js패키지에서 ES모듈 활성화 가능(import, export 사용 가능)
  - 혹은 `package.json`파일 안에 `"type": "module"`을 추가하면 ES모듈 활성화 가능
-  ES Module
  - `import` : 모듈 가져오기
  - `export` : 모듈 내보내기

### 3. Node.js에서 ES 모듈 및 CommonJS모듈 사용의 장단점
- ES Module은 JS의 표준이고, CommonJS는 Node.js의 기본값이다.
- ES Module형태는 JS Module system을 표준화하기 위해 만들어짐. 재사용을 위해 JS코드를 캡슐화하는 표준형식이 됨
- Common JS Module은 Node.js에 내장되어 있음. Node.js에서 Es Module이 도입되기 전 CommonJS가 Node.js모듈의 표준이었음. 고로 많은 양의 Node.js 라이브러리와 모듈은 CommonJS로 작성이 되어있음. 
  - 브라우저 지원에서, 모든 주요 브라우저들은 ES Module문법을 지원하고 React와 Vue.js같은 프레임워크에서 import/export 가능
  - 이 프레임워크들은 Babel과 같은 트랜스파일을 사용해서 import/export를 이전 Node.js버전이 기본적으로 지원하는 CommonJS의 require()로 바꿔서 컴파일

### 4. 새로운 Node.js 버전은 ES Module을 완전히 지원합니다.
- package.json 파일에 {"type": "module"} 필드를 설정 혹은 .mjs 확장자를 사용하면 ES Module을 사용할 수 있습니다. 
  - 이 경우에 패키지에 있는 모든 코드는 ES modules로 취급되고 require()대신 import/export를 사용할 수 있습니다.

### 5. CommonJS는 동기적으로 모듈을 불러오고 ES Module은 비동기
- CommonJS의 require()는 동기적으로 모듈을 불러옵니다.
  - 이는 대규모 애플리케이션의 경우 성능 문제가 발생할 수 있습니다.
-  ES Module의 import는 비동기적으로 모듈을 불러옵니다.

# Reference
- [CommonJS](https://d2.naver.com/helloworld/12864)