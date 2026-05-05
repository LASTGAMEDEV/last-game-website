import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateEmail, buildContactPayload } from '@/lib/subscribe'

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }
  const resend = new Resend(process.env.RESEND_API_KEY)

  const body = await request.json().catch(() => ({}))
  const email = typeof body.email === 'string' ? body.email.trim() : ''

  if (!validateEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID
  if (!audienceId) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  // Note: audienceId is the legacy Resend field (deprecated in favour of segments).
  // Works on current SDK (v6.x) — migrate when Resend removes the overload.
  const { error } = await resend.contacts.create(
    buildContactPayload(email, audienceId)
  )

  if (error) {
    console.error('[subscribe] Resend error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
