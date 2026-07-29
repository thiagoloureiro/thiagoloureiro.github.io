import { siteDescription, siteName, siteTitle, siteUrl } from './site'

export function getHomeMarkdown(): string {
  return `# ${siteName}

**${siteTitle}**

${siteDescription}

## About

Experienced Manager/Architect with expertise in microservices, cloud architecture, and high-performance systems. Specializing in containerization technologies like Kubernetes, I excel at designing scalable, resilient infrastructures and implementing DevOps practices for seamless deployment pipelines. A proven leader in team management and mentoring, I am passionate about empowering teams to deliver cutting-edge solutions while fostering growth and collaboration.

## Skills & Tools

.NET Core, C#, WebApis, CQRS, Actor Based Frameworks, MicroServices Architecture, gRPC, GraphQL, Service Discovery, API Gateway, SQL/NoSQL Databases, Redis, AMQP, MQTT, Design Patterns, SOLID Principles, DRY, KISS, GIT, Scrum, Microsoft Orleans, Azure DevOps, CI/CD, TeamCity, VSTS, Rancher, Kubernetes, Docker, Flutter, Dart, Domain Driven Design, Clean Architecture, Event Driven Architecture, Event Sourcing

## Competencies

- **Team Management** — Ability to manage teams and lead architecture discussions and decisions.
- **Communication** — Excellent communication skills for effective collaboration and knowledge sharing.
- **Critical Projects** — Skilled in working with and managing critical, high-stakes projects.
- **Application Modernization** — Expertise in modernizing legacy systems and migrating to cloud-native architectures.
- **DevOps** — Strong expertise in CI/CD, containerization, and cloud infrastructure automation.
- **Mentoring** — Passionate about knowledge sharing and helping teams grow through technical mentorship and guidance.

## Projects

- [AlertHawk](https://alerthawk.net/) — A cutting-edge, easy-to-use self-hosted monitoring tool designed to empower you with real-time insights into the health and performance of your applications.
- [EasyMemoryCache](https://github.com/thiagoloureiro/EasyMemoryCache) — A powerful yet easy-to-use caching solution for .NET apps. It works seamlessly with MemoryCache, Redis, and Memcached.

## Latest Articles

- [Setting up Traefik Ingress Controller in Kubernetes](https://medium.com/@thiagoloureiro/setting-up-traefik-ingress-controller-in-kubernetes-2c659a2c7347)
- [How Rancher Can Boost Your Kubernetes Productivity](https://medium.com/@thiagoloureiro/how-rancher-can-boost-your-kubernetes-productivity-21985dd1d689)
- [The Good and The Villain](https://medium.com/@thiagoloureiro/the-good-and-the-villain-ca81aae3464a)
- [Stop Shipping Vulnerabilities: Harden Your Docker Images Today](https://medium.com/@thiagoloureiro/stop-shipping-vulnerabilities-harden-your-docker-images-today-8ffeecd48a2c)
- [The Hidden Risks of Outdated Container Images: A Security Perspective](https://medium.com/@thiagoloureiro/the-hidden-risks-of-outdated-container-images-a-security-perspective-1663d52f0fd2)
- [Kubernetes cert-manager: Free TLS Certificates with Let's Encrypt and Helm](https://medium.com/@thiagoloureiro/kubernetes-cert-manager-free-tls-certificates-with-lets-encrypt-and-helm-da1e8117e063)
- [Seamless Storage: Configuring Kubernetes PVC for Windows Shared Folders with SMB](https://medium.com/@thiagoloureiro/seamless-storage-configuring-kubernetes-pvc-for-windows-shared-folders-with-smb-2b44c01570d2)

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
