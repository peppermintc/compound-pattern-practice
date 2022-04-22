## React Compound Component Pattern Practice

리액트 컴파운드 컴포넌트 패턴 연습

### 1. Toggle 컴포넌트

#### 사용 방법 설명

```javascript
import Toggle from './components/Toggle/Toggle';
```

Toggle 폴더의 `Toggle.js` 파일에서 `Toggle` 컴포넌트를 import하여 사용합니다.

```javascript
<Toggle>
  <Toggle.Button label="apple" />
  <Toggle.Button label="peach" />
  <Toggle.Button label="banana" />
  <Toggle.Button label="grass" />
  <Toggle.Button label="ham" />
</Toggle>
```

`<Toggle>` 컴포넌트 내부에 Atom 컴포넌트인 `<Toggle.Button label={"라벨 이름"} />`를 추가하여 원하는 만큼 동적으로 버튼을 추가할 수 있습니다.

---

#### 구현 설명

- `Toggle 컴포넌트`는 외부를 감싸는 `Container 컴포넌트`, 내부에 존재하는 atom 컴포넌트인 `Toggle.Button 컴포넌트`, 좌우로 슬라이드되는 `SlidingBox 컴포넌트`로 구성되어 있습니다. 그리고 내부의 Atom들이 상태를 공유 할 수 있도록 `ToggleProvider 컴포넌트`로 모두를 감싸주었습니다.
- View 로직은 `Toggle.js` 파일, 비즈니스 로직은 `useToggleContext.js` 파일에서 나누어 관리하도록 하였습니다.
- 흰색 배경을 가진 `SlidingBox 컴포넌트`는 state 값들인 `currentIndex`, `labelsLength`에 따라 `CSS transform translateX`로 좌우로 슬라이드되도록 하였습니다.

#### Preview

<img src="./previews/togglePreview.gif" />

---

### Storybook

UI 컴포넌트를 독립된 환경에서 테스트해볼수 있는 개발 도구인 Storybook을 추가하였습니다.

#### Storybook 추가 과정에서의 문제점

React 18과의 호환 문제가 있어 React를 v17.0.2로 다운그레이드 한 후 Storybook을 추가하였습니다.

#### 장점

기존에 발견하지 못했던 UI 컴포넌트의 문제점을 새롭게 발견했습니다.

#### 사용

- 브라우저 환경에서는 발견하지 못했었던 Toggle 컴포넌트의 state 초기화 문제를 Storybook 환경에서는 발경할 수 있었습니다. Toggle 컴포넌트의 state들이 rendering 이후 초기화되도록 변경하였습니다.

---

### 실행 방법

node_modules 설치

```
yarn install
```

CRA 프로젝트 실행

```
yarn start
```

Storybook 실행

```
yarn storybook
```

---

#### 작업

- 2022-04-20 Toggle 컴포넌트
- 2022-04-22 Storybook 추가, Toggle 컴포넌트 리팩토링

이후 계속...
