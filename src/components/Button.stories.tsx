import { Button, IProps } from './Button';

import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Default',
  },
} as Meta<IProps>;

export const Default: StoryObj<IProps> = {};

export const Outline: StoryObj<IProps> = {
  args: {
    variant: 'outline',
  },
};

export const Text: StoryObj<IProps> = {
  args: {
    variant: 'text',
  },
};

export const NoShadow: StoryObj<IProps> = {
  args: {
    disableShadow: true,
  },
};

export const Disabled: StoryObj<IProps> = {
  args: {
    variant: 'button-disabled',
  },
};

export const Primary: StoryObj<IProps> = {
  args: {
    children: 'Primary',
    color: 'primary',
  },
};

export const Secondary: StoryObj<IProps> = {
  args: {
    children: 'Secondary',
    color: 'secondary',
  },
};

export const Danger: StoryObj<IProps> = {
  args: {
    children: 'Danger',
    color: 'danger',
  },
};

export const DefaultHover: StoryObj<IProps> = {
  args: {
    forceHover: 'default-hover',
  },
};

export const PrimaryHover: StoryObj<IProps> = {
  args: {
    children: 'Primary',
    color: 'primary',
    forceHover: 'primary-hover',
  },
};
export const SecondaryHover: StoryObj<IProps> = {
  args: {
    children: 'Secondary',
    color: 'secondary',
    forceHover: 'secondary-hover',
  },
};
export const DangerHover: StoryObj<IProps> = {
  args: {
    children: 'Danger',
    color: 'danger',
    forceHover: 'danger-hover',
  },
};
