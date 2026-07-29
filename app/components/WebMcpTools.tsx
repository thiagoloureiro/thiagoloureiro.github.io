'use client'

import { useEffect } from 'react'

const PROFILE = {
  name: 'Thiago Loureiro',
  title: 'Technology Manager, Solution Architect, DevOps Specialist',
  github: 'https://github.com/thiagoloureiro',
  linkedin:
    'https://www.linkedin.com/in/thiago-loureiro-de-azevedo-dev/',
  medium: 'https://medium.com/@thiagoloureiro',
}

const PROJECTS = [
  {
    name: 'AlertHawk',
    description:
      'Self-hosted monitoring tool for real-time application health and performance insights.',
    url: 'https://alerthawk.net/',
  },
  {
    name: 'EasyMemoryCache',
    description:
      'Plug-and-play caching for .NET with MemoryCache, Redis, and Memcached support.',
    url: 'https://github.com/thiagoloureiro/EasyMemoryCache',
  },
]

const ARTICLES = [
  {
    title: 'Setting up Traefik Ingress Controller in Kubernetes',
    url: 'https://medium.com/@thiagoloureiro/setting-up-traefik-ingress-controller-in-kubernetes-2c659a2c7347',
  },
  {
    title: 'How Rancher Can Boost Your Kubernetes Productivity',
    url: 'https://medium.com/@thiagoloureiro/how-rancher-can-boost-your-kubernetes-productivity-21985dd1d689',
  },
  {
    title: 'The Good and The Villain',
    url: 'https://medium.com/@thiagoloureiro/the-good-and-the-villain-ca81aae3464a',
  },
  {
    title: 'Stop Shipping Vulnerabilities: Harden Your Docker Images Today',
    url: 'https://medium.com/@thiagoloureiro/stop-shipping-vulnerabilities-harden-your-docker-images-today-8ffeecd48a2c',
  },
  {
    title:
      'The Hidden Risks of Outdated Container Images: A Security Perspective',
    url: 'https://medium.com/@thiagoloureiro/the-hidden-risks-of-outdated-container-images-a-security-perspective-1663d52f0fd2',
  },
  {
    title:
      "Kubernetes cert-manager: Free TLS Certificates with Let's Encrypt and Helm",
    url: 'https://medium.com/@thiagoloureiro/kubernetes-cert-manager-free-tls-certificates-with-lets-encrypt-and-helm-da1e8117e063',
  },
  {
    title:
      'Seamless Storage: Configuring Kubernetes PVC for Windows Shared Folders with SMB',
    url: 'https://medium.com/@thiagoloureiro/seamless-storage-configuring-kubernetes-pvc-for-windows-shared-folders-with-smb-2b44c01570d2',
  },
]

type ModelContext = {
  registerTool: (
    tool: {
      name: string
      description: string
      inputSchema: Record<string, unknown>
      execute: (input: Record<string, unknown>) => Promise<unknown>
    },
    options?: { signal?: AbortSignal },
  ) => void
}

export default function WebMcpTools() {
  useEffect(() => {
    const modelContext = (navigator as Navigator & { modelContext?: ModelContext })
      .modelContext
    if (!modelContext?.registerTool) return

    const controller = new AbortController()
    const { signal } = controller

    modelContext.registerTool(
      {
        name: 'get_profile',
        description:
          'Get Thiago Loureiro professional profile summary and social links.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => PROFILE,
      },
      { signal },
    )

    modelContext.registerTool(
      {
        name: 'list_projects',
        description: 'List featured open-source and side projects.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => PROJECTS,
      },
      { signal },
    )

    modelContext.registerTool(
      {
        name: 'list_articles',
        description: 'List published technical articles with titles and URLs.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () => ARTICLES,
      },
      { signal },
    )

    modelContext.registerTool(
      {
        name: 'search_skills',
        description: 'Search technical skills by keyword.',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string', description: 'Skill keyword to search' },
          },
          required: ['query'],
        },
        execute: async (input) => {
          const query = String(input.query ?? '').toLowerCase()
          const skills = [
            '.NET Core',
            'C#',
            'Kubernetes',
            'Docker',
            'DevOps',
            'CI/CD',
            'MicroServices Architecture',
            'gRPC',
            'GraphQL',
            'Azure DevOps',
            'Rancher',
            'Flutter',
            'Dart',
            'Clean Architecture',
            'Event Driven Architecture',
          ]
          return skills.filter((skill) => skill.toLowerCase().includes(query))
        },
      },
      { signal },
    )

    return () => controller.abort()
  }, [])

  return null
}
