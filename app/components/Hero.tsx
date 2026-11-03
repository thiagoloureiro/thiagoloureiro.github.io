import Image from 'next/image'

export default function Hero() {
  return (
    <section className="border-b border-ink-line">
      <div className="section-rail">01 / Portfolio</div>

      <div className="mx-auto grid min-h-[78vh] max-w-6xl lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="flex flex-col justify-center border-b border-ink-line px-6 py-16 md:px-8 md:py-20 lg:border-b-0 lg:border-r lg:py-24">
          <p className="reveal mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-soft">
            Thiago Loureiro
          </p>

          <h1 className="reveal reveal-delay-1 max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-7xl">
            Platforms that scale.
            <br />
            Teams that <span className="text-accent">ship</span>.
          </h1>

          <p className="reveal reveal-delay-2 mt-8 max-w-md text-base leading-relaxed text-fog md:text-lg">
            Technology Manager, Solution Architect, and DevOps specialist—
            designing cloud-native systems and leading teams that deliver.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap">
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

          <p className="reveal reveal-delay-3 mt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
            Speaking · Accelerator
          </p>
        </div>

        <div className="relative min-h-[420px] bg-ink-raised lg:min-h-full">
          <Image
            src="/speaking.jpg"
            alt="Thiago Loureiro speaking at the Accelerator conference"
            fill
            priority
            className="object-cover object-[58%_18%]"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-ink/20" />
        </div>
      </div>
    </section>
  )
}
