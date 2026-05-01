import AppStoreBadge from '@/components/ui/AppStoreBadge'

export default function DownloadCta() {
  return (
    <section id="download" className="bg-accent py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-7xl font-black text-bg leading-tight mb-4">
          Play Last Acre.
        </h2>
        <p className="text-bg/60 text-lg md:text-xl mb-12">
          Free to download. Available now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AppStoreBadge store="apple" variant="light" />
          <AppStoreBadge store="google" variant="light" />
        </div>
      </div>
    </section>
  )
}
