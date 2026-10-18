'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#writing', label: 'Writing' },
  { href: '#approach', label: 'Approach' },
  { href: '#activity', label: 'Activity' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-stretch">
        <Link
          href="/"
          className="flex h-14 w-14 shrink-0 items-center justify-center border-r border-ink-line font-display text-lg font-bold tracking-tight text-paper transition-colors hover:bg-ink-raised hover:text-accent-soft"
          aria-label="Thiago Loureiro home"
        >
          TL
        </Link>

        <nav className="hidden flex-1 items-center gap-0 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex h-14 items-center border-r border-ink-line px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-fog transition-colors hover:bg-ink-raised hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-stretch">
          <a
            href="https://github.com/thiagoloureiro"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-14 items-center border-l border-ink-line px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-fog transition-colors hover:bg-ink-raised hover:text-paper sm:flex"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-loureiro-de-azevedo-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-14 items-center border-l border-ink-line px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-fog transition-colors hover:bg-ink-raised hover:text-paper sm:flex"
          >
            LinkedIn
          </a>
          <button
            type="button"
            className="flex h-14 w-14 items-center justify-center border-l border-ink-line text-fog transition-colors hover:bg-ink-raised hover:text-paper md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-line md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink-line px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-fog transition-colors hover:bg-ink-raised hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
