type CTALinkProps = {
  label?: string
}

export default function CTALink({ label }: CTALinkProps) {
  const text = label ?? 'Accordatore web gratuito per chitarra e ukulele'

  return (
    <div className="my-10 border border-gold/30 bg-gold-lt px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1">
        <p className="font-display italic text-lg text-spruce leading-snug">{text}</p>
        <p className="mt-1 text-sm text-resin">
          Dal browser, senza installare nulla.
        </p>
      </div>
      <a
        href="https://guitar.sisqo.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center gap-2 bg-spruce text-ivory text-sm font-medium px-5 py-2.5 hover:bg-ink transition-colors"
      >
        EasyGuitarTuner
        <span aria-hidden="true" className="text-gold">→</span>
      </a>
    </div>
  )
}
