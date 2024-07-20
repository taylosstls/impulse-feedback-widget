import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FeedbackType, feedbackTypes } from '../../data/feedbackTypes'

import { Header } from '../../molecules/Header'
import { ScreenshotButton } from '../../molecules/ScreenshotButton'

type WidgetSelectedType = {
  feedbackType: FeedbackType
  restartFeedback: () => void
}

type Inputs = {
  detailsInput: string
  screenshot: string | null
}

export function WidgetForm({
  feedbackType,
  restartFeedback,
}: WidgetSelectedType) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      data.screenshot = screenshot
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setValue('screenshot', screenshot)
  }, [screenshot, setValue])

  useEffect(() => {
    const subscription = watch((value) => {
      setIsButtonDisabled(!value.detailsInput)
    })

    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <>
      <Header
        back={restartFeedback}
        image={feedbackTypeInfo.image}
        title={feedbackTypeInfo.title}
      />

      <form className="my-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="w-full border-solid h-28 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md resize-none focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          {...register('detailsInput', { required: true })}
        />

        {errors.detailsInput && (
          <span className="text-xs text-red-400">Campo obrigatório</span>
        )}

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshot={setScreenshot}
            screenshot={screenshot}
          />

          <button
            type="submit"
            disabled={isSubmitting || isButtonDisabled}
            className={`p-2 h-10 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 font-semibold ${isSubmitting || isButtonDisabled ? 'opacity-50 hover:bg-brand-500 cursor-not-allowed' : 'hover:bg-brand-300'}`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}
