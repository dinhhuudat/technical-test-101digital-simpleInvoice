import { ComponentMeta, ComponentStory } from '@storybook/react';

import NavBar from './index';

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = args => <NavBar />;

export const Default = Template.bind({});

Default.args = {};
