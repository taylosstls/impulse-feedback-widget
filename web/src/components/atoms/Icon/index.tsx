import {
  ChatTeardropDots,
  X,
  IconProps as PhosphorIconProps,
  ArrowLeft,
} from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'

type CustomIconProps = PhosphorIconProps & {
  typeIcon: 'chat' | 'close' | 'back'
}

export function Icon({ typeIcon, className, ...props }: CustomIconProps) {
  const baseClass = 'w-4 h-4'

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
    case 'back':
      return <ArrowLeft className={twMerge(baseClass, className)} {...props} />
    default:
      return null
  }
}
