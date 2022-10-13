import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { IButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Button text",
  },
  argTypes: {},
} as Meta<IButtonProps>;

export const Default: StoryObj<IButtonProps> = {};
