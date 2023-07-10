# TIL 가이드라인

## 목차

[1. TIL 작성 규칙](#1-til-작성-규칙)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.1. md 파일명 작성](#11-md-파일명-작성)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1.1. 이름](#111-이름)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1.2. 컨텐츠](#112-컨텐츠)  
&nbsp;&nbsp;&nbsp;&nbsp;[1.2. md 파일 작성](#12-md-파일-작성)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.2.1. md 파일 작성 규칙](#121-md-파일-작성-규칙)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.2.2. md 파일 작성 주의사항](#122-md-파일-작성-주의사항)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.2.3. front matter 작성](#123-front-matter-작성)  
[2. 직접 로컬에서 실행하기](#2-직접-로컬에서-실행하기)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.1. Dogsounds-TIL 레포지토리 클론](#21-dogsounds-til-레포지토리-클론)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.2. Node.js 설치](#22-nodejs-설치)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.3. pnpm 설치](#23-pnpm-설치)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.4. 실행](#24-실행)  
&nbsp;&nbsp;&nbsp;&nbsp;[2.5. 빌드](#25-빌드)

## 1. TIL 작성 규칙

### 1.1. md 파일명 작성

`이름/컨텐츠/문서.md` 형식으로 작성합니다.

#### 1.1.1. 이름

루트 디렉토리에 자신의 이름으로 디렉토리를 생성합니다.

#### 1.1.2. 컨텐츠

컨텐츠는 이름 카테고리의 하위 카테고리로 생성됩니다.

컨텐츠는 내림차순으로 정렬됩니다.

```md
// 레포지토리

- 이름
  - 23.05
    - 1.md
  - 23.06
    - 1.md
    - 2.md
  - 23.07
    - 1.md
    - 2.md
    - 3.md

// 실제 보이는 화면

- 이름
  - 23.07
    - 1.md
    - 2.md
    - 3.md
  - 23.06
    - 1.md
    - 2.md
  - 23.05
    - 1.md
```

### 1.2. md 파일 작성

#### 1.2.1. md 파일 작성 규칙

빌드 시 md -> mdx 파일로 변환되기 때문에 mdx 파일 작성 규칙을 따릅니다.

- md 파일의 `#` 태그에 들어가는 텍스트는 문서의 제목으로 사용됩니다. 만약 `#` 태그가 없다면 파일명을 제목으로 사용합니다.
- 파일명은 경로로 사용되기 때문에 특수문자를 사용할 수 없습니다. (사용가능한 특수문자: `_`, `-`, `.`)

#### 1.2.2. md 파일 작성 주의사항

- 태그 형식을 작성할 때 닫는 태그 무조건 추가하기
  `ex) <br> -> <br />, <img> -> <img/>, <div></div>`

- `img` 태그의 경우 width, height 속성을 지정할 때 `string` 형식으로 작성하기
  `ex) <img src="..." width="100" height="100" />`

- 태그를 작성한 다음 한 줄 띄우기

  ```md
  // ❌ bad
  <img src="..." width="100" height="100" />
  안녕하세요

  // ✅ good
  <img src="..." width="100" height="100" />

  안녕하세요
  ```

- 파일명은 경로로 사용되기 때문에 특수문자를 사용 지양하기
  `ex) (1).md -> 1.md`

- `숫자_문자` 형식은 실제 경로에는 `문자`로 표시됨
  `ex) 1_1.md -> `이름/컨텐츠/1`

#### 1.2.3. front matter 작성

`front matter`는 md 파일의 상단에 작성되는 메타데이터입니다.

```md
---
title: 문서 제목
description: 문서 설명
slug: 문서 경로
sidebar_label: 사이드바에 표시될 문서 제목
sidebar_position: 사이드바에 표시될 문서 위치
---
```

자세한 내용은 공식문서의 [front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter) 작성법을 참고하세요.

### 2. 직접 로컬에서 실행하기

직접 로컬에서 실행하고 싶다면 아래 방법을 따라주세요.

#### 2.1. TIL 레포지토리 클론

```bash
git clone https://github.com/Self-Driven-Development/TIL

cd TIL
```

이 때 `vscode`의 우측 하단에 익스텐션을 설치하라는 메시지가 뜨면 설치해주세요.

#### 2.2. Node.js 설치

- [Node.js](https://nodejs.org/ko/) 설치 (LTS 버전 권장)

#### 2.3. yarn 설치

```bash
npm install -g yarn
```

#### 2.4. 실행

```bash
yarn start
```

#### 2.5. 빌드

```bash
yarn build
```

빌드 시 에러가 발생한다면 [작성 규칙](#1-til-작성-규칙)을 확인해서 수정해주세요.
