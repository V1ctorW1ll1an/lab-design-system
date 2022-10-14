import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: IButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        `py-3 px-4 rounded font-semibold text-black bg-cyan-500 
      text-sm w-full hover:bg-cyan-200 transition-colors focus:ring-2 ring-white`,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
