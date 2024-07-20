import html2canvas from 'html2canvas'
import { Icon } from '../../atoms/Icon'
import { useState } from 'react'
import { Loading } from '../../atoms/Loading'

type ScreenshotButtonProps = {
  onScreenshot: (screenshot: string | null) => void
  screenshot: string | null
}

export function ScreenshotButton({
  onScreenshot,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')

    onScreenshot(base64Image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-all duration-300 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${screenshot})` }}
        onClick={() => onScreenshot(null)}
        title="Deletar imagem anexada"
      >
        <Icon typeIcon="trash" sizeIcon="sm" weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="p-2 w-10 h-10 bg-zinc-800 hover:bg-zinc-700/65 rounded-md border-transparent flex justify-center items-center text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-700/65"
      onClick={handleTakeScreenshot}
      title="Tirar print da tela"
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Icon typeIcon="upload" sizeIcon="md" />
      )}
    </button>
  )
}
