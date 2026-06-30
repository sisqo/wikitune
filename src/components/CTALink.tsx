type CTALinkProps = {
  label?: string
}

export default function CTALink({ label }: CTALinkProps) {
  const text = label ?? 'Accorda la chitarra gratis con EasyGuitarTuner'

  return (
    <div className="my-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
      <p className="mb-3 text-sm font-medium text-blue-800">{text}</p>
      <a
        href="https://guitar.sisqo.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Apri EasyGuitarTuner — gratis, dal browser
      </a>
    </div>
  )
}
