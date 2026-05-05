/**
 * @jest-environment node
 */
import { POST } from '@/app/api/subscribe/route'
import { Resend } from 'resend'

// Mock the Resend module
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    contacts: {
      create: jest.fn().mockResolvedValue({ data: {}, error: null }),
    },
  })),
}))

function makeRequest(body: unknown) {
  return new Request('http://localhost/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/subscribe', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      RESEND_API_KEY: 're_test_key',
      RESEND_AUDIENCE_ID: 'aud_test_id',
    }
  })

  afterEach(() => {
    process.env = originalEnv
    jest.clearAllMocks()
  })

  it('returns 400 for an invalid email', async () => {
    const res = await POST(makeRequest({ email: 'notanemail' }))
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body).toEqual({ error: 'Invalid email' })
  })

  it('returns 500 when RESEND_AUDIENCE_ID is missing', async () => {
    delete process.env.RESEND_AUDIENCE_ID
    const res = await POST(makeRequest({ email: 'user@example.com' }))
    expect(res.status).toBe(500)
    const body = await res.json()
    expect(body).toEqual({ error: 'Server misconfigured' })
  })

  it('returns 500 when RESEND_API_KEY is missing', async () => {
    delete process.env.RESEND_API_KEY
    const res = await POST(makeRequest({ email: 'user@example.com' }))
    expect(res.status).toBe(500)
    const body = await res.json()
    expect(body).toEqual({ error: 'Server misconfigured' })
    expect(Resend).not.toHaveBeenCalled()
  })

  it('returns 500 when Resend returns an error', async () => {
    const { Resend } = require('resend')
    Resend.mockImplementationOnce(() => ({
      contacts: {
        create: jest.fn().mockResolvedValue({ data: null, error: { message: 'API error' } }),
      },
    }))
    const res = await POST(makeRequest({ email: 'user@example.com' }))
    expect(res.status).toBe(500)
    const body = await res.json()
    expect(body).toEqual({ error: 'Failed to subscribe' })
  })

  it('returns 200 on success', async () => {
    const res = await POST(makeRequest({ email: 'user@example.com' }))
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body).toEqual({ success: true })
  })

  it('returns 400 for a non-JSON body', async () => {
    const req = new Request('http://localhost/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'not-json',
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body).toEqual({ error: 'Invalid email' })
  })
})
