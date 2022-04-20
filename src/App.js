import Toggle from './components/Toggle/Toggle';

function App() {
  return (
    <>
      <h2>React Compound Component Pattern</h2>
      <h3>Toggle</h3>
      <Toggle>
        <Toggle.Button label="123" />
        <Toggle.Button label="456" />
        <Toggle.Button label="789" />
        <Toggle.Button label="1234" />
        <Toggle.Button label="78955" />
      </Toggle>
    </>
  );
}

export default App;
