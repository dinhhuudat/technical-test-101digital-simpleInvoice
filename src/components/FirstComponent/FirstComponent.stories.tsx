import { ComponentMeta, ComponentStory } from "@storybook/react";

import FirstComponent from "./index";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/FirstComponent",
  component: FirstComponent,
} as ComponentMeta<typeof FirstComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof FirstComponent> = () => (
  <FirstComponent />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
