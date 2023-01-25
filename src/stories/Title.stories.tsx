import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// Components
import Title from '../components/Title';

export default {
  title: 'Shared/Title',
  component: Title,
  argTypes: {
    size: {
      options: ['x-large', 'large', 'medium', 'base', 'small'],
      control: { type: 'select', labels: ['x-large', 'large', 'medium', 'base', 'small'] },
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const H1 = Template.bind({});
H1.args = {
  label: 'Title H1',
  size: 'x-large',
};

export const H2 = Template.bind({});
H2.args = {
  label: 'Title H2',
  size: 'large',
};

export const H3 = Template.bind({});
H3.args = {
  label: 'Title H3',
  size: 'medium',
};

export const H4 = Template.bind({});
H4.args = {
  label: 'Title H4',
  size: 'base',
};

export const H5 = Template.bind({});
H5.args = {
  label: 'Title H5',
  size: 'small',
};
