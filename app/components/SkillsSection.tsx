export default function SkillsSection() {
  const skills = [
    ".NET Core", "C#", "WebApis", "CQRS", "Actor Based Frameworks", "MicroServices Architecture",
    "gRPC", "GraphQL", "Service Discovery", "API Gateway", "SQL/NoSQL Databases", "Redis",
    "AMQP", "MQTT", "Design Patterns", "SOLID Principles", "DRY", "KISS", "D.I", "GIT",
    "Scrum", "Microsoft Orleans", "Azure Devops", "CD/CI", "TeamCity", "VSTS", "Rancher",
    "Kubernetes", "Docker"
  ]

  return (
    <section id="skills" className="mb-16 relative">
      <div className="absolute top-0 right-0 w-32 h-32 text-blue-400 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

