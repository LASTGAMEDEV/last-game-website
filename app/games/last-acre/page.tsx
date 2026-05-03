import type { Metadata } from 'next'
import Features from '@/components/sections/Features'

export const metadata: Metadata = {
  title: 'Last Acre — Last Game',
  description:
    'Last Acre is a farming simulation in development, grounded in real agriculture, genetics, and market forces. Coming soon to iOS and Android.',
}

export default function LastAcrePage() {
  return (
    <main className="min-h-screen bg-bg">
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Last Game presents
          </p>
          <h1 className="font-serif text-7xl md:text-9xl font-black text-cream leading-none mb-4">
            LAST ACRE
          </h1>
          <p className="text-muted text-xl tracking-wide mb-8">Your land. Your legacy.</p>
          <p className="text-muted/80 leading-relaxed max-w-xl mx-auto mb-12">
            A farming simulation grounded in real agriculture, real animal genetics, and real
            market forces. Start with nothing. Build everything.
          </p>
          <span className="inline-flex items-center gap-2 border border-accent/40 text-accent text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            In Development
          </span>
        </div>
      </section>

      <Features />

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Platforms
          </p>
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Coming to iOS &amp; Android
          </h2>
          <p className="text-muted">Release date to be announced.</p>
        </div>
      </section>
    </main>
  )
}
