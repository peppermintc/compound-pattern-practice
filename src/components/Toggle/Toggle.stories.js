import Toggle from './Toggle';

export default {
  component: Toggle,
  title: 'Toggle',
};

export const TwoButtons = () => (
  <Toggle>
    <Toggle.Button label="ON" />
    <Toggle.Button label="OFF" />
  </Toggle>
);

export const ThreeButtons = () => (
  <Toggle>
    <Toggle.Button label="Small" />
    <Toggle.Button label="Medium" />
    <Toggle.Button label="Large" />
  </Toggle>
);

export const FourButtons = () => (
  <Toggle>
    <Toggle.Button label="1" />
    <Toggle.Button label="2" />
    <Toggle.Button label="3" />
    <Toggle.Button label="4" />
  </Toggle>
);

export const FiveButtons = () => (
  <Toggle>
    <Toggle.Button label="Apple" />
    <Toggle.Button label="Peach" />
    <Toggle.Button label="Banana" />
    <Toggle.Button label="Grass" />
    <Toggle.Button label="Ham" />
  </Toggle>
);
