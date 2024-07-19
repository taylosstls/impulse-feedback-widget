import { useState } from 'react'

import { Footer } from '../../molecules/Footer'
import { WidgetForm } from '../../organisms/WidgetForm'

import { FeedbackType } from '../../data/feedbackTypes'

export function WidgetContent() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <WidgetForm onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <>{feedbackType}</>
      )}
      <Footer />
    </div>
  )
}
