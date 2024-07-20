import { ComponentProps } from 'react'

import { Icon } from '../../atoms/Icon'

type BackWidgetProps = ComponentProps<'button'>

export function BackWidget({ ...props }: BackWidgetProps) {
  return (
    <button
      type="button"
      className="top-5 left-5 absolute text-zinc-400 transition-all duration-300 hover:text-zinc-100"
      {...props}
    >
      <Icon typeIcon="back" sizeIcon="sm" />
    </button>
  )
}
