import { SignIn } from "./SignIn";
import { Meta, StoryObj } from "@storybook/react";
import { ISignInProps } from "./SignIn";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

export default {
  title: "pages/SignIn",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/api/login", (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              message: "Login realizado com sucesso",
            })
          );
        }),
      ],
    },
  },
} as Meta<ISignInProps>;

export const Default: StoryObj<ISignInProps> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(canvas.getByLabelText("Email"), "jonhdoe@gmail.com");
    userEvent.type(canvas.getByLabelText("Senha"), "123456");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      expect(
        canvas.getByText("Login realizado com sucesso")
      ).toBeInTheDocument();
    });
  },
};
