'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    'text-muted hover:text-cream transition-colors duration-200 text-sm tracking-wide'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg font-bold text-cream tracking-[0.15em] uppercase"
        >
          Last Game
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#last-acre" className={linkClass}>Last Acre</Link>
          <Link href="/#studio" className={linkClass}>Studio</Link>
          <Link href="/press" className={linkClass}>Press</Link>
          <Button href="/#download" variant="primary" size="sm">Download</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface/98 backdrop-blur-md border-t border-white/5 px-6 py-5 flex flex-col gap-5">
          <Link href="/#last-acre" className={linkClass} onClick={() => setMenuOpen(false)}>Last Acre</Link>
          <Link href="/#studio" className={linkClass} onClick={() => setMenuOpen(false)}>Studio</Link>
          <Link href="/press" className={linkClass} onClick={() => setMenuOpen(false)}>Press</Link>
          <Button href="/#download" variant="primary" size="sm" className="self-start" onClick={() => setMenuOpen(false)}>
            Download
          </Button>
        </div>
      )}
    </nav>
  )
}
