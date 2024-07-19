import { ChatTeardropDots } from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'

type IconProps = {
  type: string
  className?: string
}

export function Icon({ type, className }: IconProps) {
  const baseClass = 'w-6 h-6'

  switch (type) {
    case 'chat':
      return <ChatTeardropDots className={twMerge(baseClass, className)} />
    default:
      return null
  }
}
