import { ComponentMeta, ComponentStory } from "@storybook/react";

import SignInForm from "./index";

export default {
  title: "Molecules/SignInForm",
  component: SignInForm,
} as ComponentMeta<typeof SignInForm>;

const Template: ComponentStory<typeof SignInForm> = (args) => (
  <SignInForm {...args} />
);

export const Default = Template.bind({});

Default.args = { isOpen: true };
