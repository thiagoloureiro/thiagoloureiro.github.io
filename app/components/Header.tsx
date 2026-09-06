import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#writing', label: 'Writing' },
  { href: '#expertise', label: 'Expertise' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/70 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-paper transition-colors hover:text-accent-soft"
        >
          Thiago Loureiro
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fog transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/thiagoloureiro"
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
      </nav>
    </header>
  )
}
