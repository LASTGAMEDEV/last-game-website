import { Download, Mail } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function PressSection() {
  return (
    <section id="press" className="bg-bg py-24 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Press
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
          Covering Last Acre?
        </h2>
        <p className="text-muted text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Our press kit includes logos, screenshots, key art, and a fact sheet. Reach out
          anytime — we&apos;re happy to chat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/press-kit-readme.txt"
            variant="primary"
            download="Last-Acre-Press-Kit.zip"
          >
            <Download size={16} />
            Download Press Kit
          </Button>
          <Button href="mailto:press@lastgame.studio" variant="ghost">
            <Mail size={16} />
            press@lastgame.studio
          </Button>
        </div>
      </div>
    </section>
  )
}
