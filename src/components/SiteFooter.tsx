export default function SiteFooter() {
  return (
    <footer className="bg-spruce text-ivory/40 mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span className="font-mono tracking-widest text-ivory/30 uppercase text-[10px]">
          WikiTune
        </span>
        <span>
          Accordature per chitarra e ukulele.{' '}
          <a
            href="https://guitar.sisqo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ivory/60 hover:text-gold transition-colors underline underline-offset-2"
          >
            EasyGuitarTuner
          </a>{' '}
          — accordatore web gratuito.
        </span>
      </div>
    </footer>
  )
}
