import React from "react";

import { Button } from "../component/atoms";

export default {
  title: "Component/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Get Started</Button>;
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "defaultSmall",
  font: "buttonFont",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  font: "buttonFont",
  size: "default",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  font: "buttonFont",
  size: "defaultSmall",
};
