export default function Footer() {
  return (
    <footer>
      <div className="section-rail">Next up</div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
          Build it with <span className="text-accent">me</span>.
        </h2>
        <p className="mt-4 max-w-xl text-fog">
          Open to architecture reviews, platform work, and engineering
          leadership conversations.
        </p>

        <div className="mt-10 flex flex-wrap">
          <a
            href="https://www.linkedin.com/in/thiago-loureiro-de-azevedo-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink-line bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-accent hover:text-paper"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/thiagoloureiro"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-l-0 border-ink-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fog transition-colors hover:border-accent hover:text-paper"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@thiagoloureiro"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-l-0 border-ink-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fog transition-colors hover:border-accent hover:text-paper"
          >
            Medium
          </a>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
            © {new Date().getFullYear()} Thiago Loureiro
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
            Systems · Platforms · Teams
          </p>
        </div>
      </div>
    </footer>
  )
}
