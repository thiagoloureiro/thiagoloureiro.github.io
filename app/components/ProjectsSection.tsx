import { ExternalLink } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      name: "AlertHawk",
      description: "A cutting-edge, easy-to-use self-hosted monitoring tool designed to empower you with real-time insights into the health and performance of your applications.",
      link: "https://alerthawk.net/"
    },
    {
      name: "EasyMemoryCache",
      description: "A powerful yet easy-to-use caching solution for .NET apps. It works seamlessly with MemoryCache, Redis, and Memcached, making it a plug-and-play solution for any developer willing to give their app a performance boost.",
      link: "https://github.com/thiagoloureiro/EasyMemoryCache"
    }
  ]

  return (
    <section id="projects" className="mb-16 relative">
      <div className="absolute top-0 left-0 w-32 h-32 text-blue-400 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:underline">
              View Project <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

