import { PopoverButton } from '@headlessui/react'

import { Icon } from '../../atoms/Icon'

export function CloseWidget() {
  return (
    <PopoverButton
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário de feedback"
    >
      <Icon typeIcon="close" weight="bold" />
    </PopoverButton>
  )
}
