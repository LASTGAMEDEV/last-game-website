'use client'

import { useRef } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

const PLACEHOLDER_COUNT = 5

export default function Screenshots() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-bg py-24">
      <div className="max-w-5xl mx-auto px-6 mb-14">
        <SectionHeading eyebrow="Screenshots" title="See it in action." />
      </div>

      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
        style={
          {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          } as React.CSSProperties
        }
      >
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-56 md:w-72 aspect-[9/19] rounded-[2rem] bg-surface border border-white/10 snap-center flex flex-col items-center justify-center gap-3 text-muted"
          >
            <div className="text-4xl">📱</div>
            <span className="text-xs tracking-wide">Screenshot {i + 1}</span>
          </div>
        ))}
      </div>

      {/* Replace placeholders with actual <Image> components pointing to real screenshots */}
    </section>
  )
}
