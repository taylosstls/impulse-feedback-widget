import { feedbackTypes, FeedbackType } from '../../data/feedbackTypes'

import { FeedbackTypeButton } from '../../molecules/FeedbackTypeButton'

import { Header } from '../../molecules/Header'

type WidgetSelectFeedbackProps = {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}

export function WidgetSelectFeedback({
  onFeedbackTypeChanged,
}: WidgetSelectFeedbackProps) {
  const handleFeedbackTypeClick = (key: FeedbackType) => {
    onFeedbackTypeChanged(key)
  }

  return (
    <>
      <Header title="Deixe seu feedback" />

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <FeedbackTypeButton
            onClick={() => handleFeedbackTypeClick(key as FeedbackType)}
            key={key}
            feedback={value}
          />
        ))}
      </div>
    </>
  )
}
