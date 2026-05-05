'use client'

import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'

const SCREENSHOTS = [
  { src: '/screenshots/IMG_4224.JPG', alt: 'Welcome to Last Acre — start with $3,500 and 2 plots, build an agricultural empire' },
  { src: '/screenshots/IMG_4221.JPG', alt: 'Power System — manage solar panels, wind turbines, and biogas generation' },
  { src: '/screenshots/IMG_4220.JPG', alt: 'Live Market — real-time crop prices, top profitability rankings, and futures trading' },
  { src: '/screenshots/IMG_4218.JPG', alt: 'Processing — convert raw crops into flour, polenta, barley malt, and more' },
  { src: '/screenshots/IMG_4222.JPG', alt: 'Land Auction — bid on premium plots against AI neighbours in real-time auctions' },
  { src: '/screenshots/IMG_4219.JPG', alt: 'Farm Banking — build your credit score and take out loans to expand faster' },
  { src: '/screenshots/IMG_4223.JPG', alt: 'Weather & Crop Calendar — plan your season across spring, summer, autumn, and winter' },
]

export default function Screenshots() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-5xl mx-auto px-6 mb-14">
        <SectionHeading eyebrow="Screenshots" title="See it in action." />
      </div>

      <div
        className="flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
        style={
          {
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          } as React.CSSProperties
        }
      >
        {SCREENSHOTS.map((shot, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-56 md:w-72 aspect-[9/19] rounded-[2rem] overflow-hidden border border-white/10 snap-center"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, 288px"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
