import type { Metadata } from 'next'
import AppStoreBadge from '@/components/ui/AppStoreBadge'
import Features from '@/components/sections/Features'

export const metadata: Metadata = {
  title: 'Last Acre — Last Game',
  description:
    'Last Acre is a farming simulation grounded in real agriculture, genetics, and market forces. Download free on iOS and Android.',
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreBadge store="apple" />
            <AppStoreBadge store="google" />
          </div>
        </div>
      </section>

      <Features />

      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Availability
          </p>
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            Available on iOS &amp; Android
          </h2>
          <p className="text-muted mb-8">Free to download. No upfront cost.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreBadge store="apple" />
            <AppStoreBadge store="google" />
          </div>
        </div>
      </section>
    </main>
  )
}
