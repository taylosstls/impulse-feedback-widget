import { BackWidget } from '../../atoms/BackWidget'
import { CloseWidget } from '../../atoms/CloseWidget'

interface HeaderProps {
  title: string
  image?: {
    source: string
    alt: string
  }
  back?: () => void
  className?: string
}

export function Header({ title, image, back }: HeaderProps) {
  return (
    <header>
      {back && <BackWidget onClick={back} />}
      <span className="text-xl leading-6 flex items-center gap-2">
        {image && (
          <img className="w-6 h-6" src={image.source} alt={image.alt} />
        )}
        {title}
      </span>
      <CloseWidget />
    </header>
  )
}
