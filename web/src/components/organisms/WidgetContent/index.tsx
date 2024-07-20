import { useState } from 'react'

import { FeedbackType } from '../../data/feedbackTypes'

import { WidgetForm } from '../WidgetForm'
import { WidgetSelected } from '../WidgetSelected'

import { Footer } from '../../molecules/Footer'

export function WidgetContent() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <WidgetForm onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <WidgetSelected
          feedbackType={feedbackType}
          restartFeedback={handleRestartFeedback}
        />
      )}
      <Footer />
    </div>
  )
}
