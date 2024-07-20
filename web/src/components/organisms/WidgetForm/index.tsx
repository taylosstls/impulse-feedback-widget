import { Icon } from '../../atoms/Icon'
import { FeedbackType, feedbackTypes } from '../../data/feedbackTypes'

import { Header } from '../../molecules/Header'

type WidgetSelectedType = {
  feedbackType: FeedbackType
  restartFeedback: () => void
}

export function WidgetForm({
  feedbackType,
  restartFeedback,
}: WidgetSelectedType) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

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
          <button
            type="button"
            className="p-2 bg-zinc-800 hover:bg-zinc-700/65 rounded-md border-transparent flex justify-center items-center text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-700/65"
          >
            <Icon typeIcon="upload" sizeIcon="md" />
          </button>

          <button
            type="submit"
            className="p-2 bg-brand-500 hover:bg-brand-300 rounded-md border-transparent flex-1 flex justify-center items-center text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
