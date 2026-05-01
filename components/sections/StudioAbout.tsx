'use client'

import { motion } from 'framer-motion'

export default function StudioAbout() {
  return (
    <section id="studio" className="bg-bg py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            The Studio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream leading-tight">
            We build games about things that matter.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5"
        >
          <p className="text-muted leading-relaxed">
            Last Game is an independent studio built with one goal: to make games that feel
            personal. Games that linger after you put them down.
          </p>
          <p className="text-muted leading-relaxed">
            Our first title, Last Acre, is a farming simulation rooted in real agriculture,
            real genetics, and real market forces. It&apos;s the farm game we always wanted to
            play.
          </p>
          <p className="text-cream/20 text-xs tracking-widest uppercase pt-2">Est. 2026</p>
        </motion.div>
      </div>
    </section>
  )
}
