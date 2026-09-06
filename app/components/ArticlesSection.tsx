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
    <section id="writing" className="section-pad border-b border-ink-line">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent-soft">
              Writing
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
              Notes on platforms, security, and architecture
            </h2>
          </div>
          <a
            href="https://medium.com/@thiagoloureiro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-fog transition-colors hover:text-accent-soft"
          >
            All on Medium
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <ul className="space-y-0">
          {articles.map((article) => (
            <li key={article.url} className="border-t border-ink-line last:border-b">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="font-medium text-paper transition-colors group-hover:text-accent-soft">
                  {article.title}
                </span>
                <span className="shrink-0 text-sm text-fog">{article.topic}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
