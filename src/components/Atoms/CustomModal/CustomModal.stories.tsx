import { ComponentMeta, ComponentStory } from "@storybook/react";

import CustomModal from "./index";

export default {
  title: "Atoms/CustomModal",
  component: CustomModal,
} as ComponentMeta<typeof CustomModal>;

const Template: ComponentStory<typeof CustomModal> = (args) => (
  <CustomModal {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: <div>Children</div>,
  isOpen: true,
  title: "Title Modal",
};
