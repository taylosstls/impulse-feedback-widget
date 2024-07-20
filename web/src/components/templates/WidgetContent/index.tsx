import { useState } from 'react'

import { FeedbackType } from '../../data/feedbackTypes'

import { Footer } from '../../molecules/Footer'

import { WidgetSelectFeedback } from '../../organisms/WidgetSelectFeedback'
import { WidgetForm } from '../../organisms/WidgetForm'

export function WidgetContent() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-96">
      {!feedbackType ? (
        <WidgetSelectFeedback onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <WidgetForm
          feedbackType={feedbackType}
          restartFeedback={handleRestartFeedback}
        />
      )}
      <Footer />
    </div>
  )
}
