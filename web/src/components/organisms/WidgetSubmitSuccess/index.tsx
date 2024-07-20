import { Header } from '../../molecules/Header'

import SubmitedImg from '../../../assets/icons/submited.svg'

type WidgetSubmitSuccessProps = {
  restartFeedback: () => void
}

export function WidgetSubmitSuccess({
  restartFeedback,
}: WidgetSubmitSuccessProps) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center py-10 w-full">
        <img src={SubmitedImg} alt="Ícone de enviado com sucesso" />
        <h2 className="text-xl mt-2">Agradecemos o feedback!</h2>

        <button
          type="button"
          className="px-6 h-10 mt-6 flex justify-center items-center bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-zinc-800 font-semibold"
          onClick={restartFeedback}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
