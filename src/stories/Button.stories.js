import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    primary: { control: 'boolean' },
  },
};

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {
  args: {
    primary: false,
  },
};