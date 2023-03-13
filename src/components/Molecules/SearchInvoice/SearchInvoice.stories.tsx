import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchInvoice from '.';

export default {
  title: 'Molecules/SearchInvoice',
  component: SearchInvoice,
} as ComponentMeta<typeof SearchInvoice>;

const Template: ComponentStory<typeof SearchInvoice> = args => (
  <SearchInvoice {...args} />
);

export const Default = Template.bind({});

Default.args = {};
