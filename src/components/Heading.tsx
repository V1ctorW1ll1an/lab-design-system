import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface IHeadingProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({
  size = "md",
  children,
  asChild,
  className,
}: IHeadingProps) {
  const Component = asChild ? Slot : "h2";

  return (
    <Component
      className={clsx(
        "text-gray-100 font-bold font-sans",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}
