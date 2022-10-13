import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface ITextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITextInputRootProps {
  children: ReactNode;
}

export interface ITextInputIconProps {
  children: ReactNode;
}

function TextInputRoot(props: ITextInputRootProps) {
  return (
    <div
      className={`flex h-12 items-center gap-3 px-4 py-3 font-sans w-full focus-within:ring-2 rounded bg-gray-800 ring-cyan-400`}
    >
      {props.children}
    </div>
  );
}

// change name
TextInputRoot.displayName = "TextInput.Root";

function TextInputIcon(props: ITextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

function TextInputElement(props: ITextInputProps) {
  return (
    <input
      className={`bg-transparent text-gray-100 flex-1 text-xs placeholder:text-gray-400 outline-none`}
      {...props}
    />
  );
}

TextInputElement.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputElement,
  Icon: TextInputIcon,
};
