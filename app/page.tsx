import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Screenshots from '@/components/sections/Screenshots'
import Trailer from '@/components/sections/Trailer'
import DownloadCta from '@/components/sections/DownloadCta'
import StudioAbout from '@/components/sections/StudioAbout'
import GamesGrid from '@/components/sections/GamesGrid'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Screenshots />
      <Trailer />
      <DownloadCta />
      <StudioAbout />
      <GamesGrid />
    </main>
  )
}
