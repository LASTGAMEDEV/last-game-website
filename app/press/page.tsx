import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Press — Last Game',
  description:
    'Press resources for Last Acre. Download logos, screenshots, key art, and our fact sheet.',
}

const facts = [
  { label: 'Studio', value: 'Last Game' },
  { label: 'Game', value: 'Last Acre' },
  { label: 'Genre', value: 'Farming Simulation' },
  { label: 'Platforms', value: 'iOS & Android' },
  { label: 'Price', value: 'Free to play' },
  { label: 'Release', value: 'TBA' },
]

export default function PressPage() {
  return (
    <main className="min-h-screen bg-bg pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Press Kit
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream mb-6">
          Last Acre
        </h1>
        <p className="text-muted text-lg leading-relaxed mb-12 max-w-2xl">
          Everything you need to cover Last Acre. Logos, screenshots, and key art are included
          in the press kit.
        </p>

        <Button
          href="/press-kit-readme.txt"
          variant="primary"
          size="lg"
          download="Last-Acre-Press-Kit.zip"
          className="mb-16"
        >
          <Download size={18} />
          Download Press Kit
        </Button>

        <div className="border-t border-white/10 pt-12">
          <h2 className="font-serif text-2xl font-bold text-cream mb-8">Fact Sheet</h2>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {facts.map(({ label, value }) => (
              <div key={label} className="border-b border-white/5 pb-5">
                <dt className="text-muted text-xs tracking-widest uppercase mb-1">{label}</dt>
                <dd className="text-cream font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <h2 className="font-serif text-2xl font-bold text-cream mb-4">Contact</h2>
          <p className="text-muted mb-4">
            For interviews, review keys, and press inquiries:
          </p>
          <a
            href="mailto:press@lastgame.studio"
            className="text-accent hover:brightness-110 transition-all font-medium"
          >
            press@lastgame.studio
          </a>
        </div>
      </div>
    </main>
  )
}
