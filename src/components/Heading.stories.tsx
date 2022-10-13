import { Heading } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";
import { IHeadingProps } from "./Heading";

export default {
  title: "components/Heading",
  component: Heading,
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
} as Meta<IHeadingProps>;

export const Default: StoryObj<IHeadingProps> = {};
export const Small: StoryObj<IHeadingProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<IHeadingProps> = {
  args: {
    size: "lg",
  },
};
export const CustomComponent: StoryObj<IHeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with h1</h1>,
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
