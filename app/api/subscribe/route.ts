import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateEmail, buildContactPayload } from '@/lib/subscribe'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const email = typeof body.email === 'string' ? body.email.trim() : ''

  if (!validateEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID
  if (!audienceId) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const { error } = await resend.contacts.create(
    buildContactPayload(email, audienceId)
  )

  if (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
