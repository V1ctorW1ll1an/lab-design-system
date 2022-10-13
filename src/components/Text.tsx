import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ITextProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: ITextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}
