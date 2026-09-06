import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'AlertHawk',
    role: 'Product · Monitoring',
    description:
      'Self-hosted monitoring for application health and performance—built for teams that need real-time insight without heavyweight SaaS lock-in.',
    link: 'https://alerthawk.net/',
    linkLabel: 'alerthawk.net',
  },
  {
    name: 'EasyMemoryCache',
    role: 'Open source · .NET',
    description:
      'A plug-and-play caching library for .NET with MemoryCache, Redis, and Memcached backends—focused on simple APIs and production performance.',
    link: 'https://github.com/thiagoloureiro/EasyMemoryCache',
    linkLabel: 'View on GitHub',
  },
]

export default function ProjectsSection() {
  return (
    <section id="work" className="section-pad border-b border-ink-line">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent-soft">
            Selected work
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
            Products and libraries I build
          </h2>
          <p className="mt-4 text-fog">
            Practical systems for observability and application performance—
            shipping tools engineers actually use.
          </p>
        </div>

        <ul className="divide-y divide-ink-line border-y border-ink-line">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-10 transition-colors md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] md:items-start md:gap-10"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold text-paper transition-colors group-hover:text-accent-soft">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-fog">{project.role}</p>
                </div>
                <p className="leading-relaxed text-fog">{project.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-soft md:justify-end">
                  {project.linkLabel}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
