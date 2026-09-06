const groups = [
  {
    title: 'Architecture',
    items: [
      'Microservices & APIs',
      'Domain-Driven Design',
      'Event-Driven Systems',
      'Clean Architecture',
      'CQRS & Actor Models',
      'gRPC / GraphQL',
    ],
  },
  {
    title: 'Platforms',
    items: [
      'Kubernetes & Docker',
      'CI/CD & Azure DevOps',
      'Rancher',
      'Redis & SQL/NoSQL',
      '.NET / C#',
      'Flutter & Dart',
    ],
  },
  {
    title: 'Leadership',
    items: [
      'Team management',
      'Technical mentoring',
      'Architecture decisions',
      'Application modernization',
      'Critical delivery',
      'Knowledge sharing',
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="expertise" className="section-pad border-b border-ink-line">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent-soft">
            Expertise
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            How I help teams ship
          </h2>
          <p className="mt-4 text-fog">
            From architecture and platforms to mentoring—focused on systems that
            scale and teams that grow with them.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-lg font-semibold text-paper">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-l border-accent/40 pl-3 text-fog"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
