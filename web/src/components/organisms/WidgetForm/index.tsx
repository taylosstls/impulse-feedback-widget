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
          className="w-full border-solid h-28 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md resize-none focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
      </form>
    </>
  )
}
