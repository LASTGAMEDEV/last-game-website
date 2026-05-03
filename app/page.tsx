import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Screenshots from '@/components/sections/Screenshots'
import Trailer from '@/components/sections/Trailer'
import DownloadCta from '@/components/sections/DownloadCta'
import StudioAbout from '@/components/sections/StudioAbout'
import GamesGrid from '@/components/sections/GamesGrid'
import Roadmap from '@/components/sections/Roadmap'

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
      <Roadmap />
    </main>
  )
}
