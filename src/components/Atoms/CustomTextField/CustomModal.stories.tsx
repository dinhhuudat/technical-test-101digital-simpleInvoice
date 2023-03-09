import { ComponentMeta, ComponentStory } from "@storybook/react";

import CustomTextField from "./index";

export default {
  title: "Atoms/CustomTextField",
  component: CustomTextField,
} as ComponentMeta<typeof CustomTextField>;

const Template: ComponentStory<typeof CustomTextField> = (args) => (
  <CustomTextField {...args} />
);

export const Default = Template.bind({});

Default.args = { label: "label" };
