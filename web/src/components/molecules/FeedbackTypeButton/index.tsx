import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type FeedbackTypeButtonProps = ComponentProps<'button'> & {
  feedback: {
    title: string
    image: {
      source: string
      alt: string
    }
  }
  className?: string
}

export function FeedbackTypeButton({
  feedback,
  className,
  ...props
}: FeedbackTypeButtonProps) {
  return (
    <button
      className={twMerge(
        'bg-zinc-800 hover:bg-zinc-700/65 rounded-lg py-5 w-24 flex-1 flex flex-col justify-center items-center border-2 border-transparent transition-all duration-500 outline-none hover:border-brand-500 focus:border-brand-500',
        className,
      )}
      title={`Formulário ${feedback.title.toLocaleLowerCase()}`}
      {...props}
    >
      <img src={feedback.image.source} alt={feedback.image.alt} />
      <span>{feedback.title}</span>
    </button>
  )
}
