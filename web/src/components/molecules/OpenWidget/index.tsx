import { PopoverButton } from '@headlessui/react'
import { Icon } from '../../atoms/Icon'

type OpenWidgetProps = {
  text: string
}

export function OpenWidget({ text }: OpenWidgetProps) {
  return (
    <PopoverButton
      className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      title="Abrir formulário de Feedback"
    >
      <Icon typeIcon="chat" />

      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        <span className="pl-2"></span>
        {text}
      </span>
    </PopoverButton>
  )
}
