import { useState } from 'react'
import { FeedbackType, feedbackTypes } from '../../data/feedbackTypes'

import { Header } from '../../molecules/Header'
import { ScreenshotButton } from '../../molecules/ScreenshotButton'

type WidgetSelectedType = {
  feedbackType: FeedbackType
  restartFeedback: () => void
}

export function WidgetForm({
  feedbackType,
  restartFeedback,
}: WidgetSelectedType) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]
  const [screenshot, setScreenshot] = useState<string | null>(null)

  return (
    <>
      <Header
        back={restartFeedback}
        image={feedbackTypeInfo.image}
        title={feedbackTypeInfo.title}
      />

      <form className="my-4 w-full">
        <textarea
          className="w-full border-solid h-28 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md resize-none focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshot={setScreenshot}
            screenshot={screenshot}
          />

          <button
            type="submit"
            className="p-2 h-10 bg-brand-500 hover:bg-brand-300 rounded-md border-transparent flex-1 flex justify-center items-center text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 font-semibold"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
