import React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args.button,
  variant: 'primary',

};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args.button,
  variant: 'danger',
};
