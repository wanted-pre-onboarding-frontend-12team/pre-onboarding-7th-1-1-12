# 원티드 프리온보딩 7차 1차 과제

## 과제 설명

> [원티드 프리온보딩 프론트엔드 선발 과제](https://github.com/walking-sunset/selection-task)의 Best Practice 를 만들고 제출합니다.

- 진행 기간 : 2022.10.26 - 2022.10.28


<br />

## 데모 링크

[🚀 GO TO DEMO](https://graceful-heliotrope-314b9b.netlify.app/)

- 테스트 계정
  - Email: team12@gmail.com
  - Password: asdf1234

<br />

## 실행 방법

```bash
# Clone Repo
git clone https://github.com/wanted-pre-onboarding-frontend-12team/assignment-week-1-1-team12.git

# Install Dependency
yarn install

# Run Project 
yarn run dev

# Build Project
yarn run build
```

<br />

## 12팀 소개

| <img src="https://avatars.githubusercontent.com/u/40523487?v=4"/> | <img src="https://avatars.githubusercontent.com/u/50790145?v=4"/> | <img src="https://avatars.githubusercontent.com/u/108744804?v=4"> | <img src="https://avatars.githubusercontent.com/u/97100045?v=4"/> | <img src="https://avatars.githubusercontent.com/u/92246102?v=4"> | <img src="https://avatars.githubusercontent.com/u/96763714?v=4"> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| <a href="https://github.com/od-log">[팀장] 오다영</a>             | <a href="https://github.com/youngminss">[부팀장] 위영민</a>       | <a href="https://github.com/jong6598">김종현</a>                  | <a href="https://github.com/hopak-e">박상호</a>                   | <a href="https://github.com/forest-6">임승민</a>                 | <a href="https://github.com/kyunghee47">피경희</a>               |


<br />

## 우리팀의 Best Practice 도출 & 동료 학습 방식

1. Convention Rule 을 정하고, 모든 팀원이 실천합니다.

2. 최소한의 공통 기술 스택을 설정한 후에, 설정한 브랜치 전략으로 각자 최선의 코드를 작성합니다.

  + [팀 Wiki 를 최대한 활용하고자, 각 팀원들 페이지를 만들어 본인이 작업하면서 기록할 것을 남기고 서로 공유할 수 있도록 하였습니다.](https://github.com/wanted-pre-onboarding-frontend-12team/assignment-week-1-1-team12/wiki)

3. 각 assignment 단계를 수행할 때마다, Live Share 에 모여 Best Practice 를 만들어 갑니다.


<br />

## 과제 달성 사항 및 해결 방법

#### 기본 라우팅 설정 - Assignment 0

- [x] `/` 경로에 로그인 / 회원가입 기능을 개발해주세요
  - [x] 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
  - [x] 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.

#### 로그인 / 회원가입 - Assignment 1

- [x] 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - [x] 이메일 조건: `@` 포함
  - [x] 비밀번호 조건: 8자 이상
  - [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
  - [x] 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

#### 로그인 / 회원가입 - Assignment 2

- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동해주세요
  - [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

#### 로그인 / 회원가입 - Assignment 3

- [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - [x] 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
  - [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요

#### 투두 리스트 - Assignment 4

- [x] `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
- [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

#### 투두 리스트 - Assignment 5

- [x] 투두 리스트의 수정, 삭제 기능을 구현해주세요
  - [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
  - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
  - [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요


<br />

## 레포지토리 구조(src)

```text
├─ constants                   // Constants Modules
│   └─ hint.ts                 // 로그인 / 회원가입 validation 및 error 메시지 상수
│
├─ utils                       // Utilization Modules
│   └─ interfaces.ts           // 프로젝트 공유 타입 모음
│
├─ api                         // API Modules
│   ├─ auth.ts                 // 로그인 / 회원가입 API
│   ├─ todo.ts                 // 투두 앱 API
│   └─ requester.ts            // Axios Http Client Module
│
├─ styles                      // Style modules
│   ├─ GlobalStyle.tsx         // 전역 스타일링 컴포넌트
│   └─ Theme.ts                // 커스텀 테마 
│
├─ components                  // Components Modules
│   ├─ feature                 // 특정 도메인 컴포넌트 모음
│   │    ├─ AddTodoForm        // 투두 아이템 추가 폼 컴포넌트
│   │    │    ├─ index.tsx
│   │    │    └─ styled.ts
│   │    │
│   │    ├─ Todo               // 투두 아이템 컴포넌트
│   │    │    ├─ index.ts
│   │    │    └─ styled.ts
│   │
│   ├─ shared                  // 공통 컴포넌트 모음
│   │    ├─ Header             // 헤더 컴포넌트
│   │    │    ├─ index.tsx
│   │    │    └─ styled.ts
│   │    │
│   │    ├─ Footer             // 푸터 컴포넌트
│   │    │     ├─ index.ts
│   │    │     └─ styled.ts
│
├─ pages                        // 페이지 컴포넌트
│   ├─ Auth                     // 로그인 / 회원가입 페이지
│   │   ├─ index.tsx
│   │   ├─ styled.ts
│   │   └─ useInput.tsx         // useInput 커스텀 훅 ( 로그인 / 회원가입 정보 입력에 대한 로직이 담긴 )
│   │
│   ├─ Todos                    // 투두 리스트 페이지 
│   │   ├─ index.tsx
│   │   ├─ styled.tsx
│   │   └─ useTodos.tsx         // useTodos 커스텀 훅 ( 투두 리스트 CRUD 에 대한 로직이 담긴 )
│   │
│   └─ index.tsx
│
├─ route                       // 라우터 모듈
│   └─ index.tsx
│
├─ App.tsx                    
├─ index.tsx
└─ vite-env.d.ts
```

## 기술 스택

`TypeScript(메인), JavaScript(서브)`

+ 타입스크립트에 익숙하지 않은 분들이 많았지만 공동으로 작업하기 위해서 코드의 가독성을 높이고, 디버깅이 쉬운 타입스크립트를 선택하게 되었습니다. 자바스크립트는 런타임 환경에서 오류를 확인할 수 있는 반면에 타입스크립트는 컴파일 단계에서 오류를 확인할 수 있어서 공동 작업에서 빠르게 오류를 확인하고, 피드백을 공유할 수 있었습니다. 

`React`

+ Component 단위 작성 
컴포넌트는 UI를 구성하는 개별적인 뷰 단위로서, UI를 개발을 레고라고 한다면 컴포넌트는 블록 역할을 하게 됩니다. 이러한 특징은 하나의 컴포넌트를 여러 부분에서 사용할 수 있게 해준다. 재사용성은 생산성과 유지 보수를 용이하게 해줍니다. 하나의 요소의 변화가 다른 요소들의 변화에 영향을 미치는 복잡한 로직을 업데이트하는 까다로운 작업에 경우, 컴포넌트의 재사용 기능으로서 보완할 수 있게 됩니다. 

+ Virtual DOM 
유저의 인터랙션에 의해 상태 변화가 일어나면 브라우저 작동 원리에 의해 랜더링 과정을 반복하게 됩니다. view에 변화가 있으면 옛 가상 돔과 새 가상 돔을 비교해서 변경된 내용만 DOM에 update를 하는 방식으로 작동합니다. 이를 통해서 브라우저 내에서 발생하는 렌더링을 줄이면서 성능을 개선시킬 수 있습니다.


`styled-components` 

+ css in js 라이브러리는 모듈 단위로 css를 사용할 수 있고, 재활용이 쉽습니다. 다양한 css in js 라이브러리가 있지만 대다수의 팀원들이 경험해보고, 익숙한 css라이브러리이기에 채택했습니다. 기존에는 jsx 파일 안에 styled-components 코드를 함께 사용했지만, best practice를 고민한 결과 styled 파일을 컴포넌트 폴더 하위에 index.ts, styled.ts를 함께 작성했습니다.


`Vite`

+ Vite의 사전 번들링 기능은 esbuild를 사용해, 기존 번들러 대비 빠른 속도를 가지고 있으며, native esm을 사용하여 import 이후의 코드들을 실제로 사용될때 처리를 하는 방식을 채택하고 있습니다. 이미 캐시된 데이터를 기반으로 수정된 모듈과 관련된 부분만을 교체하여 소스코드 업데이트 시 모든 파일을 번들링하고 다시 웹페이지에서 불러오는 비효율을 개선하여 속도를 올리는 vite의 방식은 앞으로 커질 프로젝트 규모나, 이후 현업에서 경험할 대규모 프로젝트를 대비하여 속도나 방법면에서 좋은 선택이라고 생각되어 채택하게 되었습니다.

`ESLint, Prettier`

+ ESLint 를 사용하면 코드를 깔끔하게 포매팅할 수 있고, 사용하지 않는 변수의 존재나 세미콜론 중복 같은 실수들을 알려주어 코드의 품질 향상을 기대할 수 있습니다. ESLint를 통해 공동 작업 동안 사소하거나 중대한 실수들을 미리 바로 잡아 안정적인 코드를 작성하는데 도움을 받았습니다.

+ Prettier 는 자동으로 코드의 스타일을 관리해주는 도구입니다. 서로의 사전 과제를 확인했을 때 6명 각각 다른 코드 스타일을 가지고 있어서 공통적인 코드 스타일을 정립할 필요가 있었습니다. Prettier를 사용하여 각 팀원들은 별도의 노력을 기울이지 않고도 공통적인 코드 스타일을 자동으로 적용할 수 있었습니다. 

`Netlify`

+ Client Side Rendering 중심의 정적 사이트이므로 여러 서비스 중 React - Vite 프로젝트 빌드도 기본적으로 제공하고 인터페이스 UI가 간편한 이유로 사용하게 되었습니다. 
