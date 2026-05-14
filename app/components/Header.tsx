import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

export default function Header() {
  return (
    <header className="py-6">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-400"></Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/thiagoloureiro"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <GitHubIcon className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thiago-loureiro-de-azevedo-dev/"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <LinkedInIcon className="w-6 h-6" />
          </Link>
          <Link
            href="https://medium.com/@thiagoloureiro"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <BookOpen className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
