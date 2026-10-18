import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    category: 'Monitoring',
    name: 'Alert',
    accent: 'Hawk',
    description:
      'Self-hosted monitoring for application health and performance—built for teams that need real-time insight without heavyweight SaaS lock-in.',
    tags: ['Product', 'Open source', 'Observability'],
    link: 'https://alerthawk.net/',
  },
  {
    number: '02',
    category: '.NET library',
    name: 'EasyMemory',
    accent: 'Cache',
    description:
      'A plug-and-play caching library for .NET with MemoryCache, Redis, and Memcached backends—focused on simple APIs and production performance.',
    tags: ['Open source', '.NET', 'Performance'],
    link: 'https://github.com/thiagoloureiro/EasyMemoryCache',
  },
]

export default function ProjectsSection() {
  return (
    <section id="work" className="border-b border-ink-line">
      <div className="section-rail">02 / The lineup</div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            Selected <span className="text-accent">work</span>
          </h2>
          <p className="mt-4 text-fog">
            Practical systems for observability and application performance—
            tools engineers actually use.
          </p>
        </div>

        <div className="grid gap-0 border-t border-ink-line md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border-b border-ink-line p-8 transition-colors hover:bg-ink-raised md:border-r md:odd:border-r md:even:border-r-0 md:[&:nth-child(2n)]:border-r-0"
            >
              <div className="mb-10 flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                  {project.number}{' '}
                  <span className="text-ink-line">/</span> {project.category}
                </span>
                <ArrowUpRight className="h-4 w-4 text-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
              </div>

              <h3 className="font-display text-3xl font-bold tracking-tight text-paper md:text-4xl">
                {project.name}
                <span className="text-accent">{project.accent}</span>
              </h3>

              <p className="mt-4 flex-1 leading-relaxed text-fog">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className={index === 0 ? 'tag tag-accent' : 'tag'}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
