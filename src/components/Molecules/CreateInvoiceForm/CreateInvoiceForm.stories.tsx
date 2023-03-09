import { ComponentMeta, ComponentStory } from "@storybook/react";

import CreateInvoiceForm from "./index";

export default {
  title: "Molecules/CreateInvoiceForm",
  component: CreateInvoiceForm,
} as ComponentMeta<typeof CreateInvoiceForm>;

const Template: ComponentStory<typeof CreateInvoiceForm> = (args) => (
  <CreateInvoiceForm {...args} />
);

export const Default = Template.bind({});

Default.args = { isOpen: true };
