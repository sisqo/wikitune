type CTALinkProps = {
  label?: string
}

export default function CTALink({ label }: CTALinkProps) {
  const text = label ?? 'Accordatore web gratuito per chitarra e ukulele'

  return (
    <div className="my-10 border border-gold/40 bg-gold-lt px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1 min-w-0">
        <p className="font-bold text-ink leading-snug">{text}</p>
        <p className="mt-1 text-sm text-muted">
          Dal browser — nessuna installazione.
        </p>
      </div>
      <a
        href="https://guitar.sisqo.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center gap-2 bg-spruce text-surface text-sm font-semibold px-5 py-2.5 hover:bg-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        EasyGuitarTuner
        <span aria-hidden="true" className="text-gold">→</span>
      </a>
    </div>
  )
}
