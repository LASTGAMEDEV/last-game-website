'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    phase: 'Phase 1',
    title: 'Last Acre — Mobile',
    description:
      'A deep farming simulation for iOS and Android. Manage soil, breed real-genetics animals, and master the commodity market. In active development.',
    status: 'in-dev' as const,
    platforms: ['iOS', 'Android'],
  },
  {
    phase: 'Phase 2',
    title: 'Last Acre — 3D',
    description:
      'A full 3D reimagining of Last Acre. Walk your land, tend your animals up close, and experience the farm from a whole new perspective.',
    status: 'planned' as const,
    platforms: ['PC', 'Console'],
  },
  {
    phase: 'Phase 3',
    title: 'More to come',
    description: 'Last Game is just getting started. New worlds, new stories.',
    status: 'future' as const,
    platforms: [],
  },
]

const statusLabel: Record<string, string> = {
  'in-dev': 'In Development',
  planned: 'Planned',
  future: 'Future',
}

const statusColor: Record<string, string> = {
  'in-dev': 'text-accent border-accent/40 bg-accent/10',
  planned: 'text-green border-green/40 bg-green/10',
  future: 'text-muted border-white/20 bg-white/5',
}

export default function Roadmap() {
  return (
    <section className="bg-bg py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            The Road Ahead
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Our plans for Last Game.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden sm:block" />

          <div className="flex flex-col gap-12">
            {milestones.map(({ phase, title, description, status, platforms }, i) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full border-2 border-accent bg-bg hidden sm:block" />

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} sm:pl-16 md:pl-0`}>
                  <div className="p-6 rounded-2xl border border-white/10 bg-surface/50 hover:border-white/20 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-muted text-xs tracking-widest uppercase">{phase}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusColor[status]}`}>
                        {statusLabel[status]}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-cream mb-2">{title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
                    {platforms.length > 0 && (
                      <div className="flex gap-2">
                        {platforms.map((p) => (
                          <span key={p} className="text-xs border border-white/20 text-cream/60 rounded-full px-2.5 py-0.5">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
