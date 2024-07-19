import {
  ChatTeardropDots,
  X,
  IconProps as PhosphorIconProps,
} from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'

type CustomIconProps = PhosphorIconProps & {
  typeIcon: 'chat' | 'close'
}

export function Icon({ typeIcon, className, ...props }: CustomIconProps) {
  const baseClass = 'w-6 h-6'

  switch (typeIcon) {
    case 'chat':
      return (
        <ChatTeardropDots
          className={twMerge(baseClass, className)}
          {...props}
        />
      )
    case 'close':
      return <X className={twMerge(baseClass, className)} {...props} />
    default:
      return null
  }
}
