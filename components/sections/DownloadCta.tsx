'use client'

import { useState } from 'react'

export default function DownloadCta() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('Something went wrong. Try again.')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrorMessage(data.error ?? 'Something went wrong. Try again.')
        setStatus('error')
        return
      }
      setStatus('success')
      setEmail('')
    } catch {
      setErrorMessage('Something went wrong. Try again.')
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" className="bg-accent py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-7xl font-black text-bg leading-tight mb-4">
          Get Notified on Launch.
        </h2>
        <p className="text-bg/60 text-lg md:text-xl mb-12">
          Be the first to play. Leave your email and we'll notify you the moment Last Acre launches on iOS and Android.
        </p>

        {status === 'success' ? (
          <p className="text-bg font-semibold text-lg">
            You're in. We'll notify you at launch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded bg-bg/10 border border-bg/20 text-bg placeholder:text-bg/40 focus:outline-none focus:border-bg/50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded bg-bg text-accent font-semibold hover:bg-bg/90 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Saving...' : 'Notify Me'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-bg/60 text-sm mt-4">{errorMessage}</p>
        )}
      </div>
    </section>
  )
}
