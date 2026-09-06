import { siteDescription, siteName, siteTitle, siteUrl } from './site'

export function getHomeMarkdown(): string {
  return `# ${siteName}

**${siteTitle}**

${siteDescription}

I design cloud-native systems and lead engineering teams that ship resilient platforms—microservices, Kubernetes, and modern delivery pipelines.

## Selected work

- [AlertHawk](https://alerthawk.net/) — Self-hosted monitoring for application health and performance.
- [EasyMemoryCache](https://github.com/thiagoloureiro/EasyMemoryCache) — Plug-and-play caching for .NET with MemoryCache, Redis, and Memcached.

## Writing

- [Setting up Traefik Ingress Controller in Kubernetes](https://medium.com/@thiagoloureiro/setting-up-traefik-ingress-controller-in-kubernetes-2c659a2c7347)
- [How Rancher Can Boost Your Kubernetes Productivity](https://medium.com/@thiagoloureiro/how-rancher-can-boost-your-kubernetes-productivity-21985dd1d689)
- [The Good and The Villain](https://medium.com/@thiagoloureiro/the-good-and-the-villain-ca81aae3464a)
- [Stop Shipping Vulnerabilities: Harden Your Docker Images Today](https://medium.com/@thiagoloureiro/stop-shipping-vulnerabilities-harden-your-docker-images-today-8ffeecd48a2c)
- [The Hidden Risks of Outdated Container Images](https://medium.com/@thiagoloureiro/the-hidden-risks-of-outdated-container-images-a-security-perspective-1663d52f0fd2)
- [Kubernetes cert-manager with Let’s Encrypt and Helm](https://medium.com/@thiagoloureiro/kubernetes-cert-manager-free-tls-certificates-with-lets-encrypt-and-helm-da1e8117e063)
- [Kubernetes PVC for Windows Shared Folders with SMB](https://medium.com/@thiagoloureiro/seamless-storage-configuring-kubernetes-pvc-for-windows-shared-folders-with-smb-2b44c01570d2)

## Expertise

**Architecture** — Microservices & APIs, Domain-Driven Design, Event-Driven Systems, Clean Architecture, CQRS & Actor Models, gRPC / GraphQL

**Platforms** — Kubernetes & Docker, CI/CD & Azure DevOps, Rancher, Redis & SQL/NoSQL, .NET / C#, Flutter & Dart

**Leadership** — Team management, technical mentoring, architecture decisions, application modernization, critical delivery, knowledge sharing

## Links

- GitHub: https://github.com/thiagoloureiro
- LinkedIn: https://www.linkedin.com/in/thiago-loureiro-de-azevedo-dev/
- Medium: https://medium.com/@thiagoloureiro

## Agent Discovery

- API Catalog: ${siteUrl}/.well-known/api-catalog
- Agent Skills: ${siteUrl}/.well-known/agent-skills/index.json
- MCP Server Card: ${siteUrl}/.well-known/mcp/server-card.json
- Auth: ${siteUrl}/auth.md
`
}

export function estimateMarkdownTokens(markdown: string): number {
  return Math.ceil(markdown.length / 4)
}
