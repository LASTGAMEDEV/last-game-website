'use client'

import { motion } from 'framer-motion'
import AppStoreBadge from '@/components/ui/AppStoreBadge'

export default function Hero() {
  return (
    <section
      id="last-acre"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      {/* Atmospheric gradient — warm earth tones bleed from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-earth/30 via-bg/60 to-bg pointer-events-none" />

      {/* SVG grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '300px 300px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Last Game presents
          </motion.p>

          <h1 className="font-serif text-8xl md:text-[11rem] font-black text-cream tracking-tight leading-[0.9] mb-6">
            LAST
            <br />
            ACRE
          </h1>

          <motion.p
            className="text-muted text-xl md:text-2xl tracking-[0.08em] mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your land. Your legacy.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <AppStoreBadge store="apple" />
            <AppStoreBadge store="google" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
