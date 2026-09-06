import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-line">
      <div
        className="hero-glow pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-sky-900/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col justify-center px-6 py-20 md:py-28">
        <p className="reveal mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent-soft">
          Portfolio
        </p>
        <h1 className="reveal reveal-delay-1 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl md:text-7xl">
          Thiago Loureiro
        </h1>
        <p className="reveal reveal-delay-2 mt-5 max-w-2xl font-display text-xl text-fog sm:text-2xl">
          Technology Manager · Solution Architect · DevOps
        </p>
        <p className="reveal reveal-delay-3 mt-6 max-w-xl text-lg leading-relaxed text-fog/90">
          I design cloud-native systems and lead engineering teams that ship
          resilient platforms—microservices, Kubernetes, and modern delivery
          pipelines.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-soft"
          >
            View selected work
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
