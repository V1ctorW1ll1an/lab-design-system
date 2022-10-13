import { TextInput } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { ITextInputRootProps } from "./TextInput";
import { Envelope } from "phosphor-react";
export default {
  title: "components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ITextInputRootProps>;

export const Default: StoryObj<ITextInputRootProps> = {};
export const WithoutIcon: StoryObj<ITextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />,
  },
};
