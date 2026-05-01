import Link from 'next/link'

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

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

        <div className="flex items-center gap-6">
          <Link href="#" aria-label="X (Twitter)" className="text-muted hover:text-cream transition-colors">
            <XIcon />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-muted hover:text-cream transition-colors">
            <InstagramIcon />
          </Link>
        </div>

        <p className="text-muted text-sm">© 2026 Last Game. All rights reserved.</p>
      </div>
    </footer>
  )
}
