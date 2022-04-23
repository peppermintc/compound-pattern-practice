import Toggle from './Toggle';

export default {
  component: Toggle,
  title: 'Toggle',
};

const TwoButtonsTemplate = (args) => (
  <Toggle>
    <Toggle.Button label={args.label1} />
    <Toggle.Button label={args.label2} />
  </Toggle>
);
export const TwoButtons = TwoButtonsTemplate.bind({});
TwoButtons.args = {
  label1: 'ON',
  label2: 'OFF',
};

const ThreeButtonsTemplate = (args) => (
  <Toggle>
    <Toggle.Button label={args.label1} />
    <Toggle.Button label={args.label2} />
    <Toggle.Button label={args.label3} />
  </Toggle>
);
export const ThreeButtons = ThreeButtonsTemplate.bind({});
ThreeButtons.args = {
  label1: 'Small',
  label2: 'Medium',
  label3: 'Large',
};

const FourButtonsTemplate = (args) => (
  <Toggle>
    <Toggle.Button label={args.label1} />
    <Toggle.Button label={args.label2} />
    <Toggle.Button label={args.label3} />
    <Toggle.Button label={args.label4} />
  </Toggle>
);
export const FourButtons = FourButtonsTemplate.bind({});
FourButtons.args = {
  label1: '1',
  label2: '2',
  label3: '3',
  label4: '4',
};

const FiveButtonsTemplate = (args) => (
  <Toggle>
    <Toggle.Button label={args.label1} />
    <Toggle.Button label={args.label2} />
    <Toggle.Button label={args.label3} />
    <Toggle.Button label={args.label4} />
    <Toggle.Button label={args.label5} />
  </Toggle>
);
export const FiveButtons = FiveButtonsTemplate.bind({});
FiveButtons.args = {
  label1: 'Apple',
  label2: 'Peach',
  label3: 'Banana',
  label4: 'Grass',
  label5: 'Ham',
};
