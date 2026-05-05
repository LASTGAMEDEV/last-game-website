export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

interface ResendContactPayload {
  email: string
  audienceId: string
  unsubscribed: boolean
}

export function buildContactPayload(
  email: string,
  audienceId: string
): ResendContactPayload {
  return { email, audienceId, unsubscribed: false }
}
