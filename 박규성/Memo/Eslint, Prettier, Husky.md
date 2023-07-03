# Eslint

- Eslint : Javascript 코드에서 발견되는 **문제시되는 패턴들을 식별하기 위한 정적 코드 분석 도구**
- lint(=보푸라기) : 프로그래밍 쪽에서는 에러가 있는 코드에 표시를 달아놓는 것
- Airbnb Style Guide, Google Style Guide등 가이드들 존재

# Prettier

- Prettier : 개발자가 작성한 코드를 정해진 **코딩 스타일을 따르도록 변환**해주는 도구
- Prettier를 쓰기 시작하면 더 이상 코딩 스타일에 대해 팀원 간에 왈가왈부할 여지가 없음

## Eslint와 Prettier 통합하기

- 실제 프로젝트에서 Prettier는 일반적으로 ESlint와 같은 linter와 통합해서 사용
- 설치 필요 : `eslint-config-prettier`, `eslint-plugin-prettier`
- `.prettierignore`설정 파일로 예외 시키고 싶은 파일이나 디렉토리 지정 가능
  - e.g. `node_modules/`, `dist/`, `build/` 등

# Husky

- Husky : Git Hook을 통해 **커밋이나 푸시 등의 작업 전에 미리 설정한 스크립트를 실행**할 수 있게 해주는 도구
- Git Hooks : Git 과 관련한 어떤 이벤트가 발생했을 때 특정 스크립트를 실행할 수 있도록 하는 기능
  - 클라이언트 훅 : commit, merge가 발생하면 push가 발생하기 전 클라이언트에서 실행하는 훅
    - `pre-commit` : commit을 실행하기 전에 실행
    - `pre-push` : push를 실행하기 전에 실행
    - `commit-msg` : commit 메시지를 작성한 후 실행
  - 서버 훅 : Git repository로 push가 발생했을 때 서버에서 실행하는 훅
