import {
  ChatTeardropDots,
  X,
  IconProps as PhosphorIconProps,
  ArrowLeft,
  Camera,
} from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'

type CustomIconProps = PhosphorIconProps & {
  typeIcon: 'chat' | 'close' | 'back' | 'upload'
  sizeIcon: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
}

export function Icon({
  typeIcon,
  sizeIcon,
  className,
  ...props
}: CustomIconProps) {
  const iconSizeClass = sizeClasses[sizeIcon]

  switch (typeIcon) {
    case 'chat':
      return (
        <ChatTeardropDots
          className={twMerge(iconSizeClass, className)}
          {...props}
        />
      )
    case 'close':
      return <X className={twMerge(iconSizeClass, className)} {...props} />
    case 'back':
      return (
        <ArrowLeft className={twMerge(iconSizeClass, className)} {...props} />
      )
    case 'upload':
      return <Camera className={twMerge(iconSizeClass, className)} {...props} />
    default:
      return null
  }
}
