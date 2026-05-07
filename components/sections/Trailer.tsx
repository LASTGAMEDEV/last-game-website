'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

// TODO: Replace with actual YouTube video ID when trailer is ready
const YOUTUBE_VIDEO_ID = 'YOUR_YOUTUBE_VIDEO_ID'

export default function Trailer() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Trailer"
          title="Watch the story."
          className="mb-12"
        />

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-bg border border-white/10">
          {playing ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              sandbox="allow-scripts allow-same-origin allow-presentation"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Last Acre — Official Trailer"
            />
          ) : (
            <>
              {/* Placeholder thumbnail with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-earth/30 via-bg to-green/10" />

              {/* Play button */}
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play trailer"
              >
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-accent/40">
                  <Play size={30} className="text-bg ml-1" fill="currentColor" />
                </div>
              </button>

              <div className="absolute bottom-6 left-6 pointer-events-none">
                <p className="font-serif text-lg font-bold text-cream">Last Acre</p>
                <p className="text-muted text-sm">Official Gameplay Trailer</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
