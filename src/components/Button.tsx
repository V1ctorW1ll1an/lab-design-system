import { Slot } from "@radix-ui/react-slot";

export interface IButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: IButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={`py-3 px-4 rounded font-semibold text-black bg-cyan-500 
      text-sm w-full hover:bg-cyan-200 transition-colors focus:ring-2 ring-white`}
    >
      {children}
    </Component>
  );
}
