import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-lg font-bold text-cream tracking-[0.15em] uppercase"
        >
          Last Game
        </Link>

        <p className="text-muted text-sm">© 2026 Last Game. All rights reserved.</p>
      </div>
    </footer>
  )
}
