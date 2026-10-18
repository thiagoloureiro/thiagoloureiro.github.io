import { ArrowUpRight } from 'lucide-react'

const articles = [
  {
    title: 'Setting up Traefik Ingress Controller in Kubernetes',
    topic: 'Kubernetes',
    url: 'https://medium.com/@thiagoloureiro/setting-up-traefik-ingress-controller-in-kubernetes-2c659a2c7347',
  },
  {
    title: 'How Rancher Can Boost Your Kubernetes Productivity',
    topic: 'Platform',
    url: 'https://medium.com/@thiagoloureiro/how-rancher-can-boost-your-kubernetes-productivity-21985dd1d689',
  },
  {
    title: 'The Good and The Villain',
    topic: 'Architecture',
    url: 'https://medium.com/@thiagoloureiro/the-good-and-the-villain-ca81aae3464a',
  },
  {
    title: 'Stop Shipping Vulnerabilities: Harden Your Docker Images Today',
    topic: 'Security',
    url: 'https://medium.com/@thiagoloureiro/stop-shipping-vulnerabilities-harden-your-docker-images-today-8ffeecd48a2c',
  },
  {
    title: 'The Hidden Risks of Outdated Container Images',
    topic: 'Security',
    url: 'https://medium.com/@thiagoloureiro/the-hidden-risks-of-outdated-container-images-a-security-perspective-1663d52f0fd2',
  },
  {
    title: 'Kubernetes cert-manager with Let’s Encrypt and Helm',
    topic: 'Kubernetes',
    url: 'https://medium.com/@thiagoloureiro/kubernetes-cert-manager-free-tls-certificates-with-lets-encrypt-and-helm-da1e8117e063',
  },
  {
    title: 'Kubernetes PVC for Windows Shared Folders with SMB',
    topic: 'Storage',
    url: 'https://medium.com/@thiagoloureiro/seamless-storage-configuring-kubernetes-pvc-for-windows-shared-folders-with-smb-2b44c01570d2',
  },
]

export default function ArticlesSection() {
  return (
    <section id="writing" className="border-b border-ink-line">
      <div className="section-rail flex items-center justify-between gap-4">
        <span>03 / Writing</span>
        <a
          href="https://medium.com/@thiagoloureiro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-fog transition-colors hover:text-accent-soft"
        >
          All on Medium
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-14 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            Notes on platforms, security, and{' '}
            <span className="text-accent">architecture</span>
          </h2>
        </div>

        <ul className="border-t border-ink-line">
          {articles.map((article, index) => (
            <li key={article.url} className="border-b border-ink-line">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5 transition-colors hover:bg-ink-raised sm:grid-cols-[4rem_1fr_8rem_auto] sm:gap-6 sm:px-2"
              >
                <span className="font-mono text-[11px] text-mute">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-medium text-paper transition-colors group-hover:text-accent-soft">
                  {article.title}
                </span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-mute sm:block">
                  {article.topic}
                </span>
                <ArrowUpRight className="h-4 w-4 text-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
