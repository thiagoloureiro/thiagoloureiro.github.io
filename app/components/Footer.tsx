import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-paper">
            Thiago Loureiro
          </p>
          <p className="mt-1 text-sm text-fog">
            Technology Manager · Solution Architect · DevOps
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/thiagoloureiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog transition-colors hover:text-accent-soft"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-loureiro-de-azevedo-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog transition-colors hover:text-accent-soft"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href="https://medium.com/@thiagoloureiro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog transition-colors hover:text-accent-soft"
            aria-label="Medium"
          >
            <BookOpen className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-ink-line">
        <p className="mx-auto max-w-5xl px-6 py-4 text-sm text-fog/70">
          © {new Date().getFullYear()} Thiago Loureiro
        </p>
      </div>
    </footer>
  )
}
