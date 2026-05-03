import Button from '@/components/ui/Button'
import { Bell } from 'lucide-react'

export default function DownloadCta() {
  return (
    <section id="download" className="bg-accent py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-7xl font-black text-bg leading-tight mb-4">
          Coming Soon.
        </h2>
        <p className="text-bg/60 text-lg md:text-xl mb-12">
          Last Acre is in development. Follow our journey and be the first to know when it launches.
        </p>
        <Button href="mailto:hello@lastgame.studio?subject=Notify me when Last Acre launches" variant="ghost" size="lg" className="border-bg/30 text-bg hover:bg-bg/10">
          <Bell size={18} />
          Get Notified
        </Button>
      </div>
    </section>
  )
}
