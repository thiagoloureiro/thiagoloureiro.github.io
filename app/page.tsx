import Header from './components/Header'
import Footer from './components/Footer'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import Background from './components/Background'
import CVButton from './components/CVButton'
import { Code, Cpu, RefreshCw, Server } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      <Background />
      <Header />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <section className="mb-16 text-center relative">
          <div className="absolute top-0 left-0 w-32 h-32 text-blue-400 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 text-blue-400 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4">Thiago Loureiro</h1>
          <h2 className="text-2xl text-blue-400 mb-8">Solution Architect</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Experienced solution architect specializing in microservices, cloud architecture, and high-performance systems.
          </p>
          <CVButton />
        </section>

        <SkillsSection />

        <section className="mb-16 relative">
          <h2 className="text-3xl font-bold mb-8 text-center">Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Cpu className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Management</h3>
              <p>Ability to manage teams and lead architecture discussions and decisions.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Communication</h3>
              <p>Excellent communication skills for effective collaboration and knowledge sharing.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Critical Projects</h3>
              <p>Skilled in working with and managing critical, high-stakes projects.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <RefreshCw className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Application Modernization</h3>
              <p>Expertise in modernizing legacy systems and migrating to cloud-native architectures.</p>
            </div>
          </div>
        </section>

        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}

