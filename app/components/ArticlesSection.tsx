import Link from 'next/link'
import { Network, Container, Code2 } from 'lucide-react'

export default function ArticlesSection() {
  const articles = [
    {
      title: "Setting up Traefik Ingress Controller in Kubernetes",
      description: "A comprehensive guide on implementing Traefik as an Ingress Controller in your Kubernetes cluster, with step-by-step configuration instructions.",
      url: "https://medium.com/@thiagoloureiro/setting-up-traefik-ingress-controller-in-kubernetes-2c659a2c7347",
      icon: Network
    },
    {
      title: "How Rancher Can Boost Your Kubernetes Productivity",
      description: "Explore how Rancher can simplify Kubernetes cluster management and enhance your team's productivity with its powerful features.",
      url: "https://medium.com/@thiagoloureiro/how-rancher-can-boost-your-kubernetes-productivity-21985dd1d689",
      icon: Container
    },
    {
      title: "The Good and The Villain",
      description: "An insightful analysis of software architecture patterns, discussing their benefits and potential pitfalls in modern development.",
      url: "https://medium.com/@thiagoloureiro/the-good-and-the-villain-ca81aae3464a",
      icon: Code2
    }
  ]

  return (
    <section id="articles" className="mb-16 relative">
      <div className="absolute top-0 right-0 w-32 h-32 text-blue-400 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => {
          const IconComponent = article.icon
          return (
            <Link 
              href={article.url}
              key={index}
              target="_blank"
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-300">{article.description}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
} 