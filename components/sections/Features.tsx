'use client'

import { motion } from 'framer-motion'
import { Building2, Dna, TrendingUp } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const features = [
  {
    Icon: Building2,
    title: 'Build & Expand',
    description: 'Start with a single plot. Grow into an empire.',
  },
  {
    Icon: Dna,
    title: 'Breed & Trade',
    description: 'Raise animals with real genetics. Sell to the highest bidder.',
  },
  {
    Icon: TrendingUp,
    title: 'Grow & Sell',
    description: 'Master crops, soil, and market timing.',
  },
]

export default function Features() {
  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Gameplay" title="Everything a farm can be." />
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-7 rounded-2xl border border-white/5 bg-bg/40 group hover:border-accent/20 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-cream mb-2">{title}</h3>
              <p className="text-muted leading-relaxed text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
