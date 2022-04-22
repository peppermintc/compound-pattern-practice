import Toggle from './Toggle';

export default {
  component: Toggle,
  title: 'Toggle',
};

const Template = (args) => (
  <Toggle {...args}>
    <Toggle.Button label="apple" />
    <Toggle.Button label="peach" />
    <Toggle.Button label="banana" />
    <Toggle.Button label="grass" />
    <Toggle.Button label="ham" />
  </Toggle>
);

export const FiveButtons = Template.bind({});
FiveButtons.args = {};
