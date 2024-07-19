import { CloseWidget } from '../CloseWidget'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header>
      <span className="text-xl leading-6 flex items-center gap-2">{title}</span>
      <CloseWidget />
    </header>
  )
}
