import { CheckBox } from "./CheckBox";
import { Meta, StoryObj } from "@storybook/react";
import { ICheckBoxProps } from "./CheckBox";

export default {
  title: "components/CheckBox",
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex gap-2">
          {Story()}
          <p className="text-gray-200 items-center text-xs">
            Lembrar de mim por 30 dias.
          </p>
        </div>
      );
    },
  ],
} as Meta<ICheckBoxProps>;

export const Default: StoryObj<ICheckBoxProps> = {};
