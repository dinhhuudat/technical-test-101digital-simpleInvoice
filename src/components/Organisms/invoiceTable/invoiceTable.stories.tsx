import { ComponentMeta, ComponentStory } from '@storybook/react';

import InvoiceTable from './index';

export default {
  title: 'Organisms/InvoiceTable',
  component: InvoiceTable,
} as ComponentMeta<typeof InvoiceTable>;

const Template: ComponentStory<typeof InvoiceTable> = args => (
  <InvoiceTable {...args} />
);

export const Default = Template.bind({});

Default.args = {};
