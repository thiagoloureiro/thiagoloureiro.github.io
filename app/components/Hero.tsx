export default function Hero() {
  return (
    <section className="border-b border-ink-line">
      <div className="section-rail">01 / Portfolio</div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
        <p className="reveal mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
          Technology Manager · Solution Architect · DevOps
        </p>

        <h1 className="reveal reveal-delay-1 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-paper sm:text-6xl md:text-7xl lg:text-8xl">
          Platforms that scale.
          <br />
          Teams that <span className="text-accent">ship</span>.
        </h1>

        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-fog md:text-xl">
          I design cloud-native systems and lead engineering teams that deliver
          resilient platforms—microservices, Kubernetes, and modern delivery
          pipelines.
        </p>

        <div className="reveal reveal-delay-3 mt-12 flex flex-wrap">
          <a
            href="#work"
            className="border border-ink-line bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-accent hover:text-paper"
          >
            View selected work
          </a>
          <a
            href="#writing"
            className="border border-l-0 border-ink-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fog transition-colors hover:border-accent hover:text-paper"
          >
            Read writing
          </a>
        </div>
      </div>
    </section>
  )
}
