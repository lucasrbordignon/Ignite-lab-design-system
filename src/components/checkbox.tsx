import * as checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxProps extends checkbox.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <checkbox.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
      <checkbox.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </checkbox.Indicator>
    </checkbox.Root>
  )
}