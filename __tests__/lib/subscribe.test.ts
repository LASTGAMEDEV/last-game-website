import { validateEmail, buildContactPayload } from '@/lib/subscribe'

describe('validateEmail', () => {
  it('returns true for a valid email', () => {
    expect(validateEmail('user@example.com')).toBe(true)
  })

  it('returns false for an empty string', () => {
    expect(validateEmail('')).toBe(false)
  })

  it('returns false for a string without @', () => {
    expect(validateEmail('notanemail')).toBe(false)
  })

  it('returns false for a string without domain', () => {
    expect(validateEmail('user@')).toBe(false)
  })
})

describe('buildContactPayload', () => {
  it('returns the correct payload shape', () => {
    const payload = buildContactPayload('user@example.com', 'aud_123')
    expect(payload).toEqual({
      email: 'user@example.com',
      audienceId: 'aud_123',
      unsubscribed: false,
    })
  })
})
