export default function SiteFooter() {
  return (
    <footer className="bg-spruce text-surface/40 mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <span className="font-bold text-surface/50 tracking-tight">WikiTune</span>
        <span>
          Accordature per chitarra e ukulele.{' '}
          <a
            href="https://guitar.sisqo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface/60 hover:text-gold transition-colors underline underline-offset-2"
          >
            EasyGuitarTuner
          </a>
          {' '}— accordatore web gratuito.
        </span>
      </div>
    </footer>
  )
}
