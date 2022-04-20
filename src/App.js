import Toggle from './components/Toggle/Toggle';

function App() {
  return (
    <>
      <h2>React Compound Component Pattern</h2>
      <h3>Toggle</h3>
      <Toggle>
        <Toggle.Button label="apple" />
        <Toggle.Button label="peach" />
        <Toggle.Button label="banana" />
        <Toggle.Button label="grass" />
        <Toggle.Button label="ham" />
      </Toggle>
    </>
  );
}

export default App;
