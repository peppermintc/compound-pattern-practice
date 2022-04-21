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

- `Toggle 컴포넌트`는 외부를 감싸는 `Container 컴포넌트`, 내부에 존재하는 atom 컴포넌트인 `Toggle.Button 컴포넌트`, 좌우로 슬라이드되는 `ToggleBox 컴포넌트`로 구성되어 있습니다. 그리고 내부의 Atom들이 상태를 공유 할 수 있도록 `ToggleProvider 컴포넌트`로 모두를 감싸주었습니다.
- state 값인 `toggleValue`는 현재 선택된 값을 string으로 갖도록 구현하였습니다.
- 흰색 배경을 가진 `ToggleBox 컴포넌트`가 context 값들인 `selectedIndex`, `children.length`에 따라 `CSS transform translateX`로 좌우로 슬라이드되도록 하였습니다.

#### Preview

<img src="./previews/togglePreview.gif" />

---

#### 작업

- 2022-04-20 Toggle 컴포넌트

이후 계속...
