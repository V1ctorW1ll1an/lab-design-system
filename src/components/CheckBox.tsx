import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface ICheckBoxProps {}

export function CheckBox({}: ICheckBoxProps) {
  return (
    <CheckboxRadix.Root className={`w-6 h-6 p-[2px] bg-gray-800 rounded`}>
      <CheckboxRadix.Indicator className={``} asChild>
        <Check weight="bold" className="w-5 text-cyan-500"></Check>
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  );
}
