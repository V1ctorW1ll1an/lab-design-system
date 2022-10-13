import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";
import { ITextProps } from "./Text";

export default {
  title: "components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<ITextProps>;

export const Default: StoryObj<ITextProps> = {};
export const Small: StoryObj<ITextProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<ITextProps> = {
  args: {
    size: "lg",
  },
};
export const CustomComponent: StoryObj<ITextProps> = {
  args: {
    asChild: true,
    children: <p>Custom component with p</p>,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    asChild: {
      table: { disable: true },
    },
  },
};
