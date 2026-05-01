'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const games = [
  {
    id: 'last-acre',
    title: 'Last Acre',
    genre: 'Farming Simulation',
    platforms: ['iOS', 'Android'],
    href: '/games/last-acre',
    emoji: '🌾',
    accentHex: '#E8A935',
  },
]

export default function GamesGrid() {
  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
          Portfolio
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream text-center mb-16">
          Our Games
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {games.map(({ id, title, genre, platforms, href, emoji, accentHex }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={href}
                className="block p-8 rounded-2xl border border-white/10 bg-bg hover:border-accent/30 transition-all duration-300 group"
              >
                {/* Cover art placeholder */}
                <div
                  className="w-full aspect-video rounded-xl mb-6 flex items-center justify-center text-5xl"
                  style={{
                    background: `linear-gradient(135deg, ${accentHex}22, ${accentHex}08)`,
                    border: `1px solid ${accentHex}20`,
                  }}
                >
                  {emoji}
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-cream group-hover:text-accent transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="text-muted text-sm mt-1">{genre}</p>
                    <div className="flex gap-2 mt-3">
                      {platforms.map((p) => (
                        <span
                          key={p}
                          className="text-xs border border-white/20 text-cream/60 rounded-full px-2.5 py-0.5"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 mt-1 flex-shrink-0"
                  />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Coming Soon slot */}
          <div className="p-8 rounded-2xl border border-white/5 bg-bg/30 flex items-center justify-center min-h-[200px]">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-muted text-2xl">+</span>
              </div>
              <p className="text-muted text-sm tracking-wide">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
