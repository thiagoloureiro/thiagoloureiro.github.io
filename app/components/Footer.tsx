import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/thiagoloureiro/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/thiago-loureiro-de-azevedo-dev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400">&copy; 2025 Thiago Loureiro. All rights reserved.</p>
      </div>
    </footer>
  )
}

