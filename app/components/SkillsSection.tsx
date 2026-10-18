const principles = [
  {
    number: '01',
    title: 'Architecture first',
    description:
      'Microservices, domain-driven design, event-driven systems, and clean boundaries that keep platforms evolvable.',
  },
  {
    number: '02',
    title: 'Platforms that run',
    description:
      'Kubernetes, Docker, CI/CD, and cloud delivery pipelines—built for reliability, not demos.',
  },
  {
    number: '03',
    title: 'Teams that grow',
    description:
      'Technical mentoring, architecture decisions, and leadership that raises the bar without blocking delivery.',
  },
  {
    number: '04',
    title: 'Modernize with intent',
    description:
      'Legacy to cloud-native migrations guided by risk, value, and operational reality.',
  },
  {
    number: '05',
    title: 'Ship under pressure',
    description:
      'Critical programs, high-stakes releases, and calm execution when the system has to hold.',
  },
  {
    number: '06',
    title: 'Share the craft',
    description:
      'Writing, mentoring, and open source—knowledge compounds when it leaves one person’s head.',
  },
]

export default function SkillsSection() {
  return (
    <section id="approach" className="border-b border-ink-line">
      <div className="section-rail">04 / Approach</div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            Built the <span className="text-accent">hard</span> way.
          </h2>
          <p className="mt-4 text-fog">
            How I help teams ship—architecture, platforms, and leadership held
            to the same standard.
          </p>
        </div>

        <ol className="grid border-t border-ink-line md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <li
              key={item.number}
              className="border-b border-ink-line p-8 md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
                {item.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-paper">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-fog">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
