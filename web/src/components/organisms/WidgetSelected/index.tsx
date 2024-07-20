import { FeedbackType, feedbackTypes } from '../../data/feedbackTypes'

import { Header } from '../../molecules/Header'

type WidgetSelectedType = {
  feedbackType: FeedbackType
  restartFeedback: () => void
}

export function WidgetSelected({
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

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  )
}
