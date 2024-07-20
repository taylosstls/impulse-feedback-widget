import { Icon } from '../Icon'

export function Loading() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <Icon className="animate-spin" typeIcon="loading" sizeIcon="sm" />
    </div>
  )
}
